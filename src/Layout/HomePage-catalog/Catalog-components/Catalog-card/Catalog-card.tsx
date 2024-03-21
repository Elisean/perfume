import React, { useState, useEffect, useContext} from 'react'
import styled from 'styled-components'
import { Pagination } from '../Pagination';
import { useResize } from '../../../../Hooks/useResize';
import { Skeleton } from './Skeleton-catalog-card';
import { Card } from '../../../../Components/Card/Card';
import FiltersStore from '../../../../Store/FiltersStore';
import { observer } from 'mobx-react-lite';


const StyledCatalogWrapper = styled.div`
 
   .filterOpen{
      display: grid;
      grid-template-columns: repeat(3, 305px);
      grid-template-rows: repeat(3, 500px);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      justify-content: flex-end;  
  }
  .filterClosed{
      display: grid;
      grid-template-columns: repeat(4, 305px);
      grid-template-rows: repeat(3, 500px);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
  }

  @media (max-width: 1300px) {
    .filterClosed{
      display: grid;
      grid-template-columns: repeat(3, 305px);
      grid-template-rows: repeat(3, 500px);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
  }
  
  .filterOpen{
      display: grid;
      grid-template-columns: repeat(2, 305px);
      grid-template-rows: repeat(3, 500px);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      justify-content: flex-end;  
  }
  }

  @media (max-width: 993px) {
    .filterClosed{
      display: grid;
      grid-template-columns: repeat(2, 305px);
      grid-template-rows: repeat(3, 500px);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      justify-content: center;
      
  }
  .filterOpen{
      display: grid;
      grid-template-columns: repeat(2, 305px);
      grid-template-rows: repeat(3, 500px);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      justify-content: center;  
  }
}
@media (max-width: 768px) {
    .filterClosed{
      display: grid;
      grid-template-columns: repeat(2, 240px);
      grid-template-rows: repeat(3, 470px);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      justify-content: center;
  }
  .filterOpen{
      display: grid;
      grid-template-columns: repeat(2, 240px);
      grid-template-rows: repeat(3, 470px);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      justify-content: center;  
  }
}
@media (max-width: 568px) {
    .filterClosed{
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(3, 520px);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      justify-content: center;
  }
  .filterOpen{
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(3, 520px);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      justify-content: center;  
  }
}
  margin:10px 0 0 0;

`



export const CatalogCard:React.FC<any> = observer(()=>  {
  const filtersContext = useContext(FiltersStore);
  
  const [cards, setCards] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { width, isScreenSm, isScreenMd, isScreenLg, isScreenXl, isScreenXxl } = useResize();
  
  const [isLoading, setIsLoading] = useState(true);



  let countCards = 0;

    if(isScreenXxl && !filtersContext.isFilters){
      countCards = 12;
    }else if (isScreenXxl && filtersContext.isFilters){
      countCards = 9;
    }else if(isScreenXl && !filtersContext.isFilters){
      countCards = 9;
    }else if(isScreenXl && filtersContext.isFilters){
      countCards = 6;
    }else if(isScreenLg && !filtersContext.isFilters){
      countCards = 6;
    }else if(isScreenLg && filtersContext.isFilters){
      countCards = 6;
    }else if(isScreenMd && !filtersContext.isFilters){
      countCards = 6;
    }else if(isScreenMd && filtersContext.isFilters){
      countCards = 6;
    }else if(isScreenSm && filtersContext.isFilters){
      countCards = 3;
    }else if(isScreenSm && !filtersContext.isFilters){
      countCards = 3;
    }else if(width >= 100 && filtersContext.isFilters){
      countCards = 3;
    }else if(width >= 100 && !filtersContext.isFilters){
      countCards = 3;
    }

  useEffect(() => {  
      fetch(
        `https://64e6020b09e64530d17f6dd0.mockapi.io/Flavors?page=${currentPage}&limit=${countCards}&`
      )
      .then((res) => res.json())
      .then((data) => {
            setCards(data)
            setIsLoading(true)
            
            setTimeout(()=>{
              setIsLoading(false)
            }, 1500)      
       });
  }, [currentPage]);

    
  
  return (
    <>
    <StyledCatalogWrapper>
    <div className={filtersContext.isFilters ? 'filterOpen' : 'filterClosed'}>

    {
      isLoading ? [...new Array(12)].map((_, index) => <Skeleton key={index}/>) 
                : cards.map((card:any, index:number) => (   
                <Card param={card} key={index} />
        ) 
      )
    }
 
    </div>
    </StyledCatalogWrapper>
    <Pagination onChangePage={(number:any) => setCurrentPage(number)}/>
    </>
  )
}
)





     