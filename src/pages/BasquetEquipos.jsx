import React from "react";
import TablaEquipo from "../components/TablaEquipo";
import { basquetEquipos } from "../utils/equipos";

export default function BasquetEquipos() {
  return (
    <section
      className="py-24 min-h-screen bg-brand-darker overflow-hidden"
      data-purpose="disciplines-showcase"
      id="disciplinas"
    >
      <div class="mb-12 max-w-7xl mx-auto px-6">
        <div className="flex w-full justify-center items-center py-4 text-white">
          <h1 className="text-3xl font-bold text-slate-100 mb-2">
            Equipos Basquetbol
          </h1>
        </div>
        <div>
            <TablaEquipo equipos={basquetEquipos}/>
        </div>
      </div>
    </section>
  );
}
