import React from 'react';
import * as S from "./Contact.styles";


const Contact = () => {
  return (
    <S.ContainerContact>
      <S.TitleContact>
            <p>Contáctanos</p>
            <p>A partir de tu contacto, nos comunicaremos contigo para revisar fechas y disponibilidad de horarios.</p>
            <p>+569 22258729</p>
            <p>contacto@dolcerosa.com</p>
            <p>Cruz del Sur #1220, Las Condes, Santiago de Chile</p>
          </S.TitleContact>
      <S.Title>Reserva con nosotros</S.Title>
      <S.ContainerForm>
        <S.Form>
          <S.InputForm placeholder='Tú nombre' type='text' name='name' />
          <S.InputForm placeholder='Tú email' type='email' name='email' />
          <S.TextArea placeholder='Escribe tu mensaje (Para reservas, especificar fecha y hora deseada)' name='message' />
          <S.Button type= "submit">Enviar</S.Button>
        </S.Form>
      </S.ContainerForm>
    </S.ContainerContact>
  )
}

export default Contact