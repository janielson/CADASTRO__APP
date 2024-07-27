import styled from 'styled-components'


export const Button = styled.button`
margin: 0 auto;
text-align: center;
font-family: "Poppins", sans-serif;
width: 30vw;
margin-top: 16px;
border-radius: 10px;
outline: none;
border: ${(props) => props.model === 'primary' ? 'none': '1px solid #fff' };
height: 5vh;
background: ${(props) => props.model === 'primary' ? 'linear-gradient(45deg,rgba(0, 0, 0, 0.7),rgba(128, 128, 128, 0.9))': 'transparent' };
color: azure;
opacity: 10;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
cursor: pointer;

&:hover{
    border: 1px solid #fe7e5d;
    background-color: ${(props) => props.model === 'primary' ? 'linear-gradient(45deg,rgba(0, 0, 0, 0.7),rgba(128, 128, 128, 0.9))' : '#fe7e5d' };
    
    
}

&:active{
    background: linear-gradient(45deg,rgba(0, 0, 0, 0.10),rgba(128, 128, 128, 0.12));
}

`; 



export const Input = styled.input`

`;





