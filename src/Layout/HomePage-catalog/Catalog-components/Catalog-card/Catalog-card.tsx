import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { FlexContainer } from '../../../../Containers/Flex-container/FlexContainer'
import { Button } from '../../../../Components/Button/Button'
import { Pagination } from '../Pagination';
import { FiltersContext } from '../../../../App/App'
import { useResize } from '../../../../Hooks/useResize';
import Skeleton from './Skeleton-catalog-card';
import { Link } from 'react-router-dom';



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

const CardItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background: var(--txt-dark, #36332E);
 

  .card-image{
    width:245px;
    height:220px;
    /* object-fit: cover; */
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
    display: flex;
    justify-content: center;
    align-items: center;
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
    &:hover{
      background: var(--gradient, linear-gradient(118deg, #C09E6C 0%, #FFEBCC 42.62%, #BF936B 100%));
      -webkit-text-fill-color: #36332E;
    }

    &:focus{
      background: var(--gradient, linear-gradient(118deg, #C09E6C 0%, #FFEBCC 42.62%, #BF936B 100%));
      -webkit-text-fill-color: #36332E;
    }
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
  @media (max-width: 768px) {
    .card-inner{
      padding:0 12px 0 16px;
    }
    .card-image{
      margin:15px auto 0 auto;
      width:210px;
      height:210px;
    }
    .card-title{
      top:235px;
    }

  }
  @media (max-width: 568px) {
    .card-inner{
      padding:0 30px 0 26px;
    }
    .card-image{
      margin:15px auto 0 auto;
      width:250px;
      height:250px;
    }
    .card-title{
      top:280px;
    }
    .card-volume{
      margin: 65px 0 15px 0;
    }
  }
`


export const CatalogCard:React.FC = () => {
  const [cards, setCards] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const {filtersOpen, setFiltersOpen} = useContext(FiltersContext);
  const { width, isScreenSm, isScreenMd, isScreenLg, isScreenXl, isScreenXxl } = useResize();
  

  const [isLoading, setIsLoading] = useState(true);
 
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
      countCards = 6;
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
        setIsLoading(false)
        setCards(data)      
     });  
  }, [ countCards, currentPage, filtersOpen, isScreenSm, isScreenMd, isScreenLg, isScreenXl, isScreenXxl]);
  
  return (
    <>
    <StyledCatalogWrapper>
    <div className={filtersOpen ? 'filterOpen' : 'filterClosed'}>

{
  isLoading ? [...new Array(12)].map((_, index) => <Skeleton key={index}/>) 
            : cards.map((card, index) => (   
    <CardItem key={index}>
         <Link style={{display:'flex'}} to={`/perfume/singleProduct/${card.id}`}> <img className='card-image' src={card.url} alt="card-img" /> </Link>
                    <div className='card-inner'>
                    <Link  to={`/perfume/singleProduct/${card.id}`}> <h2 className='card-title'>{card.title}</h2> </Link>
                      <p className='card-volume'>Объем мл.</p>
                      <FlexContainer wrap='wrap' justify='space-between'>
                        <button className='button-volume' tabIndex={0}>{card.volumes[0]}</button>
                        <button className='button-volume' tabIndex={1}>{card.volumes[1]}</button>
                        <button className='button-volume' tabIndex={2}>{card.volumes[2]}</button>
                        <button className='button-volume' tabIndex={3}>{card.volumes[3]}</button>
                      </FlexContainer>
                      <FlexContainer justify='space-between'>
                        <p className='price-title'>Стоимость:</p>
                        <p className='price'>{card.price + '₽'}</p>
                      </FlexContainer>
                        <Button btnCards top='-70px' padding='12px 72px'>в корзину</Button>
                  </div>
      </CardItem> 
      
    )
  )

}
</div>
    </StyledCatalogWrapper>
    <Pagination onChangePage={(number:any) => setCurrentPage(number)}/>
    </>
  )
}






     