import React, { useState } from 'react'
import styled from 'styled-components'
import { FlexContainer } from '../../../Containers/Flex-container/FlexContainer'
import checked from '../../../icons/checked.svg';

const StyledGender = styled.div`
    .title-input{
      display: flex;
      align-items: center;
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

`

export const Gender:React.FC = () => {

  return (
    <StyledGender>
        <FlexContainer direction='column' align='flex-start'>
          <label className='title-input' htmlFor="woman">
            <input className='input-check' id='woman' type='checkbox' value={'Женские'}/>
              Женские
          </label>
          <label className='title-input' htmlFor="man">
            <input className='input-check' id='man' type='checkbox' value={'Мужские'}/>
              Мужские
          </label>
          <label className='title-input' htmlFor="gender">
            <input className='input-check' id='gender' type='checkbox'value={'Унисекс'}/>
              Унисекс
          </label>
   
        </FlexContainer>
    </StyledGender>
  )
}
