import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ContainersobreNosotros = styled.div``;

export const ContainerFlex = styled.div`
display: flex;
align-items: center;
justify-content: center;
max-width: 900px;
margin: 0 auto;

@media (max-width: 768px){ 
display: block;
padding: 0px 30px;
}
`;

export const ContainerText = styled.div`
padding: 0px 30px;

@media (max-width: 768px){ 
padding: 0px;
}
`;

export const Title = styled.h1`
margin: 0;
padding: 20px 0;

p {
margin: 0;
}

p:nth-child(2) {
font-size: 55px;
background: ${colors.TEXT_GRADIENT_PURPLE};
background-clip: text !important;
-webkit-text-fill-color: transparent !important;
}

@media (max-width: 768px){ 
padding: 0px;
text-align: center;

p:nth-child(2) {
    font-size: 2rem;
    }
}
`;