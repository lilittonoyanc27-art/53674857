import React, { useState } from 'react';
import { RotateCcw, Home, Volume2, VolumeX, Users, User } from 'lucide-react';
import { GameMode } from './types.ts';
import { soundManager } from './sound.ts';

interface TopBarProps {
  onGoHome: () => void;
  onShuffle: () => void;
  onChangeMode: () => void;
  showInGameControls: boolean;
  gameMode?: GameMode;
}

export const TopBar: React.FC<TopBarProps> = ({
  onGoHome,
  onShuffle,
  onChangeMode,
  showInGameControls,
  gameMode
}) => {
  const [muted, setMuted] = useState(soundManager.getMuted());

  const toggleSound = () => {
    const nextMuted = !muted;
    setMuted(nextMuted);
    soundManager.setMuted(nextMuted);
  };

  return (
    <header className="w-full bg-white/95 backdrop-blur-md border-b border-stone-200/80 sticky top-0 z-30 shadow-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        {/* Brand Zone */}
        <div 
          onClick={onGoHome} 
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-rose-500 text-white flex items-center justify-center font-black shadow-sm group-hover:scale-105 transition-transform">
            ¡H!
          </div>
          <div>
            <div className="text-base sm:text-xl font-black tracking-tight text-stone-900 leading-tight">
              ¡Habla y juega!
            </div>
            <div className="text-[10px] text-stone-500 font-medium hidden sm:block">
              Español · Խոսակցական իսպաներեն
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* Audio Mute/Unmute */}
          <button
            onClick={toggleSound}
            title={muted ? 'Միացնել ձայնը' : 'Անջատել ձայնը'}
            className="p-2 rounded-xl text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors border border-stone-200/70 cursor-pointer"
          >
            {muted ? <VolumeX className="w-4 h-4 text-rose-500" /> : <Volume2 className="w-4 h-4 text-emerald-600" />}
          </button>

          {showInGameControls && (
            <>
              {/* Cambiar modo button */}
              <button
                onClick={onChangeMode}
                title="Փոխել խաղի ռեժիմը (մեկ կամ երկու խաղացող)"
                className="px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold text-stone-700 bg-amber-50 hover:bg-amber-100 border border-amber-200/80 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                {gameMode === 'solo' ? <User className="w-3.5 h-3.5 text-amber-700" /> : <Users className="w-3.5 h-3.5 text-amber-700" />}
                <span className="hidden sm:inline">Cambiar modo</span>
                <span className="sm:hidden">Modo</span>
              </button>

              {/* Volver a mezclar button */}
              <button
                onClick={onShuffle}
                title="Վերախառնել քարտերը"
                className="px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 transition-colors flex items-center gap-1.5 border border-stone-200/80 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5 text-stone-500" />
                <span className="hidden sm:inline">Volver a mezclar</span>
                <span className="sm:hidden">Mezclar</span>
              </button>

              {/* Inicio button */}
              <button
                onClick={onGoHome}
                title="Վերադառնալ գլխավոր էջ"
                className="px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold text-stone-700 bg-white hover:bg-stone-100 transition-colors flex items-center gap-1.5 border border-stone-200 cursor-pointer"
              >
                <Home className="w-3.5 h-3.5 text-stone-500" />
                <span>Inicio</span>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
