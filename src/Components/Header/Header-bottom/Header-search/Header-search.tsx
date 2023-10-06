import { useState, useEffect, useRef } from "react"
import { styled } from "styled-components"
import { ReactComponent as SearchIcon } from "../../../../icons/search.svg"
import { MainContainer } from "../../../../Containers/Main-container/Main-container"
import SearchIconOpen from '../../../../icons/search.svg'

const FormContainerStyled = styled.div`
    position: relative;
    
    .search{
        position:relative;
        min-width: 100%;
        padding:17px 84px 16px 20px;
        border-radius: 4px;
        border: 1px solid #514941;
        background:var(--black);
        box-shadow: 0px 0px 10px 0px rgba(160, 149, 133, 0.20);
        color:var(--border);
        z-index:5;


        &::placeholder{
        color: #867A68;
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 140%;
    }
    &:focus{
        outline: none;
        border-radius: 4px;
        border: 1px solid var(--border);
        box-shadow: 0px 0px 20px 0px rgba(160, 149, 133, 0.20);
    }
} 
    .search-icon{
        display: none;
    }
    @media (max-width: 768px) {

        .search-icon{
            display: block;
            position:absolute;
            z-index:3;
            top: -6px;
            left:20px; 
        }
        .search-closed{
            position: fixed;
            top: -100%;
            left: 14px;
            width:96%;
            transition:.4s all;
        } 
        .search-open{
            position: fixed;
            top: 25px;
            left: 14px;
            width:96%;
            z-index:6;
            transition:.4s all;
        } 
        .search-open::before{
            content: "";
            position: fixed;
            width: 100%;
            background-color: var(--black);
            height: 100%;
            top:0;
            left:0;
            z-index:5;   
            transition:.4s all;
        }
        .search-closed::before{
            content: "";
            position: fixed;
            width: 100%;
            background-color: var(--black);
            height: 100%;
            top: -100%;
            left: 0;
            z-index:5;   
            transition:.4s all;
        }
        .search-closed::after{
            content: "";
            position: fixed;
            width: 100%;
            background-color: var(--black);
            height: 100%;
            top: -100%;
            left: 0;
            z-index:5;   
            transition:.4s all;
        }
        .search-open::after{
            content: "";
            position: fixed;
            width: 100%;
            background-color: var(--black);
            height: 100vh;
            top:0;
            left:0;
            z-index:4;
            opacity:0.4;
            transition:.4s all;
        }
       
    }
    @media (max-width:420px) {
        .search-open{
            width:94%;
        } 
        .search-closed{          
            width:94%;
        } 
    }

`
const ButtonStyled = styled.button`
    background-color: transparent;
    outline:none;
    border:none;
    position: absolute;
    top: 12px;
    right: 25px;
    cursor: pointer;  
    z-index:5;
`

export const HeaderSearch:React.FC = () =>{
    const [openSearch, setOpenSearch] = useState(false);


    const wrapRef = useRef<HTMLInputElement>(null)

   
    const handleClosed = (event:any) =>{
        if(wrapRef.current && !wrapRef.current.contains(event.target)){
            setOpenSearch(openSearch)
        }
    }
    
    useEffect(() =>{
        document.addEventListener('mousedown', handleClosed)
    }, [])


    return(
        <MainContainer>
        <FormContainerStyled>
            <div  className="search-icon" onClick={()=> setOpenSearch(!openSearch)}>
                <img className="search-icon" src={SearchIconOpen} alt="icon-search" />
            </div>
        <form action="#" className={openSearch ? 'search-open' : 'search-closed'}>
            <input ref={wrapRef} className="search" type="search" placeholder="Найти парфюм.." />
            <ButtonStyled type="submit">
                <SearchIcon/>
            </ButtonStyled>
        </form>
        </FormContainerStyled>
        </MainContainer>
    )
}