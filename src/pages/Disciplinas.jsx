import React from "react";
import TarjetaDisciplina from "../components/TarjetaDisciplina";
import { useState } from "react";
import { useEffect } from "react";
import { CantidadEquipos } from "../service/Equipos";

export default function () {
  const [equipos, setEquipos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {
    const data = await CantidadEquipos();
    setEquipos(data);
    setCargando(false);
  };
  return (
    <section
      className="py-24 overflow-hidden"
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
            <h2 class="text-slate-900 text-2xl lg:text-3xl font-bold tracking-tight">
              Deportes
            </h2>
            <p class="text-slate-900 mt-1">Torneos </p>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <TarjetaDisciplina
            disciplina="Basquetbol"
            equipos={equipos}
            imagen="/IMG/basquet.webp"
            url="/basquetbol/equipos"
            urlRol="/basquetbol/torneo"
          />
          <TarjetaDisciplina
            disciplina="Futbol"
            equipos={equipos}
            imagen="/IMG/fut.webp"
            url="/futbol/equipos"
            urlRol="/futbol/torneo"
          />

          <TarjetaDisciplina
            disciplina="Voleibol"
            equipos={equipos}
            imagen="/IMG/deportiva.webp"
            url="/volibol/equipos"
            urlRol="/volibol/torneo"
          />

          <TarjetaDisciplina
            disciplina="Resistencia"
            equipos={equipos}
            imagen="/IMG/resistencia.webp"
            url="/resistencia/equipos"
          />

          <TarjetaDisciplina
            disciplina="Velocidad"
            equipos={equipos}
            imagen="/IMG/velocidad.webp"
            url="/velocidad/equipos"
          />
        </div>

        <div class="flex items-center justify-between mb-8 mt-8">
          <div>
            <h2 class="text-slate-900 text-2xl lg:text-3xl font-bold tracking-tight">
              Academica
            </h2>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <TarjetaDisciplina
            disciplina="Academica"
            equipos={equipos}
            imagen="/IMG/fase1.webp"
            url="/academica/equipos"
          />
        </div>
      </div>
    </section>
  );
}
