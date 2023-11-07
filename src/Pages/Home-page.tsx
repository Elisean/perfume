import React from 'react'
import { Header } from '../Components/Header/Header'
import { Slider } from '../Components/Slider/Slider'
import { PopularFragrances } from '../Layout/Popular-fragrances/Popular-Fragrances'
import { Footer } from '../Components/Footer/Footer'

export const HomePage:React.FC = () => {
  return (
    <>
      <Header/>
      <Slider/>
      <PopularFragrances/>
      <Footer/>
    </>
  )
}
