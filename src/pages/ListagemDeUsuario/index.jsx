import { useEffect,useState } from "react"

import TopBackground from "../../componets/TopBackground"
import { Body } from "./styles"

import api from "../../serveces/api"







function ListaDeUsuario() {

    const [user,setUser] = useState([])



    useEffect(() => {
        const fetchData = async () => {
            const { data } = await api.get("/usuario")
            
            setUser(data)
        }
        
        fetchData()
    }, [ ]);



    


    return (
        <Body>
            <TopBackground model={"listUser"} />
            <h1>USUÁRIOS REGISTRADOS</h1>

         { user.map(users => (
            

            <div id={users.id}>
               <p>{users.name}</p>
               <p>{users.age}</p>
               <p>{users.email}</p>

            </div>

         ))}


        </Body>

    )
}


export default ListaDeUsuario