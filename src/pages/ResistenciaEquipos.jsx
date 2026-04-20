import React from "react";
import TablaEquipo from "../components/TablaEquipo";
import { useState } from "react";
import { useEffect } from "react";
import { Resistencia } from "../service/Equipos";

export default function ResistenciaEquipos() {
  const [equipos, setEquipos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {
    const data = await Resistencia();
    setEquipos(data);
    setCargando(false);
  };
  return (
    <section
      className="py-24 min-h-screen overflow-hidden"
      data-purpose="disciplines-showcase"
      id="disciplinas"
    >
      <div class="mb-12 max-w-7xl mx-auto px-6">
        <div className="flex w-full justify-center items-center py-4 text-white">
          <h1 className="text-3xl font-bold text-slate-100 mb-2">
            Resistencia
          </h1>
        </div>
        <div className="overflow-x-auto">
          <TablaEquipo equipos={equipos} id={5}/>
        </div>
      </div>
    </section>
  );
}
