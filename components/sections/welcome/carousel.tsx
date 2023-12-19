"use client"
import React from 'react';

export default function Carousel() {
  return (
    <section className="bg-[url('../../assets/images/Image2.jpg')] bg-cover bg-center h-[42rem]" id='Inicio'>
      <div className="container mx-auto h-full flex flex-col justify-center text-white text-center">

        <div className='text-left md:mr-7'>
          <h1 className="text-7xl font-bold max-sm:text-5xl max-sm:ml-9">Consultoria de TI</h1>
          <h2 className="text-3xl font-light max-sm:text-xl max-sm:ml-[40px]">Resultados para sua empresa</h2>
        </div>

        <div className="mt-8 space-x-4 text-left max-sm:ml-1 max-sm:mt-11 max-sm:text-center md:ml-7">
          <a
            data-fancybox=""
            data-animation-duration="700"
            data-src="#animatedModalContate"
            href="#contact"
            className="max-sm:text-xs bg-bttn-orange text-white font-semibold py-3 px-6 rounded border border-[#ed7413] hover:border-white"
          >
            Fale conosco
          </a>
          <a
            title="Fale via WhatsApp"
            href="https://api.whatsapp.com/send?phone=5521987466582&text=Olá, fui encaminhado pelo site. Estou interessado no seu serviço"
            rel="nofollow"
            target="_blank"
            className="max-sm:text-xs bg-bttn-wpp text-white font-semibold py-3 px-6 rounded border border-[#1DA16B] hover:border-white"
          >
            Fale via WhatsApp
          </a>
          
        </div>
      </div>
    </section>
  );
};
