import React from 'react'
import { FlexContainer } from '../../../../Containers/Flex-container/FlexContainer'
import styled from 'styled-components'

const NavigationStyled = styled.div`

.header-nav{
    margin: 0 0 0 100px
}
.nav-list{
    display:flex;
}
.nav-item{
    padding:0 0 0 105px;
}
@media (max-width:1150px) {
    .header-nav{
        margin: 0 0 0 0;
    }
    .nav-item{
        padding:0 0 0 100px;

        &:first-child{
            padding:0 0 0 0;
        }
    }   
}
@media (max-width:993px) {
  
    .nav-item{
        padding:0 0 0 50px;
    }   
}
@media (max-width:767px) {
    position:absolute;
    top: -100%;
    left: 0; 
   
    .nav-list{
        display:flex;
        flex-direction:column;    
       
    }
    .nav-item{
            padding:10px 0 0 0;
            &:hover{

            }
    }   
   }

`

export const HeaderMenu:React.FC = () => {
  return (
    <NavigationStyled>
    <FlexContainer>
        <nav className='header-nav'>
            <ul className='nav-list'>
                <li className='nav-item'>Бонусы</li>
                <li className='nav-item'>Документация</li>
                <li className='nav-item'>О нас</li>
            </ul>
        </nav>
    </FlexContainer>    

    </NavigationStyled>
  )
}
