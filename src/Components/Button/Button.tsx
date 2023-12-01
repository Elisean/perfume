import React from 'react'
import styled, {css} from 'styled-components'


interface IButton{
  position?: string
  children?: React.ReactNode
  top?:string;
  left?:string;
  transform?:string;
  width?:string;
  padding?:string;
  responseBtn?:boolean
  responseBonusesBtn?:boolean
  btnClosed?:boolean
  btnSorting?:boolean
  onClick?:Function
  btnCards?:boolean
  tabIndex?:number
}


const StyledButton = styled.button<IButton>`
    display: flex;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    background: #2B2825;
    border-radius: 4px;
    border: 1px solid var(--border);
    color:var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
    box-shadow: 0px 2px 10px 0px rgba(184, 164, 142, 0.40);
    padding: ${props => props.padding || '0'};
    position: ${props => props.position || 'relative'};
    top:${props => props.top || 0};
    left:${props => props.left || 0};
    cursor: pointer;
    z-index: 3;
    transform: ${props => props.transform || '0 0'};
    width:250px;


    &:hover{
      background: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
      -webkit-text-fill-color:var(--black);
    }

  ${props => props.responseBtn && css`
    @media (max-width:1300px) {
      width:200px;
      padding: 12px 0;
      top:83%;
      left:48%;  
    }
    @media (max-width:993px) {
      transform: translate(-50%, 0);
      top:81%;  
      left:50%; 
    }
    @media (max-width:767px) {
      transform: translate(-50%, 0);
      top:88%;  
    }
    @media (max-width:450px) {
      top:84%;  
    }
    @media (max-width:325px) {
      top:80%;  
    }
  `}

  ${props => props.responseBonusesBtn && css`
    @media (max-width: 767px) {
      left:20px;
      top:20px;
    }
    @media (max-width:450px) {
        margin:0 auto;
        left:0;
    }

  `}
  ${props => props.btnClosed && css`
    border:0;
    box-shadow: 0px 0px 0px;
    font-size: 18px;
    font-weight: 400;
    align-items: center;
    text-transform: none;
    justify-content:space-between;
    padding: 5px 10px;
    -webkit-text-fill-color: var(--text);
    background: #36332E;
    margin:20px 0 10px 0;
    width: 280px;
    @media (max-width:768px) {
      width:220px;
    }
    @media (max-width:568px) {
      width:120px;
      padding:2px 5px;
      left:0;
      font-size:15px;
  }


  `}

  ${props => props.btnSorting && css`
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
    -webkit-text-fill-color:var(--text);
    background: #2B2825;
    padding:15px 30px;
    justify-content:flex-start;
    border: none;
    width: 305px;
    text-transform: none;

    @media (max-width:768px) {
      width:240px;
      padding:15px;
    }
    @media (max-width:568px) {
      width:140px;
      padding:15px 4px;
      font-size:10px;
    }

    &:hover{
      background: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
      -webkit-text-fill-color:var(--black);
    }
    &:focus{
      background: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
      -webkit-text-fill-color:var(--black);
    }
  `}

  ${props => props.btnCards && css`
  @media (max-width:768px) {
      width:210px;
      padding:10px 0;
      left: -1px;
   
  }
  @media (max-width:568px) {
      left: 0;
  }
  `

}

`

export const Button:React.FC<IButton> = (props) =>  {
  return (
    <StyledButton {...props}>
        {props.children}
    </StyledButton>
  )
}
// 12px 0