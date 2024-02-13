import React, { useState, useEffect, useContext} from 'react'
import styled from 'styled-components'
import { Pagination } from '../Pagination';
import { FiltersContext } from '../../../../App/App'
import { useResize } from '../../../../Hooks/useResize';
import { Skeleton } from './Skeleton-catalog-card';
import { Card } from '../../../../Components/Card/Card';
import { observer } from 'mobx-react-lite';
import  Store  from '../../../../Store/FiltersStore';


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



export const CatalogCard:React.FC<any> = observer((filter)=>  {
  
  
  const storeContext = useContext(Store);

  const filtersValue = storeContext.value;
  const filtersBrand = storeContext.brand;

  console.log(filtersValue);
 
  const [cards, setCards] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { width, isScreenSm, isScreenMd, isScreenLg, isScreenXl, isScreenXxl } = useResize();
  
  const [isLoading, setIsLoading] = useState(true);
  const {filtersOpen, setFiltersOpen} = useContext(FiltersContext);
  


  let countCards = 0;

    if(isScreenXxl && !filtersOpen){
      countCards = 12;
    }else if (isScreenXxl && filtersOpen){
      countCards = 9;
    }else if(isScreenXl && !filtersOpen ){
      countCards = 9;
    }else if(isScreenXl && filtersOpen ){
      countCards = 6;
    }else if(isScreenLg && !filtersOpen ){
      countCards = 6;
    }else if(isScreenLg && filtersOpen ){
      countCards = 6;
    }else if(isScreenMd && !filtersOpen ){
      countCards = 6;
    }else if(isScreenMd && filtersOpen ){
      countCards = 6;
    }else if(isScreenSm && filtersOpen ){
      countCards = 3;
    }else if(isScreenSm && !filtersOpen ){
      countCards = 3;
    }else if(width >= 100 && filtersOpen ){
      countCards = 3;
    }else if(width >= 100 && !filtersOpen ){
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
      
  }, [currentPage, countCards, filtersOpen, isScreenSm, isScreenMd, isScreenLg, isScreenXl, isScreenXxl]);

  
  useEffect(()=>{

    fetch(`https://64e6020b09e64530d17f6dd0.mockapi.io/Flavors?page=${currentPage}&filter=${filtersValue}&limit=${countCards}&`)
    .then((res) => res.json())
    .then((data) => {
      setCards(data) 
      setIsLoading(true)

      setTimeout(()=>{
        setIsLoading(false)
      }, 1500)
    });
   
  },[filtersValue, currentPage])
 
   
  useEffect(()=>{

        fetch(`https://64e6020b09e64530d17f6dd0.mockapi.io/Flavors?filter=${filtersBrand}&`)
        .then((res) => res.json())
        .then((data) => {
          setCards(data) 
          setIsLoading(true)
         
          setTimeout(()=>{
            setIsLoading(false)
          }, 1500)
        });


  },[filtersBrand])
  
    



  return (
    <>
    <StyledCatalogWrapper>
    <div className={filtersOpen ? 'filterOpen' : 'filterClosed'}>
    {
      isLoading ? [...new Array(12)].map((_, index) => <Skeleton key={index}/>) 
                : cards.map((card, index) => (   
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





     