import { useState } from "react";
import { crearEstudiante } from "../service/Estudiante";
import { planteles } from "../utils/planteles";

export default function FormRegistro() {
  const [estudiante, setEstudiante] = useState({
    nombre: "",
    apellido_p: "",
    apellido_m: "",
    curp: "",
    sexo: "",
    semestre: "",
    tipo_sangre: "",
    alergias: null,
    disciplina_id: "",
    plantel_id: "",
  });
  const CAMPOS_MAYUSCULAS = [
    "nombre",
    "apellido_p",
    "apellido_m",
    "curp",
  ];

  const onChange = (e) => {
    const { name, value } = e.target;
    setEstudiante({
      ...estudiante,
      [name]: CAMPOS_MAYUSCULAS.includes(name) ? value.toUpperCase() : value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const letraSexo = estudiante.curp[10]?.toUpperCase();

    const data = {
      ...estudiante,
      semestre: Number(estudiante.semestre),
      disciplina_id: Number(estudiante.disciplina_id),
      sexo: letraSexo,
    };
    console.log(estudiante);
    console.log(data);
    try {
      await crearEstudiante(data);
      alert("Estudiante registrado correctamente");
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={onSubmit} className="p-6 rounded-xl shadow-md w-88">
        <h2 className="text-xl font-bold text-center mb-4">
          Registro de Estudiante
        </h2>

        {/* Nombre */}
        <div className="flex flex-col mb-3">
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={estudiante.nombre}
            onChange={onChange}
            className="h-9 rounded-lg border-2 px-2 uppercase"
            required
          />
        </div>

        {/* Apellido Paterno */}
        <div className="flex flex-col mb-3">
          <label>Apellido Paterno</label>
          <input
            type="text"
            name="apellido_p"
            value={estudiante.apellido_p}
            onChange={onChange}
            className="h-9 rounded-lg border-2 px-2 uppercase"
            required
          />
        </div>

        {/* Apellido Materno */}
        <div className="flex flex-col mb-3">
          <label>Apellido Materno</label>
          <input
            type="text"
            name="apellido_m"
            value={estudiante.apellido_m}
            onChange={onChange}
            className="h-9 rounded-lg border-2 px-2 uppercase"
          />
        </div>

        {/* CURP */}
        <div className="flex flex-col mb-3">
          <label>CURP</label>
          <input
            type="text"
            name="curp"
            value={estudiante.curp}
            onChange={onChange}
            className="h-9 rounded-lg border-2 px-2 uppercase"
            maxLength={18}
          />
        </div>

        {/* Semestre */}
        <div className="flex flex-col mb-3">
          <label>Semestre</label>
          <select
            name="semestre"
            value={estudiante.semestre}
            onChange={onChange}
            className="h-9 border-2 rounded-lg px-2"
          >
            <option value="">Seleccionar semestre</option>
            {[2, 4, 6].map((sem) => (
              <option key={sem} value={sem}>
                {sem}
              </option>
            ))}
          </select>
        </div>
        {/* Tipo de Sangre */}
        <div className="flex flex-col mb-3">
          <label>Tipo de Sangre</label>
          <select
            name="tipo_sangre"
            value={estudiante.tipo_sangre}
            onChange={onChange}
            className="h-9 border-2 rounded-lg"
          >
            <option value="">Seleccionar</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>

        {/* Alergias */}
        <div className="flex flex-col mb-3">
          <label>Alergias</label>
          <textarea
            name="alergias"
            value={estudiante.alergias}
            onChange={onChange}
            className="border-2 rounded-lg px-2"
          />
        </div>

        <div className="flex flex-col mb-3">
          <label>Disciplina</label>
          <select
            name="disciplina_id"
            value={estudiante.disciplina_id}
            onChange={onChange}
            className="h-9 border-2 rounded-lg"
          >
            <option value="" className="bg">
              Seleccionar disciplina
            </option>
            <option value="1">Académica</option>
            <option value="2">Basquetbol</option>
            <option value="3">Futbol</option>
            <option value="4">Volibol</option>
            <option value="5">Resistencia</option>
            <option value="6">Velocidad</option>
          </select>
        </div>

        <div className="flex flex-col mb-4">
          <label>Plantel</label>
          <select
            name="plantel_id"
            value={estudiante.plantel_id}
            onChange={onChange}
            className="h-9 border-2 rounded-lg"
          >
            <option value="">Seleccionar plantel</option>

            {planteles.map((p) => (
              <option key={p.cct} value={p.cct}>
                {p.plantel}
              </option>
            ))}
          </select>
        </div>

        {/* Botones */}
        <div className="flex justify-between">
          <button
            type="submit"
            className="w-37 h-10 rounded-lg border bg-blue-500 text-white hover:bg-blue-600"
          >
            Registrarse
          </button>

          <button
            type="button"
            className="w-37 h-10 rounded-lg border bg-gray-400 text-white"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
