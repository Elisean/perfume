import React, {useContext, ReactNode} from 'react'
import { styled } from 'styled-components'
import { FiltersContext } from '../../App/App'
import { createPortal } from 'react-dom'

interface IAside{
  children? : ReactNode
}

const AsideStyledWrapper = styled.section`
    position: relative;
    z-index:12;

  .show-aside-response{
    font-size:40px;
  }
  .close-aside-response{
    font-size:40px;
  }

  .aside-inner{
      height:100vh;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:flex-start;
  }
  .show-aside{
      width:100vw;
      min-height:100vh;
      position:fixed;
      top:0;
      left:0;
      background-color: #22191944;
      z-index:12;
      transition:0.3s;
  }
  .hide-aside{
    width:100%;
    min-height:100vh;
    position:fixed;
    top:0;
    left:100%;
    background-color: transparent;
    z-index:12;
    transition:0.3s;
  }
  .show-aside-response{
    position:relative;
    left:20px;
  }
  

` 


export const Aside:React.FC<IAside> = (props:IAside) => {

  const {filtersOpen, setFiltersOpen} = useContext(FiltersContext);

  const body = document.body;
  filtersOpen ? body.classList.add('overflow') : body.classList.remove('overflow');


  return (
    createPortal(
      <AsideStyledWrapper>
      <div className={filtersOpen ? 'show-aside' : 'hide-aside'}>
          {props.children}
          <div className='aside-inner'>
            <div className={filtersOpen ? 'show-aside-response' : 'close-aside-response'} onClick={()=> setFiltersOpen(!filtersOpen)}>🠖
              sssssssss
            </div>
          </div>
      </div>

    </AsideStyledWrapper>,document.body
    )
   
  )
}