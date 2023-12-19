// pages/index.js
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import '../src/app/globals.css';

import Footer from '../components/sections/footer/footer';
import IconWpp from '../components/iconWpp/iconWpp';
import NavBarPolicy from '../components/sections/navBar/navBarPolicy';

export default function privacyPolicy() {
    return (
        <>
            <NavBarPolicy />

            <div>

                <Head>
                    <title>Política de Privacidade - SmartTec</title>
                </Head>

                <div className="bg-blue-dark text-white p-4 md:p-8 lg:p-12">

                    <h1 className="text-center text-blue-500 text-4xl mb-8">Política de Privacidade</h1>

                    <p>O site <strong>smarttec.com.br</strong> é de propriedade da empresa SmartTec, que é a controladora de seus dados pessoais.</p>

                    <p>Nós adotamos esta Política de Privacidade, que determina como nós estamos processando as informações coletadas pelo site <strong>smarttec.com.br</strong> e também explica por quais razões nós precisamos coletar dados pessoais sobre você. 
                    Portanto, você deve ler esta Política de Privacidade antes de usar o site <strong>smarttec.com.br</strong>.</p>

                    <p className='mb-5'>Nós cuidamos dos seus dados pessoais e assumimos a responsabilidade de garantir a confidencialidade e segurança de suas informações pessoais.</p>

                    <h2 className="text-blue-500 text-2xl">Informações Pessoais Coletadas</h2>

                    <p className='mb-5'>Quando você visita o site <strong>smarttec.com.br</strong>, nós automaticamente coletamos certas informações sobre seu dispositivo, incluindo informações sobre seu navegador, endereço IP, fuso horário e alguns dos cookies instalados no seu dispositivo. 
                    Além disso, quando você navega pelo Site, nós coletamos informações sobre as páginas individuais ou produtos que você visualiza, sobre quais sites ou termos de busca redirecionaram você para nosso Site, e sobre como você interage com o Site. 
                    Nós nos referimos a essas informações coletadas automaticamente como "<strong>Informações sobre o dispositivo</strong>". 
                    Além disso, nós podemos coletar dados pessoais que você fornecer (incluindo, mas não limitado a: Nome, Sobrenome, Endereço, informações de pagamento, etc) durante o processo de registro para poder cumprir o acordo.</p>

                    <h2 className="text-blue-500 text-2xl">Por Que Fazemos o Processamento dos Seus Dados?</h2>

                    <p>Nossa maior prioridade é a segurança dos dados pessoais dos usuários e, portanto, nós podemos processar apenas dados mínimos, apenas enquanto for absolutamente necessário para a manutenção do site. 
                    Informações coletadas automaticamente são usadas para identificar possíveis casos de abuso e estabelecer dados estatísticos sobre o uso do site. 
                    Esses dados estatísticos não são agregados de outras formas que permitam a identificação de usuários específicos do sistema.</p>

                    <p className='mb-5'>Você pode visitar o site sem nos contar sobre quem você é ou revelar qualquer informação que possa ser usada por outra pessoa para identificar você individualmente. 
                    Se, apesar disso, você quiser utilizar algum dos recursos do site, ou quiser receber nossa newsletter, ou quiser conceder outros detalhes através do preenchimento e envio de formulários, você poderá fornecer dados pessoais para nós, como seu email, nome, sobrenome, cidade de residência, organização e número de telefone. 
                    Você pode escolher não fornecer dados pessoais para nós, mas, dessa forma, talvez você não consiga usar alguns dos recursos do site. 
                    Por exemplo, você não vai conseguir receber nossa Newsletter ou entrar em contato conosco diretamente pelo nosso site. Usuários que não tenham certeza sobre quais informações pessoais são obrigatórias são convidados a entrarem em contato conosco pelo e-mail <a href="mailto:smarttec@gmail.com">smarttec@gmail.com</a>.</p>

                    <h2 className="text-blue-500 text-2xl">Seus Direitos</h2>

                    <ul className='mb-5'>
                        <li>O direito de ser informado.</li>
                        <li>O direito ao acesso.</li>
                        <li>O direito à retificação.</li>
                        <li>O direito de deletar.</li>
                        <li>O direito de restringir o processamento.</li>
                        <li>O direito da portabilidade de dados.</li>
                        <li>O direito à objeção.</li>
                        <li>Direitos em relação a tomadas de decisão automáticas e à perfilagem.</li>
                    </ul>

                    <p>Se você quiser exercitar esses direitos, por favor entre em contato conosco usando os dados de contato abaixo.</p>

                    <p className='mb-5'>Adicionalmente, se você mora na Europa, nós afirmamos que estamos processando suas informações com a finalidade de cumprir contratos que possamos ter firmado com você (por exemplo, se você fizer uma compra no nosso Site), ou para exercer os interesses legítimos da nossa empresa listados acima. 
                    Além disso, por favor saiba que suas informações poderão ser transferidas para fora da Europa, incluindo para o Canadá e os Estados Unidos da América.</p>

                    <h2 className="text-blue-500 text-2xl">Links para Outros Sites</h2>

                    <p className='mb-5'>Nosso site pode conter links para outros sites que não são controlados por nós e/ou não são de nossa propriedade. Por favor esteja ciente de que nós não somos responsáveis pelas políticas de privacidade de tais sites e organizações terceiras. 
                    Nós incentivamos você a estar ciente de quando sair do nosso site, e também incentivamos você a ler a política de privacidade de cada um dos sites que podem coletar suas informações pessoais.</p>

                    <h2 className="text-blue-500 text-2xl">Segurança das Informações</h2>

                    <p className='mb-5'>Nós garantimos que as informações que você fornece estão em servidores e computadores armazenados em ambientes seguros e controlados, protegidos de acessos, usos e divulgações não-autorizadas. 
                    Nós mantemos medidas de segurança administrativas, técnicas e físicas razoáveis, com finalidade de proteger os dados pessoais sob nossa custódia de acessos, usos, modificações e divulgações não-autorizadas. 
                    Apesar disso, nenhuma transmissão de dados pela Internet ou por sistemas sem fio pode ser garantida.</p>

                    <h2 className="text-blue-500 text-2xl">Declaração Legal</h2>

                    <p className='mb-5'>Nós vamos divulgar qualquer informação que coletarmos, usarmos ou recebermos caso tal divulgação seja solicitada ou permitida por lei, de forma a cumprir intimações ou processos judiciais similares, 
                    e também quando considerarmos em boa fé que a divulgação é necessária para a proteção de nossos direitos, para a proteção da segurança de outros, para investigações de fraude ou para responder a uma solicitação do governo.</p>

                    <h2 className="text-blue-500 text-2xl">Informações de Contato</h2>

                    <p className='mb-5'>Se você quiser entrar em contato conosco para saber mais sobre esta Política de Privacidade, 
                    ou quiser acessar quaisquer informações relativas aos seus direitos individuais e às suas Informações Pessoais, você poderá enviar um e-mail para o endereço <a href="mailto:smarttec@gmail.com">smarttec@gmail.com</a>.</p>

                </div>
            </div>

            <IconWpp/>
            <Footer/>
        </>
    );
}
