import React from 'react'
import { MainContainer } from '../../Containers/Main-container/Main-container';
import { styled } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderBannerOne from "./../../images/slider-banner-1.png"
import SliderBannerTwo from "./../../images/slider-banner-2.png"
import SliderBannerThree from "./../../images/slider-banner-3.png"
import SliderBannerFour from "./../../images/slider-banner-4.png"
import SliderBannerFive from "./../../images/slider-banner-5.png"
import { register } from 'swiper/element/bundle';
import { Pagination } from'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


// register();

const Slides = [
    SliderBannerOne,
    SliderBannerTwo,
    SliderBannerThree,
    SliderBannerFour,
    SliderBannerFive
]


const SliderStyledWrapper = styled.div`

    font-family: 'Montserrat', sans-serif;
    position: relative;

    .slide-image{
        width:100%;
        object-fit: fill;
        height: 800px;
    }

    .swiper-pagination{
        display: flex;
        justify-content: center;
        align-items: center;
        bottom:30px;
    }
    .swiper-pagination-bullet{
        background-color: transparent;
        border: 1px solid var(--text);
        border-radius: 50%;
        width: 10px;
        height: 10px;
    }
    .swiper-pagination-bullet-active{
        width: 14px;
        height: 14px;
        padding:5px;
        background: linear-gradient(118deg, var(--text) 0%, #FFEBCC 42.62%, var(--text) 100%);
    } 
`

const params = {
    autoplay: {
        delay: 1500,
        disableOnInteraction: false
      },
  }


export const Slider:React.FC = () => {
  return (
   
    <SliderStyledWrapper>
    <Swiper {...params}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      speed={1000}
      pagination={{ clickable: true }}
      modules={
        [Pagination]
      }
    >
    
    {
        Slides.map((slide, index)  => {
            return (
                <SwiperSlide key={index}>
                    <img className='slide-image' src={slide} alt="image" />
                </SwiperSlide>
            )
        })
    }

    </Swiper>
    </SliderStyledWrapper>
  )
}
