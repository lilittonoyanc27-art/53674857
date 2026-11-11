import React from 'react';
import { Player, PlayerStats, GameMode } from './types.ts';
import { User, Users } from 'lucide-react';

interface ScoreBarProps {
  mode: GameMode;
  stats: PlayerStats;
  activePlayer: Player;
  totalAnswered: number;
  totalCards: number;
}

export const ScoreBar: React.FC<ScoreBarProps> = ({
  mode,
  stats,
  activePlayer,
  totalAnswered,
  totalCards
}) => {
  const isSolo = mode === 'solo';

  return (
    <div className="w-full max-w-2xl mx-auto px-4 mt-2 mb-2">
      <div className="bg-white/85 backdrop-blur-sm rounded-2xl border border-stone-200/90 p-3 sm:p-4 shadow-xs">
        {/* Mode subtitle tag */}
        <div className="flex items-center justify-between text-[11px] text-stone-500 font-medium mb-2 border-b border-stone-100 pb-1.5">
          <div className="flex items-center gap-1.5">
            {isSolo ? (
              <span className="inline-flex items-center gap-1 text-stone-600 font-semibold">
                <User className="w-3.5 h-3.5 text-amber-600" />
                <span>Modo: Un jugador ({activePlayer})</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-stone-600 font-semibold">
                <Users className="w-3.5 h-3.5 text-amber-600" />
                <span>Modo: Dos jugadores (Gayane & Razmik)</span>
              </span>
            )}
          </div>
          <div className="text-stone-400 tabular-nums">
            {totalAnswered} / {totalCards} քարտ
          </div>
        </div>

        {isSolo ? (
          /* Solo Mode */
          <div className="flex items-center justify-between gap-3">
            <div className={`flex items-center gap-3 px-3.5 py-2 rounded-xl border ${
              activePlayer === 'Gayane' 
                ? 'bg-rose-50 border-rose-200 text-rose-900' 
                : 'bg-amber-50 border-amber-200 text-amber-900'
            }`}>
              <div className={`w-8 h-8 rounded-full text-white font-black text-sm flex items-center justify-center shadow-xs ${
                activePlayer === 'Gayane' ? 'bg-rose-500' : 'bg-amber-500'
              }`}>
                {activePlayer === 'Gayane' ? 'G' : 'R'}
              </div>
              <div>
                <div className="text-sm font-bold text-stone-900">
                  {activePlayer}
                </div>
                <div className="text-xs text-stone-600">
                  <span className="font-extrabold tabular-nums text-stone-900">
                    {stats[activePlayer]}
                  </span> tarjetas completadas
                </div>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[11px] text-stone-400 block font-medium">
                Մնացել է տուփում
              </span>
              <span className="text-sm font-bold text-stone-700 tabular-nums">
                {Math.max(0, totalCards - totalAnswered)} tarjetas
              </span>
            </div>
          </div>
        ) : (
          /* Duo Mode: Both Players */
          <div className="flex items-center justify-between gap-2.5 flex-wrap">
            {/* Gayane counter */}
            <div className={`flex items-center gap-2.5 px-3 py-1.5 rounded-xl border transition-all ${
              activePlayer === 'Gayane' 
                ? 'bg-rose-50 border-rose-400 ring-2 ring-rose-400/40 shadow-xs' 
                : 'bg-stone-50 border-stone-200 opacity-75'
            }`}>
              <div className="w-7 h-7 rounded-full bg-rose-500 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                G
              </div>
              <div>
                <div className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
                  <span>Gayane</span>
                  {activePlayer === 'Gayane' && (
                    <span className="text-[9px] font-bold text-rose-600 bg-rose-200/80 px-1 py-0.2 rounded-sm">
                      Հերթ
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-stone-500">
                  <span className="font-bold text-stone-800 tabular-nums">{stats.Gayane}</span> tarjetas
                </div>
              </div>
            </div>

            {/* Turn order indicator */}
            <div className="hidden sm:flex flex-col items-center">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">
                Հերթով · Turno
              </span>
              <div className="text-xs font-bold text-amber-700 mt-0.5">
                {activePlayer === 'Gayane' ? 'Gayane ➔ Razmik' : 'Razmik ➔ Gayane'}
              </div>
            </div>

            {/* Razmik counter */}
            <div className={`flex items-center gap-2.5 px-3 py-1.5 rounded-xl border transition-all ${
              activePlayer === 'Razmik' 
                ? 'bg-amber-50 border-amber-400 ring-2 ring-amber-400/40 shadow-xs' 
                : 'bg-stone-50 border-stone-200 opacity-75'
            }`}>
              <div className="w-7 h-7 rounded-full bg-amber-500 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                R
              </div>
              <div>
                <div className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
                  <span>Razmik</span>
                  {activePlayer === 'Razmik' && (
                    <span className="text-[9px] font-bold text-amber-800 bg-amber-200/80 px-1 py-0.2 rounded-sm">
                      Հերթ
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-stone-500">
                  <span className="font-bold text-stone-800 tabular-nums">{stats.Razmik}</span> tarjetas
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Visual Progress Bar */}
        <div className="w-full bg-stone-100 h-1.5 rounded-full mt-3 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-rose-500 via-amber-500 to-emerald-500 h-full rounded-full transition-all duration-300"
            style={{ width: `${Math.min(100, Math.round((totalAnswered / Math.max(totalCards, 1)) * 100))}%` }}
          />
        </div>
      </div>
    </div>
  );
};
