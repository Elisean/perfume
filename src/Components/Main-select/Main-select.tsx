import React, { ReactNode, createContext, useState } from 'react'
import styled, { css } from 'styled-components'
import { FlexContainer } from '../../Containers/Flex-container/FlexContainer'


export type SelectProps = {
    name?:string
    children?:ReactNode
    textTransform?:string
    padding?:string
    fontSize?:string
    fontWeight?:string
    width?:string
    left?:string
    top?:string
    border?:string
    boxShadow?:string
    Opened?:boolean
    tabIndex?:string
    onClick?:any
    ref?:any
    selectFilter?:boolean
    ResponceSelect?:boolean
    ResponceSelectPop?:boolean
    SelectHeader?:boolean
    isActive?: boolean
    setActive?: (value: boolean) => void
    onMouseEnter?: (event: MouseEvent) => void
    onMouseLeave?: (event: MouseEvent) => void

}


const StyledSelectInner = styled.div <SelectProps>`
    position: relative;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: ${props => props.fontSize || '16px'};
    font-weight: ${props => props.fontWeight || '400'};
    text-transform: ${props => props.textTransform || 'none'};
    padding:${(props) => props.padding || '0'};
    border-radius: 4px;
    border: ${props => props.border || 'none'};
    box-shadow: ${props => props.boxShadow || 'none'};
    cursor: pointer;
    width:${props => props.width || '0'};
    top:${props => props.top || '0'};
    left:${props => props.left || '0'};
    border: 1px solid transparent;
    z-index:3;
    color: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
    background: #2B2825;


    &:hover{
        color: var(--black);
        background: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
    }
    &:focus{
        border: 1px solid var(--border);
        box-shadow: 0px 2px 10px 0px rgba(184, 164, 142, 0.40);
    }

    ${props => props.selectFilter && css`
        border: 1px solid var(--border);
        width:90%;
        padding:5px 20px;
    `}

    ${props => props.SelectHeader && css`
        width: 175px;
        border: 1px solid var(--border);
        box-shadow: 0px 2px 10px 0px rgba(184, 164, 142, 0.40);
        padding:14px 20px;
        font-weight: 600;
        text-transform: uppercase;
    `}


    ${props => props.ResponceSelect && css`
        @media (max-width:993px) {
            left: -10px;
            width:305px;
        }
        @media (max-width:768px) {
            max-width:240px;
        }
        @media (max-width:568px) {
            width:155px;
            right:0;
            position: static;
            display: flex;  
            justify-content: center;
            padding: 0;
        }
         
       
    `}
    /* переименуй responce - неправильно написанно */
    ${props => props.ResponceSelectPop && css` 
        @media (max-width:993px) {
            left: 10px;
        }
        @media (max-width:768px) {
            width:240px;
            padding:10px 15px;
            
        }
        @media (max-width:568px) {
            width:150px;
            padding:10px 5px;
            font-size:12px;
            background: transparent;
            display: flex;  
            justify-content: center;

            svg{
                width:30px;
                height:30px;
            }
            &:hover{
                background: transparent;
                color: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
                border: 1px solid transparent;
                box-shadow: none;
            }
            &:focus{
                background: transparent;
                color: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
                border: 1px solid transparent;
                box-shadow: none;
            }
        }
        
    `}


`


export const MainSelect:React.FC<SelectProps> = (props:SelectProps) => {
    
  return (
  
    <StyledSelectInner {...props} tabIndex='0'>
        <FlexContainer justify='space-between' align='center'>
            {props.name}
            {props.children}
        </FlexContainer>
    </StyledSelectInner>

    
  )
}



