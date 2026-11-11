import React, { useState } from 'react';
import { Player, Topic, CardData, PlayerStats, GameMode } from './types.ts';
import { 
  GAYANE_RESTAURANT_CARDS, 
  GAYANE_SUPERMARKET_CARDS, 
  GAYANE_ALL_CARDS,
  RAZMIK_RESTAURANT_CARDS,
  RAZMIK_SUPERMARKET_CARDS,
  RAZMIK_ALL_CARDS
} from './cardsData.ts';
import { TopBar } from './TopBar.tsx';
import { WelcomeScreen } from './WelcomeScreen.tsx';
import { BasketView } from './BasketView.tsx';
import { PaperSlip } from './PaperSlip.tsx';
import { ScoreBar } from './ScoreBar.tsx';
import { CompletedScreen } from './CompletedScreen.tsx';
import { soundManager } from './sound.ts';

// Fisher-Yates array shuffling
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getCardsForPlayer(player: Player, topic: Topic): CardData[] {
  if (player === 'Gayane') {
    if (topic === 'restaurante') return GAYANE_RESTAURANT_CARDS;
    if (topic === 'supermercado') return GAYANE_SUPERMARKET_CARDS;
    return GAYANE_ALL_CARDS;
  } else {
    if (topic === 'restaurante') return RAZMIK_RESTAURANT_CARDS;
    if (topic === 'supermercado') return RAZMIK_SUPERMARKET_CARDS;
    return RAZMIK_ALL_CARDS;
  }
}

