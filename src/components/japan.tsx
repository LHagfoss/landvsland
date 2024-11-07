import Image from "next/image";
import japanImage from "@/public/japan.jpg";
import { useState } from "react";
import { easeInOut, motion } from "framer-motion";
import JapanDiagram from "@/components/JapanDiagram"

export default function Japan() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="relative bg-gray-100 p-10 shadow-md rounded-[2vw] flex flex-col h-fit">
      <h3 className="mb-4 text-3xl font-semibold">Japan</h3>
      <p className="mb-4 text-lg font-semibold">Poengsum på Demokrati-indeksen: 8.40 (2023)</p>
      <JapanDiagram />
      <p className="mb-4">
        Japan har hatt en stabil politisk historie siden andre verdenskrig, med regelmessige valg og et uavhengig rettsvesen. Landet har en konstitusjonell monarki, hvor keiseren er en symbolsk leder, og den faktiske styrelsen ligger hos statsministeren og nasjonalforsamlingen.
      </p>
      {showMore && (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: easeInOut }}
            className="md:h-[12vw]"
        >
          <p className="mb-4">
            Siden 1955 har politikken i Japan vært dominert av Det Liberale Demokratiske Partiet (LDP), som har vært i makten nesten kontinuerlig. Dette har ført til en stabil politisk struktur og en høy grad av demokrati.
          </p>
          <p className="mb-4">
            Japan har en høy grad av pressefrihet og sivile rettigheter, og landet er kjent for sin effektive rettsstat. Dette har bidratt til landets plassering blant de høyeste på demokratiindeksen.
          </p>
          <p className="mb-4">
            Denne stabile politiske strukturen har gjort Japan til et eksempel på en full demokrati, ifølge rapporter fra Economist Intelligence Unit.
          </p>
        </motion.div>
      )}
      <button 
        onClick={() => setShowMore(!showMore)} 
        className="mb-4 bg-blue-500 rounded-full text-gray-100 py-3 hover:scale-105 duration-300"
      >
        {showMore ? "Les mindre" : "Les mer"}
      </button>
      <Image 
        src={japanImage} 
        alt="Scenic view of Japan" 
        className="w-full h-[20vh] md:h-[20vw] object-cover rounded-3xl md:rounded-[1vw]" 
      />
    </div>
  );
}