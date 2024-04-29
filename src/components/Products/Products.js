import React from "react";
import * as S from "./Products.styles";

const Products = () => {
  return (
    <S.ContainerProducts>
      <S.Title>
        Algunos de nuestros{" "}
        <span>
          {" "}
          <br />
          Platos Especiales
        </span>
      </S.Title>
      <S.ContentProducts>
        <S.TitleProducts>
          <S.ContentProductsImage>
            <div className="contenedor">
              <div className="columna">
                <img src="/img/torta.jpg" alt="Imagen 1" />
              </div>
              </div>
          </S.ContentProductsImage>
        </S.TitleProducts>

        <S.TitleProducts>
          <S.ContentProductsImage>
            <div className="contenedor">
             
              <div className="columna">
                <img src="/img/06.jpg" alt="Imagen 2" />
              </div>
            </div>
          </S.ContentProductsImage>
        </S.TitleProducts>

        <S.TitleProducts>
          <S.ContentProductsImage>
            <div className="contenedor">
             
              <div className="columna">
                <img src="/img/07.jpg" alt="Imagen 3" />
              </div>
            </div>
          </S.ContentProductsImage>
        </S.TitleProducts>


      </S.ContentProducts>
    </S.ContainerProducts>
  );
};

export default Products;

/*
<div><img src="/img/torta.jpg" alt="Restaurant App" /></div>
      
<div><img src="/img/06.jpg" alt="Restaurant App" /></div>

<div><img src="/img/07.jpg" alt="Restaurant App" /></div>
*/


/*
<img src="/img/torta.jpg" alt="Restaurant App" />
           <p>Texto relacionado con la imagen 1</p>
              <img src="/img/06.jpg" alt="Restaurant App" />
            <p>Texto relacionado con la imagen 2</p>
              <img src="/img/07.jpg" alt="Restaurant App" />
            <p>Texto relacionado con la imagen 3</p>
            */