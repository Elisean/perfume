import React, {ReactNode, useRef, useEffect} from 'react'
import styled from 'styled-components';
import { createPortal } from "react-dom";
import { ReactComponent as ModalClosed } from '../../icons/modal-closed.svg';

interface IModal{
  onClose?: any;
  isOpen?: any;
  children:ReactNode;
  modalTitle:string;
}

const StyledModalWrapper = styled.section`
  
  .modal{
    position: absolute;
    top:0;
    left:0;
    z-index:5;
   
  }
  .modal::after{
    content: "";
    position: fixed;
    min-width: 100vw;
    min-height: 100vh;
    background-color: #00000040;
    left: 0;
  }
  .modal-inner{
    position: fixed;
    background-color: #2B2825;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index:5;
    padding:30px;
    width: 620px;
    overflow-x: hidden;

    @media (max-width:768px) {
      width: 520px;
    }
    @media (max-width:568px) {
      width: 320px;
    }
    @media (max-width:568px) {
      padding:15px;
      width: 310px;
      top: 0;
      left: 50%;
      transform: translate(-50%, 0%)
    }
  }
  .modal-title{
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    font-weight: 400;
    background: linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width:568px) {
      font-size: 20px;
    }

  }
  .modal-closed{
    position: absolute;
    right:10px;
    top:10px;    
  }
  .modal-bonuses{
    display: flex;
    margin:20px 0 0 0;
    background-color: var(--bg-color);
    padding:20px;
    @media (max-width:568px) {
      padding:0;
    }
  }
  .bonuses-description{
    margin:0 0 0 20px;
    line-height:25px;
    @media (max-width:768px) {
      br{
        display: none;
      }
      margin:10px 0 10px 10px;
      font-size:14px;
    }
  
  }
  .bonuses-icon{
    margin:10px 0 0 0;
    @media (max-width:768px) {
      margin:0;
        width:80px;
        height:60px;
    }
    @media (max-width:568px) {
     display: none;
    }
  }
  .modal-rating{
    display: flex;
    align-items: center;
    margin:20px 0 0 0;
  }
  .star-icon{
    margin:0 10px 0 0;
    color: var(--bg-color);
  }
  .star-icon:hover{
    color: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
  }
  .rating-title{
    margin:0 0 0 25px;
  }
  .modal-review{
    display: flex;
    flex-direction: column;
    margin:20px 0 20px 0;

    @media (max-width:568px) {
      margin:5px 0 5px 0;
    }
  }
  #review{
    width:100%;
    height:169px;
    resize: none;
    background-color: transparent;
    border-radius: 4px;
    border: 1px solid #565147;
    margin: 6px 0 0 0;
    padding: 5px;
    color: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
    @media (max-width:568px) {
      height:85px;
    }
  }
  .modal-download-wrapper{
    display: flex;
    width: 650px;
    margin:20px 0;
  }
  .modal-content-download{
    cursor: pointer;
    width:150px;
    height:150px;
    background-color: var(--bg-color);
    display: block;
    @media (max-width:568px) {
      width:130px;
      height:130px;
      svg{
        width:100%;
        height:auto;
      }
    }
  }
  .modal-download-title{
    margin: 10px 0 10px 0;
  }
  .modal-user-image-wrapper{
    display: flex;
  }
  .modal-user-image{
    width:150px;
    height:150px;
    background-color: var(--bg-color);
    margin:0 0 0 20px;

    @media (max-width:568px) {
      width:130px;
      height:130px;
    }
  }
  #modal-photo{
    padding:10px 0;
    background-color: var(--bg-color);
    opacity: 0;
    position: absolute;
    z-index: -1;
    
  }
`

export const Modal:React.FC<IModal> = ({isOpen, onClose, children, modalTitle} : IModal) => {

  const handleClose = () => onClose();

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event:any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleKeyPress = (event:any) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

  
    if (isOpen && typeof window !== "undefined") {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleKeyPress);
    }

  
    return () => {
      if (isOpen && typeof window !== "undefined") {
        document.removeEventListener("mousedown", handleOutsideClick);
        document.removeEventListener("keydown", handleKeyPress);
      }
    };
  }, [isOpen, onClose]);

  return (
    isOpen &&
    createPortal(
      <StyledModalWrapper> 
      <div className='modal'>
        <main ref={modalRef} className='modal-inner'>
          <h2 className='modal-title'>{modalTitle}</h2>          
      
          {children}
          <button className='modal-closed' onClick={()=> handleClose()}>
            <ModalClosed/>
          </button>
        </main>
         
     
      </div>
    </StyledModalWrapper>,
    document.body
    )
   
  )
}
