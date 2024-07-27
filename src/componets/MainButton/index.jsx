import { Button  } from './styles'

import PropTypes from 'prop-types';



function DefaultButton({children, model, ...props} ){
   
    return(
       <Button {...props} model={model}>{children}</Button>
       
        
    );
}


DefaultButton.proptypes = {
    children: PropTypes.node.isRequired,
    model: PropTypes.string


}




export default DefaultButton;