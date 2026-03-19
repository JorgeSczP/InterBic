import React from "react";
import { NavLink } from "react-router-dom";

export default function TarjetaDisciplina({
  imagen,
  disciplina,
  participantes,
  equipos,
  url,
  urlR,
}) {
  return (
    <div className="group relative flex flex-col h-80 rounded-xl overflow-hidden bg-slate-200">
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent z-10"></div>

      <div
        className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{
          backgroundImage: `url(${imagen})`,
        }}
      ></div>

      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <h3 className="text-white text-xl font-bold">{disciplina}</h3>

        <div className="flex items-center gap-2 mt-1 mb-4">
          <span className="text-[#257bf4] font-medium text-sm">
            {equipos} Equipos
          </span>
          <span className="h-1 w-1 rounded-full bg-slate-400"></span>
          <span className="text-slate-300 text-sm">
            {participantes} Participantes
          </span>
        </div>
        <div className="grid grid-cols-2 space-x-1">
          <NavLink to={urlR}>
            <button className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white py-2 rounded-lg font-bold text-sm transition-all border border-white/10 group-hover:bg-[#2a4ea3] group-hover:border-[#2a4ea3] cursor-pointer">
              Ver Resultados
            </button>
          </NavLink>
          <NavLink to={url}>
            <button className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white py-2 rounded-lg font-bold text-sm transition-all border border-white/10 group-hover:bg-[#257bf4] group-hover:border-[#257bf4] cursor-pointer">
              Ver Equipos
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
