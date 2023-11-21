import React from 'react'
import styled from 'styled-components'
import { MainContainer } from '../../Containers/Main-container/Main-container'
import { AsideTitle } from '../../Components/Aside-title/Aside-title'
import { SelectCards } from './Catalog-components/Select-cards'
import { CatalogCard } from './Catalog-components/Catalog-card'


const WrapperCatalog = styled.div`
  

`

export const HomePageCatalog:React.FC = () => {

  return (
    <WrapperCatalog>
      <MainContainer catalogResponse>
        <AsideTitle response>Каталог</AsideTitle>
        <SelectCards/>
        <CatalogCard/>
      </MainContainer>
    </WrapperCatalog>
  )
}
