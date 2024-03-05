import React,{ useState } from 'react'
import { Input } from '../Input/Input'
import { FlexContainer } from '../../Containers/Flex-container/FlexContainer'
import { Button } from '../Button/Button'
import { useForm } from '../../Hooks/useForm'
import styled from 'styled-components'


const StyledSingUpUser = styled.section`

    width:100%;
    max-width:520px;

    .input-wrapper{
      display:flex;
      flex-direction:column;
      margin:20px 0 0 0;  
    }
    .user-title{
      margin:0 0 20px 0;
      font-size:24px;
    }
    .user-gender{
        margin:20px 0 0 0;
    }
    .option-wrapper{
        display:flex;
        align-items:center;
        margin:20px 20px 0 0;
    }
    .user-option{
        width:24px;
        height:24px;
        border-radius:50%;
        border:1px solid var(--border);
        margin:0 5px 0 0;
        transition:0.2s all;
    }
    .user-option:checked{
        border:8px solid var(--border);
        background-color: var(--black);
        transition: 0.2s all;
    }
    .user-description{
        margin:20px 0 20px 0;
    }

    .main-input{
        
        @media (max-width:1150px) {
            min-width:95%;
        } 
    }

`

export const SingUp:React.FC = () => {



    
  const {formData, errors, handleChange} : {formData : any; errors : any; handleChange : any} = useForm({
    email: "",
  });

  // const userEmail = localStorage.setItem('userEmail', formData.email)

  const [userEmail, setUserEmail] = useState<{[key:string]: any}>({
    userMail:"",
})

const getUserEmail = (event?:any) =>{
  const newEmail = {...userEmail}
  process.env.USERMAIL = JSON.parse(localStorage.getItem("userEmail") || '[]')  

  localStorage.setItem("userEmail", formData.email)
  setUserEmail(newEmail)
}

  

  return (
    <StyledSingUpUser >
    <h2 className='user-title'>Регистрация</h2>
    <form method='POST' action="#">
      <h3 className='user-advantage'>При регистрации вы получите 100 бонусных баллов</h3>

      <label htmlFor="singUp-user-email" className='input-wrapper'>
        Email *
        <Input className='main-input'
         type='email'
         id="singUp-user-email"
         name='email' 
         required 
         value={formData.email}
         onChange={handleChange}
         error={errors.email}
         placeholder='Email адрес'
        /> 
      </label>
   

      <div className='user-gender'>Пол</div>
      <FlexContainer >
      
      <label htmlFor="man" className='option-wrapper'>
        <Input type="radio" id='man' className='user-option' name='gender' value='man' />
        M
      </label>

      <label htmlFor="women" className='option-wrapper'>
        <Input type="radio" id='women' className='user-option' name='gender' value='woman' />
        Ж
      </label>

      </FlexContainer>
      <p className='user-description'>Ссылка для установки нового пароля будет отправлена на ваш email</p>
     
     <Button type='submit' padding='12px 58px' onClick={()=> getUserEmail()}>Регистрация</Button>
    </form>
  </StyledSingUpUser>

  )
}


