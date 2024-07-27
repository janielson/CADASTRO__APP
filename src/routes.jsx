import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home';
import ListaDeUsuario from './pages/ListagemDeUsuario';


const router = createBrowserRouter([
  
    {
        path:'/',   // NOSSO PRIMEIRO PATH SEMPRE SERÁ / ELA E A RAIZ DO NOSSO PROJETO A NOSSA PAGINA PRINCIPAL.
        element: < Home />

    },

    {
        path:'usercreate',
        element: < ListaDeUsuario />
    }



]);

export default router;