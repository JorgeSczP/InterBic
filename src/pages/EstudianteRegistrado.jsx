import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { obtenerEstudiantes } from "../service/Estudiante";
import TablaEstudiantes from "../components/TablaEstudiantes";

export default function EstudianteRegistrado() {
  const [estudiantes, setEstudiantes] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    cargarEstudiantes();
  }, []);

  const cargarEstudiantes = async () => {
    const data = await obtenerEstudiantes();
    setEstudiantes(data);
    setCargando(false);
  };

  const exportarCSV = () => {
    const headers = [
      "Nombre",
      "Apellido Paterno",
      "Apellido Materno",
      "Curp",
      "Plantel",
      "Disciplina",
      "Responsable",
      "Telefono",
    ];

    const rows = estudiantes.map((p) => [
      p.nombre,
      p.apellido_p,
      p.apellido_m,
      p.curp,
      p.plantel_id.plantel,
      p.disciplina_id.disciplina,
      p.Responsable[0]?.nombre,
      p.Responsable[0]?.telefono,
    ]);

    let csvContent =
      headers.join(",") + "\n" + rows.map((e) => e.join(",")).join("\n");

    const blob = new Blob(["\uFEFF" + csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Estudiantes.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div class="relative min-h-screen flex-col items-center pt-20 overflow-hidden bg-brand-navy overflow-x-auto">
      <div className="flex flex-col md:flex-row w-full justify-center items-center py-4 text-white relative gap-3">
        <h1 className="text-3xl font-bold text-slate-100 mb-2 text-center md:text-left">
          Estudiantes Registrados
        </h1>

        <button
          className="p-2 bg-[#1D6F42] rounded-[5px] font-semibold md:absolute md:right-5"
          onClick={() => exportarCSV()}
        >
          Descargar CSV
        </button>
      </div>
      {cargando ? (
        <div className="flex w-full justify-center items-center text-white py-20">
          <span>Cargando...</span>
        </div>
      ) : (
        <TablaEstudiantes estudiantes={estudiantes} />
      )}
    </div>
  );
}
