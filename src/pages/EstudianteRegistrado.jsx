import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { obtenerEstudiantes } from "../service/Estudiante";
import TablaEstudiantes from "../components/TablaEstudiantes";

export default function EstudianteRegistrado() {
  const [estudiantes, setEstudiantes] = useState([]);
  useEffect(() => {
    cargarEstudiantes();
  }, []);
  const cargarEstudiantes = async () => {
    const data = await obtenerEstudiantes();
    setEstudiantes(data);
  };
  return (
    <div class="relative min-h-screen flex-col items-center pt-20 overflow-hidden bg-brand-navy overflow-x-auto">
      <div className="flex w-full justify-center text-white">
        Estudiantes Registrados
      </div>
      <TablaEstudiantes estudiantes={estudiantes} />
    </div>
  );
}
