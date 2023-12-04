import React from 'react'
import {useState, useContext, useRef, useEffect} from 'react'
import styled from 'styled-components'
import { FlexContainer } from '../../../Containers/Flex-container/FlexContainer'
import { MainSelect } from '../../../Components/Main-select/Main-select'
import { ReactComponent as Filter } from '../../../icons/filters.svg'
import { ReactComponent as Chevron } from '../../../icons/chevron-down.svg'
import { Filters } from './Filters'
import { Sorting } from './Sorting'
import { FiltersContext } from '../../../Routes/Routes'


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
        transition:all .5s;
        opacity: 1;
        visibility: visible;
        z-index: 2;
  }
  .hide{
        position: absolute;
        top: -5%;
        transition:all .5s;
        opacity: 0;
        visibility: hidden;
        z-index: -1;
  }
`


export const SelectCards:React.FC = () => {
  const [openSorting, setOpenSorting] = useState(false);
  const {filtersOpen, setFiltersOpen} = useContext(FiltersContext);


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
        <MainSelect ResponceSelect left={filtersOpen ? '7px': '0'} padding='10px 20px' width={filtersOpen ? '290px' : '305px'} fontSize='18px' onClick={()=> setFiltersOpen(!filtersOpen)}>
          Фильтры
          <Filter/>
        </MainSelect>
        <div className={filtersOpen ? `${'show'}` : `${'hide'}` }>
          <Filters/>
        </div>
        <MainSelect ResponceSelectPop padding='10px 30px' width='305px' left={filtersOpen ? '35px' : '20px'} fontSize='18px' onClick={() => setOpenSorting(!openSorting)}>
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