export default function App() {
  const [screen, setScreen] = useState<'welcome' | 'playing' | 'completed'>('welcome');
  const [gameMode, setGameMode] = useState<GameMode>('duo');
  const [selectedTopic, setSelectedTopic] = useState<Topic>('restaurante');
  const [chosenPlayer, setChosenPlayer] = useState<Player>('Gayane');
  
  const [activePlayer, setActivePlayer] = useState<Player>('Gayane');
  
  // Separate decks for each player to support custom difficulty levels
  const [deckGayane, setDeckGayane] = useState<CardData[]>([]);
  const [deckRazmik, setDeckRazmik] = useState<CardData[]>([]);
  
  const [initialDeckSizePerPlayer, setInitialDeckSizePerPlayer] = useState<number>(30);
  const [currentCard, setCurrentCard] = useState<CardData | null>(null);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [playerStats, setPlayerStats] = useState<PlayerStats>({ Gayane: 0, Razmik: 0 });
  const [cardsDrawnCount, setCardsDrawnCount] = useState<number>(0);

  // Initialize a new game session
  const handleStartGame = () => {
    const gayaneCards = shuffleArray(getCardsForPlayer('Gayane', selectedTopic));
    const razmikCards = shuffleArray(getCardsForPlayer('Razmik', selectedTopic));

    setDeckGayane(gayaneCards);
    setDeckRazmik(razmikCards);
    setInitialDeckSizePerPlayer(gayaneCards.length);

    setActivePlayer(chosenPlayer);
    setCurrentCard(null);
    setCardsDrawnCount(0);
    setPlayerStats({ Gayane: 0, Razmik: 0 });
    setScreen('playing');
  };

  // Re-shuffle the cards and restart round
  const handleShuffleDeck = () => {
    const gayaneCards = shuffleArray(getCardsForPlayer('Gayane', selectedTopic));
    const razmikCards = shuffleArray(getCardsForPlayer('Razmik', selectedTopic));

    setDeckGayane(gayaneCards);
    setDeckRazmik(razmikCards);
    setInitialDeckSizePerPlayer(gayaneCards.length);

    setCurrentCard(null);
    setCardsDrawnCount(0);
    setPlayerStats({ Gayane: 0, Razmik: 0 });
  };

  // Draw a paper slip from the active player's deck
  const handleDrawCard = () => {
    const currentDeck = activePlayer === 'Gayane' ? deckGayane : deckRazmik;
    if (currentDeck.length === 0 || isDrawing) return;

    setIsDrawing(true);
    soundManager.playPaperRustle();

    setTimeout(() => {
      const nextCard = currentDeck[0];
      const remaining = currentDeck.slice(1);

      if (activePlayer === 'Gayane') {
        setDeckGayane(remaining);
      } else {
        setDeckRazmik(remaining);
      }

      setCurrentCard(nextCard);
      setCardsDrawnCount(prev => prev + 1);
      setIsDrawing(false);
    }, 280);
  };

  // Move to next question / turn
  const handleNextTurn = () => {
    // Record card completed for the active player
    setPlayerStats(prev => ({
      ...prev,
      [activePlayer]: prev[activePlayer] + 1
    }));

    if (gameMode === 'solo') {
      const remainingDeck = activePlayer === 'Gayane' ? deckGayane : deckRazmik;
      if (remainingDeck.length === 0) {
        setScreen('completed');
        return;
      }
    } else {
      // Duo mode: check if both decks are finished
      const nextPlayer: Player = activePlayer === 'Gayane' ? 'Razmik' : 'Gayane';
      const currentDeckEmpty = (activePlayer === 'Gayane' ? deckGayane : deckRazmik).length === 0;
      const nextDeckEmpty = (nextPlayer === 'Gayane' ? deckGayane : deckRazmik).length === 0;

      if (currentDeckEmpty && nextDeckEmpty) {
        setScreen('completed');
        return;
      }

      // Switch to the other player if they have cards, otherwise keep current
      if (!nextDeckEmpty) {
        setActivePlayer(nextPlayer);
      }
    }

    // Reset current card to show the basket
    setCurrentCard(null);
  };

  const handleGoHome = () => {
    soundManager.stopSpeaking();
    setScreen('welcome');
    setCurrentCard(null);
  };

  const handleChangeMode = () => {
    soundManager.stopSpeaking();
    setScreen('welcome');
    setCurrentCard(null);
  };

  // Remaining count for active player's basket
  const activeDeck = activePlayer === 'Gayane' ? deckGayane : deckRazmik;
  const remainingCount = activeDeck.length;

  // Total cards in this session
  const totalCardsInSession = gameMode === 'solo' 
    ? initialDeckSizePerPlayer 
    : initialDeckSizePerPlayer * 2;

  return (
    <div className="min-h-screen bg-[#faf7f2] flex flex-col text-stone-900 selection:bg-amber-200">
      {/* Top Navigation Bar */}
      <TopBar 
        onGoHome={handleGoHome}
        onShuffle={handleShuffleDeck}
        onChangeMode={handleChangeMode}
        showInGameControls={screen === 'playing'}
        gameMode={gameMode}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col justify-start">
        {screen === 'welcome' && (
          <WelcomeScreen
            mode={gameMode}
            setMode={setGameMode}
            topic={selectedTopic}
            setTopic={setSelectedTopic}
            chosenPlayer={chosenPlayer}
            setChosenPlayer={setChosenPlayer}
            onStart={handleStartGame}
            restaurantCardsCount={GAYANE_RESTAURANT_CARDS.length}
            supermarketCardsCount={GAYANE_SUPERMARKET_CARDS.length}
          />
        )}

        {screen === 'playing' && (
          <div className="w-full flex-1 flex flex-col justify-between pb-8">
            {/* Top Score & Progress Bar */}
            <ScoreBar
              mode={gameMode}
              stats={playerStats}
              activePlayer={activePlayer}
              totalAnswered={cardsDrawnCount}
              totalCards={totalCardsInSession}
            />

            {/* If no card currently drawn, show the Basket view */}
            {!currentCard ? (
              <BasketView
                mode={gameMode}
                topic={selectedTopic}
                activePlayer={activePlayer}
                remainingCount={remainingCount}
                totalCount={initialDeckSizePerPlayer}
                onDrawCard={handleDrawCard}
                isDrawing={isDrawing}
              />
            ) : (
              /* If a card is drawn, show the unfolded Paper Slip */
              <PaperSlip
                key={`${currentCard.id}-${cardsDrawnCount}`} // forces clean unmount and hidden translations on card switch
                mode={gameMode}
                card={currentCard}
                activePlayer={activePlayer}
                onNextTurn={handleNextTurn}
                cardIndex={cardsDrawnCount}
                totalCards={totalCardsInSession}
              />
            )}
          </div>
        )}

        {screen === 'completed' && (
          <CompletedScreen
            mode={gameMode}
            activePlayer={activePlayer}
            stats={playerStats}
            topic={selectedTopic}
            onPlayAgain={handleStartGame}
            onGoHome={handleGoHome}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="w-full py-4 border-t border-stone-200/80 bg-white/60 text-center text-xs text-stone-500">
        <span>¡Habla y juega! · Gayane & Razmik · Իսպաներենի խոսակցական պրակտիկա</span>
      </footer>
    </div>
  );
}
