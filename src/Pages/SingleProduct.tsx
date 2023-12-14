import React from 'react'
import styled from 'styled-components'
import { AsideTitle } from '../Components/Aside-title/Aside-title'
import { MainContainer } from '../Containers/Main-container/Main-container'
import { Header } from '../Components/Header/Header'
import { Footer } from '../Components/Footer/Footer'
import { Breadcrumbs } from '../Components/Breadcrumbs/Breadcrumbs'
import { FlexContainer } from '../Containers/Flex-container/FlexContainer'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


const SingleProductWrapperStyled = styled.section`



`
 

export const SingleProduct:React.FC = () => {
  const {id} = useParams();

  const [product, setProduct] = useState([]);
  
  useEffect(() => {
    fetch(
      `https://64e6020b09e64530d17f6dd0.mockapi.io/Flavors/${id}`
    )
    .then((res) => res.json())
    .then((data) => {
      setProduct(data)
     });  
  }, [id]);
 
  console.log(product)

  return (
    <SingleProductWrapperStyled>
        <Header/>
        <MainContainer>
        <AsideTitle>Каталог</AsideTitle>
        <Breadcrumbs/>
            <FlexContainer>
                <div>
                           {/* @ts-ignore */}
                    <img src={product.url} alt="title-image" />
                </div>
                <div>
                   {/* @ts-ignore */}
                  <h2 className='card-name'>{product.title}</h2>
                  <p className='card-subtitle'>Объем мл.</p>
                  <FlexContainer wrap='wrap' justify='space-between'>

              

                    {/* @ts-ignore */}
                    <button className='button-volume' tabIndex={0}>{product.volumes[0]}</button>
                    {/* @ts-ignore */}
                    <button className='button-volume' tabIndex={1}>{product.volumes[1]}</button>
                    {/* @ts-ignore */}
                    <button className='button-volume' tabIndex={2}>{product.volumes[2]}</button>
                    {/* @ts-ignore */}
                    <button className='button-volume' tabIndex={3}>{product.volumes[3]}</button>
                  </FlexContainer>
                  <p className='card-subtitle'>Стоимость</p>
                </div>
            </FlexContainer>
        </MainContainer>
        <Footer/>


    </SingleProductWrapperStyled>
  )
}
