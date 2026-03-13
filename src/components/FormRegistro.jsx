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

  const [errores, setErrores] = useState({});

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

  const validar = () => {
    const nuevosErrores = {};

    // Estudiante
    if (!estudiante.nombre.trim())
      nuevosErrores.nombre = "El nombre es obligatorio";
    if (!estudiante.apellido_p.trim())
      nuevosErrores.apellido_p = "El apellido paterno es obligatorio";
    if (!estudiante.curp.trim()) nuevosErrores.curp = "La CURP es obligatoria";
    else if (estudiante.curp.length !== 18)
      nuevosErrores.curp = "La CURP debe tener 18 caracteres";
    if (!estudiante.semestre) nuevosErrores.semestre = "Selecciona un semestre";
    if (!estudiante.nss) nuevosErrores.nss = "El N.S.S. es obligatorio";
    if (!estudiante.tipo_sangre)
      nuevosErrores.tipo_sangre = "Selecciona el tipo de sangre";
    if (!estudiante.disciplina_id)
      nuevosErrores.disciplina_id = "Selecciona una disciplina";
    if (!estudiante.plantel_id)
      nuevosErrores.plantel_id = "Selecciona un plantel";

    // Responsable
    if (!responsable.nombre.trim())
      nuevosErrores.resp_nombre = "El nombre completo es obligatorio";
    if (!responsable.telefono.trim())
      nuevosErrores.resp_telefono = "El teléfono es obligatorio";
    else if (responsable.telefono.length !== 10)
      nuevosErrores.resp_telefono = "El teléfono debe tener 10 dígitos";

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validar()) return;
    const letraSexo = estudiante.curp[10]?.toUpperCase();

    const data = {
      ...estudiante,
      semestre: Number(estudiante.semestre),
      disciplina_id: Number(estudiante.disciplina_id),
      sexo: letraSexo,
    };

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
          />
          {errores.nombre && (
            <span className="text-red-500 text-sm mt-1">{errores.nombre}</span>
          )}
        </div>

        <div className="flex flex-col mb-3">
          <label>Apellido Paterno</label>
          <input
            type="text"
            name="apellido_p"
            value={estudiante.apellido_p}
            onChange={onChange}
            className="h-9 rounded-lg border-2 px-2 uppercase"
          />
          {errores.apellido_p && (
            <span className="text-red-500 text-sm mt-1">
              {errores.apellido_p}
            </span>
          )}
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
          {errores.curp && (
            <span className="text-red-500 text-sm mt-1">{errores.curp}</span>
          )}
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
          {errores.semestre && (
            <span className="text-red-500 text-sm mt-1">
              {errores.semestre}
            </span>
          )}
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
          {errores.nss && (
            <span className="text-red-500 text-sm mt-1">{errores.nss}</span>
          )}
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
          {errores.tipo_sangre && (
            <span className="text-red-500 text-sm mt-1">
              {errores.tipo_sangre}
            </span>
          )}
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
          {errores.disciplina_id && (
            <span className="text-red-500 text-sm mt-1">
              {errores.disciplina_id}
            </span>
          )}
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
          {errores.plantel_id && (
            <span className="text-red-500 text-sm mt-1">
              {errores.plantel_id}
            </span>
          )}
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
          />
          {errores.resp_nombre && (
            <span className="text-red-500 text-sm mt-1">
              {errores.resp_nombre}
            </span>
          )}
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
          />
          {errores.resp_telefono && (
            <span className="text-red-500 text-sm mt-1">
              {errores.resp_telefono}
            </span>
          )}
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
