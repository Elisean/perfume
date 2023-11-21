import React, { useState, useEffect, ReactNode, useContext } from 'react'
import styled from 'styled-components'
import { FlexContainer } from '../../../Containers/Flex-container/FlexContainer'
import { Button } from '../../../Components/Button/Button'
import { Pagination } from './Pagination';
import { FiltersContext } from '../../../Routes/Routes';
import { useResize } from '../../../Hooks/useResize';


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
@media (max-width: 767px) {
    .filterClosed{
      display: grid;
      grid-template-columns: repeat(2, 240px);
      grid-template-rows: repeat(3, 500px);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      justify-content: center;
  }
  .filterOpen{
      display: grid;
      grid-template-columns: repeat(2, 240px);
      grid-template-rows: repeat(3, 500px);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      justify-content: center;  
  }
}
@media (max-width: 568px) {
    .filterClosed{
      display: grid;
      grid-template-columns: repeat(1, 285px);
      grid-template-rows: repeat(3, 500px);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      justify-content: center;
  }
  .filterOpen{
      display: grid;
      grid-template-columns: repeat(1, 285px);
      grid-template-rows: repeat(3, 500px);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      justify-content: center;  
  }
}
  margin:20px 0 0 0;

`

const CardItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background: var(--txt-dark, #36332E);
 

  .card-image{
    width:245px;
    height:220px;
    object-fit: cover;
    border-radius:4px;
    margin:30px auto 0 auto;
  }
  .card-inner{
    font-family: 'Open Sans', sans-serif;
    color: var(--txt, #BEAE97);
    padding:0 30px; 
    height: 200px;
  }

  .card-title{
    font-size: 16px;
    position: absolute;
    top:260px;
    display: flex;
    padding:0 20px 0 0;
  }
  .card-volume{
    margin:60px 0 15px 0;
  }
  .button-volume{
    display:flex;
    justify-content:center;
    align-items:center;
    width:34px;
    height:34px;
    border-radius: 4px;
    border: 1px solid #D6B88D;
    background: var(--gradient, linear-gradient(118deg, #C09E6C 0%, #FFEBCC 42.62%, #BF936B 100%));
    box-shadow: 0px 2px 10px 0px rgba(184, 164, 142, 0.40);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin:0 0 15px 0;
    font-family: Montserrat;
    font-weight:600;
    cursor: pointer;
  }
  .price-title{
    font-size: 18px;
    font-weight: 400;
    line-height: 140%; 
    margin:0 0 90px 0;
  }
  .price{
    background: var(--gradient, linear-gradient(118deg, #C09E6C 0%, #FFEBCC 42.62%, #BF936B 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 18px;
    font-weight: 700;
    padding: 0 5px 0 0;
  }

`


export const CatalogCard:React.FC = () => {
  const [cards, setCards] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const {filtersOpen, setFiltersOpen} = useContext(FiltersContext);
  const { width, isScreenSm, isScreenMd, isScreenLg, isScreenXl, isScreenXxl } = useResize();

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
    }else if(isScreenMd && !filtersOpen ){
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
      `http://localhost:4000/flavors?_limit=${countCards}&_page=${currentPage}` 
    )
    .then((res) => res.json())
    .then((data) => {
      setCards(data)
     });  
  }, [ currentPage, filtersOpen, isScreenSm, isScreenMd, isScreenLg, isScreenXl, isScreenXxl]);
  
  return (
    <>
    <StyledCatalogWrapper>
  
    <div className={filtersOpen ? 'filterOpen' : 'filterClosed'}>

{
  cards.map((card, index) => {

    return (   
    <CardItem key={index}>
         <img className='card-image' src={card.url} alt="card-img" />
                    <div className='card-inner'>
                      <h2 className='card-title'>{card.title}</h2>
                      <p className='card-volume'>Объем мл.</p>
                      <FlexContainer wrap='wrap' justify='space-around'>
                        <button className='button-volume'>{card.volumes[0]}</button>
                        <button className='button-volume'>{card.volumes[1]}</button>
                        <button className='button-volume'>{card.volumes[2]}</button>
                        <button className='button-volume'>{card.volumes[3]}</button>
                      </FlexContainer>
                      <FlexContainer justify='space-between'>
                        <p className='price-title'>Стоимость:</p>
                        <p className='price'>{card.price + '₽'}</p>
                      </FlexContainer>
                      <Button btnCards top='-70px' left='0' padding='12px 72px'>в корзину</Button>
                  </div>
      </CardItem>
    )
  })

}
</div>
    </StyledCatalogWrapper>
    <Pagination onChangePage={(number:any) => setCurrentPage(number)}/>
    </>
  )
}






     