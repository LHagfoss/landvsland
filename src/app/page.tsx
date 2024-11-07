"use client"

import React, { useEffect } from "react";
import Lenis from "lenis";


import Image from "next/image";
import Japan from "../components/japan";
import Thailand from "../components/thailand";
import Kilder from "../components/kilder";
import LydSpiller from "../components/lydSpiller";
import japanvsthailand from "../../public/image-removebg-preview.png"
import FadeIn from "@/components/fadeIn";

export default function Home() {

  useEffect( () => {
    const handleScrollToTop = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('beforeunload', handleScrollToTop);

    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      window.removeEventListener('beforeunload', handleScrollToTop);
    };
  }, []);

  return (
    <FadeIn>
      <div className="container mx-auto p-5 py-10">
      <h1 className="text-[6vw] md:text-2xl font-bold mb-4">Utforskning av Demokrati-indeksen til FN</h1>
        <div className="w-full flex justify-between items-center flex-col md:flex-row">
          <div className="h-full flex flex-col">
            <h1 className="text-[10vw] md:text-[5vw] mb-2 font-bold">Japan vs Thailand</h1>
            <LydSpiller 
              className="mb-10"
              text={`
                Jeg har valgt å sammenligne Japan og Thailand fordi de representerer to veldig forskjellige politiske systemer i Asia. 
                Japan har et velfungerende demokrati med stabile institusjoner og en konstitusjonell monarki med keiseren som et symbol på enhet og tradisjon. 
                På den andre siden har Thailand utfordringer med korrupsjon i både det politiske systemet og kongehuset. 
                Dette har ført til gjentatte militærkupp og politisk ustabilitet som har hindret utviklingen av et fullverdig demokrati i Thailand.
                `} 
              />
          </div>
          <Image src={japanvsthailand} alt="" className="mb-4"></Image>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Japan />
          <Thailand />
        </div>
        <Kilder />
      </div>
    </FadeIn>
  );
};