import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import styled from 'styled-components'





const BreadcrumbsStyledWrapper = styled.section`
   
`

export const Breadcrumbs:React.FC = () => {
  

  return (
    <BreadcrumbsStyledWrapper>
          <nav className='breadcrumbs'>
          breadcrumbs
          </nav>
    </BreadcrumbsStyledWrapper>
  );
};
