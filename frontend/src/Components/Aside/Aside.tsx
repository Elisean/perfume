import React, {useContext, ReactNode} from 'react'
import { styled } from 'styled-components'
import { FiltersContext } from '../../App/App'

interface IAside{
  children? : ReactNode
}

const AsideStyledWrapper = styled.section`
  position: relative;
    
        .show-aside{
            display: flex;
            justify-content: center;
            position: fixed;
            top: 0;
            left: 0;
            width:100%;
            background-color: var(--gray);
            z-index:3;
            transition: .3s;
        }
        .show-aside::after{
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width:100%;
            min-height:100vh;
            display: block;
            background-color: #000000;
            z-index:3;
            opacity: .5;
            transition: .5s;
        }
        .hide-aside{
            content: '';
            position: fixed;
            top: -100%;
            left: 0;
            width:100%;
            min-height:100%;
            display: block;
            background-color: #000000;
            z-index:3;
            opacity: .5;
            transition: .5s;
        }
        .hide-aside:after{
            content: '';
            position: fixed;
            top: -100%;
            left: 0;
            width:100%;
            min-height:100%;
            display: block;
            background-color: #000000;
            z-index:3;
            opacity: .5;
            transition: .5s;
        }

    .show-aside-arrow{
      font-size:40px;
      position: absolute;
      top: 350px;
      left: 10px;
      z-index:6;
      color: var(--goldenWhite);
      transform: translate(0px, 100%) rotate(360deg);
      transition: .5s all;
    }
    .close-aside-arrow{
      font-size:40px;
      position: absolute;
      top: 50%;
      right: -100%;
      transition: .5s all;
      transform: translate(0px, -50%);
      z-index:6;
    }

`

export const Aside:React.FC<IAside> = (props:IAside) => {

  const {filtersOpen, setFiltersOpen} = useContext(FiltersContext);

    const body = document.body;
    filtersOpen ? body.classList.add('overflow') : body.classList.remove('overflow');


  return (
    <AsideStyledWrapper>
      <div className={filtersOpen ? 'show-aside' : 'hide-aside'}>
        {props.children}
        <div className={filtersOpen ? 'show-aside-arrow' : 'close-aside-arrow'} onClick={()=> setFiltersOpen(!filtersOpen)}>🠖</div>
      </div>

    </AsideStyledWrapper>
  )
}
