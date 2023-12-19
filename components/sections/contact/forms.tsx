'use client';
import axios from "axios";
import * as Yup from "yup";

import { useFormik } from "formik";
import { useState } from "react";

import Link from "next/link";
import Button from "../../button/button";
import InputForms from "../../inputs/inputForms";
import TextArea from "../../inputs/textareaForms";
import FailModal from "../../failModal/failModal";
import SucessModal from "../../sucessModal/sucessModal";
import Loading from "../../loading/loading";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  site?: string;
  message?: string;
}


export default function Contact() {
  const [isLoading, setLoading] = useState(false)
  const [isSucessModal, setSucessModal] = useState(false)
  const [isFailModal, setFailModal] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      site: "",
      message: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Campo Obrigatório"),
      email: Yup.string().email("E-mail Inválido").required("Campo Obrigatório"),
      phone: Yup.string().matches(/^\d{11}$/, "Digite um telefone válido"),
      site: Yup.string(),
      message: Yup.string(),
    }),

    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => handleSubmitForm(values),
  });

  const handleSubmitForm = (values:FormValues) => {
    setLoading(true)

    const messageBody = `Olá, Smarttec! Um potencial cliente mandou seus dados, entre em contato.\n` +
      `Nome:${values.name}\n` +
      `Email: ${values.email}\n` +
      `Telefone: ${values.phone}\n` +
      `Site: ${values.site}\n` +
      `Mensagem: ${values.message}`;

    axios.post('/api/sendEmail', {
      messageBody: messageBody
    })
      .then(() => {
        //console.log("enviado")
        formik.resetForm();
        setLoading(false)
        setSucessModal(true)
      })
      .catch(() => {
        //console.log("erro")
        setLoading(false)
        setFailModal(true)
      })
  }


  const closeModal = () => {
    setFailModal(false)
    setSucessModal(false)
  }


  return (
    <section className="" id="contact">
      {isSucessModal && <SucessModal closeModal={closeModal} />}
      {isFailModal && <FailModal closeModal={closeModal} />}
      {isLoading && <Loading />}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 px-4 md:px-8 lg:px-16" id="containerContact">
        <div className="px-4 md:px-0 ml-2 mb-16 text-center md:text-left" id="texts">
          <span className="text-sky-500 text-2xl md:text-3xl font-semibold">ENTRE EM CONTATO</span>
          <h1 className="text-white text-4xl md:text-4xl mt-4 md:mt-8 lg:text-6xl">
            Evolua sua empresa com especializações tecnológicas
          </h1>
          <p className="text-white text-lg md:text-xl opacity-70 mt-4 md:mt-8">
            Não perca tempo! Nós estamos prontos para proporcionar as melhores soluções do mercado para o seu negócio.
          </p>
        </div>

        <div className="bg-gradient-to-r from-white to-gray-300 rounded-md py-4 md:py-8 px-4 md:px-8" id="form">
          <h1 className="text-center font-bold text-3xl md:text-4xl">
            Fale com um especialista!
          </h1>
          <form id="formulario" onSubmit={formik.handleSubmit}>
            <InputForms type="InputForms" value={formik.values.name} placeholder="Nome completo" required onBlur={formik.handleBlur} name="name"
              id={"name"} onChange={formik.handleChange} />

            <InputForms type="email" value={formik.values.email} placeholder="E-mail profissional" required onBlur={formik.handleBlur}
              id="email" name={"email"} onChange={formik.handleChange} />

            <InputForms type="text" value={formik.values.phone} placeholder="Celular/Whatsapp" required onBlur={formik.handleBlur}
              id="phone" name={"phone"} onChange={formik.handleChange}/>

            <InputForms type="text" value={formik.values.site} placeholder="Site" required onBlur={formik.handleBlur}
              id="site" name={"site"} onChange={formik.handleChange}/>

            <TextArea value={formik.values.message} placeholder="Mensagem" required onBlur={formik.handleBlur}
              id="message" name="message" onChange={formik.handleChange} />

            <div className="mt-4 md:mt-7">
              <Button type="submit" title="Enviar" kind="" />
            </div>

          </form>
        </div>
        <div className="md:col-start-2 text-center mt-4 md:mt-4 text-base px-4 md:px-8 mb-[11rem] ">
          <p className="text-gray-300">
            Ao enviar esse formulário, você reconhece que leu e concorda com a nossa{" "}
            <Link href="/privacyPolicy">
              <br /><span className="font-bold text-white">Política de Privacidade.</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

