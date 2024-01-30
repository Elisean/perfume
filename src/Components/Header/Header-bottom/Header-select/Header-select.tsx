import React, { useState, useRef } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { MainSelect } from '../../../Main-select/Main-select'
import { ReactComponent as SelectIcon } from '../../../../icons/select-icon.svg'



const selectItems = [
  'Мужские',
  'Женские',
  'Унисекс'
]



const SelectStyledWrapper = styled.section`
    margin:0 0 0 20px;
    position: relative;

    .select-item{
      display: flex;
      border-radius: 4px;
      background: #2B2825;
      box-shadow: 0px 2px 10px 0px rgba(184, 164, 142, 0.40);
      cursor: pointer;
    
    a{
        width:175px;
        height:44px;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        background: linear-gradient(118deg, #C09E6C 0%, #FFEBCC 42.62%, #BF936B 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        padding: 12px 84px 12px 16px;
      
    }
    a:hover{
        font-family: 'Open Sans', sans-serif;
        -webkit-text-fill-color: #2B2825;
        font-weight: 700;
        background: linear-gradient(144deg, #C09E6C 0%, #FFEBCC 42.62%, #BF936B 100%);
        border-radius: 4px;
        box-shadow: 0px 2px 10px 0px rgba(184, 164, 142, 0.40);
    }
}
  .closed-select{
    position: fixed;
    top: -200%;
    left: 0;
    z-index:0;
  }
  .open-select{
    position: absolute;
    top: 55px;
    left: 0;
    z-index:2;
  }
  @media (max-width: 768px) {
        position: absolute;
        top: -200%;
  }    
`

export const HeaderSelect:React.FC = () => {
  const [isShow, setIsShow] = useState(false);
  const navRef = useRef<any>(null)

   
  const handleShow = (event:any) =>{
      if(navRef.current && navRef.current.contains(event.target)){
        setIsShow(isShow)
      }
  }
  
  useEffect(() =>{
      document.addEventListener('mousedown', handleShow)
  }, [])

  return (
    <SelectStyledWrapper>
      
      <MainSelect selectheader={'true'} onMouseEnter={()=>setIsShow(!isShow)} onMouseLeave={()=>setIsShow(isShow)}>
          <SelectIcon />
            Каталог
      </MainSelect>

      <ul ref={navRef} className={isShow && navRef ? 'open-select' : 'closed-select'}>
      {
        selectItems.map((selectItem,index) =>(
          <li key={index} className='select-item'><a href="#"> {selectItem} </a></li>
        ))
      }
    </ul>
    </SelectStyledWrapper>
  )
}
 