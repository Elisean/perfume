import React, { ReactNode } from 'react'
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
 

export const SingleProduct:React.FC =  () => {
  const {id} = useParams();

  const [product, setProduct] = useState<any>([]);

  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetch(
      `https://64e6020b09e64530d17f6dd0.mockapi.io/Flavors/${id}`
    )
    .then((res) => res.json())
    .then((data) => {
      setIsLoading(false)
      setProduct(data)
     });  
  }, [id]);
 
  console.log(product.volumes)

  return (
    <SingleProductWrapperStyled>
        <Header/>

    {
      isLoading ? [...new Array(1)] :  <MainContainer>
      <AsideTitle>Каталог</AsideTitle>
      <Breadcrumbs/>
          <FlexContainer>
              <div>
                  <img src={product.url} alt="img-title" />
              </div>
              <div>
                
                <h2 className='card-name'>{product.title}</h2>
                <p className='card-subtitle'>Объем мл.</p>
                <FlexContainer wrap='wrap' justify='space-between'>

               
                  <button className='button-volume' tabIndex={0}>{product.volumes[0]}</button>
                
                  <button className='button-volume' tabIndex={1}>{product.volumes[1]}</button>
                
                  <button className='button-volume' tabIndex={2}>{product.volumes[2]}</button>
                
                  <button className='button-volume' tabIndex={3}>{product.volumes[3]}</button>


                </FlexContainer>
                <p className='card-subtitle'>Стоимость</p>
              </div>
          </FlexContainer>
      </MainContainer>
    }
       
        <Footer/>


    </SingleProductWrapperStyled>
  )
}
