"use client"

import Image from "next/image";
import thailandImage from "@/public/thailand.jpg";
import { useState } from "react";

export default function Thailand() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="relative bg-gray-100 p-10 shadow-md rounded-[2vw] flex flex-col h-fit">
      <h3 className="mb-4 text-3xl font-semibold">Thailand</h3>
      <p className="mb-4 text-lg font-semibold">Poengsum på Demokrati-indeksen: 6.35 (2023)</p>
      <p className="mb-4">
        Thailand har hatt flere militærkupp og politiske omveltninger de siste tiårene. Selv om det holdes valg, er det betydelige begrensninger på politisk frihet og ytringsfrihet, og det finnes utfordringer knyttet til rettssikkerhet.
      </p>
      {showMore && (
        <>
          <p className="mb-4">
            Thailands politiske system er et konstitusjonelt monarki, men har opplevd hyppige endringer i styringsform. Siden 1932 har landet gjennomgått 20 ulike grunnlover og 13 vellykkede militærkupp, noe som har ført til perioder med militærstyre og begrenset demokratisk utvikling.
          </p>
          <p className="mb-4">
            Disse hyppige endringene og militærkuppene har skapt en ustabil politisk situasjon, som har påvirket landets evne til å opprettholde en stabil demokratisk prosess. Dette har også ført til at mange thailendere har mistet tilliten til politiske institusjoner og prosesser.
          </p>
        </>
      )}
      <button 
        onClick={() => setShowMore(!showMore)} 
        className="mb-4 text-blue-500 hover:underline"
      >
        {showMore ? "Les mindre" : "Les mer"}
      </button>
      <Image 
        src={thailandImage} 
        alt="Scenic view of Thailand" 
        className="w-full h-[20vw] object-cover rounded-[1vw]" 
      />
    </div>
  );
}