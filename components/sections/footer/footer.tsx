'use client'

import Image from "next/image"
import Logo from '../../../public/LogoSmartTecBranco.png'
import Link from "next/link"
import IconInstagram from '../../../assets/icons/Icon awesome-instagram.svg'
import IconLinkedin from '../../../assets/icons/Icon awesome-linkedin.svg'
import IconWhatsApp from '../../../assets/icons/Wpp.svg'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 border-t-2 border-sky-400" id="footer">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
                <div className="w-full mb-6 ">
                    <div className="text-center lg:text-left">
                        <Link className="" href={"/"}><Image className="mx-auto lg:mx-0" src={Logo} alt={"Logo no rodapé do site"} width={200} /></Link>
                        <p className="text-gray-400 mt-4">
                            São mais de 6 anos no mercado de Tecnologia prestando consultoria e oferecendo serviços de excelência, tanto em mão de obra efetiva ou temporária para os mais diversos segmentos empresariais.
                        </p>

                        <div className=" mt-10 lg:w-full lg:mb-0 md:w-70">
                            <ul className="flex space-x-4 justify-center lg:justify-start">
                                <li>
                                    <Link href="https://instagram.com/smarttec.servtec?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
                                        <Image className="hover:opacity-50" src={IconInstagram} alt={"ícone do instagram no rodapé do site"} width={30}></Image>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" target="_blank" rel="noopener noreferrer">
                                        <Image className="hover:opacity-50" src={IconLinkedin} alt={"ícone do linkedin no rodapé do site"} width={30}></Image>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="https://api.whatsapp.com/send?phone=5521987466582&text=Olá, fui encaminhado pelo site. Estou interessado no seu serviço" target="_blank" rel="noopener noreferrer">
                                        <Image className="hover:opacity-50" src={IconWhatsApp} alt={"ícone do whatsapp no rodapé do site"} width={35}></Image>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mb-20 sm:hidden md:block lg:hidden xl:hidden border-t border-white my-4 w-[80%]"></div>

                <div className="hidden sm:hidden md:hidden lg:block xl:block bg-white mx-6 w-0.5 h-60"></div>

                <div className="mb-14 lg:ml-14 lg:w-full lg:mb-[4.5rem] md:w-70 text-center w-full">
                    <h2 className="text-2xl font-semibold mb-4 text-sky-500">Navegação</h2>
                    <ul>
                        <li>
                            <Link className="hover:text-sky-600" href="/">Página Inicial</Link>
                        </li>
                        <li>
                            <Link className="hover:text-sky-600" href="#servicos">Serviços</Link>
                        </li>
                        <li>
                            <Link className="hover:text-sky-600" href="#sobre">Sobre Nós</Link>
                        </li>
                        <li>
                            <Link className="hover:text-sky-600" href="#contact">Contato</Link>
                        </li>
                    </ul>
                </div>

                <div className="mb-14 lg:ml-0 lg:w-full lg:mb-0 md:w-70 text-center w-full">
                    <h2 className="text-2xl font-semibold mb-4 text-sky-500">Clientes</h2>
                    <ul>
                        <li>
                            <Link className="hover:text-sky-600" href="" target="_blank" rel="noopener noreferrer">Braservice</Link>
                        </li>
                        <li>
                            <Link className="hover:text-sky-600" href="http://www.espacopessoal.com.br/" target="_blank" rel="noopener noreferrer">Espaço</Link>
                        </li>
                        <li>
                            <Link className="hover:text-sky-600" href="https://www.qualitysupport.com.br/" target="_blank" rel="noopener noreferrer">Quality Support</Link>
                        </li>
                        <li>
                            <Link className="hover:text-sky-600" href="https://www.grupopersona.com.br/" target="_blank" rel="noopener noreferrer">Persona</Link>
                        </li>
                        <li>
                            <Link className="hover:text-sky-600" href="https://pollux-brasil.com.br/" target="_blank" rel="noopener noreferrer">Pollux</Link>
                        </li>
                        <li>
                            <Link className="hover:text-sky-600" href="https://www.rjvip.com.br/" target="_blank" rel="noopener noreferrer">RjVip</Link>
                        </li>
                        <li>
                            <Link className="hover:text-sky-600" href="https://veent.com.br/#veent" target="_blank" rel="noopener noreferrer">Veent</Link>
                        </li>
                    </ul>
                </div>

                <div className="mb-6 lg:w-full lg:mb-[7.2rem] md:w-70 text-center w-full">
                    <h2 className="text-2xl font-semibold mb-4 text-sky-500">Contato</h2>
                    <address className="text-gray-400">
                        <p>Email: <a href="mailto:suporte@smarttecnologia.net.br">suporte@smarttecnologia.net.br</a></p>
                        <p>Telefone: <a href="">+55 (21) 98746-6582</a></p>
                    </address>
                </div>
            </div>
        </footer>
    );
}; 