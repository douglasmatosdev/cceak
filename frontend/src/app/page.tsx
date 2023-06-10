import { Calendar } from "@/components/Calendar";
import { Footer } from "@/components/Footer";
import { Location } from "@/components/Location";
import { Nav } from "@/components/Nav";
import { informations } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-400">
      <Nav />
      <div className="bg-white ml-auto mr-auto">

        <section className="p-8 flex justify-center items-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/DEg7bGfonTE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/tgjmWlxXitY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </section>

        <section id="calendar" className="grid grid-cols-2 grid-rows-1 h-80">
          <Calendar />
          <div className="flex flex-col text-center items-center justify-center">
            <h1 className="text-4xl text-black font-bold">Agenda semanal</h1>
            <span>Estudos, Palestras e Envagelização infantil</span>
          </div>
        </section>

        <section className="grid grid-cols-2">
          <div className='flex flex-col text-center items-center justify-center'>
            <h1 className='text-4xl text-black font-bold'>Venha nos visitar</h1>
            <span>{informations.address}</span>
            <Link href={`https://goo.gl/maps/YLSjDVD1eqD4RQSi6`}>
              <span className="text-blue-500 underline">Abrir no mapa</span>
            </Link>
          </div>
          <Location />
        </section>
        <Footer />
      </div>
    </div>
  );
}
