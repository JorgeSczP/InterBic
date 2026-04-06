import React from 'react'
import { useState } from 'react';
import { torneoVolibolF, torneoVolibolV } from '../utils/equipos';
import CardPartido from '../components/CardPartido';

export default function TorneoVolibol() {
  const [categoria, setCategoria] = useState("varonil");
  const data = categoria === "varonil" ? torneoVolibolV : torneoVolibolF;

  return (
    <section
      className="py-24 min-h-screen overflow-hidden"
      data-purpose="disciplines-showcase"
      id="disciplinas"
    >
      <div class="mb-4 max-w-7xl mx-auto px-6">
        <div className="flex w-full justify-center items-center py-4 text-white">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Torneo Voliebol
          </h1>
        </div>
      </div>

      <div className="flex justify-center gap-4 mb-5">
        <button
          onClick={() => setCategoria("varonil")}
          className={`px-6 py-2 rounded-full font-semibold transition cursor-pointer ${
            categoria === "varonil"
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          Varonil
        </button>

        <button
          onClick={() => setCategoria("femenil")}
          className={`px-6 py-2 rounded-full font-semibold transition cursor-pointer ${
            categoria === "femenil"
              ? "bg-pink-600 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          Femenil
        </button>
      </div>
      <section className="mb-24 max-w-7xl mx-auto px-6">
        {data.map((dia, index) => (
          <div key={index} className="mb-10">
            <div className="flex items-baseline justify-between mb-10">
              <h3 className="text-2xl font-black text-[#09090a]">
                {dia.fecha}
              </h3>
              <span className="text-[#161718]">
                {dia.juegos.length} Partidos Programados
              </span>
            </div>

            <div className="space-y-8">
              {dia.juegos.map((torneo, i) => (
                <CardPartido key={i} torneo={torneo} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
