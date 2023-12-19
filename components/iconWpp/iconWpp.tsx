import Link from 'next/link';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function IconWpp(){

  return (
    <>
    <Link
      href="https://api.whatsapp.com/send?phone=5521987466582&text=Olá, fui encaminhado pelo site. Estou interessado no seu serviço"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full hover:bg-green-600 hover:text-white transition duration-300
      "
    >
      <FaWhatsapp size={40} />
    </Link>
    </>
  );
};
