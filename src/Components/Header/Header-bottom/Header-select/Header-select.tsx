import { styled } from "styled-components"
import { FlexContainer } from "../../../../Containers/Flex-container/FlexContainer"
import { useState, useEffect, useRef} from "react"

const SelectStyled = styled.div`
    position: relative;
    background: linear-gradient(118deg, #C09E6C 0%, #FFEBCC 42.62%, #BF936B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    padding:15px 20px 14px 64px;
    width: 175px;
    border-radius: 4px;
    border: 1px solid var(--border);
    box-shadow: 0px 2px 10px 0px rgba(184, 164, 142, 0.40);
    cursor: pointer;
 
    
    .select-burger{
        background: linear-gradient(118deg, #C09E6C 0%, #FFEBCC 42.62%, #BF936B 100%);
        width:24px;
        height: 2px;
        display: block;
        position: absolute;
        top: 18px;
        left: 20px;
        border-radius:5px;

        &:nth-child(2){
        background-color: linear-gradient(118deg, #C09E6C 0%, #FFEBCC 42.62%, #BF936B 100%);
        width:20px;
        height: 2px;
        display: block;
        position: absolute;
        top: 24px;
        left: 20px;
        border-radius:5px;
        }

        &:nth-child(3){
        background: linear-gradient(118deg, #C09E6C 0%, #FFEBCC 42.62%, #BF936B 100%);
        width:24px;
        height: 2px;
        display: block;
        position: absolute;
        top: 30px;
        left: 20px;
        border-radius:5px;
    }
    }

    &:hover{
        position: relative;
        text-align: center;
        font-size: 16px;
        font-weight: 700;
        padding:15px 20px 14px 64px;
        border-radius: 4px;
        border: 1px solid var(--border);
        background: linear-gradient(144deg, #C09E6C 0%, #FFEBCC 42.62%, #BF936B 100%), #2B2825;
        box-shadow: 0px 2px 10px 0px rgba(184, 164, 142, 0.40);
        cursor: pointer;
    
    
    .select-title{
        background-color: var(--gray);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      
    }
    .select-burger{
            background: var(--gray);
            width:24px;
            height: 2px;
            top: 18px;
            left: 20px;
            border-radius:5px;

        &:nth-child(2){
            background: var(--gray);
            width:20px;
            height: 2px;
            top: 24px;
            left: 20px;
            border-radius:5px;
        }

        &:nth-child(3){
            background: var(--gray);
            width:24px;
            height: 2px;
            top: 30px;
            left: 20px;
            border-radius:5px;
    }
    }
    }
    @media (max-width:767px) {
        position: absolute;
        top: -100%;
      
    }    
`

export const CustomSelect = styled.div`
    position: absolute;
    top: 120px;
    left: 2px;
    
.select-item{
    display:flex;
    border-radius: 4px;
    background: #2B2825;
    box-shadow: 0px 2px 10px 0px rgba(184, 164, 142, 0.40);
    cursor: pointer;
    
    a{
        width:170px;
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
`
const WrapperSelectStyled = styled.div`
    .open-select{
        position:absolute;
        top:0;
        opacity:1;
        visibility: visible;
        transition: all .4s ease;

    }
    .close-select{
        position:absolute;
        top:0;
        opacity: 0;
        visibility: hidden;
        transition: all .4s ease;
        z-index: -1;
    }
`


export const HeaderSelect:React.FC = () =>{
    const [open, setOpen] = useState(false)
    const [change, setChange] = useState('Каталог');

    const wrapRef = useRef<HTMLInputElement>(null)

   
    const handleClosed = (event:any) =>{
        if(wrapRef.current && !wrapRef.current.contains(event.target)){
           setOpen(open)
        }
    }
    
    useEffect(() =>{
        document.addEventListener('mousedown', handleClosed)
    }, [])

  
    
    return(
        <WrapperSelectStyled>
        <FlexContainer direction="column">
        <SelectStyled onClick={()=> setOpen(!open)}>
            <p className="select-title" ref={wrapRef}>{change}</p>
            <span className="select-burger"></span>
            <span className="select-burger"></span>
            <span className="select-burger"></span>
        </SelectStyled>
        <div className={open ? `${"open-select"}` : `${"close-select"}`}>
        <CustomSelect>
            <p className="select-item" onClick={()=>setChange('Мужские')}><a href="#">Мужские</a></p>
            <p className="select-item" onClick={()=>setChange('Женские')}><a href="#">Женские</a></p>
            <p className="select-item" onClick={()=>setChange('Унисекс')}><a href="#">Унисекс</a></p>
        </CustomSelect>
        </div>
        </FlexContainer>
        </WrapperSelectStyled>
    )
}