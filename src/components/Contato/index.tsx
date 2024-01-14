'use client'
import React, { FormEvent, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Input, TextArea } from '../Inputs'
import Button from '../Button'
import { FaLinkedin } from 'react-icons/fa6'
import { FaWhatsapp } from 'react-icons/fa6'
import { FiGithub } from 'react-icons/fi'
import { FaAt } from 'react-icons/fa6'

const Contato = () => {
  const form = useRef<HTMLFormElement>(null)
  const [btn, setBtn] = useState('Enviar')
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [msg, setMsg] = useState()

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setBtn('Enviando...')

    emailjs
      .sendForm(
        'service_felgnko',
        'template_31pelei',
        e.currentTarget,
        '4VQ7DIqu-yhhnT3CK',
      )
      .then(
        (result) => {
          console.log(result.status)
        },
        (error) => {
          console.log(error.text)
        },
      )
      .finally(() => {
        setBtn('Enviado!')
      })
  }

  return (
    <section
      id="contato"
      className="flex flex-col justify-center items-center align-middle w-100 min-h-[90vh] gap-[5rem] p-10"
    >
      <h2 className="font-montserrat font-bold text-center text-maincolor">
        Contato
      </h2>

      <div className="flex flex-col-reverse md:flex-row w-[100%] gap-10 justify-center align-middle">
        <form className="w-[100%] md:w-[40%]" onSubmit={sendEmail} ref={form}>
          <Input type="text" id="user_name" label="Nome" />
          <Input type="email" id="user_email" label="E-mail" />
          <TextArea label="Mensagem" id='message'/>
          <Button size="md" type="submit">
            {btn}
          </Button>
        </form>
        <div className="w-[100%] md:w-[40%] flex flex-col gap-3">
          <h3 className="font-bold">Outros contatos: </h3>
          <div className="flex gap-5">
            <a href="http://linkedin.com/in/daniela-alvesm" target="_blank">
              <FaLinkedin
                size={30}
                className="text-maincolor hover:brightness-110"
              />
            </a>
            <a href="https://wa.me/5521983055922" target="_blank">
              <FaWhatsapp
                size={30}
                className="text-maincolor hover:brightness-110"
              />
            </a>
            <a href="https://github.com/alvesxdani" target="_blank">
              <FiGithub
                size={30}
                className="text-maincolor hover:brightness-110"
              />
            </a>
          </div>
          <div className="flex gap-4 mt-3">
            <FaAt size={25} className="text-maincolor" />
            <p className="font-lato font-bold">
              <a href="mailto:daniela.alvesm@outlook.com.br">
                daniela.alvesm@outlook.com.br
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contato
