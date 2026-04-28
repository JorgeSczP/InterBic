import React from "react";

export default function CardFinal({ equipo, lugar, est }) {
  const colores = {
    1: "bg-yellow-400 text-black",   // Oro
    2: "bg-gray-300 text-black",     // Plata
    3: "bg-amber-700 text-white",    // Bronce
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div
        className={`scoreboard-bar-dos flex items-center h-20 w-full relative group cursor-pointer transition-transform hover:scale-[1.02] ${
          colores[lugar] || "bg-gray-800 text-white"
        }`}
      >
        <div className="w-full h-full flex-col flex items-center justify-center relative z-10">
          <span className="text-[10px] sm:text-2xl font-black italic tracking-widest">
            {equipo}
          </span>
          <span className="text-[6px] sm:text-sm font-semibold italic tracking-widest">
            {est}
          </span>
        </div>
      </div>
    </div>
  );
}