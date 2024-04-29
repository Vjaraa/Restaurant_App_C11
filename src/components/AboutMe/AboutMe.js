import React from "react";
import * as S from "./AboutMe.styles";

const AboutMe = () => {
  return (
    <S.ContainerAboutMe>
      <S.ContainerFlex>
        <S.ContainerText>
          <S.Title>
            <p>Dolce Rosa</p>
            <p>te invita a disfrutar</p>
            <p>de su exquisita gastronomía</p>
          </S.Title>
          <S.DescriptionText>
         Ubicados a pasos del metro Escuela militar, se encuentra Dolce Rosa, un lugar para compartir con tu persona especial.
          </S.DescriptionText>
          <S.ContainerIcons>
          </S.ContainerIcons>
        </S.ContainerText> 
        <S.ContainerImage>
            <img src="/img/inicial2normal.jpg" alt="Restaurant App" />
        </S.ContainerImage>
      </S.ContainerFlex>
    </S.ContainerAboutMe>
  );
};

export default AboutMe;
