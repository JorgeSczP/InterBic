import React from "react";

export default function CardVelocidad() {
  return (
    <div className="scoreboard-bar border-l-4 border-error overflow-hidden shadow-lg transition-all">
      <div className="flex flex-col md:flex-row items-stretch">
        <div className=" md:w-32  flex flex-col items-center justify-center py-6 px-4">
          <span className="text-3xl font-black tracking-tighter text-slate-200">
            07:00
          </span>
        </div>
        <div className="flex-1 p-6 flex flex-col md:flex-row gap-8 justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 class="text-xl font-bold tracking-tight text-white">
                Inicio de la actividad
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
