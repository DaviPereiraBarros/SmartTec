import CardServices from "./cardServices"

import Image2 from '../../../assets/images/Image4.jpg'
import Image3 from '../../../assets/images/Image5.jpg'
import Image4 from '../../../assets/images/Image8.jpg'



export default function Services() {
    return (
        <section className="" id="servicos">
            <div className='flex flex-col items-center justify-center px-4 mt-12 pb-16 md:pb-32' id='containerFeatures'>
                <h1 className='text-4xl md:text-6xl font-extrabold w-full text-center text-white'>
                    <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        SERVIÇOS
                    </span>
                </h1>
                <p className='text-lg md:text-2xl opacity-70 w-full text-center mb-8 md:mb-32'></p>

                <div className='flex flex-wrap justify-center gap-10' id='features'>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                        <CardServices title={"Suporte Técnico"} icon={Image4} description={"Sua empresa com suporte técnico pronto para resolver qualquer problema que possa prejudicar os seus negócios. Com Níveis escalonáveis de tratamento do incidente de acordo com a complexidade e prioridade da demanda."} />
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                        <CardServices title={"Segurança Eletrônica"} icon={Image3} description={"Oferecemos Soluções de segurança personalizadas que combinam a tecnologia de CFTV e Controle de acesso com uma gama de serviços que com certeza irá atender aos minimos requisitos de sua Empresa."} />
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                        <CardServices title={"Infraestrutura"} icon={Image2} description={"Realizamos o Projeto, configuração, implantação e manutenção em infraestrutura de rede. Garantimos o funcionamento de toda a estrutura para que todas as plataformas, sistemas e acessos funcionem adequadamente, sempre analisando o melhor custo benefício."} />
                    </div>
                </div>


            </div>
        </section>
    )
}