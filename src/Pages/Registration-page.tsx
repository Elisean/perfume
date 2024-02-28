import React, { useState } from 'react'
import styled from 'styled-components'
import { Header } from '../Components/Header/Header'
import { Footer } from '../Components/Footer/Footer'
import { MainContainer } from '../Containers/Main-container/Main-container'
import { AsideTitle } from '../Components/Aside-title/Aside-title'
import { Breadcrumbs } from '../Components/Breadcrumbs/Breadcrumbs'
import { FlexContainer } from '../Containers/Flex-container/FlexContainer'
import { Button } from '../Components/Button/Button'
import { Input } from '../Components/Input/Input'
import { useForm }  from '../Hooks/useForm'
import checked from '../icons/checked.svg';

const StyledUserPageWrapper = styled.section`
  min-height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  font-family: 'Montserrat', sans-serif;

  @media (max-width:768px) {
        margin:100px 0 0 0;
  }
  .user-inner{
    width:100%;
    max-width:520px;
  }
 
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

export const RegistationPage = () => {

  const {formData, errors, handleChange} : {formData : any; errors : any; handleChange : any} = useForm({
    email: "",
  });


  return (
    <StyledUserPageWrapper>

        <Header/>
          <MainContainer>

          <AsideTitle  margin='0 0 50px 0'> Мой аккаунт </AsideTitle>
          <Breadcrumbs />

          <FlexContainer registrationresponse={'true'} justify='space-between'>

            <div className='user-inner'>
                <h2 className='user-title'>Вход</h2>
                <form action="#" className='user-form'>
                  <label htmlFor="user-name" className='input-wrapper'>
                    Email *
                   <Input className='main-input' type={'text'} id='user-name' required/>
                  </label>
                  <label htmlFor="user-password" className='input-wrapper'>
                    Пароль *
                   <Input className='main-input' type={'password'} id='user-password'/>
                  </label>

                  <label className='input-remember' htmlFor="user-remember">
                    <Input className='input-check' id='user-remember' type='checkbox' value={'Запомнить меня'} />
                      Запомнить меня
                  </label>
                  <Button padding='12px 91px'>Войти</Button>
                </form>
            </div>

            <div className='user-inner'>
              <h2 className='user-title'>Регистрация</h2>
              <form method='POST' action="#" className='user-form'>
                <h3 className='user-advantage'>При регистрации вы получите 100 бонусных баллов</h3>
         
                <label htmlFor="user-email" className='input-wrapper'>
                  Email *
                  <Input className='main-input'
                   type='email'
                   id="user-email"
                   name='email' 
                   required 
                   value={formData.email}
                   onChange={handleChange}
                   error={errors.email}
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
               
               <Button type='submit' padding='12px 58px'>Регистрация</Button>
              </form>
            </div>

          </FlexContainer>

          </MainContainer>

    
        <Footer/>
      
    </StyledUserPageWrapper>
  )
}
