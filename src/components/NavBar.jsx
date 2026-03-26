import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function NavBar() {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-navy/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex flex-1 items-center gap-7 relative">
          {/* <img src="/IMG/oaxaca.webp" className="h-8 sm:h-12" /> */}
          <picture>
            <source media="(min-width: 640px)" srcSet="/IMG/oaxaca.webp" />
            <img src="/IMG/oaxacaV.webp" className="h-8 sm:h-12" />
          </picture>
          <picture>
            <source media="(min-width: 640px)" srcSet="/IMG/logo.webp" />
            <img src="/IMG/LogoV.webp" className="h-8 sm:h-12" />
          </picture>
          {/* <img src="/IMG/logo.webp" className="h-8 sm:h-12"/> */}
          <span className="text-white font-extrabold text-2xl tracking-tighter italic uppercase absolute  inset-e-7">
            Inter<span className="text-brand-orange">Bic</span>
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-white/90">
          <a className="hover:text-brand-orange transition-colors" href="/">
            Inicio
          </a>

          <NavLink
            to="/disciplinas"
            className="hover:text-brand-orange transition-colors"
          >
            Disciplinas
          </NavLink>

          <NavLink
            to="/registro/estudiante"
            className="px-5 py-2.5 bg-brand-orange text-white rounded-full hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20"
          >
            Registro de Estudiantes
          </NavLink>

          {user && (
            <NavLink
              to="/estudiantes/registrados"
              className="hover:text-brand-orange transition-colors"
            >
              Estudiantes Registrados
            </NavLink>
          )}
        </div>

        <button
          aria-label="Menu"
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 6h16M4 12h16m-7 6h7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-brand-navy px-6 pb-4 flex flex-col gap-4 text-white font-semibold">
          <a
            href="/"
            className="hover:text-brand-orange"
            onClick={() => setOpen(false)}
          >
            Inicio
          </a>

          <NavLink
            to="/disciplinas"
            className="hover:text-brand-orange"
            onClick={() => setOpen(false)}
          >
            Disciplinas
          </NavLink>

          <NavLink
            to="/registro/estudiante"
            className="bg-brand-orange px-4 py-2 rounded-full text-center"
            onClick={() => setOpen(false)}
          >
            Registro de Estudiantes
          </NavLink>

          {user && (
            <NavLink
              to="/estudiantes/registrados"
              className="hover:text-brand-orange"
              onClick={() => setOpen(false)}
            >
              Estudiantes Registrados
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
}
