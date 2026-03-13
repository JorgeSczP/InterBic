import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Inicio from "../pages/Inicio";
import Registro from "../pages/Registro";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<PrivateRoute acceso="noAcceso">
            <Inicio />
        </PrivateRoute>}
      />
      <Route
        path="/registro/estudiante"
        element={<PrivateRoute acceso="noAcceso">
            <Registro />
        </PrivateRoute>}
      />
    </Routes>
  );
}
