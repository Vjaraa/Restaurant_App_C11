import styled from "styled-components";

export const ContainerProducts = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding-top: 50px;

  @media (max-width: 768px) {
    padding-top: 10px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 30px;

  span {
    font-size: 40px;
    background: linear-gradient(135deg, #aa5f50 0%, #e68571 100%);
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
  }
`;

export const ContentProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 468px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const TitleProducts = styled.h3`
  display: grid;
  padding: 8px 15px;
  font-weight: 700;
  font-size: 25px;
  text-align: center;
`;

export const ContentProductsImage = styled.div`
.contenedor {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Crea 3 columnas de tamaño igual */
  grid-gap: 20px; /* Espacio entre las columnas */
}


.columna img {
  max-width: 100%; /* Ajusta el tamaño máximo de la imagen al contenedor */
  height: auto;
}
`;
