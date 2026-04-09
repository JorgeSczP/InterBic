import React from "react";

export default function CardPartido({torneo}) {
  return (
    <div class="max-w-4xl mx-auto">
      <div class="flex justify-between px-8 mb-2">
        <span class="text-[10px] font-black uppercase tracking-[0.3em] text-[#1545b6]">
          {torneo?.nombre}
        </span>
        <span class="text-[10px] font-black uppercase tracking-[0.3em] text-[#1545b6]">
          {torneo?.hora}
        </span>
      </div>
      <div class="scoreboard-bar flex items-center h-20 w-full relative group cursor-pointer transition-transform hover:scale-[1.02]">
        <div class="flex-1 px-1 sm:px-12 text-[8px] sm:text-base font-black uppercase tracking-tighter text-white text-right">
          {torneo?.local}
        </div>
        <div class="scoreboard-center w-20 sm:w-40 h-full flex items-center justify-center relative z-10">
          <span class="text-[10px] sm:text-2xl font-black text-white italic tracking-widest">
            {torneo?.rL} - {torneo?.rV} 
          </span>
        </div>
        <div class="flex-1 px-1 sm:px-12 text-[8px] sm:text-base font-black uppercase tracking-tighter text-white text-left">
          {torneo?.visita}
        </div>
      </div>
    </div>
  );
}
