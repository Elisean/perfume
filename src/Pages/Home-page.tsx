import React from 'react'
import { Header } from '../Components/Header/Header'
import { Slider } from '../Components/Slider/Slider'
import { PopularFragrances } from '../Layout/Popular-fragrances/Popular-Fragrances'
import { Footer } from '../Components/Footer/Footer'
import { PurchaseBonuses } from '../Layout/Purchase-bonuses/Purchase-bonuses'


export const HomePage:React.FC = () => {
  return (
    <>
      <Header/>
      <Slider/>
      <PopularFragrances/>
      <PurchaseBonuses/>
      <Footer/>
    </>
  )
}
