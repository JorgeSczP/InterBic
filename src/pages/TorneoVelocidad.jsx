import React from 'react'
import CardVelocidad from '../components/CardVelocidad';

export default function TorneoVelocidad() {
  return (
      <section
        className="py-24 min-h-screen overflow-hidden"
        data-purpose="disciplines-showcase"
        id="disciplinas"
      >
        <div class="mb-4 max-w-7xl mx-auto px-6">
          <div className="flex w-full justify-center items-center py-4 text-white">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Velocidad
            </h1>
          </div>
        </div>
  
        
        <section className="mb-24 max-w-7xl mx-auto px-6">
          <CardVelocidad />
        </section>
      </section>
    );
}
