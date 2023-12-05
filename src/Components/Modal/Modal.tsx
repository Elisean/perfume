import React, { useState , useContext, ReactNode} from 'react'
import { styled } from 'styled-components'
import { FiltersContext } from '../../Routes/Routes'

interface IModal{
  children? : ReactNode
}



const ModalStyledWrapper = styled.section`
      
    .show-modal{
      width:100%;
      height:100vh;
      background-color: var(--gray);
      position: fixed;
      top: 0;
      right: 0;
      transition:.5s all;
      padding: 30px 60px 0 60px;
      overflow: scroll;
    }
    .hide-modal{
      width:100%;
      height:100vh;
      position: fixed;
      top:0;
      right: -100%;
    }
    .closed-show{
      font-size:40px;
      position: fixed;
      top: 50%;
      right: 90%;
      z-index:6;
      color: var(--goldenWhite);
      transform: translate(-50%, -50%) rotate(360deg);
      transition: .5s all;
    }
    .closed-hide{
      font-size:40px;
      position: fixed;
      top: 50%;
      right: -100%;
      transform: translate(-50%, -50%) rotate(360deg);
      transition: .5s all;
    }

`

export const Modal:React.FC<IModal> = (props:IModal) => {

  const {filtersOpen, setFiltersOpen} = useContext(FiltersContext);

  const body = document.body;
  filtersOpen ? body.classList.add('overflow') : body.classList.remove('overflow');


  return (
    <ModalStyledWrapper>
      <div className={filtersOpen ? 'show-modal' : 'hide-modal'}>
        {props.children}
      </div>
      <div className={filtersOpen ? 'closed-show' : 'closed-hide'} onClick={()=> setFiltersOpen(!filtersOpen)}>🠖</div>
    </ModalStyledWrapper>
  )
}
