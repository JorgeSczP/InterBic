import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Inicio from "../pages/Inicio";
import Registro from "../pages/Registro";
import NoEncontrado from "../pages/NoEncontrado";
import Login from "../pages/Login";
import EstudianteRegistrado from "../pages/EstudianteRegistrado";
import Disciplinas from "../pages/Disciplinas";
import BasquetEquipos from "../pages/BasquetEquipos";
import FutbolEquipos from "../pages/FutbolEquipos";
import VolibolEquipos from "../pages/VolibolEquipos";
import ResistenciaEquipos from "../pages/ResistenciaEquipos";
import VelocidadEquipos from "../pages/VelocidadEquipos";
import AcademicaEquipos from "../pages/AcademicaEquipos";
import TorneoBasquet from "../pages/TorneoBasquet";
import TorneoFutbol from "../pages/TorneoFutbol";
import TorneoVolibol from "../pages/TorneoVolibol";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NoEncontrado />} />
      <Route
        path="/login"
        element={
          <PrivateRoute acceso="noAcceso">
            <Login />
          </PrivateRoute>
        }
      />
      <Route
        path="/"
        element={
          <PrivateRoute acceso="noAcceso">
            <Inicio />
          </PrivateRoute>
        }
      />
      <Route
        path="/disciplinas"
        element={
          <PrivateRoute acceso="noAcceso">
            <Disciplinas />
          </PrivateRoute>
        }
      />
      <Route
        path="/basquetbol/equipos"
        element={
          <PrivateRoute acceso="noAcceso">
            <BasquetEquipos />
          </PrivateRoute>
        }
      />
      <Route
        path="/futbol/equipos"
        element={
          <PrivateRoute acceso="noAcceso">
            <FutbolEquipos />
          </PrivateRoute>
        }
      />
      <Route
        path="/volibol/equipos"
        element={
          <PrivateRoute acceso="noAcceso">
            <VolibolEquipos />
          </PrivateRoute>
        }
      />
      <Route
        path="/resistencia/equipos"
        element={
          <PrivateRoute acceso="noAcceso">
            <ResistenciaEquipos />
          </PrivateRoute>
        }
      />
      <Route
        path="/velocidad/equipos"
        element={
          <PrivateRoute acceso="noAcceso">
            <VelocidadEquipos />
          </PrivateRoute>
        }
      
      />
      <Route
        path="/academica/equipos"
        element={
          <PrivateRoute acceso="noAcceso">
            <AcademicaEquipos />
          </PrivateRoute>
        }
      />
      <Route
        path="/basquetbol/torneo"
        element={
          <PrivateRoute acceso="noAcceso">
            <TorneoBasquet />
          </PrivateRoute>
        }
      />
      <Route
        path="/futbol/torneo"
        element={
          <PrivateRoute acceso="noAcceso">
            <TorneoFutbol />
          </PrivateRoute>
        }
      />
      <Route
        path="/volibol/torneo"
        element={
          <PrivateRoute acceso="noAcceso">
            <TorneoVolibol />
          </PrivateRoute>
        }
      />
      <Route
        path="/registro/estudiante"
        element={
          <PrivateRoute acceso="noAcceso">
            <Registro />
          </PrivateRoute>
        }
      />
      <Route
        path="/estudiantes/registrados"
        element={
          <PrivateRoute acceso="acceso">
            <EstudianteRegistrado />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
