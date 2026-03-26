import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerEstudiantesDeportes } from "../service/Estudiante";
import { useEffect } from "react";
import TablaEstudiantesDeporte from "../components/TablaEstudiantesDeporte";

export default function EstudiantesPorDeporte() {
  const { id, cct } = useParams();

  const [estudiantes, setEstudiantes] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    cargarEstudiantes();
  }, []);

  const cargarEstudiantes = async () => {
    const data = await obtenerEstudiantesDeportes(cct, id);
    setEstudiantes(data);
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
            Estudiantes Registrados
          </h1>
        </div>
        <div className="overflow-x-auto">
            <TablaEstudiantesDeporte estudiantes={estudiantes}/>
        </div>
      </div>
    </section>
  );
}
