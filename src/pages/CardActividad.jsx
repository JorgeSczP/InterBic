import React from "react";

export default function CardActividad({ act }) {
  return (
    <div className="group flex flex-col md:flex-row bg-[#171f33] hover:bg-[#31394d] transition-all duration-300 rounded-lg overflow-hidden">
      <div className="md:w-48 bg-[#131b2e] p-6 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-[#424754]/10">
        <span className="text-[#adc6ff] text-lg font-bold">
          {act.hora}
        </span>
      </div>
      <div className="grow p-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div>
            <p className="text-[10px] text-[#ffb786] uppercase font-bold tracking-widest mb-1">
              
            </p>
            <h3 className="text-xl font-bold text-[#dae2fd]">
              {act.actividad}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
