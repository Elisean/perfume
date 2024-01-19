import React from 'react'
import styled from 'styled-components'


import { Crumb } from './Crumb';

const BreadcrumbsStyledWrapper = styled.section`
   
`

export const Breadcrumbs:React.FC = () => {

  return (
    <BreadcrumbsStyledWrapper>
          <nav className='breadcrumbs'>
            <Crumb/>
          </nav>
    </BreadcrumbsStyledWrapper>
  );
};
