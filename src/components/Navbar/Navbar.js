import React from 'react'
import * as S from "./Navbar.styles";

const Navbar = () => {
  return <S.ContainerNavbar>
    <S.ContainerLogo>
        <S.imageLogo src="/img/Logo.ico" alt="Logo Restaurant App" />
        <div>
            <h1>Dolce Rosa</h1>
            <h2>Exquisita gatronomía y ambiente</h2>
        </div>
    </S.ContainerLogo>
    <S.ContainerItems>
        <p>About me</p>
        <p>Projects</p>
        <S.button>Contact me</S.button>
    </S.ContainerItems>
</S.ContainerNavbar>;
};

export default Navbar;