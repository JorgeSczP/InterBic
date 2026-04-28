import React from 'react'
import { useState } from 'react';
import CardFinal from '../components/CardFinal';

export default function FinalResitencia() {
  const [categoria, setCategoria] = useState("varonil");

  return (
    <section className="py-24 min-h-screen overflow-hidden" id="disciplinas">
      <div className="mb-4 max-w-7xl mx-auto px-6">
        <div className="flex w-full justify-center items-center py-4">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Resistencia</h1>
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

      {categoria === "varonil" ? (
        <section className="mb-24 max-w-7xl mx-auto px-6">
          <div className="space-y-4 ">
            <CardFinal lugar={1} equipo="Santos Reyes Pápalo" est="JUAN DIEGO GARCÍA VILLEGAS"/>
            <CardFinal lugar={2} equipo="San Andrés Solaga" est="EDER MENDOZA PEREZ"/>
            <CardFinal lugar={3} equipo="El Gachupín" est="LUIS ENRIQUE PEREZ PEREZ"/>
          </div>
        </section>
      ) : (
        <section className="mb-24 max-w-7xl mx-auto px-6">
          <div className="space-y-4 ">
            <CardFinal lugar={1} equipo="Santos Reyes Pápalo" est="LIDIA MARTINEZ CALLEJA" />
            <CardFinal lugar={2} equipo="El Gachupín" est="MARLEN RAMIREZ GONZALEZ"/>
            <CardFinal lugar={3} equipo="El Carrizal" est="ELIZAIDA ORTIZ MERINO"/>
          </div>
        </section>
      )}
    </section>
  );
}