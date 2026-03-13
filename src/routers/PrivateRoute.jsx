import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children, acceso }) {
  const { user } = useContext(AuthContext);

  if (acceso === "noAcceso") {
    return children;
  } else if (acceso === "acceso") {
    if (user) {
      return children;
    } else {
      return <Navigate to={"/"} />;
    }
  }
}
