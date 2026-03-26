import { supabase } from "../api/supabase";

export const crearEstudiante = async (data) => {
  const { error } = await supabase.from("Estudiante").insert(data);

  if (error) throw new Error(error.message);

  return true;
};

export const crearEstudianteConResponsable = async (
  estudiante,
  responsable,
) => {
  const { error } = await supabase.rpc("crear_estudiante_con_responsable", {
    estudiante_data: estudiante,
    responsable_data: responsable,
  });

  if (error) throw new Error(error.message);

  return true;
};

export const obtenerEstudiantes = async () => {
  const { data, error } = await supabase.from("Estudiante").select(`
    nombre, apellido_p, apellido_m, curp, semestre,
    plantel_id (
      plantel
    ),
    disciplina_id (
      disciplina
    ),
    Responsable(
    nombre, telefono
    )
  `);

  if (error) {
    console.error("Error:", error);
    return null;
  }
  return data;
};

export const obtenerEstudiantesDeportes = async (cct, id) => {
  const { data, error } = await supabase
    .from("Estudiante")
    .select(
      `
      nombre, apellido_p, apellido_m
    `,
    )
    .eq("plantel_id", cct)
    .eq("disciplina_id", id)
    .order("sexo", { ascending: true });

  if (error) {
    console.error("Error:", error);
    return null;
  }

  return data;
};
