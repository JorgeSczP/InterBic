import React from "react";

export default function TablaEstudiantesDeporte({ estudiantes }) {
  return (
      <table className="w-full h-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border"></th>

            <th className="p-2 border">Nombre completo</th>
          </tr>
        </thead>

        <tbody>
          {estudiantes.map((e, index) => (
            <tr key={e.curp} className="text-white">
              <td className="p-2 border">{index + 1}</td>
              <td className="p-2 border">
                {e.nombre} {e.apellido_p} {e.apellido_m}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  );
}
