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


const BrandContext = createContext<any>('')

export const HomePageCatalog:React.FC<IHomePage> = () => {

  const [allFilters, setAllFilters] = useState({
    brand:'',
    notes:'',
    price:[]
  });

  const getBrands = (brandItem:any) =>{
    setAllFilters({...allFilters,
      brand:brandItem
    });
    
  }
  
  const getNotes = (noteItem:any) =>{
    setAllFilters({...allFilters,
      notes:noteItem
    })
  }

    const getPrices = (priceItem:[]) =>{
      setAllFilters({...allFilters,
        price:priceItem
      }) 
    }
      
 

  return (
    <WrapperCatalog>
    
      <MainContainer catalogresponse={'true'}>
      <BrandContext.Provider value={{allFilters, setAllFilters}}>
        <AsideTitle response={'true'}>Каталог</AsideTitle>
        <SelectCards receiveBrands={getBrands} receiveNotes={getNotes} receivePrices={getPrices} />
        <CatalogCard setSearch={setAllFilters} search={allFilters} />
        </BrandContext.Provider>
      </MainContainer>
    </WrapperCatalog>
  )
}

