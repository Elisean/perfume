import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { FlexContainer } from '../../../Containers/Flex-container/FlexContainer'
import checked from '../../../icons/checked.svg';
import { observer } from 'mobx-react';
import  FiltersStore  from '../../../Store/FiltersStore'


interface IGender{
  getChecked?:any
  getChangeChecked?:any
}


const StyledGender = styled.div`
    .title-input{
      display: flex;
      align-items: center;
      margin:0 0 0 5px;
    }
    .input-check{
        width: 24px;
        height: 24px;
        border: 1px solid var(--border);
        border-radius:5px;
        margin:10px;
    }
    .input-check:checked{
        background-image: url(${checked});   
    }
    @media (max-width:568px) {
      .input-check{
        margin: 10px 10px 10px 10px;
      }
    }

`

export const Gender:React.FC<IGender> = observer(() => {

  const filtersContext = useContext(FiltersStore) // получаем контекст из стора

  return (
    <StyledGender>
        <FlexContainer direction='column' align='flex-start'>
          <label className='title-input' htmlFor="women">
            <input className='input-check' id='women' type='checkbox' onClick={(event:any)=> filtersContext.getGender(event.target.value)} value={'Женские'}/>
              Женские
          </label>
          <label className='title-input' htmlFor="man">
            <input className='input-check' id='man' type='checkbox' onClick={(event:any)=> filtersContext.getGender(event.target.value)} value={'Мужские'}/>
              Мужские
          </label>
          <label className='title-input' htmlFor="gender">
            <input className='input-check' id='gender' type='checkbox' onClick={(event:any)=> filtersContext.getGender(event.target.value)} value={'Унисекс'}/>
              Унисекс
          </label>
        </FlexContainer>
    </StyledGender>
  )
}) 

