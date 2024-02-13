import React from 'react'
import {useState, useContext} from 'react'
import styled from 'styled-components'
import { FlexContainer } from '../../../Containers/Flex-container/FlexContainer'
import { MainSelect } from '../../../Components/Main-select/Main-select'
import { ReactComponent as Filter } from '../../../icons/filters.svg'
import { ReactComponent as Chevron } from '../../../icons/chevron-down.svg'
import { Sorting } from './Sorting'
import { FiltersContext } from '../../../App/App'
import { useResize } from '../../../Hooks/useResize'
import { Filters } from './Filters'
import { Aside } from '../../../Components/Aside/Aside'
import { Brand } from '../Filters-components/Brand'
import { Prices } from '../Filters-components/Prices'
import { Gender } from '../Filters-components/Gender'
import { Notes } from '../Filters-components/Notes'
import { Button } from '../../../Components/Button/Button'
import { ReactComponent as Closed } from '../../../icons/closed.svg'


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
        z-index: 4;
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
      overflow: scroll;
        z-index:5;
        opacity: 1;
        visibility: visible;
        position: static;
  }
    .hide{
      overflow: scroll;
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



export const SelectCards:React.FC<any> = ({receiveBrands, receiveNotes, receivePrices}) => {
  const [openSorting, setOpenSorting] = useState(false);
  const {filtersOpen, setFiltersOpen} = useContext(FiltersContext);
  const { isScreenMd, isScreenSm } = useResize();

  const [letter, setLetter] = useState('');
  const [checked, setChecked] = useState('');
  const [notes, setNotes] = useState('');
  const [prices, setPrices] = useState('');


  const resetFilterResponce = () =>{
    window.location.reload();
  }

  
  // Если что почистить

  const getBrands = (brand:any) =>{
    setLetter(letter)
    receiveBrands(brand) 
  }

  const getNotes = (note:any) =>{
    setNotes(note)
    receiveNotes(note)
  }

  const getPrices = (price:any) =>{
    setPrices(price)
    receivePrices(price)
  }
  
  

  return (
    <StyledWrapper>
      <FlexContainer filtersresponse={'true'} align='center'>
        <MainSelect responseselect={'true'} left={filtersOpen ? '7px': '0'} padding='10px 20px' width={filtersOpen ? '290px' : '305px'} fontSize='18px' onClick={()=> setFiltersOpen(!filtersOpen)}>
          Фильтры
          <Filter />
        </MainSelect>
        <div className={filtersOpen ? `${'show'}` : `${'hide'}` }>
          {
            isScreenMd && isScreenSm ? <Filters getBrands={getBrands} getNotes={getNotes} getPrices={getPrices} /> :
            <Aside>
              <div className='before-aside'>
                <Brand />
                <p className='before-aside-description'>Стоимость</p>   
                <Prices/>
                <p className='before-aside-description'>Пол</p>  
                <Gender/>
                <p className='before-aside-description'>Ноты</p>  
                <Notes/>

                <Button onClick={()=> {resetFilterResponce()}} closeFiltersResponce align='center' justify='space-between' padding='5px 15px'>
                Сбросить 
                <Closed/>
              </Button>
              </div>
            </Aside>
          }
        </div>
        <MainSelect responseselectpop={'true'} padding='10px 30px' width='305px' left={filtersOpen ? '35px' : '20px'} fontSize='18px' onClick={() => setOpenSorting(!openSorting)}>
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
