import React from 'react'
import { FlexContainer } from '../../../../Containers/Flex-container/FlexContainer'
import styled from 'styled-components'
import { ROUTES } from "../../../../Utils/routes";
import { Link } from "react-router-dom";


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
@media (max-width:768px) {
    position:absolute;
    top: -100%;
    left: 0; 
   
    .nav-list{
        display:flex;
        flex-direction:column;    
       
    }
    .nav-item{
            padding:10px 0 0 0;
    }   
   }

`

export const HeaderMenu:React.FC = () => {
  return (
    <NavigationStyled>
    <FlexContainer>
        <nav className='header-nav'>
            <ul className='nav-list'>
                <Link to={{pathname:"/bonuses"}} state="Бонусы" className='nav-item' target='_blank'><li>Бонусы</li></Link>
                <Link to={{pathname:"/documentation"}} state="Документация" className='nav-item' target='_blank'><li>Документация</li></Link>
                <Link to={{pathname:"/aboutUs"}} state="О нас" className='nav-item' target='_blank'><li>О нас</li></Link> 
            </ul>
        </nav>
    </FlexContainer>    

    </NavigationStyled>
  )
}
