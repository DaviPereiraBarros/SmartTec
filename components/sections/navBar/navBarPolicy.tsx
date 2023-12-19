'use client';

import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react';

import Image from "next/image"
import Logo from "../../../public/LogoSmartTecBranco.png"
import Link from "next/link"

export default function NavBarPolicy() {

  const [isResponsive, setResponsive] = useState(false);

  const toggleResponsiveNav = () => {
    setResponsive(!isResponsive);
  };

  return (
    <header className='border-b-2' id='header'>
      <div className="bg-blue-dark">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-4 px-4">
            <Image src={Logo} alt="Logo" width={240} height={86} className="max-sm: w-40" />
            <div className="hidden sm:flex space-x-4">
              <Link href="/" className="text-white text-2xl hover:bg-sky-700 px-4 py-2 rounded-md">Início</Link>
            </div>
            <button
              className="sm:hidden text-white text-2xl"
              onClick={toggleResponsiveNav}
            >
              <AiOutlineMenu className={`fa ${isResponsive ? 'fa-times' : 'fa-bars'}`}></AiOutlineMenu>
            </button>
          </div>
          {isResponsive && (
            <div className="sm:hidden bg-white">
              <Link href="/" className="text-sm hover:bg-gray-300 px-4 py-2 block">Início</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}