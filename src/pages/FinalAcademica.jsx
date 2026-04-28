import React from "react";
import CardFinal from "../components/CardFinal";

export default function FinalAcademica() {
  return (
    <section className="py-24 min-h-screen overflow-hidden" id="disciplinas">
      <div className="mb-4 max-w-7xl mx-auto px-6">
        <div className="flex w-full justify-center items-center py-4">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Academica</h1>
        </div>
      </div>

      <section className="mb-24 max-w-7xl mx-auto px-6">
        <div className="space-y-4 ">
          <CardFinal lugar={1} equipo="SANTIAGO LALOPA" />
          <CardFinal lugar={2} equipo="EL CARRIZAL" />
          <CardFinal lugar={3} equipo="SAN LORENZO CUAUNECUILTITLA" />
        </div>
      </section>
    </section>
  );
}
