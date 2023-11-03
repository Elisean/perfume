import  styled, { css }  from "styled-components"
import { ContainersTypes } from "../Containers-types";

const FlexContainerStyled = styled.div<ContainersTypes>`
    display:flex;
    flex-direction:${props => props.direction || 'row'};
    align-items:${props => props.align || 'stretch '};
    justify-content:${props => props.justify || 'flex-start'};
    flex-wrap:${props => props.wrap || 'nowrap'};
    flex:${props => props.flex || '0 0 auto'};
    
    ${props => props.response && css`
        @media (max-width:768px) {
            flex-direction: column;
        }
    }
    `}
`

export const FlexContainer:React.FC<ContainersTypes> = (props)=>{
    return <FlexContainerStyled {...props}/>
}