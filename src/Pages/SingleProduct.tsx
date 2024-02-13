import React, { useState, useEffect, useRef }  from 'react'
import styled from 'styled-components'
import { AsideTitle } from '../Components/Aside-title/Aside-title'
import { MainContainer } from '../Containers/Main-container/Main-container'
import { Header } from '../Components/Header/Header'
import { Footer } from '../Components/Footer/Footer'
import { Breadcrumbs } from '../Components/Breadcrumbs/Breadcrumbs'
import { FlexContainer } from '../Containers/Flex-container/FlexContainer'
import { useParams } from 'react-router-dom'
import { Button } from '../Components/Button/Button'
import { MainSelect } from '../Components/Main-select/Main-select'
import { ReactComponent as Chevron } from '../icons/chevron-down.svg'
import { Modal } from '../Components/Modal/Modal'
import { ReactComponent as Bonuses } from '../icons/bonuses-icon.svg';
import { ReactComponent as UserPhoto } from '../icons/modal-photo.svg';
import { ReactComponent as UserVideo } from '../icons/modal-video.svg';
import { Rating } from '../Components/Rating/Rating'





const SingleProductWrapperStyled = styled.section`

    font-family: 'Montserrat', sans-serif;

  .card-wrapper{
    margin:25px 0 50px 0;
    @media(max-width:768px) {
        position: relative;
       
    }
   
  }
  .card-inner{
    margin:0 0 0 20px;
    @media (max-width:568px) {
      margin: 0;
   }
  }
  .card-image{
   img{
    width:413px;
   }
   @media (max-width:768px) {
      img{
        width:260px;
        height:280px;
      }
   }
   @media (max-width:568px) {
      img{
        width:100%;
        height:260px;
      }
   }
  }
  .card-name{
    font-size: 24px;
    background: linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin:0 0 40px 0;
    @media (max-width:840px) {
      font-size:26px;
      margin:0 0 7px 0;
    }
    @media (max-width:768px) {
      font-size:20px;
    }
    @media (max-width:568px) {
      margin:10px 0 7px 0;
      height:50px;
    }
  }
  .card-subtitle{
    font-family: 'Open Sans', sans-serif;
    color: var(--text);
    font-size: 16px;
    font-weight: 400;
    line-height: 22.4px; 
    margin:0 0 10px 0;
    @media (max-width:568px) {
      margin:10px 0 10px 0;
    }
  }


   
  .button-volume{
    font-family: 'Montserrat', sans-serif;
    border-radius: 4px;
    border: 1px solid #D6B88D;
    background: #2B2825;
    box-shadow: 0px 2px 10px 0px rgba(184, 164, 142, 0.40);
    background: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 14px;
    font-weight:600;
    text-transform: uppercase;
    width:40px;
    height:40px;
    margin:0 20px 40px 0;
    @media (max-width:768px) {
      margin:0 20px 10px 0;
      width:30px;
      height:30px;
    }
    @media (max-width:568px) {
      width:40px;
      height:40px;
      margin:0;
    }
  }
  .button-volume:focus{
    background: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
    -webkit-text-fill-color: var(--black);
  }
  .card-step{
    display: flex;
    align-items: center;
    margin:0 0 20px 0;
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
  .card-price{
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 140%; 
    background: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing:1px;
    margin:0 0 27px 0;
  }
  .open-window{
    margin: 10px 0 20px 0;
    transition:.5s all;
    font-family: 'Open Sans', sans-serif;
    color: var(--text);
    font-size: 16px;
    opacity:1;
    visibility: visible;
    width:800px;
    @media (max-width:864px) {
      width:100%;
      br{
        display: none;
      }
    }
   
  }                                     
  .close-window{
    transition:.5s all;
    margin: -50px 0 0 0;
    font-family: 'Open Sans', sans-serif;
    color: var(--text);
    font-size: 16px;
    opacity:0;
    visibility: hidden;
    width:800px;
    @media (max-width:864px) {
      height:65px;
      width:100%;
      br{
        display: none;
      }
    }
   
  }

  .open-review{
      margin: 15px 0 20px 0;
      transition:.5s all;
      opacity:1;
      visibility: visible;
      display: flex;
      justify-content: flex-end;
      width: 850px;
      @media (max-width:864px) {
        justify-content: flex-start;
        width: 100%;
      }
      @media (max-width:768px) {
      margin: 45px 0 20px 0;
    }
  }
  .close-review{
       transition:.5s all;
       margin: -50px 0 0 0;
       opacity:0;
       visibility: hidden;   
       display: flex;
       justify-content: flex-end;
       width: 850px;
       @media (max-width:864px) {
        justify-content: flex-start;
        width: 100%;
      }
  }
 
  
`

