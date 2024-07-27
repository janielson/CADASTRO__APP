import GroupOfPeople from "../../assets/users.png"
import { Background } from "./styles";






function TopBackground(model){
     
    return(

        <Background model={model} > 
        <img src={GroupOfPeople} alt="imagem com pessoas"/>
        </Background>


    )
}







export default TopBackground;