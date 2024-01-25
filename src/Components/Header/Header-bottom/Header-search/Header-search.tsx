import { useState, useEffect, useRef, ButtonHTMLAttributes, MutableRefObject, DetailedHTMLProps } from "react"
import { styled } from "styled-components"
import { MainContainer } from "../../../../Containers/Main-container/Main-container"
import SearchIconOpen from '../../../../icons/search.svg'
import { MainForm } from "../../../Main-Form/Main-Form"



const FormContainerStyled = styled.div`
    position: relative;
    
    .search-icon{
        display: none;
    }
    .icon-closed{
        display: none;
    } 
   

    @media (max-width: 768px) {
        .search-icon{
            display: block;
            position: absolute;
            top: -10px;
            left:40px;
            z-index:3;
        }
        .search-open{
            position: fixed;
            top: -5px;
            left: 50%;
            transform: translate(-50%, 25px);
            width:90%;
            z-index:3;
        }
        .search-closed{
            position: fixed;
            top: -100%;
            width:90%;
            left: 50%;
            transform: translate(-50%, 25px);
        }
        .icon-open{
            position: absolute;
            top: 200%;
            font-size:40px;
            font-weight:600;
            z-index:4;
        }
        .icon-closed{
            position: absolute;
            top: -100%;
            font-size:40px;
            font-weight:600;
            z-index:4;  
        }
        .form-bg{
            display: flex;
            justify-content: center;
            position: fixed;
            top: 0;
            left: 0;
            width:100%;
            min-height:92px;
            background-color: var(--gray);
            z-index:3;
            transition: .3s;
        }
        .form-bg::after{
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width:100%;
            min-height:100vh;
            display: block;
            background-color: #000000;
            z-index:3;
            opacity: .5;
            transition: .5s;
        }
        .form-bg-closed{
            content: '';
            position: fixed;
            top: -100%;
            left: 0;
            width:100%;
            min-height:100%;
            display: block;
            background-color: #000000;
            z-index:3;
            opacity: .5;
            transition: .5s;
        }
        .form-bg-closed:after{
            content: '';
            position: fixed;
            top: -100%;
            left: 0;
            width:100%;
            min-height:100%;
            display: block;
            background-color: #000000;
            z-index:3;
            opacity: .5;
            transition: .5s;
        }
        
    }
`


export const HeaderSearch:React.FC = () =>{
 
    const [openSearch, setOpenSearch] = useState(false);
    

    const body = document.body;

    openSearch ? body.classList.add('overflow') : body.classList.remove('overflow');

 

    const boxRef = useRef<HTMLDivElement>(null)

   
    const handleClosed = (event:any) =>{
        if(boxRef.current && boxRef.current.contains(event.target)){
            setOpenSearch(openSearch)
        }
    }
    
    useEffect(() =>{
        document.addEventListener('mousedown', handleClosed)
    }, [])


    return(
        <MainContainer>
        <FormContainerStyled>
            <div className="search-icon" onClick={() => setOpenSearch(!openSearch)}>
                <img src={SearchIconOpen} alt="icon-search" />
            </div>
            <div ref={boxRef} className={openSearch ? 'form-bg' : 'form-bg-closed'}>
                <div className={openSearch ? 'icon-open' : 'icon-closed'} onClick={() => setOpenSearch(openSearch)}>x</div>
            </div>

            <div className={openSearch ? 'search-open' : 'search-closed'}>
                <MainForm placeholder="Найти парфюм.." />
            </div>
 

        </FormContainerStyled>
        </MainContainer>
    )
}

