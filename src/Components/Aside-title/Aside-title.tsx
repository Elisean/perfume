import React from 'react'
import styled, {css} from 'styled-components'



export interface IProps{
    children: React.ReactNode
    response?:boolean
    position?:string
    top?:string
    left?:string
}


const TitleStyled = styled.div<IProps>`
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    font-weight: 400;
    background: linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin:50px 0 0 0;
    position:${props => props.position || 'relative'};
    top:${props => props.top || '0'};
    left:${props => props.left || '0'};



    ${props => props.response && css`

        @media (max-width:992px) {
            left:10px;
        }

        @media (max-width: 768px) {
            text-align: center;
            margin:30px 0 0 0;
            left:0;
        }
        @media (max-width: 450px) {
            text-align:center;
            margin:20px 0;
           
        }
    `}
`


export const AsideTitle:React.FC<IProps> = (props) => {
   return (
   <TitleStyled {...props}>
    {props.children}
   </TitleStyled>
   )

}
