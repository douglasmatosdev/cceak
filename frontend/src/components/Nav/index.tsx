import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Nav = () => {

    return (
        <nav className="flex justify-between items-center p-8 bg-white mb-8">
            <Link href="/">
                <Image
                    src="/allan-kardec.png"
                    alt="Vercel Logo"
                    className="rounded-full cursor-pointer"
                    width={100}
                    height={24}
                    priority
                />
            </Link>
            <ul className="flex">
                <li>
                    <div className="p-4">
                        <span className="hover:text-gray-400 cursor-pointer text-gray-800 text-xl">
                            Livros
                        </span>
                    </div>
                </li>
                <li>
                    <Link href={"#calendar"}>
                        <div className="p-4">
                            <span className="hover:text-gray-400 cursor-pointer text-gray-800 text-xl">
                                Agenda
                            </span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href={"#studies"}>
                        <div className="p-4">
                            <span className="hover:text-gray-400 cursor-pointer text-gray-800 text-xl">
                                Estudos
                            </span>
                        </div>
                    </Link>
                </li>
                <li>
                    <div className="p-4">
                        <span className="hover:text-gray-400 cursor-pointer text-gray-800 text-xl">Palestras</span>
                    </div>
                </li>
                <li>
                    <Link href={`/login`}>
                        <div className="p-4">
                            <span className="hover:text-gray-400 cursor-pointer text-gray-800 text-xl">Login</span>
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}