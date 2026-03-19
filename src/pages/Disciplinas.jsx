import React from "react";
import TarjetaDisciplina from "../components/TarjetaDisciplina";

export default function () {
  return (
    <section
      className="py-24 bg-brand-darker overflow-hidden"
      data-purpose="disciplines-showcase"
      id="disciplinas"
    >
      <div class="mb-12 max-w-7xl mx-auto px-6">
        <div className="flex w-full justify-center items-center py-4 text-white">
          <h1 className="text-3xl font-bold text-slate-100 mb-2">
            Disciplinas
          </h1>
        </div>

        <div class="flex items-center justify-between mb-8">
          <div>
            <h2 class="text-white text-2xl lg:text-3xl font-bold tracking-tight">
              Deportes
            </h2>
            <p class="text-slate-400 mt-1">Torneos </p>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <TarjetaDisciplina
            disciplina="Basquetbol"
            imagen="/IMG/basquet.webp"
            equipos="7"
            participantes="49"
            url="/basquetbol/equipos"
          />
          <TarjetaDisciplina
            disciplina="Futbol"
            imagen="/IMG/fut.webp"
            equipos="7"
            participantes="63"
            url="/futbol/equipos"
          />

          <TarjetaDisciplina
            disciplina="Volibol"
            imagen="/IMG/deportiva.webp"
            equipos="7"
            participantes="56"
            url="/volibol/equipos"
          />

          <TarjetaDisciplina
            disciplina="Resistencia"
            imagen="/IMG/resistencia.webp"
            url="/resistencia/equipos"
          />

          <TarjetaDisciplina
            disciplina="Velocidad"
            imagen="/IMG/.webp"
          />
        </div>
      </div>
    </section>
  );
}
