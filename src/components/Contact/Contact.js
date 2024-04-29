import React from 'react';
import * as S from "./Contact.styles";

const Contact = () => {
  return (
    <S.ContainerContact>
      <S.Title>Contáctanos</S.Title>
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