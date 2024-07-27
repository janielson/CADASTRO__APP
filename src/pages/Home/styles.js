import styled from "styled-components"


export const Pagecontainer = styled.div`
height: 100vh;
width: 100vw;
background: radial-gradient(circle, rgba(174,238,192,1) 0%, rgba(0,0,0,1) 100%);
display: flex;
padding: 20px;
align-items: center;
flex-direction: column;








`;




export const Form = styled.form`
display: flex;
justify-content: center;
flex-direction: column;
margin-top: 30px;
padding: 30px 50px;


`;

export const Title = styled.h1`
 font-family: "Poppins", sans-serif;
 text-align: center;
 font-size: 38px;
 color: #fff;
 margin-bottom: 20px;


`;

export const ContainerInputs = styled.div`


`;

export const InputAgeName = styled.div`
display: flex;
gap: 10px;


input{
    width: 25vw;
    height: 40px;
    outline: none;
    border-radius: 10px;
    border: none;
    padding: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background: rgba(254, 126, 93, 0.6);
    color: #000;
    font-family: "Poppins", sans-serif;

   
}



input::placeholder {
    color: #000 /* Muda a cor do placeholder para vermelho */
}


input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input:focus::placeholder{
    opacity: 0;
}


div{
    font-size: 18px;
    margin-left: 10px;
    
   
}


span{
    color: crimson;
}



`;





export const InputEmail = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;



input{
    width: 90%;
    height: 40px;
    outline: none;
    border-radius: 10px;
    border: none;
    padding: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background: rgba(254, 126, 93, 0.6);
    color: #000;
    font-family: "Poppins", sans-serif;
    text-align: center;
}

div{
  width: 100%;
  text-align: center;
  margin-top: 12px;
}


span{
    
    color: crimson;

}

input::placeholder {
    color: #000 
}

input:focus::placeholder{
    opacity: 0;
}

 


`;


