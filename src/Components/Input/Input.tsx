import React from 'react'
import styled from 'styled-components'


interface Iinput{
    type:string;
    placeholder?:string;
    onChange?:any;
    onBlur?:any
    onFocus?:any
    onInput?:any
    id?:string
    className?:string
    name?:string
    value?:string | number
    required?:boolean
    error?:string
    brandform?:any
}




const StyldeInputWraper = styled.div`

    .main-input{
        border:2px solid #514941;
        padding:15px 50px 15px 20px;
        border-radius:4px;
        color: var(--text);
        margin:0;
        min-width:100%;

        &:focus{
            outline: none;
            border-radius: 4px;
            border: 2px solid var(--border);
            box-shadow: 0px 0px 20px 0px rgba(160, 149, 133, 0.20);
        }
        &::placeholder{
            color: #867A68;
            font-family: 'Inter', sans-serif;
            font-size: 16px;
            font-weight: 400;
            line-height: 140%;
        }
        &:hover{
            outline: none;
            border-radius: 4px;
            border: 2px solid var(--border);
            box-shadow: 0px 0px 20px 0px rgba(160, 149, 133, 0.20);
        }

    }

    
`


export const Input:React.FC<Iinput> = ( { type, placeholder, onChange, id, className, name, value, required, error, onBlur, onFocus, onInput } ) => {
   
    const handleChange = (event:any) => {
        onChange && onChange(event);
    };
    
    const handleBlur = (event:any) => {
        onBlur && onBlur(event);
    };
    const handleFocus = (event:any) => {
        onFocus && onFocus(event);
    };
    const handleInput = (event:any) => {
        onInput && onInput(event);
    };

  return ( 
    <StyldeInputWraper>
      
        <input 
            className={className}
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
            onInput={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            id={id}
            name={name}
            value={value}
            required={required}
        />   
        {error && (
             <span className="text-red-500 text-xs italic mt-1">{error}</span>
        )}

    </StyldeInputWraper>
  )
}


