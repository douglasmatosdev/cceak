import { informations } from '@/utils';
import React from 'react'

import { FaFacebookSquare, FaYoutubeSquare } from "react-icons/fa";

export const Footer = () => {
    return (
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
              href="https://www.youtube.com/@allankardeccceak9167"
              target="_blank"
              rel="noopener noreferrer"
              title="FEB - link sobre Allan Kardec"
            >
              <FaYoutubeSquare className="text-red-500" />
            </a>
          </div>
          &copy; Copyright {new Date().getFullYear()} {informations.name}
        </div>
    )
}