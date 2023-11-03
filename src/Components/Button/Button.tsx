import React from 'react'
import styled, {css} from 'styled-components'


interface IButton{
  position: string
  children: React.ReactNode
  top:string;
  left:string;
  transform?:string;
  width?:string;
  padding?:string;
  responseBtn?:boolean
}


const StyledButton = styled.button<IButton>`
    display: flex;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    background: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${props => props.color || 'transparent'};
    border-radius: 4px;
    border: 1px solid var(--border);
    background-color: #2B2825;
    box-shadow: 0px 2px 10px 0px rgba(184, 164, 142, 0.40);
    padding: ${props => props.padding || '0'};
    position: ${props => props.position || 'relative'};
    top:${props => props.top || 0};
    left:${props => props.left || 0};
    cursor: pointer;
    z-index: 3;
    transform: ${props => props.transform || 'translate(-57%, 0)'};
    width:250px;

  ${props => props.responseBtn && css`
    @media (max-width:1300px) {
      width:200px;
      padding: 12px 0;
      top:83%;  
    }
    @media (max-width:993px) {
      transform: translate(-50%, 0);
      top:81%;  
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


`

export const Button:React.FC<IButton> = (props) => {
  return (
    <StyledButton {...props}>
        {props.children}
    </StyledButton>
  )
}
// 12px 0