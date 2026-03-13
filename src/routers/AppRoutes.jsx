import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Inicio from "../pages/Inicio";
import Registro from "../pages/Registro";
import NoEncontrado from "../pages/NoEncontrado";
import Login from "../pages/Login";

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
        path="/registro/estudiante"
        element={
          <PrivateRoute acceso="noAcceso">
            <Registro />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
