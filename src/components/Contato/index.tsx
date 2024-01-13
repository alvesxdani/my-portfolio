import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Input, TextArea } from '../Inputs'
import Button from '../Button'
import { FaLinkedin } from 'react-icons/fa6'
import { FaWhatsapp } from 'react-icons/fa6'
import { FiGithub } from 'react-icons/fi'
import { FaAt } from "react-icons/fa6";

const Contato = () => {
  //   const form: React.MutableRefObject<HTMLFormElement> = useRef();

  //   const sendEmail = (e) => {
  //     e.preventDefault();

  //     emailjs
  //       .sendForm(
  //         "YOUR_SERVICE_ID",
  //         "YOUR_TEMPLATE_ID",
  //         form.current,
  //         "YOUR_PUBLIC_KEY"
  //       )
  //       .then(
  //         (result) => {
  //           console.log(result.text);
  //         },
  //         (error) => {
  //           console.log(error.text);
  //         }
  //       );
  //   };
  return (
    <section id='contato' className="flex flex-col justify-center items-center align-middle w-100 min-h-[90vh] gap-[5rem] p-10">
      <h2 className="font-montserrat font-bold text-center text-maincolor">
        Contato
      </h2>

      <div className="flex flex-col-reverse md:flex-row w-[100%] gap-10 justify-center align-middle">
        <form className="w-[100%] md:w-[40%]">
          <Input type="text" id="name" label="Nome" />
          <Input type="email" id="email" label="E-mail" />
          <TextArea label="Mensagem" />
          <Button size="md" type="submit">
            Enviar
          </Button>
        </form>
        <div className="w-[100%] md:w-[40%] flex flex-col gap-3">
          <h3 className="font-bold">Outros contatos: </h3>
          <div className="flex gap-5">
            <a href="http://linkedin.com/in/daniela-alvesm" target="_blank">
              <FaLinkedin size={30} className="text-maincolor hover:brightness-110" />
            </a>
            <a href="https://wa.me/5521983055922" target="_blank">
              <FaWhatsapp size={30} className="text-maincolor hover:brightness-110" />
            </a>
            <a href="https://github.com/alvesxdani" target="_blank">
              <FiGithub size={30} className="text-maincolor hover:brightness-110" />
            </a>
          </div>
          <div className="flex gap-4 mt-3">
            <FaAt size={25} className="text-maincolor" />
            <p className='font-lato font-bold'>
              <a href="mailto:daniela.alvesm@outlook.com.br">daniela.alvesm@outlook.com.br</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contato
