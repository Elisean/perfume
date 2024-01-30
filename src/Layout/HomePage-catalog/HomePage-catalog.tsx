import React from 'react'
import styled from 'styled-components'
import { MainContainer } from '../../Containers/Main-container/Main-container'
import { AsideTitle } from '../../Components/Aside-title/Aside-title'
import { SelectCards } from './Catalog-components/Select-cards'
import { CatalogCard } from './Catalog-components/Catalog-card/Catalog-card'


const WrapperCatalog = styled.div`
  

`

export const HomePageCatalog:React.FC = () => {

  return (
    <WrapperCatalog>
      <MainContainer catalogresponse={'true'}>
        <AsideTitle response={'true'}>Каталог</AsideTitle>
        <SelectCards/>
        <CatalogCard/>
      </MainContainer>
    </WrapperCatalog>
  )
}
