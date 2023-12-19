'use client'

import { TiMessages, TiTime, TiChartBarOutline } from 'react-icons/ti'
import { MdSecurity } from 'react-icons/md'


export default function Features() {
    return (
        <section id="features" className="mb-40 mt-48">
            <div className="container mx-auto text-center text-white">
                <h1 className="text-4xl md:text-6xl font-extrabold w-full text-white mb-8">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                        O QUE OFERECEMOS PARA <span className='text-sky-500'>SUA EMPRESA</span>
                    </span>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24 " id="features">
                    <div className="text-center">
                        <div className="rounded-full bg-slate-400 p-6 mx-auto w-28 h-28 flex items-center justify-center">
                            <TiMessages size={80} color="white" />
                        </div>
                        <div className="p-5">
                            <div className="font-bold text-xl mb-2">ATENDIMENTO RÁPIDO</div>
                            <p className="text-gray-400 text-base">Estamos aqui para responder às suas dúvidas e resolver suas necessidades com agilidade.</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="rounded-full bg-slate-400 p-6 mx-auto w-28 h-28 flex items-center justify-center">
                            <TiTime size={80} color="white" />
                        </div>
                        <div className="p-5">
                            <div className="font-bold text-xl mb-2">EFICIÊNCIA</div>
                            <p className="text-gray-400 text-base">Simplificamos tarefas complexas para que você possa realizar mais em menos tempo, aumentando a produtividade do seu negócio.</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="rounded-full bg-slate-400 p-6 mx-auto w-28 h-28 flex items-center justify-center">
                            <MdSecurity size={80} color="white" />
                        </div>
                        <div className="p-5">
                            <div className="font-bold text-xl mb-2">PROTEÇÃO</div>
                            <p className="text-gray-400 text-base">Sua segurança é nossa prioridade. Implementamos medidas de proteção avançadas para garantir a integridade dos seus dados.</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="rounded-full bg-slate-400 p-6 mx-auto w-28 h-28 flex items-center justify-center">
                            <TiChartBarOutline size={80} color="white" />
                        </div>
                        <div className="p-5">
                            <div className="font-bold text-xl mb-2">SOLUÇÕES</div>
                            <p className="text-gray-400 text-base">Oferecemos soluções que vão além do convencional. Nossa abordagem inovadora resolve desafios específicos, proporcionando resultado.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}