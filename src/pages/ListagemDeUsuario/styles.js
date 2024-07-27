import styled,{keyframes} from "styled-components"


const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Body = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: #000;
height: 100vh;
width: 100vw;
padding: 20px;

h1{
    align-self: center;
    font-size: 40px;
    font-family: "Poppins", sans-serif;
    color: azure;
    font-weight: 600;
    font-style: normal;
    margin-top: 20px;

    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    animation: ${pulse} 3s infinite; /* Aplica a animação pulsante */
    transition: color 0.3s ease, text-shadow 0.3s ease;
    
    
 

}



`;

