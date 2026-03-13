import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useState } from "react";

export default function FormLogin() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login } = useContext(AuthContext);

  const { email, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    if (email.trim() && password.trim()) {
      await login(email, password);
    }
    
  };

  return (
    <div className="flex flex-col w-[90%] p-4 rounded-2xl sm:w-[50%] md:w-[40%] lg:w-[30%] justify-center items-center">
      {/* <div className="flex w-full h-[100px] justify-center mt-[15px] mb-[15px]">
        <img className="w-[100px]" src={logo} />
      </div> */}
      <h3 className="text-3xl">Iniciar Sesión</h3>

      <form>
        <div className="flex flex-col p-2.5 items-center gap-2.5">
          <label className="textoA" htmlFor="">
            Usuario
          </label>
          <input
            type="email"
            className="w-full h-8.75 outline-none rounded-[10px] border-2 p-2"
            id="email"
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="flex flex-col p-2.5 items-center gap-2.5">
          <label className="textoA" htmlFor="">
            Contraseña
          </label>
          <input
            type="password"
            className="w-full h-8.75 outline-none rounded-[10px] border-2 p-2"
            id="password"
            name="password"
            value={password}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            type="button"
            className="w-37.5 h-10 rounded-[10px] mt-2.5 mb-2.5 border-2 bg-[#517fe0]"
            onClick={onSubmit}
          >
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
}
