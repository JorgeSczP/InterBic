import { supabase } from "../api/supabase"

export const crearEstudiante = async (data) => {
  const { error } = await supabase.from("Estudiante").insert(data)

  if (error) throw new Error(error.message)

  return true
}