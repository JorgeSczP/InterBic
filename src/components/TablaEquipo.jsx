import { useState } from "react";
import EstudiantesPorDeporte from "../pages/EstudiantesPorDeporte";

export default function TablaEquipo({ equipos, id }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedCct, setSelectedCct] = useState(null);
  const [plantel, setPlantel] = useState("");

  const abrirModal = (cct, plantel) => {
    setSelectedCct(cct);
    setPlantel(plantel);
    setOpenModal(true);
  };

  return (
    <div className="p-4">
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Plantel</th>
            <th className="p-2 border">Varonil</th>
            <th className="p-2 border">Femenil</th>
            <th className="p-2 border"></th>
          </tr>
        </thead>

        <tbody>
          {equipos.map((e) => (
            <tr key={e.cct} className="text-slate-100">
              <td className="p-2 border whitespace-nowrap">{e.plantel}</td>
              <td className="p-2 border text-center">{e.hombres}</td>
              <td className="p-2 border text-center">{e.mujeres}</td>
              <td className="p-2 border text-center">
                <button
                  className="bg-blue-500 p-1 rounded-[5px] cursor-pointer"
                  onClick={() => abrirModal(e.cct, e.plantel)}
                >
                  Ver estudiantes
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {openModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setOpenModal(false)}
        >
          <div
            className="w-[95%] h-[80%] rounded-xl shadow-lg p-6 relative overflow-hidden"
            onClick={() => setOpenModal(false)}
          >
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <EstudiantesPorDeporte id={id} cct={selectedCct} plantel={plantel}/>
          </div>
        </div>
      )}
    </div>
  );
}
