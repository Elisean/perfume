import React from 'react'
import { Link, useLocation } from 'react-router-dom'



export const Crumb:React.FC = () => {
    const { state } = useLocation()


  return (
    <>
         <Link to={"/Perfume"}>Главная / </Link>
         <span style={{color:'#7A7364'}}>{state}</span>
    </>
   
  )
}
