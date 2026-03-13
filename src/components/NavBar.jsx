import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-navy/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-white font-extrabold text-2xl tracking-tighter italic">
            Inter<span className="text-brand-orange">Bic</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-white/90">
          <a className="hover:text-brand-orange transition-colors" href="/">
            Inicio
          </a>
          <NavLink
            to={"/diciplinas"}
            className="hover:text-brand-orange transition-colors"
          >
            Disciplinas
          </NavLink>
          <NavLink
            to={"/registro/estudiante"}
            className="px-5 py-2.5 bg-brand-orange text-white rounded-full hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20"
          >
            Registro de Estudiantes
          </NavLink>
        </div>
        <button aria-label="Menu" class="md:hidden text-white">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewbox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6h16M4 12h16m-7 6h7"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}
