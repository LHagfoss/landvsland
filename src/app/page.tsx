"use client"

import React, { useEffect } from "react";
import Lenis from "lenis";

import Image from "next/image";
import Japan from "@/components/Japan";
import Thailand from "@/components/Thailand";
import Kilder from "@/components/kilder";
import japanvsthailand from "@/public/image-removebg-preview.png"

export default function Home() {

  useEffect( () => {
    window.scrollTo(0, 0);

    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="container mx-auto p-5 py-10">
      <h1 className="text-[6vw] md:text-2xl font-bold mb-4">Utforskning av Demokratiindeksen til FN</h1>
      <div className="w-full flex justify-between items-center flex-col md:flex-row">
        <div className="h-full flex flex-col">
          <h1 className="text-[10vw] md:text-[5vw] mb-2 font-bold">Japan vs Thailand</h1>
          <p className="mb-10">
            Jeg har valgt å sammenligne Japan og Thailand fordi de representerer to veldig forskjellige politiske systemer i Asia. 
            Japan har et velfungerende demokrati med stabile institusjoner, mens Thailand har utfordringer med korrupsjon i både det politiske systemet og kongehuset. 
            Dette har ført til gjentatte militærkupp og politisk ustabilitet som har hindret utviklingen av et fullverdig demokrati i Thailand.
          </p>
        </div>
        <Image src={japanvsthailand} alt="" className="mb-4"></Image>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Japan />
        <Thailand />
      </div>
      <Kilder />
    </div>
  );
};