import React, {useContext, ReactNode} from 'react'
import { styled } from 'styled-components'
import { FiltersContext } from '../../App/App'

interface IAside{
  children? : ReactNode
}

const AsideStyledWrapper = styled.section`

    position: relative;

    .show-aside{
      width:100%;
      min-height:100vh;
      background-color: #36332e5c;
      position: fixed;
      top: 0;
      right: 0;
      transition:.5s all;
      padding: 30px 60px 0 60px;
      overflow: scroll;
      
      z-index:5;
    }
    .hide-aside{
      width:100%;
      min-height:100vh;
      position: fixed;
      top:0;
      right: -100%;
      z-index:5;
    }
    /* Попробуй сделать псевдоклассами */
    
    .show-aside-arrow{
      font-size:40px;
      position: absolute;
      top: 50%;
      left: 10px;
      z-index:6;
      color: var(--goldenWhite);
      transform: translate(0px, 0px) rotate(360deg);
      transition: .5s all;
    }
    .close-aside-arrow{
      font-size:40px;
      position: absolute;
      top: 0;
      right: 0;
      /* transform: translate(-50%, -50%) rotate(360deg); */
      transition: .5s all;
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
