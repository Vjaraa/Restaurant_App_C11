import React, { useState } from "react";
import * as S from "./Navbar.styles";

const Navbar = () => {
const [showMenuBurger, setshowMenuBurger] = useState(false)

console.log(showMenuBurger)

  return <S.ContainerNavbar>
    <S.ContainerLogo>
        <S.imageLogo src="/img/Logo.ico" alt="Logo Restaurant App" />
        <div>
            <h1>Dolce Rosa</h1>
            <h2>Deliciosa Gatronomía</h2>
        </div>
    </S.ContainerLogo>

        <S.ContainerBurger onClick={() => setshowMenuBurger(!showMenuBurger)}>
            <S.BurgerMenu />
            <S.BurgerMenu />
            <S.BurgerMenu />
        </S.ContainerBurger>

    <S.ContainerItems showMenuBurger={showMenuBurger}>
        <p>Sobre nosotros</p>
        <p>Dolce Menú</p>
        <S.button>Reservaciones</S.button>
    </S.ContainerItems>
</S.ContainerNavbar>;
};

export default Navbar;