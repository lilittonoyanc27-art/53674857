import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Trophy, RotateCcw, Home, Sparkles, Users, User } from 'lucide-react';
import { PlayerStats, Topic, GameMode, Player } from './types.ts';

interface CompletedScreenProps {
  mode: GameMode;
  activePlayer: Player;
  stats: PlayerStats;
  topic: Topic;
  onPlayAgain: () => void;
  onGoHome: () => void;
}

export const CompletedScreen: React.FC<CompletedScreenProps> = ({
  mode,
  activePlayer,
  stats,
  topic,
  onPlayAgain,
  onGoHome
}) => {
  const isSolo = mode === 'solo';

  useEffect(() => {
    // Launch celebratory confetti
    confetti({
      particleCount: 85,
      spread: 75,
      origin: { y: 0.6 }
    });

    const timeout = setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
    }, 320);

    return () => clearTimeout(timeout);
  }, []);

  const total = isSolo ? stats[activePlayer] : stats.Gayane + stats.Razmik;

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-8 sm:py-12 text-center">
      <div className="bg-white rounded-3xl border border-stone-200/90 shadow-xl p-6 sm:p-8">
        <div className="w-16 h-16 rounded-3xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-4 shadow-sm">
          <Trophy className="w-8 h-8" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>¡Excelente trabajo! · Հիանալի աշխատանք</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight mb-2">
          {isSolo ? `¡Felicidades, ${activePlayer}!` : '¡Todas las tarjetas completadas!'}
        </h2>
        
        <p className="text-stone-600 text-sm sm:text-base mb-6">
          {isSolo ? (
            <>
              Դուք հաջողությամբ ավարտեցիք բոլոր <strong>{total}</strong> թերթիկները։ Հիանալի խոսակցական պրակտիկա <strong>{activePlayer}</strong>-ի համար։
            </>
          ) : (
            <>
              Դուք միասին հաջողությամբ անցաք բոլոր <strong>{total}</strong> թերթիկները։ Շնորհավորում ենք <strong>Gayane</strong>-ին և <strong>Razmik</strong>-ին։
            </>
          )}
        </p>

        {/* Results Card */}
        {isSolo ? (
          <div className="max-w-xs mx-auto mb-8 p-4 rounded-2xl border bg-stone-50 border-stone-200">
            <div className={`w-12 h-12 rounded-2xl text-white font-black text-lg flex items-center justify-center mx-auto mb-2 shadow-xs ${
              activePlayer === 'Gayane' ? 'bg-rose-500' : 'bg-amber-500'
            }`}>
              {activePlayer === 'Gayane' ? 'G' : 'R'}
            </div>
            <div className="text-sm font-bold text-stone-900">{activePlayer}</div>
            <div className="text-3xl font-black text-stone-900 mt-1 tabular-nums">
              {stats[activePlayer]}
            </div>
            <div className="text-xs text-stone-500 font-medium">tarjetas completadas</div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200">
              <div className="w-10 h-10 rounded-full bg-rose-500 text-white font-extrabold text-sm flex items-center justify-center mx-auto mb-2 shadow-xs">
                G
              </div>
              <div className="text-sm font-bold text-stone-900">Gayane</div>
              <div className="text-2xl font-black text-rose-600 mt-1 tabular-nums">
                {stats.Gayane}
              </div>
              <div className="text-[11px] text-stone-500 font-medium">tarjetas</div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
              <div className="w-10 h-10 rounded-full bg-amber-500 text-white font-extrabold text-sm flex items-center justify-center mx-auto mb-2 shadow-xs">
                R
              </div>
              <div className="text-sm font-bold text-stone-900">Razmik</div>
              <div className="text-2xl font-black text-amber-600 mt-1 tabular-nums">
                {stats.Razmik}
              </div>
              <div className="text-[11px] text-stone-500 font-medium">tarjetas</div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-2.5">
          <button
            onClick={onPlayAgain}
            className="w-full py-3.5 px-6 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-base shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer hover:scale-[1.01] active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Volver a mezclar y jugar</span>
            <span className="text-xs font-normal opacity-85 pl-1 border-l border-white/30">
              Կրկին խաղալ
            </span>
          </button>

          <button
            onClick={onGoHome}
            className="w-full py-3 px-6 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Home className="w-4 h-4 text-stone-500" />
            <span>Inicio / Cambiar modo · Գլխավոր էջ</span>
          </button>
        </div>
      </div>
    </div>
  );
};
