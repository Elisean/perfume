import React from 'react'
import styled from 'styled-components'
import { MainContainer } from '../../Containers/Main-container/Main-container'
import { FlexContainer } from '../../Containers/Flex-container/FlexContainer'
import {ReactComponent as Logo} from '../../icons/logo.svg';
import { FooterNavigation } from './Footer-navigation/Footer-navigation';



const FooterStyled = styled.div`
    font-family: 'Open Sans', sans-serif;
    
    margin:50px 0 0 0;
    padding:30px 0;
    background-color: var(--black);

    .footer-logo{
        margin:0 auto;
    }
    .footer-tm{
        font-size:14px;
        text-align: center;
        margin:60px 0 10px 0;
    }
    .privacy-policy{
        font-size:14px;
        text-align: center;
    }
` 



export const Footer:React.FC = () => {
  return (
    <FooterStyled>
        <MainContainer footerResponse>
            <FlexContainer direction='column'>
                <div className='footer-logo'>
                    <Logo/>
                </div>
                <FooterNavigation/>
            <p className='footer-tm'>© Parfumpomotivam 2023</p>      
            <p className='privacy-policy'>Политика конфиденциальности</p>      
            </FlexContainer>
        </MainContainer>
    </FooterStyled>
  )
}
