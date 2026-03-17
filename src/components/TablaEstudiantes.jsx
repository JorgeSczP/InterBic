import React from "react";

export default function TablaEstudiantes({ estudiantes }) {
  return (
    <div className="p-4">
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Nombre completo</th>
            <th className="p-2 border">Curp</th>
            <th className="p-2 border">Plantel</th>

            <th className="p-2 border">Disciplina</th>
            <th className="p-2 border">Responsable</th>
            <th className="p-2 border">Telefono responsable</th>
          </tr>
        </thead>

        <tbody>
          {estudiantes.map((e) => (
            <tr key={e.curp} className="text-slate-100">
              <td className="p-2 border">
                {e.nombre} {e.apellido_p} {e.apellido_m}
              </td>
              <td className="p-2 border">{e.curp}</td>
              <td className="p-2 border">{e.plantel_id.plantel}</td>
              <td className="p-2 border">
                {e.disciplina_id?.disciplina || "Sin disciplina"}
              </td>

              <td className="p-2 border">
                {e.Responsable[0]?.nombre || "Sin responsable"}
              </td>
              <td className="p-2 border">
                {e.Responsable[0]?.telefono || "Sin responsable"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
