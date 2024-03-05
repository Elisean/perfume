import React, { useState } from 'react'
import { Header } from '../../Components/Header/Header'
import { Footer } from '../../Components/Footer/Footer'
import { MainContainer } from '../../Containers/Main-container/Main-container'
import { AsideTitle } from '../../Components/Aside-title/Aside-title'
import { Breadcrumbs } from '../../Components/Breadcrumbs/Breadcrumbs'
import { FlexContainer } from '../../Containers/Flex-container/FlexContainer'
import { AsidePanel } from '../../Components/Aside-panel/AsidePanel'
import styled from 'styled-components'
import { MainForm } from '../../Components/Main-Form/Main-Form'
import { Input } from '../../Components/Input/Input'
import { Button } from '../../Components/Button/Button'
import { LocationForm } from './Location-form/LocationForm'
import { LocationUserData } from './Location-form/LocationUserData'


const StyledLocationPanelWrapper = styled.section`
  .locationPanel-inner{
    margin:0 0 0 20px;
  }
  .location-description{
    margin:20px 0 0 0;
  }
  .location-description-none{
      display:none;
  }
  .add-location{
    margin:20px 0 0 0;
    font-size:20px;
  }
  .location-add-address{
    margin:20px 0 0 0;
    color:var(--text);
    text-decoration:underline;
  }
  .location-add-address-none{
    display:none;
  }
`

export const LocationPanel = () => {

  const [openEditAddress, setOpenEditAddress] = useState(false);

  const userData = JSON.parse(localStorage.getItem("userData") || '[]') 

  

  return (
    <StyledLocationPanelWrapper>
    <Header/>
      <MainContainer>
        <AsideTitle>Мой аккаунт</AsideTitle>  
        <Breadcrumbs/>

      <FlexContainer>
        <AsidePanel/> 
        <div className='locationPanel-inner'>
            <AsideTitle>Адрес</AsideTitle>
            {
              userData.length !== 0 ? <LocationUserData/> : (
                <>
                <p className={openEditAddress ? "location-description-none" : "location-description"}>Следующие адреса будут использованы при оформлении заказов по-умолчанию</p>
                <h2 className='add-location'>Платёжный адрес:</h2>
                <button className={openEditAddress ? "location-add-address-none" : "location-add-address"} onClick={()=> setOpenEditAddress(!openEditAddress)}>Добавить</button>
                </> 
              ) 
            }
            {
              openEditAddress && <LocationForm/>
            }
         
        </div>
      </FlexContainer>

      </MainContainer>
      <Footer/>  
    </StyledLocationPanelWrapper>
  )
}

