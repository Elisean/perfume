import React, { useState , useContext, ReactNode} from 'react'
import { styled } from 'styled-components'
import { FiltersContext } from '../../App/App'

interface IAside{
  children? : ReactNode
}



const AsideStyledWrapper = styled.section`
      
    .show-aside{
      width:100%;
      min-height:100vh;
      background-color: var(--gray);
      position: fixed;
      top: 0;
      right: 0;
      transition:.5s all;
      padding: 30px 60px 0 60px;
      overflow: scroll;
    }
    .hide-aside{
      width:100%;
      min-height:100vh;
      position: fixed;
      top:0;
      right: -100%;
    }
    .show-aside-response{
      font-size:40px;
      position: fixed;
      top: 50%;
      right: 83%;
      z-index:6;
      color: var(--goldenWhite);
      transform: translate(-50%, -50%) rotate(360deg);
      transition: .5s all;
    }
    .close-aside-response{
      font-size:40px;
      position: fixed;
      top: 50%;
      right: -100%;
      transform: translate(-50%, -50%) rotate(360deg);
      transition: .5s all;
    }

`

export const Modal:React.FC<IAside> = (props:IAside) => {

  const {filtersOpen, setFiltersOpen} = useContext(FiltersContext);

  const body = document.body;
  filtersOpen ? body.classList.add('overflow') : body.classList.remove('overflow');


  return (
    <AsideStyledWrapper>
      <div className={filtersOpen ? 'show-aside' : 'hide-aside'}>
        {props.children}
      </div>
      <div className={filtersOpen ? 'show-aside-response' : 'close-aside-response'} onClick={()=> setFiltersOpen(!filtersOpen)}>🠖</div>
    </AsideStyledWrapper>
  )
}
