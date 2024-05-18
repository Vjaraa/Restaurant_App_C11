import React, { useState, useRef } from "react";
import * as S from "./Contact.styles";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [contactDates, setContactDates] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successSendForm, setSuccessSendForm] = useState(false);
  const [errorSendForm, setErrorSendForm] = useState(false);

  const form = useRef();

  console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID);

  const onSubmit = (e) => {
    console.log("Clicando submit");

    // evitar recargo de página

    e.preventDefault();

    // validate form
    if (
      contactDates.name === "" ||
      contactDates.email === "" ||
      contactDates.message === ""
    ) {
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_USER_ID
        )
        .then(
          (result) => {
            setSuccessSendForm(true);
          },
          (error) => {
            setErrorSendForm(true);
          }
        );
    }

    //send form
  };

  return (
    <S.ContainerContact> 
      <S.TitleContact>
        <p>Contáctanos</p>
        <p>
          Nos comunicaremos contigo para revisar fechas y disponibilidad de
          horarios.
        </p>
        <p>+569 22258729</p>
        <p>contacto@dolcerosa.com</p>
        <p>Cruz del Sur #1220, Las Condes, Santiago de Chile</p>
      </S.TitleContact>
      <S.Title>Reserva con nosotros</S.Title>
      <S.ContainerForm>
        {successSendForm ? (
          <S.SucessMessage>El formulario ha sido enviado correctamente</S.SucessMessage>
        ) : (
          <S.Form onSubmit={onSubmit} ref={form}>
            <S.InputForm
              placeholder="Tú nombre"
              type="text"
              name="name"
              onChange={(e) =>
                setContactDates({ ...contactDates, name: e.target.value })
              }
              value={contactDates.name}
            />
            <S.InputForm
              placeholder="Tú email"
              type="email"
              name="email"
              onChange={(e) =>
                setContactDates({ ...contactDates, email: e.target.value })
              }
              value={contactDates.email}
            />
            <S.TextArea
              placeholder="Escribe tu mensaje (Para reservas, especificar fecha y hora deseada)"
              name="message"
              onChange={(e) =>
                setContactDates({ ...contactDates, message: e.target.value })
              }
              value={contactDates.message}
            />
            <S.Button type="submit">Enviar</S.Button>
          </S.Form>
        )}
        {errorSendForm && (<S.TextError>Se ha producido un error</S.TextError>)}
      </S.ContainerForm>
      
    </S.ContainerContact>
  );
};

export default Contact;
