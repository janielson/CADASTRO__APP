import { useRef } from "react"
import api from '../../serveces/api'

import {  useNavigate } from 'react-router-dom'


import { 
  ContainerInputs,
  Form,
  InputAgeName, 
  InputEmail, 
  Pagecontainer,
  Title } from "./styles"



import  Button  from "../../componets/MainButton"
import TopBackgroud from "../../componets/TopBackground";


function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();


  const navigate = useNavigate()

 

  async function registrarUsuario(){
    const data = await api.post(('/usuario'),{
       email: inputEmail.current.value,
       age: parseInt(inputAge.current.value),
       name: inputName.current.value

    });

    console.log(data)

  }

  return (
    <Pagecontainer>
      
       <TopBackgroud />
     
      <Form>
      <Title>CADASTRAR USUÁRIO</Title>

      <ContainerInputs>
        
         <InputAgeName>
         <div>
            <div>nome<span>*</span></div>
            <input type="text" placeholder="Nome do usuário" ref={inputName} ></input>
          </div>

          <div>
            <div>idade<span>*</span></div>
            <input type="number" placeholder="Idade do usuário" ref={inputAge}></input>
          </div>
         </InputAgeName>

          <InputEmail>
            <div>E-MAIL<span>*</span> </div>
            <input type="text" placeholder="e-mail do usuário" ref={inputEmail}></input>
          </InputEmail>



        
      </ContainerInputs>
      
      <Button type='button' onClick={registrarUsuario} model='primary'> CADASTRAR USUÁRIO </Button>
      <Button type='button' onClick={() => navigate('/usercreate')} > VER USUARIOS </Button>

      </Form>


    </Pagecontainer>
   
  )
}

export default Home
