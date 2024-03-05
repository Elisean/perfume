import React,{ useState } from 'react'
import styled from 'styled-components'
import { MainSelect } from '../../../Components/Main-select/Main-select'
import { ReactComponent as Chevron } from '../../../icons/chevron-down.svg';
import { MainForm } from '../../../Components/Main-Form/Main-Form';

interface IAccordion{
    children?: React.ReactNode
    placeholder?: string
    selectFilter?: string
    title?:string
}


const StyledAccordion = styled.div<IAccordion>`

.open{
    width:285px;
    box-shadow: 0px 0px 5px 3px rgba(116, 107, 90, 0.41);
    border-radius:4px;
}
.closed{
    width:0;
    box-shadow: 0px 0px 5px 3px rgba(116, 107, 90, 0.41);
    border-radius:4px;
} 


  @media (max-width:768px) {
    .open{
      width:225px;
      box-shadow: 0px 0px 5px 3px rgba(116, 107, 90, 0.41);
      border-radius:4px;
}
  }
  @media (max-width:568px) {
    .open{
      width: 125px;
      box-shadow: 0px 0px 5px 3px rgba(116, 107, 90, 0.41);
      border-radius:4px;
}
  }

.wrapper-scroll{
  height:350px;
  overflow-Y:scroll;

  &::-webkit-scrollbar {
    width:14px;
  }

   &::-webkit-scrollbar-track{
    height:280px;
  } 
  &::-webkit-scrollbar-thumb{
    border-radius: 6px;
    background: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
  } 
}
.accordion-item{
  font-family: 'Open Sans', sans-serif;
  color: var(--text);
  font-size: 14px;
  text-align: left;
  font-weight: 700;
  line-height: 140%;
  text-transform: uppercase;
  padding: 16px 32px;
  cursor: pointer;
}
.accordion-item:hover{
  background: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
  -webkit-text-fill-color:var(--black);
}
`

export const Accordion:React.FC<IAccordion> = (props) => {
    const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <StyledAccordion {...props}>
             
        <MainSelect selectfilter={'true'} onClick={()=> setAccordionOpen(!accordionOpen)}>
            {props.selectFilter}
           <Chevron />
        </MainSelect>

      <div className={accordionOpen ? 'open' : 'closed'}>
        <MainForm placeholder={props.placeholder} />

          <p className='accordion-title'>{props.title}</p>
            {props.children}
      </div>

    </StyledAccordion>
  )
}
