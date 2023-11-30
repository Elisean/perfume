import React, { ChangeEvent, useContext } from 'react'
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import { FiltersContext } from '../../../Routes/Routes';
// import { Breakpoints } from '../../../Breakpoints/Breakpoints';
import { useResize } from '../../../Hooks/useResize';


interface Paginations{
  onChangePage:any
}



const StyledPaginate = styled.div`
    margin:20px 0 0 0;
    
    .showFilter{
        margin:50px 0 0 0;
    }


    li{
        color: var(--txt, #BEAE97);
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 400;
        margin:10px;
    }

    @media (max-width: 568px) {
        li{
            margin:5px;
        }
       
    }
    .paginate{
        display: flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
        cursor: pointer;
    }

    .previous,
    .next
    {
       
        a{
            background: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            border:1px solid #C09E6C;
            border-radius:6px;
            padding:7px 14px;
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:20px;
            font-weight:800;
            cursor: pointer;
            height:auto;
        }
      
    }
    .selected{
        border-radius: 4px;
        background: #B7A08B;
        padding: 10px 18px;
        color:#36332E;
    }  
`

export const Pagination:React.FC<Paginations> = ({onChangePage }) => {
    const {filtersOpen, setFiltersOpen} = useContext(FiltersContext);
    const { width, isScreenSm, isScreenMd, isScreenLg, isScreenXl, isScreenXxl } = useResize();


    let countPage = 0;

    if(isScreenXxl){
        countPage = 4;
    }else if (isScreenXl){
        countPage = 5;
    }else if (isScreenLg){
        countPage = 6;
    }else if (isScreenMd){
        countPage = 7;
    }else if (isScreenSm){
        countPage = 8;
    }else if (width >= 100){
        countPage = 8;
    }



    return <StyledPaginate>      
            <div className={filtersOpen ? `${'showFilter'}`: ''}>
            <ReactPaginate
                className='paginate'
                breakLabel="..."
                nextLabel=">"
                onPageChange={(event:any)=> onChangePage(event.selected + 1)}
                pageRangeDisplayed={12}
                pageCount={countPage}
                previousLabel="<"
                renderOnZeroPageCount={null}/>
            </div>
        
    
        </StyledPaginate>
    
}
