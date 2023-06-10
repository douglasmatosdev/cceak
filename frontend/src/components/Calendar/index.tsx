import { Footer } from "@/components/Footer";
import { Location } from "@/components/Location";
import { Nav } from "@/components/Nav";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Calendar = () => {
    return (

        <div className="flex justify-center m-2">
            <div className="flex flex-col items-center justify-center rounded-md shadow-xl w-48 p-4">
                <span> Sexta-feira</span>
                <span className="font-bold text-2xl text-gray-700">18:30</span>
                <p className="text-center border-t-2 border-gray-200 mt-4 pt-4">Estudo livro do Espiritos</p>
            </div>

            <div className="flex flex-col items-center justify-center rounded-md shadow-xl w-48 p-4">
                <span> Sábado</span>
                <span className="font-bold text-2xl text-gray-700">18:00 </span>
                <p className="text-center border-t-2 border-gray-200 mt-4 pt-4">Palestra pública e Evangelização infantil</p>
            </div>
        </div>
    );
}
