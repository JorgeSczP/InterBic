import React from "react";

export default function TablaEquipo({ equipos }) {
  return (
    <div className="p-4">
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Plantel</th>
            <th className="p-2 border">Varonil</th>
            <th className="p-2 border">Femenil</th>
            <th className="p-2 border">Status</th>
          </tr>
        </thead>

        <tbody>
          {equipos.map((e) => (
            <tr key={e.cct} className="text-slate-100">
              <td className="p-2 border">{e.plantel}</td>
              <td className="p-2 border">{e.hombres}</td>
              <td className="p-2 border">{e.mujeres}</td>
              <td className="p-2 border">{e.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
