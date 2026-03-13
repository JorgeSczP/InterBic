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
