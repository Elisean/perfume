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
import { observer } from 'mobx-react-lite'



const StyledWrapperBasketPage = styled.section`
  
  display: flex;
  flex-direction: column;
  .basket-content{
    min-height:31vh;
  }
 
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
    margin:0 45px;
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
  .product-name{
    margin:10px 0 25px 0;
  }
  .product-price{
    margin:10px 0 0 0;
  }

  .card-step{
    display: flex;
    align-items: center;
    margin:0 0 20px 140px;
    background-color: #2B2624;
    border-radius: 4px;
    width: 144px;
    justify-content: center;
  }

  .step-count{
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--text);
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 500;
    width:56px;
    height: 32px;
    border-radius: 4px;
    border: 1px solid #565147;
    margin: 0 10px;
  }
  .step-minus,.step-plus{
    font-size:40px;
    color: var(--text);
  }
  .step-minus{
    margin: -5px 0 0 0;
  }
` 

export const BasketPage = observer(() => {

  const basketProductsContext = useContext(BasketStore);
  
  const basketProducts = basketProductsContext.cardsData  
  
  return (
    <StyledWrapperBasketPage>
      <Header/>

      <MainContainer >
      <AsideTitle margin='0'>Корзина</AsideTitle>
        <Breadcrumbs/>
          <div className='basket-points'>
            <div className='points-description'>
            <BonusesIcon/>
              У вас сейчас есть 100 баллов. Используйте их, чтобы получить скидку 100 ₽ на эту покупку
            </div>
          <Button className='basket-button'>Потратить баллы</Button>
          </div>
        <div className='basket-content'>
        {
          basketProducts.map((product:{id:string, cardName:string, price:string, volume:number, imgUrl:string})=>{
            
            return (
              <div className='product-inner' key={product.id}>
                  <MainContainer padding='0' width='955px' margin='0'>
                  <FlexContainer >
                    <FlexContainer align='center'>
                      <Input type='checkbox' className='product-check' />
                      <img className='product-image' src={product.imgUrl} alt="perfume" />
                    </FlexContainer>
             
                    <FlexContainer direction='column' align='flex-start' flex='0 1 46%'>
                      <h2 className='product-name'>{product.cardName}, {product.volume + 'мл'}</h2>
                      <button className='product-remove' onClick={() => basketProductsContext.deleteCard(product.id)}>удалить x</button>
                    </FlexContainer>
                    <FlexContainer>
                      <p className='product-price'>{product.price}</p>
                    </FlexContainer>
                    <div className='card-step'>
                      <button className='step-minus' onClick={()=> basketProductsContext.decrease(product.id)}>-</button>
                      <button className='step-count'>{product.volume}</button>
                      <button className='step-plus' onClick={()=> basketProductsContext.increase(product.id)}>+</button>
                    </div>
                  </FlexContainer>
                  </MainContainer>
              </div>
            )
          })
        }
        </div>
      </MainContainer>
    <Footer />
    </StyledWrapperBasketPage>
  )
})
