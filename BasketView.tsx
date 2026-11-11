import React from 'react';
import { motion } from 'motion/react';
import { Utensils, ShoppingCart, Sparkles, Layers, User, Users } from 'lucide-react';
import { Player, Topic, GameMode } from './types.ts';

interface BasketViewProps {
  mode: GameMode;
  topic: Topic;
  activePlayer: Player;
  remainingCount: number;
  totalCount: number;
  onDrawCard: () => void;
  isDrawing: boolean;
}

export const BasketView: React.FC<BasketViewProps> = ({
  mode,
  topic,
  activePlayer,
  remainingCount,
  totalCount,
  onDrawCard,
  isDrawing
}) => {
  const isSolo = mode === 'solo';
  const isGayane = activePlayer === 'Gayane';
  const playerColor = isGayane ? 'from-rose-500 to-pink-500' : 'from-amber-500 to-orange-500';
  const playerBgLight = isGayane ? 'bg-rose-50 text-rose-800 border-rose-300' : 'bg-amber-50 text-amber-900 border-amber-300';
  const playerShadow = isGayane ? 'shadow-rose-100' : 'shadow-amber-100';

  const getTopicLabel = () => {
    switch (topic) {
      case 'restaurante':
        return { es: 'En el restaurante', arm: 'Ռեստորանում', icon: Utensils };
      case 'supermercado':
        return { es: 'En el supermercado', arm: 'Սուպերմարկետում', icon: ShoppingCart };
      case 'mezclado':
      default:
        return { es: 'Mezclado', arm: 'Խառը (ռեստորան + սուպերմարկետ)', icon: Layers };
    }
  };

  const topicInfo = getTopicLabel();
  const TopicIcon = topicInfo.icon;

  const slipsInBasket = Math.min(Math.max(remainingCount, 1), 7);

  return (
    <div className="flex flex-col items-center justify-center max-w-2xl mx-auto py-4 sm:py-6 px-4">
      {/* Active player announcement */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full text-center mb-4 sm:mb-6"
      >
        {/* Topic Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs sm:text-sm font-medium mb-3 shadow-2xs transition-all bg-white text-stone-700 border-stone-200">
          <TopicIcon className="w-4 h-4 text-amber-600" />
          <span>{topicInfo.es}</span>
          <span className="text-stone-300">·</span>
          <span className="text-stone-500">{topicInfo.arm}</span>
        </div>

        {/* Turn / Player Announcement Badge */}
        <div className="flex items-center justify-center gap-3">
          <div className={`px-6 py-3 rounded-2xl border-2 ${playerBgLight} ${playerShadow} shadow-lg transition-transform hover:scale-[1.01]`}>
            {isSolo ? (
              <div>
                <span className="text-xs uppercase tracking-wider block font-bold text-stone-500 mb-0.5 flex items-center justify-center gap-1.5">
                  <User className="w-3.5 h-3.5" />
                  <span>Práctica individual · {activePlayer}</span>
                </span>
                <div className="text-2xl sm:text-3xl font-black flex items-center justify-center gap-2">
                  <span className={`w-3.5 h-3.5 rounded-full ${isGayane ? 'bg-rose-500' : 'bg-amber-500'} inline-block`} />
                  <span>¡Hola, <span className={isGayane ? 'text-rose-600' : 'text-amber-700'}>{activePlayer}</span>!</span>
                </div>
              </div>
            ) : (
              <div>
                <span className="text-xs uppercase tracking-wider block font-bold text-stone-500 mb-0.5 flex items-center justify-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-amber-600" />
                  <span>Հերթը պատկանում է · Turno actual</span>
                </span>
                <div className="text-2xl sm:text-3xl font-black flex items-center justify-center gap-2">
                  <span className={`w-3.5 h-3.5 rounded-full ${isGayane ? 'bg-rose-500' : 'bg-amber-500'} inline-block animate-pulse`} />
                  <span>Turno de <span className={isGayane ? 'text-rose-600' : 'text-amber-700'}>{activePlayer}</span></span>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* The Basket / Box with folded paper slips */}
      <div className="relative w-72 sm:w-80 h-56 sm:h-64 my-2 flex items-center justify-center">
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-amber-200/40 via-orange-100/20 to-transparent rounded-full filter blur-xl transform translate-y-6" />

          {/* Basket Outer Box */}
          <div className="relative z-10 w-64 sm:w-72 h-44 sm:h-48 rounded-3xl bg-gradient-to-b from-amber-100 via-amber-50 to-stone-100 border-4 border-amber-300/80 shadow-2xl overflow-hidden flex flex-col justify-between p-4">
            <div className="absolute -top-1 left-2 right-2 h-4 bg-amber-400/60 rounded-full border border-amber-500/30 blur-[0.5px]" />
            
            {/* Paper slips stack inside basket */}
            <div className="relative w-full h-28 flex items-center justify-center mt-2">
              {Array.from({ length: slipsInBasket }).map((_, idx) => {
                const rotations = [-16, 12, -8, 18, -4, 14, -12];
                const xOffsets = [-18, 14, -6, 22, -12, 8, -2];
                const yOffsets = [10, 4, 12, -4, 6, -8, 2];
                const rot = rotations[idx % rotations.length];
                const x = xOffsets[idx % xOffsets.length];
                const y = yOffsets[idx % yOffsets.length];

                return (
                  <motion.div
                    key={idx}
                    animate={{
                      y: [y, y - 3, y],
                      rotate: [rot, rot + 1, rot]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3 + idx * 0.5,
                      ease: 'easeInOut'
                    }}
                    style={{
                      transform: `translate(${x}px, ${y}px) rotate(${rot}deg)`,
                      zIndex: idx + 1
                    }}
                    className="absolute w-24 sm:w-28 h-14 sm:h-16 rounded-lg bg-gradient-to-br from-amber-50 via-white to-amber-100/90 border border-amber-200/90 paper-folded flex items-center justify-center shadow-md cursor-pointer hover:border-amber-400 transition-colors"
                    onClick={onDrawCard}
                  >
                    <div className="w-full h-[1px] bg-amber-200/60 absolute transform -rotate-12" />
                    <span className="text-[11px] font-bold text-amber-800/70 select-none tracking-wider font-mono">
                      ✦ ¡H! ✦
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Front label of the box */}
            <div className="relative z-20 bg-white/90 backdrop-blur-sm rounded-xl py-2 px-3 border border-amber-200 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl">🧺</span>
                <div className="text-left">
                  <span className="text-xs font-bold text-stone-800 block leading-tight">
                    Cesta de papelitos
                  </span>
                  <span className="text-[10px] text-stone-500 font-medium block">
                    {activePlayer}-ի զամբյուղը
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm font-bold text-amber-600 block leading-tight tabular-nums">
                  {remainingCount} / {totalCount}
                </span>
                <span className="text-[10px] text-stone-400 font-medium block">
                  մնացել է
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Draw Button */}
      <motion.div 
        className="mt-4 w-full sm:w-auto"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <button
          onClick={onDrawCard}
          disabled={isDrawing || remainingCount === 0}
          className={`w-full sm:w-80 py-4 px-6 rounded-2xl text-white font-bold text-lg shadow-xl flex items-center justify-center gap-3 transition-all cursor-pointer bg-gradient-to-r ${playerColor} hover:brightness-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          <Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: '4s' }} />
          <span>Sacar un papelito</span>
          <span className="text-xs font-normal opacity-90 pl-1 border-l border-white/30">
            Հանել թերթիկը
          </span>
        </button>
      </motion.div>

      {/* Instructional helper hint */}
      <p className="text-stone-500 text-xs sm:text-sm mt-3 text-center max-w-md">
        {isSolo
          ? `${activePlayer}, սեղմեք կոճակը, հանեք թերթիկը և պատասխանեք բարձրաձայն։`
          : `${activePlayer}, ձեր հերթն է․ սեղմեք կոճակը, հանեք թերթիկը և պատասխանեք բարձրաձայն։`}
      </p>
    </div>
  );
};
