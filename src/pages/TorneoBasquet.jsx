import React from "react";
import CardPartido from "../components/CardPartido";
import { torneoBasquetbolV } from "../utils/equipos";

export default function TorneoBasquet() {
  return (
    <section
      className="py-24 min-h-screen bg-brand-darker overflow-hidden"
      data-purpose="disciplines-showcase"
      id="disciplinas"
    >
      <div class="mb-12 max-w-7xl mx-auto px-6">
        <div className="flex w-full justify-center items-center py-4 text-white">
          <h1 className="text-3xl font-bold text-slate-100 mb-2">
            Torneo Basquetbol
          </h1>
        </div>
      </div>
      <section class="mb-24 max-w-7xl mx-auto px-6">
        <div class="flex items-baseline justify-between mb-10">
          <h3 class="text-2xl font-headline font-black text-[#dae2fd] tracking-tighter">
            {torneoBasquetbolV[0].fecha}
          </h3>
          <span class="text-[#c2c6d6] font-medium">{torneoBasquetbolV[0].juegos.length} Partidos Programados</span>
        </div>
        <div class="space-y-8">
          {torneoBasquetbolV[0].juegos.map((torneo) => (
            <CardPartido torneo={torneo}/>
          ))}
        </div>

        <div class="flex items-baseline justify-between mb-10 mt-10">
          <h3 class="text-2xl font-headline font-black text-[#dae2fd] tracking-tighter">
            {torneoBasquetbolV[1].fecha}
          </h3>
          <span class="text-[#c2c6d6] font-medium">{torneoBasquetbolV[1].juegos.length} Partidos Programados</span>
        </div>
        <div class="space-y-8">
          {torneoBasquetbolV[1].juegos.map((torneo) => (
            <CardPartido torneo={torneo}/>
          ))}
        </div>
      </section>
    </section>
  );
}