export const SingleProduct:React.FC = () =>{
  const formText = useRef<HTMLFormElement>(null);
  const reviews = {};
  const [openDescription, setOpenDescription] = useState(false);
  const [openReviews, setOpenReviews] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [textValue, setTextValue] = useState('');

  
  let [count, setCount] = useState(1);
  const {id} = useParams();

  const send = async(event:{preventDefault: () => void;} ) => {

    
    event.preventDefault();

    //@ts-ignore
    reviews.review = textValue;


    try {
      const response = await fetch('http://localhost:3004/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviews),
      })
      console.log(response)
  
    } catch (error) {
      console.error('Error', error)
    }
  }

  const toggleModal = () =>{
    setOpenModal((showModal) => !showModal)
  }

  const decrease = (event:any) =>{
    
      if(count <= 1){
        setCount(count = 0)
      }else{
        setCount(count - 1)
      }
  }
  const increase = (event:any) =>{
    setCount(count + 1)
    if(count === 100){
      setCount(count = 100)
    }
 
  }
 
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
 
  return (
    <SingleProductWrapperStyled>
        <Header/>
    {
      isLoading ? [...new Array(1)] : <MainContainer cardResponse>
        
      <AsideTitle singleproductresponse={'true'} >Парфюмерия</AsideTitle>
     
        <Breadcrumbs />
          <div className='card-wrapper'>
          <FlexContainer cardResponse>
              <div className='card-image'>
                  <img src={product.url} alt="img-title" />
              </div>
              <div className='card-inner'>
                <h2 className='card-name'>{product.title}</h2>
                <p className='card-subtitle'>Объем мл.</p>
                <FlexContainer wrap='wrap' btnsCardResponse>
               
                  <button className='button-volume' tabIndex={0}>{product.volumes[0]}</button>
                
                  <button className='button-volume' tabIndex={1}>{product.volumes[1]}</button>
                
                  <button className='button-volume' tabIndex={2}>{product.volumes[2]}</button>
                
                  <button className='button-volume' tabIndex={3}>{product.volumes[3]}</button>

                </FlexContainer>
                <p className='card-subtitle'>Кол-во</p>
                <div className='card-step'>
                  <button className='step-minus' onClick={(event)=> decrease(event)}>-</button>
                  <button className='step-count'>{count}</button>
                  <button className='step-plus'onClick={(event)=> increase(event)}>+</button>
                </div>
                <p className='card-subtitle'>Стоимость</p>
                <p className='card-price'>{product.price}₽</p>
                <Button cardResponse padding='12px 72px'>В корзину</Button>
              </div>
          </FlexContainer>
          </div>
          <MainSelect cardProductSelect onClick={()=>setOpenDescription(!openDescription)}>
            Описание
           <Chevron/>
          </MainSelect>
          <p className={openDescription ? 'open-window' : 'close-window'}>Этот аромат для мужчин и женщин. Композиция аромата состоит из: апельсина, имбиря,бергамота, <br /> толуанского бальзама, ванили и мускуса. Уникальная композиция нот доставит удовольствие своему <br /> обладателю. А название аромата придаст ему уверенность и хорошее настроение</p>
          <MainSelect cardProductSelect onClick={()=> setOpenReviews(!openReviews)}>
            Отзывы
           <Chevron/>
          </MainSelect>
          <div className={openReviews? 'open-review' : 'close-review'}>
            <Button padding='12px 0' onClick={()=> setOpenModal(!openModal)}>Оставить отзыв</Button>
          </div>
           <Modal isOpen={openModal} onClose={toggleModal} modalTitle={product.title} >
           <div className='modal-bonuses-wrapper'>
                  <div className='modal-bonuses-icon'>
                  <Bonuses/>
                  </div>
                  <div className='modal-bonuses-description'>
                    <p className='modal-bonuses'>За текстовый отзыв Вы получите 100 бонусных баллов</p>
                    <p className='modal-bonuses'>За отзыв с фото 150 бонусных баллов</p>
                    <p className='modal-bonuses'>За видео-отзыв с фото 200 бонусных баллов</p>
                  </div>
            </div>

                <form className='modal-form'>
                  <div className="modal-form-stars">
                    <Rating/>
                    Оцените покупку*
                  </div>
                  <div className='modal-form-review'>
                    отзыв*
                    <textarea className='review'></textarea>
                  </div>

                </form>

           </Modal>
          
          <AsideTitle textAlign='center'>Вам так же может понравиться</AsideTitle>
      </MainContainer>
    }
        <Footer/>
    </SingleProductWrapperStyled>
  )
}



