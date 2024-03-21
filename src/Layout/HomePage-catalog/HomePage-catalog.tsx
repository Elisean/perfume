import React, { createContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { MainContainer } from '../../Containers/Main-container/Main-container'
import { AsideTitle } from '../../Components/Aside-title/Aside-title'
import { SelectCards } from './Catalog-components/Select-cards'
import { CatalogCard } from './Catalog-components/Catalog-card/Catalog-card'

interface IHomePage{
  search?:string
  
}

const WrapperCatalog = styled.div`


`


export const HomePageCatalog:React.FC<IHomePage> = () => {
  return (
    <WrapperCatalog>
    
      <MainContainer catalogresponse={'true'}>
    
        <AsideTitle response={'true'}>Каталог</AsideTitle>
        <SelectCards />
        <CatalogCard />

      </MainContainer>
    </WrapperCatalog>
  )
}

