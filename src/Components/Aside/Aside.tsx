import React, {useContext, ReactNode} from 'react'
import { styled } from 'styled-components'
import { FiltersContext } from '../../App/App'
import { createPortal } from 'react-dom'
import { ReactComponent as Arrow } from '../../icons/arrow.svg'
interface IAside{
  children? : ReactNode
}

const AsideStyledWrapper = styled.section`
    position: fixed;
    min-width:100vw;
    min-height:100vh;
    z-index:5;
    
  .aside-inner{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:flex-start;
  }
  .show-aside{
    min-width:100%;
    min-height:100%;
    position:fixed;
    top:0;
    left:0;
    background-color: #22191944;
    transition:0.5s;
  }
  .hide-aside{
    min-width:100%;
    min-height:100%;
    position:fixed;
    top:0;
    left:100%;
    background-color: transparent;
    transition:0.5s;
  }
  .show-aside-response{
      top:50%;
      left:25px;
      color:var(--golden-white);
      position:absolute;
      transform:rotate(90deg);
      svg{
        width:35px;
        height:35px;
      }
  }
   .hide-aside-response{
      top:50%;
      position:absolute;
      left:75px;
      color:var(--golden-white);
      transform:rotate(-90deg);
      svg{
        width:35px;
        height:35px;
      }
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
            <button type='button' className={filtersOpen ? 'show-aside-response' : 'hide-aside-response'} onClick={()=> setFiltersOpen(!filtersOpen)}><Arrow/></button>
          </div>
      </div>
    </AsideStyledWrapper>,document.body
    )
   
  )
}