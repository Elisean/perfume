import React, { useState } from 'react'
import styled from 'styled-components'
import Slider from 'react-slider' 
import { FlexContainer } from '../../../Containers/Flex-container/FlexContainer';


const StyledPriced = styled.div`
  margin:0 0 10px 0;

.Slider{
  width:280px;
  height: 6px;
  border-radius: 4px;
  background-color:#0E0D0C; 
  
  @media (max-width:768px) {
      width:225px;
}
@media (max-width:568px) {
    width:115px;
}
  .thumb{
    width:20px;
    height:20px;
    border-radius: 50%;
    background: #FFEBCC;
    cursor: pointer;
    top: -6px;
  }
  .track-1{
    height:6px;
    background-color: #FFEBCC; 
  }
}
.values{
    margin:10px 12px 0 12px;
}
`
const MIN = 500;
const MAX = 10000;



export const Prices:React.FC= () => {
    const [values, setValues] = useState([MIN, MAX]);

  return (
    <StyledPriced>
      <Slider className={'Slider'}
          onChange={setValues}
          value={values}
          min={MIN}
          max={MAX}
      />
      <FlexContainer justify='space-between'>
        <p className='values from'>от {values[0]} ₽</p>
        <p className='values before'>до {values[1]} ₽</p>
      </FlexContainer>
    </StyledPriced>
  )
}
