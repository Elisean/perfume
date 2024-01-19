import React from 'react'
import styled from 'styled-components'
import { MainSelect } from '../../../Components/Main-select/Main-select'
import { ReactComponent as Chevron } from '../../../icons/chevron-down.svg'
import { MainForm } from '../../../Components/Main-Form/Main-Form'

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



const StyledNotes = styled.section`
    position: relative;
.notes-icon{
    transform: rotate(180deg)
}
.notes-search-wrapper{
    border-radius: 4px;
    background:  #211E1C;
    box-shadow: 0px 2px 10px 0px rgba(184, 164, 142, 0.40);
    margin:0 12px 20px 12px;
    padding:5px 0 0 0;
}
.notes-search-list{
    height:340px;
    overflow-y: scroll;
}

 ::-webkit-scrollbar{
    width: 16px;
 }
 ::-webkit-scrollbar-track{
    border-radius: 6px;
    background: #1D1A19;
    
 }
 ::-webkit-scrollbar-thumb{
    border-radius: 6px;
    background: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
    border:3px solid #1D1A19;
 }
   
.notes-search-title{
    color: var(--text);
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
    text-transform: uppercase;
    text-align: left;
    margin:0 0 0 0;
    position: absolute;
    width:80%;
    padding:10px 40px;
    background-color:#211E1C;
}
.notes-search-item{
    text-align: left;
    color: var(--text);
    font-family: "Open Sans";
    font-size: 14px;
    font-weight: 600;
    line-height: 140%;
    text-transform: uppercase;
    padding:10px 30px 10px 10px;
    margin:0 30px 0 20px;
}
.notes-search-item:hover{
    border-radius: 4px;
    background: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
    color: var(--gray);
    font-weight: 700;
}
.notes-search-item:focus{
    border-radius: 4px;
    background: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
    color: var(--gray);
    font-weight: 700;
}

`

export const Notes:React.FC = () => {

  return (
    <StyledNotes>

<MainSelect BrandSelect width='280px' padding='7px 30px'>
        Все 
        <div className='notes-icon'>
            <Chevron/>
        </div>  
    </MainSelect>

    <div className='notes-search-wrapper'>
        <MainForm brandForm placeholder="Найти ноты.." />
        <p className='notes-search-title'>Все</p>

    <ul className='notes-search-list'>
        {
            noteList.map((note, index)=>(
                <li className='notes-search-item' tabIndex={index} key={index}>{note}</li>
            ))
        }    
    </ul>

    </div>

      
    </StyledNotes>
  )
  
}