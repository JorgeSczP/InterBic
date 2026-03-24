import { supabase } from "../api/supabase";

export const BasquetBol = async () => {
  const { data, error } = await supabase
    .from("conteo_estudiantes")
    .select(`*`)
    .eq("disciplina", "Basquetbol");

  if (error) {
    console.error("Error:", error);
    return null;
  }
  return data;
};

export const Futbol = async () => {
  const { data, error } = await supabase
    .from("conteo_estudiantes")
    .select(`*`)
    .eq("disciplina", "Futbol");

  if (error) {
    console.error("Error:", error);
    return null;
  }
  return data;
};

export const Volibol = async () => {
  const { data, error } = await supabase
    .from("conteo_estudiantes")
    .select(`*`)
    .eq("disciplina", "Volibol");

  if (error) {
    console.error("Error:", error);
    return null;
  }
  return data;
};

export const Resistencia = async () => {
  const { data, error } = await supabase
    .from("conteo_estudiantes")
    .select(`*`)
    .eq("disciplina", "Resistencia");

  if (error) {
    console.error("Error:", error);
    return null;
  }
  return data;
};

export const Velocidad = async () => {
  const { data, error } = await supabase
    .from("conteo_estudiantes")
    .select(`*`)
    .eq("disciplina", "Velocidad");

  if (error) {
    console.error("Error:", error);
    return null;
  }
  return data;
};

export const CantidadEquipos = async () => {
  const { data, error } = await supabase
    .from("cantidad_deportes")
    .select(`*`)
    
  if (error) {
    console.error("Error:", error);
    return null;
  }
  return data;
};
