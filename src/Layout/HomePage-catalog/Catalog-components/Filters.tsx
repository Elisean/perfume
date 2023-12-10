import React, { useState, useContext } from 'react'
import { styled } from 'styled-components'
import { ReactComponent as Chevron } from '../../../icons/chevron-down.svg';
import { ReactComponent as Closed } from '../../../icons/closed.svg';
import { Button } from '../../../Components/Button/Button';
import { Brands } from './Brands';
import { Prices } from './Prices';
import { Gender } from './Gender';
import { Notes } from './Notes';
import { FiltersContext } from '../../../App/App'



const FilterWrapper = styled.div`
    width: 280px;
    position: absolute;
    left: 0;
    top: 58px;
    
   
  .accordion-wrapper{
    border-radius: 4px;
    background: var(--bg, #211E1C);
    box-shadow: 0px 9px 15px 0px rgba(116, 107, 90, 0.41);
    width: 305px;
    position: absolute;
    top: -70px;
    padding:70px 0 0 0;
    z-index:1;
    
  }
  @media (max-width: 993px) {
    .accordion-wrapper{
      left: -10px;
    }
  }
  .accordion-item{
    display: flex;
    justify-content: space-between;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 400;
    background: linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding:20px 10px 0 10px;
    cursor: pointer;
  }
  .accordion-item svg{
    color: #C09E6C;
  }
  .accordion-remove{
    color: var(--txt, #BEAE97);
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 400;
    border-radius: 4px;
    background: var(--txt-dark, #36332E);
    width:90%;
    margin:20px auto 0 auto;
    cursor: pointer;
  }
  .open{
      transition:all .3s;
      opacity: 1;
      visibility: visible;
      z-index:2;
  }
  .closed{
      transition:all .3s;
      opacity: 0;
      visibility: hidden;
      z-index: -1;
      height:0;
  }
  @media (max-width: 767px) {
    .accordion-wrapper{
      width:240px;
    }
  }
  @media (max-width: 568px) {
    .accordion-wrapper{
      width:140px;
      left:0;
    }
  }
`


export const Filters = () => {
  const [openBrands, setOpenBrands] = useState(false);
  const [openPrices, setOpenPrices] = useState(false);
  const [openGender, setOpenGender] = useState(false);
  const [openNotes, setOpenNotes] = useState(false);

  const {filtersOpen, setFiltersOpen} = useContext(FiltersContext);
  
  return (
    <FilterWrapper>
      <ul className='accordion-wrapper'>
        {/* brand */}
        <li className='accordion-item' onClick={()=>setOpenBrands(!openBrands)}>
            Бренд
           <Chevron />
        </li>

        <div className={openBrands ? 'open' : 'closed'} >
          <Brands />
        </div>


        {/* price */}
        <li className='accordion-item' onClick={()=>setOpenPrices(!openPrices)}>
           Стоимость
            <Chevron />
        </li>
        <div className={openPrices ? 'open': 'closed'}>
          <Prices/>
        </div>

      {/* gender */}
        <li className='accordion-item' onClick={()=>setOpenGender(!openGender)}>
            Пол
            <Chevron />
        </li>

        <div className={openGender ? 'open': 'closed'}>
          <Gender/>
        </div>

        <li className='accordion-item' onClick={()=>setOpenNotes(!openNotes)}>
              Ноты
            <Chevron />
        </li>
        <div className={openNotes ? 'open': 'closed'}>
          <Notes/>
        </div>
        <Button btnClosed onClick={() => setFiltersOpen(!filtersOpen)}>
              Сбросить
          <Closed/>
        </Button>
      </ul>
    </FilterWrapper>
  )
}
