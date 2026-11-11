import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Volume2, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Utensils, 
  ShoppingCart, 
  Languages, 
  MessageCircle,
  Sparkles,
  User,
  Users,
  Eye,
  EyeOff,
  CheckCircle2,
  Shuffle
} from 'lucide-react';
import { CardData, Player, GameMode } from './types.ts';
import { soundManager } from './sound.ts';
import { getCardAnswerData } from './scrambledHelper.ts';

interface PaperSlipProps {
  mode: GameMode;
  card: CardData;
  activePlayer: Player;
  onNextTurn: () => void;
  cardIndex: number;
  totalCards: number;
}

export const PaperSlip: React.FC<PaperSlipProps> = ({
  mode,
  card,
  activePlayer,
  onNextTurn,
  cardIndex,
  totalCards
}) => {
  const isSolo = mode === 'solo';
  const isGayane = activePlayer === 'Gayane';
  const nextPlayer = isGayane ? 'Razmik' : 'Gayane';

  const playerTheme = isGayane 
    ? {
        name: 'Gayane',
        bg: 'bg-rose-50',
        text: 'text-rose-700',
        border: 'border-rose-300',
        accent: 'from-rose-500 to-pink-500',
        activeRing: 'ring-rose-400'
      }
    : {
        name: 'Razmik',
        bg: 'bg-amber-50',
        text: 'text-amber-800',
        border: 'border-amber-300',
        accent: 'from-amber-500 to-orange-500',
        activeRing: 'ring-amber-400'
      };

  // Question Armenian translation toggle
  const [isQuestionArmOpen, setIsQuestionArmOpen] = useState(false);

  // Scrambled answer data & states
  const answerData = useMemo(() => getCardAnswerData(card), [card]);
  const [isWordsBlockOpen, setIsWordsBlockOpen] = useState(false);
  const [openWordArm, setOpenWordArm] = useState<Record<string, boolean>>({});
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const [isAnswerArmOpen, setIsAnswerArmOpen] = useState(false);

  // 4 Options section states
  const [areOptionsVisible, setAreOptionsVisible] = useState(false);
  const [openOptionArm, setOpenOptionArm] = useState<Record<number, boolean>>({});
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  // Audio speech state
  const [speakingText, setSpeakingText] = useState<string | null>(null);

  const toggleQuestionArm = () => {
    soundManager.playClickTone();
    setIsQuestionArmOpen(prev => !prev);
  };

  const toggleWordsBlock = () => {
    soundManager.playClickTone();
    setIsWordsBlockOpen(prev => !prev);
  };

  const toggleWordArm = (wordId: string, wordText: string) => {
    soundManager.playClickTone();
    setOpenWordArm(prev => ({
      ...prev,
      [wordId]: !prev[wordId]
    }));
  };

  const toggleAnswerVisible = () => {
    soundManager.playClickTone();
    if (!isAnswerVisible) {
      soundManager.playRevealChime();
    }
    setIsAnswerVisible(prev => !prev);
  };

  const toggleAnswerArm = () => {
    soundManager.playClickTone();
    setIsAnswerArmOpen(prev => !prev);
  };

  const handleShowOptions = () => {
    soundManager.playRevealChime();
    setAreOptionsVisible(true);
  };

  const toggleOptionArm = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    soundManager.playClickTone();
    setOpenOptionArm(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const handleSpeak = (text: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSpeakingText(text);
    soundManager.speakSpanish(text, () => {
      setSpeakingText(null);
    });
  };

  const isRestaurante = card.topic === 'restaurante';

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-3 sm:py-5">
      {/* Top Banner with Player */}
      <div className="flex items-center justify-between mb-3.5">
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border ${playerTheme.bg} ${playerTheme.border} ${playerTheme.text} font-bold text-xs sm:text-sm shadow-xs`}>
          <span className={`w-2.5 h-2.5 rounded-full ${isGayane ? 'bg-rose-500' : 'bg-amber-500'} ${isSolo ? '' : 'animate-pulse'}`} />
          {isSolo ? (
            <div className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-stone-500" />
              <span>{activePlayer}</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-stone-500" />
              <span>Turno de {activePlayer}</span>
              <span className="text-stone-300 font-normal">|</span>
              <span className="text-xs font-medium text-stone-500">
                {isGayane ? 'Գայանեի հերթը' : 'Ռազմիկի հերթը'}
              </span>
            </div>
          )}
        </div>

        <div className="text-xs font-semibold text-stone-500 bg-white/80 px-3 py-1.5 rounded-full border border-stone-200">
          Թերթիկ #{cardIndex} / {totalCards}
        </div>
      </div>

      {/* The Unfolding Paper Slip */}
      <motion.div
        initial={{ scale: 0.65, opacity: 0, rotateX: 40, y: -30 }}
        animate={{ scale: 1, opacity: 1, rotateX: 0, y: 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 125 }}
        className="relative bg-[#fffdf9] rounded-2xl border-2 border-stone-300/80 paper-slip-shadow overflow-hidden p-5 sm:p-7"
      >
        {/* Subtle horizontal fold crease marks */}
        <div className="absolute top-1/3 left-0 right-0 h-[2px] paper-crease pointer-events-none" />
        <div className="absolute top-2/3 left-0 right-0 h-[2px] paper-crease pointer-events-none" />
        
        {/* Top Paper Header: Topic Tag & Audio button */}
        <div className="flex items-center justify-between border-b border-stone-200/80 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className={`p-1.5 rounded-lg ${isRestaurante ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'}`}>
              {isRestaurante ? <Utensils className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
            </span>
            <div>
              <span className="text-xs font-bold text-stone-700 block uppercase tracking-wide">
                {isRestaurante ? 'En el restaurante' : 'En el supermercado'}
              </span>
              <span className="text-[11px] text-stone-400 block font-medium">
                {isRestaurante ? 'Ռեստորանում' : 'Սուպերմարկետում'} · {card.titleArm}
              </span>
            </div>
          </div>

          <button
            onClick={() => handleSpeak(card.situation)}
            title="Լսել իսպաներեն արտասանությունը"
            className={`p-2 rounded-xl transition-all flex items-center gap-1.5 text-xs font-medium cursor-pointer ${
              speakingText === card.situation 
                ? 'bg-amber-500 text-white shadow-md' 
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            <Volume2 className={`w-4 h-4 ${speakingText === card.situation ? 'animate-bounce' : ''}`} />
            <span className="hidden sm:inline">Escuchar</span>
          </button>
        </div>

        {/* The Question / Situation in Spanish */}
        <div className="mb-4">
          <div className="text-[11px] font-bold uppercase tracking-wider text-amber-700/80 mb-1.5 flex items-center gap-1.5">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Pregunta y situación · Հարց և իրավիճակ</span>
          </div>

          {/* Clickable Question Text to toggle Armenian translation */}
          <div
            onClick={toggleQuestionArm}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleQuestionArm(); }}
            className="group cursor-pointer rounded-xl p-3.5 transition-colors border border-transparent hover:border-amber-200 hover:bg-amber-50/50"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                {card.situation}
              </p>
              <div className="shrink-0 mt-1 text-stone-400 group-hover:text-amber-600 transition-colors">
                {isQuestionArmOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </div>
            </div>

            <div className="mt-2 flex items-center gap-1 text-[11px] text-stone-400 group-hover:text-amber-700">
              <Languages className="w-3.5 h-3.5" />
              <span>
                {isQuestionArmOpen ? 'Սեղմեք՝ հայերեն թարգմանությունը թաքցնելու համար' : 'Սեղմեք տեքստին՝ հայերեն թարգմանությունը տեսնելու համար'}
              </span>
            </div>
          </div>

          {/* Armenian Translation of the Question */}
          <AnimatePresence>
            {isQuestionArmOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="mt-2.5 p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/90 text-stone-800 text-sm sm:text-base leading-relaxed flex items-start gap-2.5">
                  <span className="text-base select-none">🇦🇲</span>
                  <div className="flex-1 font-medium">
                    <span className="text-[11px] uppercase tracking-wide text-amber-800/80 font-bold block mb-0.5">
                      Թարգմանություն
                    </span>
                    {card.situationArm}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ========================================================================= */}
        {/* Dedicated Button to open Scrambled Words for constructing short answer    */}
        {/* ========================================================================= */}
        <div className="mb-5">
          <button
            type="button"
            onClick={toggleWordsBlock}
            className={`w-full p-3.5 sm:p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between gap-3 text-left shadow-xs hover:scale-[1.01] active:scale-98 ${
              isWordsBlockOpen
                ? 'bg-amber-100/90 border-amber-400 text-amber-950 ring-2 ring-amber-400/20'
                : 'bg-amber-50/70 hover:bg-amber-100/80 border-amber-300/80 text-amber-900'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                isWordsBlockOpen ? 'bg-amber-500 text-white' : 'bg-amber-200/80 text-amber-800'
              }`}>
                <Shuffle className="w-4 h-4" />
              </span>
              <div>
                <span className="font-extrabold text-sm sm:text-base block leading-tight">
                  Palabras para tu respuesta corta (2–5 palabras)
                </span>
                <span className="text-xs text-amber-800/80 font-medium block mt-0.5">
                  Խառը բառեր պատասխան կազմելու համար
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <span className="text-xs font-bold text-amber-700 hidden sm:inline">
                {isWordsBlockOpen ? 'Թաքցնել' : 'Բացել'}
              </span>
              <div className={`p-1.5 rounded-lg transition-transform ${isWordsBlockOpen ? 'bg-amber-200/60' : 'bg-white/80'}`}>
                {isWordsBlockOpen ? <ChevronUp className="w-4 h-4 text-amber-800" /> : <ChevronDown className="w-4 h-4 text-amber-800" />}
              </div>
            </div>
          </button>

          {/* Expandable Scrambled Words Content */}
          <AnimatePresence>
            {isWordsBlockOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -6 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -6 }}
                transition={{ duration: 0.22 }}
                className="overflow-hidden"
              >
                <div className="mt-2.5 p-4 rounded-2xl bg-amber-50/50 border border-amber-200/80 space-y-3.5">
                  {/* Sub-label */}
                  <div className="flex items-center justify-between gap-2 flex-wrap text-[11px] text-stone-500 font-medium">
                    <span>Կազմեք պատասխանը բանավոր (2–5 բառ)</span>
                    <span>Սեղմեք բառի վրա՝ թարգմանությունը տեսնելու համար</span>
                  </div>

                  {/* Scrambled Word Chips with slashes */}
                  <div className="flex flex-wrap items-center gap-2 pt-0.5">
                    {answerData.scrambledWords.map((item, idx) => {
                      const isWordArmOpen = !!openWordArm[item.id];
                      return (
                        <React.Fragment key={item.id}>
                          {idx > 0 && (
                            <span className="text-amber-400 font-black select-none text-base sm:text-lg px-0.5">
                              /
                            </span>
                          )}
                          <button
                            type="button"
                            onClick={() => toggleWordArm(item.id, item.word)}
                            title="Սեղմեք՝ հայերեն թարգմանությունը տեսնելու համար"
                            className={`group relative inline-flex flex-col items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl border text-base sm:text-lg font-black transition-all cursor-pointer shadow-2xs hover:scale-105 active:scale-95 ${
                              isWordArmOpen
                                ? 'bg-amber-500 border-amber-600 text-white ring-2 ring-amber-300'
                                : 'bg-white hover:bg-amber-100/70 border-amber-300 text-stone-900'
                            }`}
                          >
                            <span className="leading-tight tracking-wide">{item.word}</span>
                            {isWordArmOpen && (
                              <span className="text-[11px] font-bold text-amber-100 mt-1 leading-none animate-fadeIn block border-t border-amber-400/60 pt-1">
                                {item.arm}
                              </span>
                            )}
                          </button>
                        </React.Fragment>
                      );
                    })}
                  </div>

                  {/* Button: Mostrar respuesta / Ocultar respuesta */}
                  <div className="pt-2 flex items-center justify-between gap-3 flex-wrap">
                    <button
                      type="button"
                      onClick={toggleAnswerVisible}
                      className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 shadow-xs transition-all cursor-pointer hover:scale-[1.01] active:scale-95 ${
                        isAnswerVisible
                          ? 'bg-amber-100 text-amber-900 hover:bg-amber-200 border border-amber-300'
                          : 'bg-amber-600 hover:bg-amber-700 text-white'
                      }`}
                    >
                      {isAnswerVisible ? (
                        <>
                          <EyeOff className="w-4 h-4 text-amber-700" />
                          <span>Ocultar respuesta</span>
                          <span className="text-xs opacity-75 border-l border-amber-300 pl-1.5 font-normal">
                            Թաքցնել պատասխանը
                          </span>
                        </>
                      ) : (
                        <>
                          <Eye className="w-4 h-4 text-amber-200" />
                          <span>Mostrar respuesta</span>
                          <span className="text-xs opacity-85 border-l border-amber-500 pl-1.5 font-normal">
                            Ցույց տալ պատասխանը
                          </span>
                        </>
                      )}
                    </button>

                    <span className="text-[11px] text-stone-400 italic">
                      Կազմեք պատասխանը բանավոր
                    </span>
                  </div>

                  {/* Revealed Answer Card */}
                  <AnimatePresence>
                    {isAnswerVisible && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -6 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -6 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden pt-1"
                      >
                        <div
                          onClick={toggleAnswerArm}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleAnswerArm(); }}
                          className="p-4 rounded-xl bg-white border-2 border-amber-300 shadow-sm cursor-pointer hover:border-amber-400 transition-all group"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-amber-700 mb-1">
                                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                                <span>Respuesta corta · Կարճ պատասխան</span>
                              </div>
                              <p className="text-lg sm:text-xl font-black text-stone-900 leading-snug">
                                {answerData.sentenceEs}
                              </p>
                              <div className="mt-1.5 flex items-center gap-1 text-[11px] text-stone-400 group-hover:text-amber-700 transition-colors">
                                <Languages className="w-3 h-3" />
                                <span>
                                  {isAnswerArmOpen
                                    ? 'Սեղմեք՝ հայերեն թարգմանությունը թաքցնելու համար'
                                    : 'Սեղմեք տեքստին՝ հայերեն թարգմանությունը տեսնելու համար'}
                                </span>
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={(e) => handleSpeak(answerData.sentenceEs, e)}
                              title="Լսել ճիշտ պատասխանի իսպաներեն արտասանությունը"
                              className={`p-2 rounded-xl transition-all shrink-0 cursor-pointer ${
                                speakingText === answerData.sentenceEs
                                  ? 'bg-amber-500 text-white shadow-md'
                                  : 'bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200'
                              }`}
                            >
                              <Volume2 className={`w-4 h-4 ${speakingText === answerData.sentenceEs ? 'animate-bounce' : ''}`} />
                            </button>
                          </div>

                          {/* Armenian translation of the ready answer */}
                          <AnimatePresence>
                            {isAnswerArmOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.15 }}
                                className="mt-2.5 pt-2 border-t border-amber-100 overflow-hidden"
                              >
                                <div className="p-2.5 rounded-lg bg-amber-50/70 border border-amber-100 text-stone-800 text-xs sm:text-sm font-medium flex items-start gap-2">
                                  <span className="text-sm select-none">🇦🇲</span>
                                  <span>{answerData.sentenceArm}</span>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Prompt to speak aloud first */}
        <div className="py-2.5 px-3.5 rounded-xl bg-stone-100/70 border border-stone-200 text-xs text-stone-600 flex items-center gap-2 mb-4">
          <HelpCircle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            Փորձեք պատասխանել <strong>ինքնուրույն բարձրաձայն</strong>։ Եթե ուզում եք ստուգել այլընտրանքային պատասխաններ, բացեք տարբերակները։
          </span>
        </div>

        {/* Hidden / Revealed Options Section */}
        {!areOptionsVisible ? (
          <div className="text-center py-1">
            <button
              onClick={handleShowOptions}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 mx-auto cursor-pointer hover:scale-[1.01] active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Mostrar más opciones</span>
              <span className="text-xs text-stone-300 font-normal pl-1 border-l border-stone-700">
                Այլ տարբերակներ
              </span>
            </button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-3 pt-2 border-t border-stone-200/80"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Opciones de respuesta · Պատասխանի տարբերակներ
              </span>
              <span className="text-[11px] text-stone-400">
                Ընտրեք կամ ասեք ձեր տարբերակը
              </span>
            </div>

            {/* The 4 conversational response options */}
            <div className="grid grid-cols-1 gap-2.5">
              {card.options.map((option, idx) => {
                const isArmOpen = !!openOptionArm[idx];
                const isSelected = selectedOption === idx;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06 }}
                    onClick={() => setSelectedOption(idx)}
                    className={`rounded-xl border p-3.5 transition-all cursor-pointer ${
                      isSelected
                        ? `bg-amber-50/90 border-amber-300 ring-2 ${playerTheme.activeRing} shadow-sm`
                        : 'bg-white hover:bg-stone-50/90 border-stone-200'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2.5">
                      <div className="flex items-start gap-2.5 flex-1">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                          isSelected ? 'bg-amber-500 text-white' : 'bg-stone-100 text-stone-600'
                        }`}>
                          {idx + 1}
                        </span>
                        <div className="flex-1">
                          <p className="text-stone-900 font-semibold text-sm sm:text-base leading-snug">
                            {option.es}
                          </p>

                          {/* Armenian translation for this specific option */}
                          <AnimatePresence>
                            {isArmOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.15 }}
                                className="overflow-hidden"
                              >
                                <p className="mt-2 text-xs sm:text-sm text-stone-600 bg-amber-50/60 p-2 rounded-lg border border-amber-100/80 leading-normal">
                                  🇦🇲 {option.arm}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      {/* Action buttons: Armenian toggle and Audio speaker */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        {/* Audio button for option */}
                        <button
                          type="button"
                          onClick={(e) => handleSpeak(option.es, e)}
                          title="Լսել իսպաներեն"
                          className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                            speakingText === option.es 
                              ? 'bg-amber-500 text-white' 
                              : 'text-stone-400 hover:text-stone-700 hover:bg-stone-100'
                          }`}
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>

                        {/* Separate small «Հայերեն» toggle button */}
                        <button
                          type="button"
                          onClick={(e) => toggleOptionArm(idx, e)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                            isArmOpen
                              ? 'bg-amber-600 text-white border-amber-600'
                              : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                          }`}
                        >
                          Հայերեն
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Action Button: Siguiente tarjeta (Solo) or Siguiente turno (Duo) */}
        <div className="mt-6 pt-4 border-t border-stone-200/80 flex items-center justify-between gap-4">
          <div className="text-xs text-stone-400">
            {isSolo
              ? 'Պատասխանելուց հետո անցեք հաջորդ հարցին'
              : `Պատասխանելուց հետո հերթը կանցնի ${nextPlayer}-ին`}
          </div>

          <button
            onClick={() => {
              soundManager.stopSpeaking();
              onNextTurn();
            }}
            className={`px-5 py-3 rounded-xl text-white font-bold text-sm shadow-md flex items-center gap-2 transition-all cursor-pointer bg-gradient-to-r ${playerTheme.accent} hover:brightness-105 active:scale-95`}
          >
            {isSolo ? (
              <>
                <span>Siguiente tarjeta</span>
                <span className="text-xs opacity-80 border-l border-white/30 pl-2">
                  Հաջորդ հարցը
                </span>
              </>
            ) : (
              <>
                <span>Siguiente turno</span>
                <span className="text-xs opacity-80 border-l border-white/30 pl-2">
                  Հաջորդ քայլը
                </span>
              </>
            )}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};
