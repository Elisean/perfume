import React from 'react'
import { Header } from '../../Components/Header/Header'
import { Footer } from '../../Components/Footer/Footer'
import { MainContainer } from '../../Containers/Main-container/Main-container'
import { AsideTitle } from '../../Components/Aside-title/Aside-title'
import { Breadcrumbs } from '../../Components/Breadcrumbs/Breadcrumbs'
import { FlexContainer } from '../../Containers/Flex-container/FlexContainer'
import { AsidePanel } from '../../Components/Aside-panel/AsidePanel'

export const DownloadsPanel = () => {
  return (
    <div>
          <Header/>
<MainContainer>
 <AsideTitle>Мой аккаунт</AsideTitle>  
 <Breadcrumbs/>
<FlexContainer>
 <AsidePanel/> 
 Это страница загрузки
</FlexContainer>
 
</MainContainer>
<Footer/>
    </div>
  )
}

