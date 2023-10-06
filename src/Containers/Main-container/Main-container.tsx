import styled from 'styled-components';
import { ContainersTypes } from "../Containers-types";

const StyledContainer = styled.div<ContainersTypes>`
    width:${props=> props.width || '100%'};
    max-width:${props=> props.maxWidth || '1310px'};
    margin:${(props)=>props.margin || '0 auto'};
    padding:${(props) => props.padding || '0 15px'};
`


export const MainContainer:React.FC<ContainersTypes> = (props:ContainersTypes) => {
    return <StyledContainer {...props}/>
}
