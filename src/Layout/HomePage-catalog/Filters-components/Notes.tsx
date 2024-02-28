import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { MainSelect } from '../../../Components/Main-select/Main-select'
import { ReactComponent as Chevron } from '../../../icons/chevron-down.svg'
import { MainForm } from '../../../Components/Main-Form/Main-Form'
import { Input } from '../../../Components/Input/Input'
import { ReactComponent as Search } from '../../../icons/search.svg'


interface INotes{
    getChangeNote?:any
    
}

export const searchNoteList = [
   "Абрикос",
   "Амбровые оттенки",
   "Агава",
   "Ананас",
   "Бразильские махагони",
   "Болгарская роза",
   "Ветивер",
   "Водная мята",
   "Водная лилия",
   "Фиалка",
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
    @media (max-width:568px) {
        margin:0 20px 20px 20px;
    }
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
.input-notes{
    margin:6px 0 0 0; 
    width:260px;
    background-color: #1B1816;
    display:flex;
}

`

    

const filtersNote = (searchText:string, noteList:string[]) =>{
    if(!searchText) {
        return noteList;
     }
    return noteList.filter((note:string)=>
        note.toLowerCase().includes(searchText.toLowerCase())
     );
}


export const Notes:React.FC<INotes> = ({getChangeNote}) => {

    const [noteList, setNoteList] = useState(searchNoteList);

   // state для получение данных из search 
   const [searchItemNote, setSearchItemNote] = useState('');
   // state для получение данных из search 


   const handleChangeLetters = (event:any) =>{
        setSearchItemNote(event.target.value);
  
    }
    const handleChangeNote = (event:any) =>{
        getChangeNote(event.currentTarget.textContent)
    }

    // продолжи прокидывать с контекст

   useEffect(()=>{
    const Debounce = setTimeout(()=>{
        const filteredNotes = filtersNote(searchItemNote, searchNoteList);
        setNoteList(filteredNotes);
    }, 300)
    return () => clearTimeout(Debounce)
}, [searchItemNote])


  return (
    <StyledNotes>

<MainSelect brandselect={'true'} width='280px' padding='7px 30px'>
        Все 
        <div className='notes-icon'>
            <Chevron/>
        </div>  
    </MainSelect>

    <div className='notes-search-wrapper'>
        <MainForm >
            <Input type="search" placeholder="Найти ноты.." className='form-input input-notes' onChange={(event:any)=> handleChangeLetters(event)}/>
            <button type="submit" className="form-btn-search"><Search/></button>
        </MainForm>
    
        <p className='notes-search-title'>Все</p>

    <ul className='notes-search-list'>
        {
            noteList.map((note, index)=>(
                <li className='notes-search-item' tabIndex={index} key={index} onClick={(event:any)=> handleChangeNote(event)} >{note}</li>
            ))
        }    
    </ul>

    </div>

      
    </StyledNotes>
  )
  
}