import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ContainerContact = styled.div`
padding: 50px 100px;


@media (max-width: 768px) {
    padding: 20px 0px;
    
  }

`;

export const Title = styled.h2`
text-align: center;
font-size: 30px;
color: #aa5f50;
`;

export const ContainerForm = styled.div`
max-width: 600px;
border-radius: 10px;
box-shadow: 0 0 12px rgb(0 0 0 / 16%);
padding: 30px;
margin: 0 auto;
`;

export const Form = styled.form`
box-sizing: border-box;
`;

export const InputForm = styled.input`
padding: 10px;
border-radius: 6px;
border: 2px solid #e68571;
background-color: transparent;
font-size: 16px;
display: block;
width: 100%;
margin-bottom: 15px;
color: #e68571;
`;

export const TextArea = styled.textarea`
padding: 10px;
border-radius: 6px;
border: 2px solid #e68571;
background-color: transparent;
font-size: 16px;
display: block;
width: 100%;
margin-bottom: 15px;
`;

export const Button = styled.button`
color: ${colors.TEXT_WHITE};
box-shadow: ${colors.BOX_SHADOW};
background: linear-gradient(135deg, #aa5f50 0%, #e68571 100%);
padding: 10px 40px;
border-radius: 999px;
border: none;
margin: 15px 0;
font-weight: 700;
cursor: pointer;
width: 150px;
text-transform: uppercase;
`;

export const TitleContact = styled.h1`
  margin: 0;
  padding: 50px 100px;
  text-align: center;

  p {
    margin: 0;
  }

  p:nth-child(1) {
    font-size: 40px;
    background: linear-gradient(135deg, #aa5f50 0%, #e68571 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-bottom: 30px;
  }

  p:nth-child(2) {
    font-size: 20px;
    background-color: black;
    background-clip: text;
    padding-bottom: 30px;
  }

  p:nth-child(3) {
    font-size: 20px;
    background-color: black;
    background-clip: text;
    padding-bottom: 30px;
    color: #aa5f50;
  }

  p:nth-child(4) {
    font-size: 20px;
    background-color: black;
    background-clip: text;
    padding-bottom: 30px;
    color: #aa5f50;
  }

  p:nth-child(5) {
    font-size: 20px;
    background-color: black;
    background-clip: text;
    padding-bottom: 30px;
    color: #e68571;
  }

  @media (max-width: 768px) {
    padding: 0;
    text-align: center;

    p:nth-child(2) {
      font-size: 2rem;
    }
  }
`;

export const TextError = styled.p`
color: red;
font-size: 15px;
`;

export const SucessMessage = styled.p`
color: #aa5f50;
font-size: 15px;
`;