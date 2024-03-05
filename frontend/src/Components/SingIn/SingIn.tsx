import React from 'react'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
import styled from 'styled-components'
import checked from '../../icons/checked.svg';
import { useForm } from '../../Hooks/useForm';

const StyledSingInUser = styled.section`

    width:100%;
    max-width:520px;

    .user-form{
      display:flex;
      flex-direction:column;
    }

    .input-wrapper{
        display:flex;
        flex-direction:column;
        margin:20px 0 0 0;  
    }
    .user-title{
      margin:0 0 20px 0;
      font-size:24px;
    }
    .input-remember{
      display: flex;
      align-items: center;
      margin:10px 0;
    }
    .input-check{
        width: 24px;
        height: 24px;
        border: 1px solid var(--border);
        border-radius:5px;
        margin:10px 10px 10px 0;
    }
    .input-check:checked{
        background-image: url(${checked});   
    }
    .main-input{
        @media (max-width:1150px) {
            min-width:95%;
        } 
    }

`

export const SingIn:React.FC = () => {

        
  const {formData, errors, handleChange} : {formData : any; errors : any; handleChange : any} = useForm({
    email: "",
    password: "",
  });


  return (

    <StyledSingInUser>

        <h2 className='user-title'>Вход</h2>
        <form action="#" className='user-form'>
        <label htmlFor="singIn-user-email" className='input-wrapper'>
            Email *
        <Input 
            className='main-input' 
            type='email' 
            id='singIn-user-email' 
            name='email' 
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder='Email адрес'
            required/>
        </label>
        <label htmlFor="singIn-user-password" className='input-wrapper'>
            Пароль *
        <Input 
            className='main-input' 
            type='password' 
            id='singIn-user-password'
            name='password' 
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            placeholder='Пароль'
            required
            />

        </label>

        <label className='input-remember' htmlFor="user-remember">
            <Input className='input-check' id='user-remember' type='checkbox' value={'Запомнить меня'} />
            Запомнить меня
        </label>
        <Button padding='12px 91px'>Войти</Button>
    </form>

    </StyledSingInUser>
  )
}


