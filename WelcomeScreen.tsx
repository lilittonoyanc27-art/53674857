import React from 'react';
import { motion } from 'motion/react';
import { Utensils, ShoppingCart, Layers, Play, Sparkles, Check, User, Users, GraduationCap } from 'lucide-react';
import { Player, Topic, GameMode } from './types.ts';

interface WelcomeScreenProps {
  mode: GameMode;
  setMode: (m: GameMode) => void;
  topic: Topic;
  setTopic: (t: Topic) => void;
  chosenPlayer: Player;
  setChosenPlayer: (p: Player) => void;
  onStart: () => void;
  restaurantCardsCount: number;
  supermarketCardsCount: number;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  mode,
  setMode,
  topic,
  setTopic,
  chosenPlayer,
  setChosenPlayer,
  onStart,
  restaurantCardsCount,
  supermarketCardsCount
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-6 sm:py-10">
      {/* Hero Header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 text-amber-900 border border-amber-200/80 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Práctica de conversación · Խոսակցական իսպաներեն</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight mb-2">
          ¡Habla y juega!
        </h1>
        <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto leading-relaxed">
          Խոսակցական իսպաներենի պրակտիկա <span className="font-bold text-rose-600">Gayane</span>-ի և <span className="font-bold text-amber-600">Razmik</span>-ի համար։
        </p>
      </motion.div>

      {/* Main Configuration Card */}
      <div className="bg-white rounded-3xl border border-stone-200/90 shadow-xl p-5 sm:p-8 space-y-7">
        {/* Step 1: Mode Selector */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-xs font-bold uppercase tracking-wider text-stone-500">
              1. Modo de juego · Խաղի ռեժիմը
            </label>
            <span className="text-xs text-stone-400 font-medium">
              Ընտրեք ռեժիմը
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Solo Mode */}
            <div
              onClick={() => setMode('solo')}
              className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-3.5 ${
                mode === 'solo'
                  ? 'border-amber-500 bg-amber-50/70 shadow-sm ring-1 ring-amber-500/30'
                  : 'border-stone-200 hover:border-stone-300 hover:bg-stone-50/50'
              }`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                mode === 'solo' ? 'bg-amber-500 text-white' : 'bg-stone-100 text-stone-600'
              }`}>
                <User className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-stone-900 text-base">Un jugador</h3>
                  {mode === 'solo' && (
                    <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                  )}
                </div>
                <div className="text-xs font-semibold text-amber-700 mt-0.5">
                  Մեկ խաղացող · Անհատական
                </div>
                <p className="text-xs text-stone-500 mt-1">
                  Անհատական պարապմունք Gayane-ի կամ Razmik-ի համար։
                </p>
              </div>
            </div>

            {/* Duo Mode */}
            <div
              onClick={() => setMode('duo')}
              className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-3.5 ${
                mode === 'duo'
                  ? 'border-indigo-500 bg-indigo-50/70 shadow-sm ring-1 ring-indigo-500/30'
                  : 'border-stone-200 hover:border-stone-300 hover:bg-stone-50/50'
              }`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                mode === 'duo' ? 'bg-indigo-600 text-white' : 'bg-stone-100 text-stone-600'
              }`}>
                <Users className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-stone-900 text-base">Dos jugadores</h3>
                  {mode === 'duo' && (
                    <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                  )}
                </div>
                <div className="text-xs font-semibold text-indigo-700 mt-0.5">
                  Երկու խաղացող · Հերթով
                </div>
                <p className="text-xs text-stone-500 mt-1">
                  Խաղում են միասին՝ հերթով բացելով պատահական թերթիկները։
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: Player selection */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-xs font-bold uppercase tracking-wider text-stone-500">
              {mode === 'solo' 
                ? '2. ¿Quién eres? · Ո՞վ ես դու' 
                : '2. ¿Quién empieza primero? · Ո՞վ է սկսում առաջինը'}
            </label>
            <span className="text-xs text-stone-400 font-medium">
              {mode === 'solo' ? 'Ընտրեք ձեր անունը' : 'Ընտրեք առաջին քայլողին'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Gayane */}
            <div
              onClick={() => setChosenPlayer('Gayane')}
              className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-3.5 ${
                chosenPlayer === 'Gayane'
                  ? 'border-rose-500 bg-rose-50/70 shadow-sm ring-1 ring-rose-500/30'
                  : 'border-stone-200 hover:border-stone-300 hover:bg-stone-50/50'
              }`}
            >
              <div className="w-11 h-11 rounded-2xl bg-rose-500 text-white font-black text-lg flex items-center justify-center shrink-0 shadow-xs">
                G
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-stone-900 text-base">Gayane</h3>
                  {chosenPlayer === 'Gayane' && (
                    <span className="text-[11px] font-bold text-rose-600 bg-rose-100 px-2 py-0.5 rounded-full">
                      {mode === 'solo' ? 'Ընտրված է' : 'Սկսում է'}
                    </span>
                  )}
                </div>
                <p className="text-xs text-stone-600 mt-1">
                  Խոսակցական իրավիճակներ ռեստորանում և սուպերմարկետում։
                </p>
              </div>
            </div>

            {/* Razmik */}
            <div
              onClick={() => setChosenPlayer('Razmik')}
              className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-3.5 ${
                chosenPlayer === 'Razmik'
                  ? 'border-amber-500 bg-amber-50/70 shadow-sm ring-1 ring-amber-500/30'
                  : 'border-stone-200 hover:border-stone-300 hover:bg-stone-50/50'
              }`}
            >
              <div className="w-11 h-11 rounded-2xl bg-amber-500 text-white font-black text-lg flex items-center justify-center shrink-0 shadow-xs">
                R
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-stone-900 text-base">Razmik</h3>
                  {chosenPlayer === 'Razmik' && (
                    <span className="text-[11px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                      {mode === 'solo' ? 'Ընտրված է' : 'Սկսում է'}
                    </span>
                  )}
                </div>
                <p className="text-xs text-stone-600 mt-1">
                  Կարճ և պարզ հարցեր առօրյա իրավիճակներում։
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Choose Topic */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
            3. Elige el tema · Ընտրեք թեման
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Topic 1: En el restaurante */}
            <div
              onClick={() => setTopic('restaurante')}
              className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                topic === 'restaurante'
                  ? 'border-amber-500 bg-amber-50/70 shadow-sm ring-1 ring-amber-500/30'
                  : 'border-stone-200 hover:border-stone-300 hover:bg-stone-50/50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                  <Utensils className="w-4 h-4" />
                </div>
                {topic === 'restaurante' && (
                  <span className="w-4 h-4 rounded-full bg-amber-500 text-white flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                )}
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-sm leading-tight">
                  En el restaurante
                </h4>
                <p className="text-[11px] text-stone-500 mt-0.5">
                  Ռեստորանում · {restaurantCardsCount} քարտ
                </p>
              </div>
            </div>

            {/* Topic 2: En el supermercado */}
            <div
              onClick={() => setTopic('supermercado')}
              className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                topic === 'supermercado'
                  ? 'border-emerald-500 bg-emerald-50/70 shadow-sm ring-1 ring-emerald-500/30'
                  : 'border-stone-200 hover:border-stone-300 hover:bg-stone-50/50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <ShoppingCart className="w-4 h-4" />
                </div>
                {topic === 'supermercado' && (
                  <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                )}
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-sm leading-tight">
                  En el supermercado
                </h4>
                <p className="text-[11px] text-stone-500 mt-0.5">
                  Սուպերմարկետում · {supermarketCardsCount} քարտ
                </p>
              </div>
            </div>

            {/* Topic 3: Mezclado */}
            <div
              onClick={() => setTopic('mezclado')}
              className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                topic === 'mezclado'
                  ? 'border-indigo-500 bg-indigo-50/70 shadow-sm ring-1 ring-indigo-500/30'
                  : 'border-stone-200 hover:border-stone-300 hover:bg-stone-50/50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center">
                  <Layers className="w-4 h-4" />
                </div>
                {topic === 'mezclado' && (
                  <span className="w-4 h-4 rounded-full bg-indigo-500 text-white flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                )}
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-sm leading-tight">
                  Mezclado
                </h4>
                <p className="text-[11px] text-stone-500 mt-0.5">
                  Խառը · {restaurantCardsCount + supermarketCardsCount} քարտ
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Start Button */}
        <div>
          <button
            onClick={onStart}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:brightness-105 text-white font-black text-lg shadow-xl shadow-orange-500/20 flex items-center justify-center gap-3 transition-all cursor-pointer hover:scale-[1.01] active:scale-95"
          >
            <Play className="w-5 h-5 fill-white" />
            <span>Empezar</span>
            <span className="text-sm font-medium opacity-90 pl-1 border-l border-white/30">
              Սկսել {mode === 'solo' ? 'անհատական պրակտիկան' : 'խաղը երկուսով'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
