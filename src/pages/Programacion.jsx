import React from 'react'
import { programacion, } from "../utils/programacion";
import CardActividad from './CardActividad';

export default function Programacion() {

      const data = programacion;
    
  return (
      <section
        className="py-24 min-h-screen overflow-hidden"
        data-purpose="disciplines-showcase"
        id="disciplinas"
      >
        <div class="mb-4 max-w-7xl mx-auto px-6">
          <div className="flex w-full justify-center items-center py-4 text-white">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Programación INTERBIC
            </h1>
          </div>
        </div>
  
        
        <section className="mb-24 max-w-7xl mx-auto px-6">
          {data.map((dia, index) => (
            <div key={index} className="mb-10">
              <div className="flex items-baseline justify-between mb-10">
                <h3 className="text-2xl font-black text-[#09090a]">
                  {dia.fecha}
                </h3>
              </div>
  
              <div className="space-y-8">
                {dia.actividad.map((act, i) => (
                  <CardActividad index={i} act={act}/>
                ))} 
              </div>
            </div>
          ))}
        </section>
      </section>
    );
}
