import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerEstudiantesDeportes } from "../service/Estudiante";
import { useEffect } from "react";
import TablaEstudiantesDeporte from "../components/TablaEstudiantesDeporte";

export default function EstudiantesPorDeporte({ id, cct, plantel }) {
  const [estudiantes, setEstudiantes] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    if (id && cct) {
      cargarEstudiantes();
    }
  }, [id, cct]);

  const cargarEstudiantes = async () => {
    const data = await obtenerEstudiantesDeportes(cct, id);
    setEstudiantes(data);
    setCargando(false);
  };

  return (
    <div class="mb-12 max-w-4xl mx-auto px-6 overflow-hidden h-full">
      <div className="flex w-full justify-center items-center py-4 text-white">
        <h1 className="text-3xl font-bold text-slate-100 mb-2">{plantel}</h1>
      </div>
      <div className="overflow-auto max-h-[60vh]">
        <TablaEstudiantesDeporte estudiantes={estudiantes} />
      </div>
    </div>
  );
}
