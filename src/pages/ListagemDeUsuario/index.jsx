import { useEffect } from "react"

import TopBackground from "../../componets/TopBackground"
import { Body } from "./styles"

import api from "../../serveces/api"







function ListaDeUsuario(){

useEffect(() => {
    const fetchData = async () =>{
        const {data} = await api.get("/usuario")
        console.log(data)}
   
    fetchData()
}, []);

 
    return(
       <Body>
        <TopBackground model={"listUser"} />
        <h1>USUÁRIOS REGISTRADOS</h1>

            

       </Body>

    )
}


export default ListaDeUsuario