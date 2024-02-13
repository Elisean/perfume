import React, { useState, useEffect, useRef, useContext } from 'react'
import styled from 'styled-components'
import { MainSelect } from '../../../Components/Main-select/Main-select'
import { ReactComponent as Chevron } from '../../../icons/chevron-down.svg'
import { MainForm } from '../../../Components/Main-Form/Main-Form'
import  Store  from '../../../Store/FiltersStore'
import { observer } from 'mobx-react-lite'

interface IBrand{
    getChangeBrand?:any
    
}

const brandSearchList = [
    "Acqua di parma",
    "Ajmal",
    "Amouage",
    "Bogart",
    "Britney spears",
    "Bruno Banani",
    "Cacharbel",
    "Gucci",
    "Issey miyake",
    "Hermes"
]




const BrandWrapperStyled = styled.section`
    position: relative;
    
    @media (max-width:568px) {
        padding:10px 0 0 0;
        overflow:scroll;
    }

.brand-icon{
    transform: rotate(180deg)
}
.brand-search-wrapper{
    border-radius: 4px;
    background:  #211E1C;
    box-shadow: 0px 2px 10px 0px rgba(184, 164, 142, 0.40);
    margin:0 12px;
    padding:5px 0 0 0;
    
    @media (max-width:568px) {
        max-width:340px;
        margin:0 auto;
    }
}
.brand-search-list{
    margin:40px 0 0 0;
    height:340px;
    overflow-y: scroll;
}

 ::-webkit-scrollbar{
    width: 16px;
 }
 ::-webkit-scrollbar-track{
    border-radius: 6px;
    background: #1D1A19;
    
 }
 ::-webkit-scrollbar-thumb{
    border-radius: 6px;
    background: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
    border:3px solid #1D1A19;
 }
   
.brand-search-title{
    color: var(--text);
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
    text-transform: uppercase;
    text-align: left;
    margin:0;
    position: absolute;
    width:80%;
    padding:10px 40px;
    background-color:#211E1C;

    @media(max-width:767px) {
        text-align: center;
        padding:10px 0;
        width:85%;
    }
    @media (max-width:568px) {
        text-align: left;
        padding:10px 30px;
        width:88%;
    }
}
.brand-search-item{
    text-align: left;
    color: var(--text);
    font-family: "Open Sans";
    font-size: 14px;
    font-weight: 600;
    line-height: 140%;
    text-transform: uppercase;
    padding:10px 30px 10px 10px;
    margin:0 30px 0 20px;
}
.brand-search-item:hover{
    border-radius: 4px;
    background: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
    color: var(--gray);
    font-weight: 700;
}
// .brand-search-item:focus{
//     border-radius: 4px;
//     background: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
//     color: var(--gray);
//     font-weight: 700;
// }

.brand-search-item-target{
    border-radius: 4px;
    // background: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
    color: var(--gray);
    font-weight: 700;
    background-color:red;
}
`




const filtersBrand = (searchText:string, brandSearchList:string[]) =>{
    if(!searchText) {
        return brandSearchList;
     }
    return brandSearchList.filter((brand:string)=>
        brand.toLowerCase().includes(searchText.toLowerCase())
     );
}




export const Brand:React.FC<IBrand> = observer(() => {
   
        const [brandList, setBrandList] = useState(brandSearchList);
     
        // state для получение данных из search 
        const [searchItem, setSearchItem] = useState('');
        // state для получение данных из search 
         const storeContext = useContext(Store)
 
     
        const [handleClick, setHandleClick] = useState(false);
     
        const refItem = useRef<HTMLLIElement>(null);


        const handleChangeLetters = (event:any) =>{
            setSearchItem(event.target.value);
        }
    
        const getAllBrands = (event:any) =>{
           storeContext.getBrands(event.target.textContent) 
        }
     
        useEffect(()=>{
             const Debounce = setTimeout(()=>{
                 const filteredBrands = filtersBrand(searchItem, brandSearchList);
                 setBrandList(filteredBrands);
             }, 300)
             return () => clearTimeout(Debounce)
        }, [searchItem])
     
       return (
       
        
         <BrandWrapperStyled>
                 <MainSelect brandselect={'true'} width='280px' padding='7px 30px'>
                     Все бренды
                     <div className='brand-icon'>
                         <Chevron/>
                     </div>  
                 </MainSelect>
     
                 <div className='brand-search-wrapper'>
                     <MainForm brandform={'true'} placeholder="Найти парфюм.." onChange={(event:any)=> handleChangeLetters(event)} />
                     <p className='brand-search-title'>Все</p>
     
                 <ul className='brand-search-list'>
                     {
                         brandList.map((perfume, index)=>(
                             <li ref={refItem} className='brand-search-item' tabIndex={index} key={index} onClick={(event:any)=> getAllBrands(event)}>{perfume}</li>
                         ))
                     }    
                 </ul>
                 </div>
         </BrandWrapperStyled>
       
       )
     }
     


)