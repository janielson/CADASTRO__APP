import styled from 'styled-components'






export const Background = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: linear-gradient(to right,#fe7e5d,#7f3841 );
height: 30vh;
width: 90vw;
max-width: 800px;
border-radius: 30px;
box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.7);
margin-top: ${(props) => props.model === 'listUser' ? '0': '100px' };




img{
 max-width: 100%;
 max-height: 100%;


}




`;


