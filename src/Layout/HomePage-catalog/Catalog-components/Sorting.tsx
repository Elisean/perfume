import { styled } from 'styled-components'
import React, {useState} from 'react'
import { FlexContainer } from '../../../Containers/Flex-container/FlexContainer'
import { Button } from '../../../Components/Button/Button'

export const sortItems = [
 'По популярности',
 'По рейтингу',
 'Сортировка от последнего',
 'Цена по убыванию',
 'Цена по возрастанию',
]


const SortWrapper = styled.div`
    position: absolute;
    z-index:2;
    top: 65px;
    left: 325px;
    @media (max-width:993px) {
      left:315px;
    }
    @media (max-width:768px) {
      left: 250px;
    }
    @media (max-width:568px) {
      left: 0;
      top:50px;
    }
   
    
    .btn-sort{
        font-family: 'Open Sans', sans-serif;
        background:#2B2825;
        -webkit-text-fill-color: #C09E6C;
        width:305px;
        padding: 20px 27px;
        font-size: 14px;
        border: none;
        border-radius:4px;
        box-shadow: 0px 2px 10px 0px rgba(184, 164, 142, 0.40);
        font-weight:600;
    }

`


export const Sorting:React.FC = () => {

  return (
    <SortWrapper>
      <FlexContainer direction='column'>
       {
        sortItems.map((sortItem) => (
          <Button btnSorting tabIndex={0}>{sortItem}</Button>
        ))
       }
      </FlexContainer>
    </SortWrapper>
  )
}
