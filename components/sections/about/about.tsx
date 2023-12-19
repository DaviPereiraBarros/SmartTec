import Image from "next/image"
import ImgAbout from '../../../public/LogoSmarttecCor.png'

export default function About() {
    return (
        <section className="mb-44" id="sobre">
            <div className="bg-gradient-to-r from-white to-gray-300 grid grid-cols-1 md:grid-cols-2 items-center justify-center px-4 pb-16">
                <div className="container mx-auto py-8">
                    <div className="mx-auto mt-28">
                        <Image className=" mt-14 lg:ml-14" src={ImgAbout} alt="Smarttec Logo" width={520} height={520} />
                    </div>
                </div>
                <div className="container mx-auto py-8">
                    <div className="mt-28">
                        <h1 className='text-4xl md:text-6xl font-extrabold w-full text-center text-white'>
                            <span className="bg-gradient-to-r from-blue-dark to-gray-700 bg-clip-text text-transparent">
                                SOBRE NÓS
                            </span>
                        </h1>
                        <p className="text-gray-700 mt-8 text-2xl opacity-75 sm:ml-7 text-center">
                            Somos uma empresa prestadora de serviços nas áreas de Tecnologia da informação e Segurança Eletônica que pretende ser reconhecida pela solidez e competência, tanto nos mercados nacional e internacional, bem como por todos os nossos clientes e colaboradores.

                            Atuamos de forma objetiva, ágil e moderna. Sempre atualizados e atentos aos novos cenários do mercado, para estarmos sempre prontos a identificar e satisfazer as necessidades de nossos clientes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}