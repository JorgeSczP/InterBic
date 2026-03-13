import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
export default function AuthContextP({ children }) {
  
  const [user, setUser] = useState(() => {
    const username = null;
    return username;
  });

  const [rol, setRol] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;
  }, []);

  const login = async (user) => {
    // try {
    //   const rest = await axios.post(
    //     `${Url}api/token/`,
    //     {
    //       username: user.username,
    //       password: user.password,
    //     },
    //     {
    //       withCredentials: true,
    //     },
    //   );
    //   // Guardar en cookies con expiración de 1 hora
    //   Cookies.set("user", rest.data.username, { expires: 1 }); // 1 hora
    //   Cookies.set("access", rest.data.access, { expires: 1 });
    //   setUser(rest.data.username);
    //   setRol(rest.data.rol);
    //   navigate("/home");
    // } catch (error) {
    //   toast.error(
    //     <div>
    //       <strong>Error de autenticación</strong>
    //       <p>Usuario o contraseña incorrecta</p>
    //     </div>,
    //     {
    //       position: "top-right",
    //       autoClose: 3000,
    //       className: "bg-red-300",
    //     },
    //   );
    //   console.error(
    //     "Error:",
    //     error.response ? error.response.data : error.message,
    //   );
    // }
  };

  const logout = async () => {
    // try {
    //   await axios.post(
    //     `${Url}logout/`,
    //     {},
    //     {
    //       withCredentials: true,
    //     },
    //   );
    //   Cookies.remove("user");
    //   Cookies.remove("access");

    //   setUser(null);
    //   navigate("/");
    // } catch (error) {
    //   console.error("Error cerrando sesión", error);
    // }
  };


  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
