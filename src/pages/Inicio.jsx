import React from "react";
import { NavLink } from "react-router-dom";

export default function Inicio() {
  return (
    <>
      <section
        class="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-navy"
        data-purpose="hero-banner"
        id="inicio"
      >
        <div class="absolute inset-0 z-0">
          <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-30"></div>
          <div class="hero-split-gradient absolute inset-0"></div>
        </div>
        <div class="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div class="text-white">
            <h2 class="font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
              Inter<span className="text-brand-orange">Bic</span> 2026
            </h2>
            <h1 class="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Encuentro Estatal de Estudiantes Originarios
            </h1>
            <p class="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
              Vive la experiencia definitiva en la intersección de la destreza
              física y la agudeza intelectual
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <NavLink
                to={"/registro/estudiante"}
                className="px-8 py-4 bg-brand-orange text-white font-bold rounded-xl text-center hover:scale-105 transition-transform shadow-xl shadow-brand-orange/20"
              >
                Registro de Estudiantes
              </NavLink>
              <a
                class="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold border border-white/20 rounded-xl text-center hover:bg-white/20 transition-all"
                href="#disciplinas"
              >
                Ver Disciplinas
              </a>
            </div>
          </div>
          <div class="hidden lg:flex relative h-150 w-full items-center justify-center">
            <div class="relative w-full h-full">
              <div class="absolute left-0 top-0 w-[60%] h-[80%] rounded-3xl overflow-hidden border-4 border-brand-orange/30 -rotate-6 z-20">
                <img
                  alt="Deportiva"
                  class="w-full h-full object-cover"
                  src="/IMG/deportiva.webp"
                />
                <div class="absolute inset-0 bg-linear-to-t from-brand-navy/80 to-transparent flex items-end p-6">
                  <span class="text-2xl font-black text-white italic">
                    Deportiva
                  </span>
                </div>
              </div>
              <div class="absolute right-0 bottom-0 w-[60%] h-[80%] rounded-3xl overflow-hidden border-4 border-white/20 rotate-6 z-10">
                <img
                  alt="Academica"
                  class="w-full h-full object-cover grayscale-[0.5]"
                  src="/IMG/adademica.webp"
                />
                <div class="absolute inset-0 bg-linear-to-t from-brand-navy/80 to-transparent flex items-end p-6 justify-end">
                  <span class="text-2xl font-black text-white italic">
                    Academica
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="py-24 bg-white"
        data-purpose="features-section"
        id="desafio"
      >
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-20">
            <h3 class="text-brand-orange font-bold uppercase tracking-tighter text-sm mb-2">
              Sinergia Pura
            </h3>
            <h2 class="text-4xl md:text-5xl font-extrabold text-brand-navy">
              Doble Desafío
            </h2>
            <div class="w-20 h-1.5 bg-brand-orange mx-auto mt-6 rounded-full"></div>
          </div>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="group p-10 bg-brand-light rounded-3xl border border-slate-200 hover:border-brand-orange/30 transition-all duration-300">
              <div class="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <svg
                  class="h-8 w-8 text-brand-orange"
                  fill="none"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                </svg>
              </div>
              <h4 class="text-2xl font-bold mb-4">Deportiva</h4>
              <p class="text-slate-600 leading-relaxed">
                Fomentamos la disciplina, el trabajo en equipo y la superación
                personal a través de competencias deportivas de alto rendimiento
                diseñadas para forjar el carácter.
              </p>
            </div>
            <div class="group p-10 bg-brand-light rounded-3xl border border-slate-200 hover:border-brand-navy/30 transition-all duration-300">
              <div class="w-16 h-16 bg-brand-navy/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <svg
                  class="h-8 w-8 text-brand-navy"
                  fill="none"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                </svg>
              </div>
              <h4 class="text-2xl font-bold mb-4">Academica</h4>
              <p class="text-slate-600 leading-relaxed">
                Desafiamos las mentes más agudas en escenarios de resolución de
                problemas, oratoria y ciencias, premiando el pensamiento crítico
                y la innovación.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        class="py-24 bg-brand-darker overflow-hidden"
        data-purpose="disciplines-showcase"
        id="disciplinas"
      >
        <div class="max-w-7xl mx-auto px-6">
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 class="text-4xl md:text-5xl font-black text-white mb-4">
                Disciplinas
              </h2>
              <p class="text-white/60 max-w-xl text-lg"></p>
            </div>
          </div>
          <div class="mb-12">
            <h3 class="text-brand-orange font-bold text-xl mb-8 flex items-center gap-4">
              <span class="w-8 h-[2px] bg-brand-orange"></span> Deportes
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card-hover-effect relative group h-80 rounded-2xl overflow-hidden cursor-pointer">
                <img
                  alt="Soccer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbH7NcE36cDkWfrtBf0jdS53LvN3exM2ccSkzhGYu1ebKdgN8G3iM7Dcl4c0539O-r1cpe-UYNkT3CFlvVD8yWHd-yL-uAwoNafIjW0RX-PriIAbvU2vQ7ehYkPEbr0GNyCeUQ4y5eYJ2GmNSnF5XN4xBwO8A1kU5orwA91v9Lb4G7o4V6rjayGNfVXYt69khHjRj25pPEKzUZ9I_qHSZqAxgXbJOqww7nLCEbJxmiwnSFynQXnuR4P_BeG6tvbcCFX1lBpI0JZPsN"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-navy to-transparent opacity-90"></div>

                {/* Texto siempre visible */}
                <div className="absolute bottom-0 left-0 p-8">
                  <h5 className="text-2xl font-bold text-white mb-2">Fútbol</h5>
                  <p className="text-white/70 text-sm">
                    Torneo Masculino y Femenino
                  </p>
                </div>

                {/* Texto que aparece en hover */}
                <div
                  className="absolute inset-0 flex items-center justify-center
                  bg-brand-navy/95
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300"
                >
                  <p className="text-white text-center px-6 text-sm">
                    ● La cantidad de estudiantes se sugiere se limite a nueve
                    (9): siete jugadores en cancha (incluyendo al portero) y dos
                    suplentes, dado que así será para la etapa ESTATAL, quedando
                    a consideración de la región incrementar la participación
                    dependiendo del contexto.
                  </p>
                </div>
              </div>
              <div
                class="card-hover-effect relative group h-80 rounded-2xl overflow-hidden cursor-pointer"
                data-purpose="discipline-card"
              >
                <img
                  alt="Basketball"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTO44LMQSSYehIxrN17-K9thS33nYGqBtMrICeNGmXFjwQxYOye2Ehgr9Egv6MZD_-aKbvvLY-6SC4V3fb-s3HB-MiEbOIsu_yosCxJRHCwbXkkgIBoJp10dQCBciaoSK31otS-qVGvVYN0xwr2rx3QZE-OODu-9HVRAWzkDn6PDBHGH_fhHRXGGWb1axe8AXgvTThyXep3wmMIBUp8zs2hTa1p3a6JjDt_HGmBkL-o5Y2EGdcfjNW1HT20DF7N7ncB8mpjywZdn8e"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent opacity-90"></div>
                <div class="absolute bottom-0 left-0 p-8">
                  <h5 class="text-2xl font-bold text-white mb-2">Básquetbol</h5>
                  <p class="text-white/70 text-sm">Competencia 5x5</p>
                </div>
              </div>
              <div
                class="card-hover-effect relative group h-80 rounded-2xl overflow-hidden cursor-pointer"
                data-purpose="discipline-card"
              >
                <img
                  alt="Athletics"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8ET3yElmpRxYVfvYPgQrv9vYKnNuklF-B_rL8MSPAviThvAA-mkgygZ4f_dmCXIzqANmw_yp8WDRdRg83q9eXIzNiV8GStglI0arXgrqsBOiqSN8tiCLp--g8rydwKlgWh9BGBtPf3P-xOEJft5gfC_Y9qrn9YXh-nWL_z4TxRrvqOXJ8Uq8dTVjivMeVdk5HIDuCKTT7E-WygPJfQ1mXLDOl2WgxZ0pH8gaZGEbwNUUGjEqLDRxNZ2gyjIZNFeCPbLDPOnnHvYKE"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent opacity-90"></div>
                <div class="absolute bottom-0 left-0 p-8">
                  <h5 class="text-2xl font-bold text-white mb-2">
                    Resistenvia y Velocidad
                  </h5>
                  <p class="text-white/70 text-sm">Pista y Campo</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-brand-orange font-bold text-xl mb-8 flex items-center gap-4">
              <span class="w-8 h-[2px] bg-brand-orange"></span>
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="card-hover-effect p-8 bg-brand-navy border border-white/10 rounded-2xl flex flex-col justify-between group hover:bg-brand-navy/50 transition-colors">
                <div>
                  <div class="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-brand-orange">
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewbox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></path>
                    </svg>
                  </div>
                  <h5 class="text-2xl font-bold text-white mb-3">
                    Reality Academica
                  </h5>
                  <p class="text-white/50 text-sm leading-relaxed">
                    Olimpiada de cálculo y lógica computacional para nivel
                    avanzado.
                  </p>
                </div>
                <a
                  class="mt-8 text-white font-semibold text-sm flex items-center gap-2 group-hover:text-brand-orange transition-colors"
                  href="#"
                >
                  Ver detalles{" "}
                  <svg
                    class="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                  </svg>
                </a>
              </div>
              <div class="card-hover-effect p-8 bg-brand-navy border border-white/10 rounded-2xl flex flex-col justify-between group hover:bg-brand-navy/50 transition-colors">
                <div>
                  <div class="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-brand-orange">
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewbox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></path>
                    </svg>
                  </div>
                  <h5 class="text-2xl font-bold text-white mb-3">
                    Proyectos Escolares
                  </h5>
                  <p class="text-white/50 text-sm leading-relaxed">
                    Feria de experimentación e innovación tecnológica
                    institucional.
                  </p>
                </div>
                <a
                  class="mt-8 text-white font-semibold text-sm flex items-center gap-2 group-hover:text-brand-orange transition-colors"
                  href="#"
                >
                  Ver detalles{" "}
                  <svg
                    class="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*
      <section
        class="py-24 relative overflow-hidden"
        data-purpose="registration-cta"
        id="registro"
      >
        <div class="absolute inset-0 bg-brand-orange z-0"></div>
        <div class="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div class="absolute -left-20 -bottom-20 w-96 h-96 bg-brand-navy/10 rounded-full blur-3xl"></div>
        <div class="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h2 class="text-4xl md:text-6xl font-black mb-8 leading-tight">
            ¿Estás listo para dejar tu marca?
          </h2>
          <p class="text-xl md:text-2xl mb-12 text-white/90">
            Las inscripciones cierran el próximo mes. Asegura tu lugar en la
            historia de tu colegio.
          </p>
          <div class="bg-white p-2 rounded-2xl shadow-2xl inline-flex flex-col md:flex-row w-full max-w-2xl gap-2">
            <input
              class="flex-1 px-6 py-4 rounded-xl text-brand-navy border-none focus:ring-2 focus:ring-brand-orange bg-slate-100 text-lg"
              placeholder="Correo institucional"
              type="email"
            />
            <button class="bg-brand-navy text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-colors">
              Registrarme Ahora
            </button>
          </div>
          <p class="mt-6 text-sm text-white/70 italic">
            * Válido para instituciones acreditadas en la federación
            intercolegial.
          </p>
        </div>
      </section>

      <footer class="bg-brand-navy py-16 text-white" data-purpose="main-footer">
        <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div class="col-span-1 md:col-span-1">
            <span class="text-white font-extrabold text-2xl tracking-tighter italic block mb-6">
              INTER<span class="text-brand-orange">BIC</span>
            </span>
            <p class="text-white/50 text-sm leading-relaxed">
              Promoviendo la excelencia integral de la juventud a través de la
              competencia sana y el desarrollo de habilidades
              multidisciplinarias.
            </p>
          </div>
          <div>
            <h6 class="font-bold mb-6 text-brand-orange">Competición</h6>
            <ul class="space-y-4 text-sm text-white/60">
              <li>
                <a class="hover:text-white transition-colors" href="#">
                  Cronograma 2024
                </a>
              </li>
              <li>
                <a class="hover:text-white transition-colors" href="#">
                  Reglamento General
                </a>
              </li>
              <li>
                <a class="hover:text-white transition-colors" href="#">
                  Sedes y Campus
                </a>
              </li>
              <li>
                <a class="hover:text-white transition-colors" href="#">
                  Resultados Anteriores
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 class="font-bold mb-6 text-brand-orange">Recursos</h6>
            <ul class="space-y-4 text-sm text-white/60">
              <li>
                <a class="hover:text-white transition-colors" href="#">
                  Portal Docente
                </a>
              </li>
              <li>
                <a class="hover:text-white transition-colors" href="#">
                  Kit de Prensa
                </a>
              </li>
              <li>
                <a class="hover:text-white transition-colors" href="#">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a class="hover:text-white transition-colors" href="#">
                  Contacto Soporte
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 class="font-bold mb-6 text-brand-orange">Síguenos</h6>
            <div class="flex gap-4">
              <a
                class="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors"
                href="#"
              >
                <svg class="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a
                class="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors"
                href="#"
              >
                <svg class="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="max-w-7xl mx-auto px-6 pt-16 mt-16 border-t border-white/10 text-center text-white/40 text-xs">
          <p>© 2024 INTERBIC Tournament. Todos los derechos reservados.</p>
        </div>
      </footer> */}
    </>
  );
}
