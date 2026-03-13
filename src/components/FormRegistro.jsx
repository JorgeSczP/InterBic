import { useState } from "react";
import {
  crearEstudiante,
  crearEstudianteConResponsable,
} from "../service/Estudiante";
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
    nss: "",
  });

  const [responsable, setResponsable] = useState({
    nombre: "",
    telefono: "",
  });

  const CAMPOS_MAYUSCULAS = ["nombre", "apellido_p", "apellido_m", "curp"];

  const CAMPOS_MAYUSCULAS_RESPONSABLE = ["nombre"];

  const onChange = (e) => {
    const { name, value } = e.target;
    setEstudiante({
      ...estudiante,
      [name]: CAMPOS_MAYUSCULAS.includes(name) ? value.toUpperCase() : value,
    });
  };

  const onChangeResponsable = (e) => {
    const { name, value } = e.target;
    setResponsable({
      ...responsable,
      [name]: CAMPOS_MAYUSCULAS_RESPONSABLE.includes(name)
        ? value.toUpperCase()
        : value,
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

    console.log(data)
    console.log(responsable)
    try {
      await crearEstudianteConResponsable(data, responsable);
      alert("Estudiante registrado correctamente");
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={onSubmit} className="p-6 rounded-xl shadow-md w-88">
        {/* ── DATOS DEL ESTUDIANTE ── */}
        <h2 className="text-xl font-bold text-center mb-4">
          Registro de Estudiante
        </h2>

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
        <div className="flex flex-col mb-3">
          <label>N.S.S</label>
          <input
            type="text"
            name="nss"
            value={estudiante.nss}
            onChange={onChange}
            className="h-9 rounded-lg border-2 px-2 uppercase"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label>Tipo de Sangre</label>
          <select
            name="tipo_sangre"
            value={estudiante.tipo_sangre}
            onChange={onChange}
            className="h-9 border-2 rounded-lg"
          >
            <option value="">Seleccionar</option>
            {["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"].map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

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
            <option value="">Seleccionar disciplina</option>
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

        {/* ── DATOS DEL RESPONSABLE PARA CASOS DE EMERGENCIA── */}
        <h2 className="text-xl font-bold text-center mb-4 mt-4">
          En casos de emergencia
        </h2>

        <div className="flex flex-col mb-3">
          <label>Nombre Completo</label>
          <input
            type="text"
            name="nombre"
            value={responsable.nombre}
            onChange={onChangeResponsable}
            className="h-9 rounded-lg border-2 px-2 uppercase"
            required
          />
        </div>

        <div className="flex flex-col mb-3">
          <label>Teléfono</label>
          <input
            type="tel"
            name="telefono"
            value={responsable.telefono}
            onChange={onChangeResponsable}
            className="h-9 rounded-lg border-2 px-2"
            maxLength={10}
            required
          />
        </div>

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
