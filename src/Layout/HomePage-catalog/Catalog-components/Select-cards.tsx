import React from 'react'
import {useState, useContext, useRef, useEffect} from 'react'
import styled from 'styled-components'
import { FlexContainer } from '../../../Containers/Flex-container/FlexContainer'
import { MainSelect } from '../../../Components/Main-select/Main-select'
import { ReactComponent as Filter } from '../../../icons/filters.svg'
import { ReactComponent as Chevron } from '../../../icons/chevron-down.svg'
import { Filters } from './Filters'
import { Sorting } from './Sorting'
import { FiltersContext } from '../../../App/App'
import { useResize } from '../../../Hooks/useResize'
import { Modal } from '../../../Components/Aside/Aside'
import { MainForm } from '../../../Components/Main-Form/Main-Form'
import { Prices } from './Prices'
import { priceList } from './Brands'
import { noteList } from './Notes'
import { Gender } from './Gender'
import { Button } from '../../../Components/Button/Button'
import { ReactComponent as Closed } from '../../../icons/closed.svg';

const StyledWrapper = styled.div`
  position: relative;
  margin:30px 0 0 0;

  @media (max-width:993px) {
    display: flex;
    justify-content: center;
  }


  .show{
        position: absolute;
        top:3%;
        transition: all .5s;
        opacity: 1;
        visibility: visible;
        z-index: 2;
  }
  .hide{
        position: absolute;
        top: -5%;
        transition: all .5s;
        opacity: 0;
        visibility: hidden;
        z-index: -1;
  }

  @media (max-width: 568px) {
    .show{
        overflow-x: hidden;
        z-index:5;
        opacity: 1;
        visibility: visible;
        position: static;
  }
    .hide{
        overflow-x: hidden;
        position: static;
        opacity: 1;
        z-index:0;
        visibility: visible;
    }
  }
  .wrapper-scroll{
    border:2px solid var(--border);
    border-radius:4px;
    margin:10px 0 0 0;
    padding:0 10px;
    height:200px;
    overflow-Y:scroll;

  &::-webkit-scrollbar {
    width:9px;
  }

   &::-webkit-scrollbar-track{
    height:280px;
  } 
  &::-webkit-scrollbar-thumb{
    border-radius: 6px;
    background: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
   
  }
  .scroll-item{
    padding: 5px 0 0 0;
    font-size:20px;
    text-align: left;
  } 
}

.all-items{
  margin:20px 0 0px 0;
  font-size:16px;
  text-align: left;
}

`


export const SelectCards:React.FC = () => {
  const [openSorting, setOpenSorting] = useState(false);
  const {filtersOpen, setFiltersOpen} = useContext(FiltersContext);
  const { isScreenMd } = useResize();

  const wrapRef = useRef<HTMLInputElement>(null)

   
  const handleClosed = (event:any) =>{
      if(wrapRef.current && !wrapRef.current.contains(event.target)){
        setFiltersOpen(!filtersOpen)
      } 
  }

  useEffect(() =>{
      document.addEventListener('mousedown', handleClosed)
  }, [])


  return (
    <StyledWrapper>
      <FlexContainer filtersResponse align='center' ref={wrapRef}>
        <MainSelect ResponceSelect left={filtersOpen ? '7px': '0'} padding='10px 20px' width={filtersOpen ? '290px' : '310px'} fontSize='18px' onClick={()=> setFiltersOpen(!filtersOpen)}>
          Фильтры
          <Filter/>
        </MainSelect>
        <div className={filtersOpen ? `${'show'}` : `${'hide'}` }>
          {
            isScreenMd ? <Filters/> :

            <Modal>
              <MainForm placeholder='Найти парфюм...'/>
                <p className='all-items'>Все Бренды </p>
            <ul className='wrapper-scroll'>
                {
                    priceList.map((priceItem) =>(
                      <li className='scroll-item'>{priceItem}</li>
                    ))
                }
            </ul>
              <Prices/>
              <Gender/>
              <p className='all-items'>Все Ноты </p>
            <ul className='wrapper-scroll'>
              {
                noteList.map((nodeItem) =>(
                  <li className='scroll-item'>{nodeItem}</li>
                ))
              }
            </ul>

            <Button btnClosed onClick={() => setFiltersOpen(!filtersOpen)}>
              Сбросить
            <Closed/>
          </Button>
            </Modal>
          }
        </div>
        <MainSelect ResponceSelectPop padding='10px 30px' width='310px' left={filtersOpen ? '35px' : '15px'} fontSize='18px' onClick={() => setOpenSorting(!openSorting)}>
          По популярности
          <Chevron/>
        </MainSelect>
        <div className={openSorting ? `${'show'}` : `${'hide'}` }>
          <Sorting  />
        </div>
      </FlexContainer>
    </StyledWrapper>
  )
}
