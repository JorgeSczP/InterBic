import React from "react";

export default function CardPartido({ torneo }) {
  const ganaLocal = torneo?.rL > torneo?.rV;
  const ganaVisita = torneo?.rV > torneo?.rL;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between px-8 mb-2">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1545b6]">
          {torneo?.nombre}
        </span>
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1545b6]">
          {torneo?.hora}
        </span>
      </div>

      <div className="scoreboard-bar flex items-center h-20 w-full relative group cursor-pointer transition-transform hover:scale-[1.02]">
        {/* LOCAL */}
        <div
          className={`flex-1 px-1 sm:px-12 text-[8px] sm:text-base font-black uppercase tracking-tighter text-right ${
            ganaLocal ? "text-green-400" : "text-white"
          }`}
        >
          {torneo?.local}
        </div>

        {/* SCORE */}
        <div className="scoreboard-center w-20 sm:w-40 h-full flex items-center justify-center relative z-10">
          <span className="text-[10px] sm:text-2xl font-black text-white italic tracking-widest">
            {torneo?.rL} - {torneo?.rV}
          </span>
        </div>

        {/* VISITA */}
        <div
          className={`flex-1 px-1 sm:px-12 text-[8px] sm:text-base font-black uppercase tracking-tighter text-left ${
            ganaVisita ? "text-green-400" : "text-white"
          }`}
        >
          {torneo?.visita}
        </div>
      </div>
    </div>
  );
}
