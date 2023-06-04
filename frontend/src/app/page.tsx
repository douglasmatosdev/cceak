import { Footer } from "@/components/Footer";
import Image from "next/image";
import React from "react";

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

        <Footer />
      </main>
    </React.Fragment>
  );
}
