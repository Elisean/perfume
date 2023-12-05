import React from 'react'
import styled from 'styled-components'
import { Accordion } from './Accordion';


export const noteList = [
    'Akigalawood',
    'Ambertonic',
    'Amberwood',
    'Ambrettolide',
    'Anna Sui',
    'Абрикос',
    'Akigalawood',
    'Ambertonic',
    'Amberwood',
    'Ambrettolide',
    'Anna Sui',
    'Абрикос',
    'Akigalawood',
    'Ambertonic',
    'Amberwood',
    'Ambrettolide',
    'Anna Sui',
    'Абрикос',
    'Akigalawood',
    'Ambertonic',
    'Amberwood',
    'Ambrettolide',
    'Anna Sui',
    'Абрикос',
]



const StyledNotes = styled.div`

.wrapper-scroll{
  height:350px;
  overflow-Y:scroll;

  &::-webkit-scrollbar {
    width:14px;
  }

   &::-webkit-scrollbar-track{
    height:280px;
  } 
  &::-webkit-scrollbar-thumb{
    border-radius: 6px;
    background: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
  } 

}
.note-item{
    font-family: 'Open Sans', sans-serif;
    color: var(--text);
    font-size: 14px;
    text-align:left;
    font-weight: 700;
    line-height: 140%;
    text-transform: uppercase;
    padding: 16px 32px;
    cursor:pointer;
}
.note-item:hover{
  background: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
  -webkit-text-fill-color:var(--black);
}


`



export const Notes:React.FC = () => {

  return (
    <StyledNotes>
        <Accordion placeholder='Найти ноты...' title='Все' selectFilter='Все'>
        <ul className='wrapper-scroll'>
        {
            noteList.map((nodeItem) =>(
              <li className='note-item'>{nodeItem}</li>
            ))
          }
        </ul>
        </Accordion>
    </StyledNotes>
  )
  
}
