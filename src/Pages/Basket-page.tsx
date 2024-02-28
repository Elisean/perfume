import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { MainContainer } from '../Containers/Main-container/Main-container'
import { Header } from '../Components/Header/Header'
import { Footer } from '../Components/Footer/Footer'
import { AsideTitle } from '../Components/Aside-title/Aside-title'
import { Breadcrumbs } from '../Components/Breadcrumbs/Breadcrumbs'
import { ReactComponent as BonusesIcon } from '../icons/bonuses-icon.svg'
import { Button } from '../Components/Button/Button'
import BasketStore from '../Store/BasketStore'
import { FlexContainer } from '../Containers/Flex-container/FlexContainer'
import { Input } from '../Components/Input/Input'
import checked from '../icons/checked.svg';



const StyledWrapperBasketPage = styled.section`
  .basket-points{
    background-color: var(--gray);
    padding:30px;
    margin:23px 0 0 0;
    border-radius:5px;
    width:955px;
    svg{
      margin:0 10px 0 0;
    }
  }
  .points-description{
    display:flex;
    align-items:center;
  }
  .basket-button{
    margin:20px 0 0 0;
    padding:12px 35px;
  }
  .product-inner{
    display:flex;
    margin:40px 0 20px 0;
    justify-content:space-between;
  
  }
  .product-image{
    width:80px;
    height:80px;
  }
  .product-remove{
      color:var(--text);
  }
  .product-check{
      width: 24px;
      height: 24px;
      border: 1px solid var(--border);
      border-radius:5px;
      
  }
  .product-check:checked{
      background-image: url(${checked});   
  }


` 

export const BasketPage = () => {
  
  const basketProductsContext = useContext(BasketStore);
  
  const basketProducts = basketProductsContext.cardsData

  return (
    <StyledWrapperBasketPage>
      <Header/>
      <MainContainer>
        <AsideTitle>Корзина</AsideTitle>
        <Breadcrumbs/>
          <div className='basket-points'>
            <div className='points-description'>
            <BonusesIcon/>
              У вас сейчас есть 100 баллов. Используйте их, чтобы получить скидку 100 ₽ на эту покупку
            </div>
          <Button className='basket-button'>Потратить баллы</Button>
          </div>

        {
          basketProducts.map((product:{id:number, cardName:string, price:string, volume?:string, imgUrl:string})=>{
            return (
              <div className='product-inner' key={product.id}>
                <MainContainer width='955px' margin='0'>
                  <FlexContainer>

                    <Input type='checkbox' className='product-check' />
                    <img className='product-image' src={product.imgUrl} alt="perfume" />

                    <FlexContainer direction='column' align='flex-start'>
                      <h2>{product.cardName}</h2>
                      <button className='product-remove'>удалить x</button>
                    </FlexContainer>
                    <FlexContainer>
                      <p>{product.price}</p>
                    </FlexContainer>
                  </FlexContainer>
                </MainContainer>
              </div>
            )
          })
        }
      </MainContainer>
    <Footer/>
    </StyledWrapperBasketPage>
  )
}
