import React from 'react'
import styled, { css } from 'styled-components'
import { Accordion } from './Accordion';

export const priceList = [
 'Acqua di parma',
 'Ajmal',
 'Alexandre,J',
 'Amouage',
 'Anna Sui',
 'Antonio Banderas',
 'Acqua di parma',
 'Ajmal',
 'Alexandre,J',
 'Amouage',
 'Anna Sui',
 'Antonio Banderas',
 'Acqua di parma',
 'Ajmal',
 'Alexandre,J',
 'Amouage',
 'Anna Sui',
 'Antonio Banderas',
 'Acqua di parma',
 'Ajmal',
 'Alexandre,J',
 'Amouage',
 'Anna Sui',
 'Antonio Banderas',
 'Acqua di parma'
]


const StyledBrands = styled.div`

.wrapper-scroll{
  height:350px;
  overflow-Y:scroll;

  &::-webkit-scrollbar {
    width:14px;
  }

   &::-webkit-scrollbar-track{
    height:280px;
  } 
  &::-webkit-scrollbar-thumb{
    border-radius: 6px;
    background: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
  } 
}

.price-item{
  font-family: 'Open Sans', sans-serif;
  color: var(--text);
  font-size: 14px;
  text-align:left;
  font-weight: 700;
  line-height: 140%;
  text-transform: uppercase;
  padding: 16px 32px;
  cursor: pointer;
}
.price-item:hover{
  background: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
  -webkit-text-fill-color:var(--black);
}
`

export const Brands:React.FC = () => {
 
  return (
    <StyledBrands>
        <Accordion placeholder='Найти Парфюм...' title='Все' selectFilter='Все бренды'>
        <ul className='wrapper-scroll'>
        {
            priceList.map((priceItem) =>(
              <li className='price-item'>{priceItem}</li>
            ))
        }
        </ul>
        </Accordion>
    </StyledBrands>
  )
}
