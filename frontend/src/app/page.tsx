import { informations } from "@/utils";
import Image from "next/image";
import React from "react";

import { FaFacebookSquare, FaYoutubeSquare } from "react-icons/fa";

export default function Home() {
  return (
    <React.Fragment>
      <main className="flex min-h-screen flex-col items-center justify-between bg-[#e5e5e5]">
        <div className="w-full flex justify-start items-center p-12 bg-white md:bg-banner bg-right bg-no-repeat">
          <div className="">
            <a
              className=""
              href="https://www.febnet.org.br/portal/2019/06/12/allan-kardec/"
              target="_blank"
              rel="noopener noreferrer"
              title="FEB - link sobre Allan Kardec"
            >
              <Image
                src="/allan-kardec.jpg"
                alt="Vercel Logo"
                className="rounded-full"
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
          <Image
            src="/allan-kardec-assinatura.png"
            alt="Vercel Logo"
            className="rounded-full "
            width={200}
            height={24}
            priority
          />
        </div>

        <div className="w-[70%] border-t-2  border-gray-500 flex justify-center flex-col items-center p-8">
          <div className="flex ">
            <a
              className="text-2xl cursor-pointer"
              href="https://www.facebook.com/allan.kardec.5602"
              target="_blank"
              rel="noopener noreferrer"
              title="FEB - link sobre Allan Kardec"
            >
              <FaFacebookSquare className="text-blue-500" />
            </a>
            <a
              className="text-2xl cursor-pointer"
              href="https://www.facebook.com/allan.kardec.5602"
              target="_blank"
              rel="noopener noreferrer"
              title="FEB - link sobre Allan Kardec"
            >
              <FaYoutubeSquare className="text-red-500" />
            </a>
          </div>
          &copy; Copyright {new Date().getFullYear()} {informations.name}
        </div>
      </main>
    </React.Fragment>
  );
}
