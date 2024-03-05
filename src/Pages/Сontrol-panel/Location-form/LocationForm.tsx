import React, { useContext, useEffect, useState } from 'react'
import { MainForm } from '../../../Components/Main-Form/Main-Form'
import { FlexContainer } from '../../../Containers/Flex-container/FlexContainer'
import { Input } from '../../../Components/Input/Input'
import { Button } from '../../../Components/Button/Button'
import styled from 'styled-components'
import { useForm } from '../../../Hooks/useForm'
import { observer } from 'mobx-react-lite'
import UserDataStore from '../../../Store/UserDataStore'


const StyledLocationFormWrapper = styled.section`
  .location-form-inner{
    margin:30px 0 0 0;
  }
  .form-input{
    position:relative;
  }
  .user-surName{
    margin:0 0 0 20px;
  } 
  .user-input{
    width:359px;
  }
  .mb-10{
    margin:0 0 10px 0;
  }
  .area-item{
    padding:10px 0 0 0;

  }
  .countries-list{
    display:block;
    position:absolute;
    top:160px;
    left:0;
    z-index:5;
    background-color: var(--bg-color);
    height:auto;
    max-height:500px;
    overflow: auto;
    width:100%;
  }
  .countries-list-none{
    display:none;
  }

  .areas-item{
    display:flex;
    padding:10px;
    align-items:center;
    transition:0.3s all;
    cursor: pointer;
  }
  .areas-item:hover{
    background: var(--gradient, linear-gradient(118deg, #C09E6C 0%, #FFEBCC 42.62%, #BF936B 100%));
    -webkit-text-fill-color: #36332E;
    transition:0.3s all;
    cursor: pointer;
  }
  .areas-list{
    display:block;
    position:absolute;
    top:325px;
    left:0;
    z-index:5;
    background-color: var(--bg-color);
    height:auto;
    max-height:500px;
    overflow: auto;
    width:100%;
  }

  .areas-list-none{
    display:none;
  }

  .cities-list{
    display:block;
    position:absolute;
    top:410px;
    left:0;
    z-index:5;
    background-color: var(--bg-color);
    height:auto;
    max-height:345px;
    overflow: auto;
    width:100%;
  }

  .cities-list-none{
    display:none;
  }
 
`


export const LocationForm:React.FC = observer(() => {
  // формирование полей для валидации
    const {formData, errors, handleChange} : {formData : any; errors : any; handleChange : any} = useForm({
        name:"",
        surName:"",
        email: "",
        phone: "",
        number:"",
    });
  // формирование полей для валидации
    const UserDataContext = useContext(UserDataStore);
     // формирование полей для отправки в localStorage

    const [userData, setUserData] = useState<{[key:string]: any}>({
      name:"",
      surName:"",
      country: "",
      address:"",
      area: "",
      city:"",
      postcode:"",
      phone:"",
      email:"",
    })

   
    const getDataUser = () =>{
      if(JSON.parse(localStorage.getItem("userData") || '[]').length !== 0){
        localStorage.removeItem("userData")
      }
        const newUserData = {...userData}
        newUserData.name = formData.name
        newUserData.surName = formData.surName
        newUserData.country = UserDataContext.countryletter
        newUserData.address = formData.address
        newUserData.area = UserDataContext.areaLetter
        newUserData.city = UserDataContext.cityLetter
        newUserData.postcode = formData.number
        newUserData.phone = formData.phone
        newUserData.email = formData.email
        UserDataContext.userData = JSON.parse(localStorage.getItem("userData") || '[]')  
        UserDataContext.userData.push(newUserData)
        localStorage.setItem("userData", JSON.stringify(UserDataContext.userData))
        setUserData(newUserData)
        window.location.reload()
    }
     // формирование полей для отправки в localStorage
  return (
    <StyledLocationFormWrapper>

    <MainForm>

      <div className='location-form-inner'>

      <FlexContainer>
        <label htmlFor="user-name" className='user-name user-input mb-10'>
          Имя *
          <Input type='text' id='user-name' className="form-input" name='name' onChange={handleChange} value={formData.name} error={errors.name} autocomplete={'off'} required/>
        </label>

        <label htmlFor="user-surName" className='user-surName user-input'>
          Фамилия *
          <Input type='text' id='user-surName' className="form-input " name='surName' onChange={handleChange} value={formData.surName} error={errors.surName} autocomplete={'off'} required />
        </label>
      </FlexContainer>


      <label htmlFor="country" className='user-input'>
          Страна / регион*
          <Input type='text' id='country' className="form-input mb-10" name='country' value={UserDataContext.countryletter} autocomplete={'off'} onChange={(event:any) => UserDataContext.openAllCountries(event.target.value)}/>

          <ul className={UserDataContext.isOpenChange ? 'countries-list' : 'countries-list-none'}>
          {
              UserDataContext.isOpenChange && UserDataContext.countries?.map((country:any, index:number)=>{
                  return <li className='areas-item' key={index} onClick={((event:any)=> UserDataContext.insertUserCountry(event.target.textContent))}>{country.name}</li> 
              })
          }
      </ul>

      </label>
    
        <label htmlFor="address" className='user-input'>
        Адрес *
          <Input type='text' id='address' className="form-input mb-10" name='address' autocomplete={'off'} onChange={handleChange} value={formData.address} error={errors.address} />
        </label>

      <label htmlFor="locality" className='user-input'>
        Населенный пункт *
          <Input type='text' id='locality' className="form-input mb-10" value={UserDataContext.areaLetter} autocomplete={'off'} onChange={(event:any) => UserDataContext.openAllAreas(event.target.value)} disabled={UserDataContext.isDisabled} />

          <ul className={UserDataContext.isOpenChangeArea ? 'areas-list' : 'areas-list-none'}>
            {
                UserDataContext.isOpenChangeArea && UserDataContext.areas?.map((area:any, index:number)=>{
                    return <li className='areas-item' key={index} onClick={((event:any)=> UserDataContext.insertUserArea(event.target.textContent))}>{area.name}</li> 
                })
            }
        </ul>

      </label>
       
        <label htmlFor="area" className='user-input'>
        Область / район *
          <Input type='text' id='area' className='form-input mb-10' name='area' value={UserDataContext.cityLetter} autocomplete={'off'} onChange={(event:any)=> UserDataContext.openAllCities(event.target.value)} disabled={UserDataContext.isDisabled}/>

          <ul className={UserDataContext.isOpenChangeCity ? 'cities-list' : 'cities-list-none'}>
              {
                  UserDataContext.isOpenChangeCity && UserDataContext.cities?.map((city:any, index:number)=>{
                      return <li className='areas-item' key={index} onClick={((event:any)=> UserDataContext.insertUserCity(event.target.textContent))}>{city.name}</li> 
                  })
              }
          </ul>
        </label>          
      
        <label htmlFor="email-index" className='user-input'>
        Почтовый индекс *
          <Input type='number' id='email-index' className="form-input mb-10" name='number' autocomplete={'off'} onChange={handleChange} value={formData.number} error={errors.number} />
        </label>

        <label htmlFor="phone" className='user-input'>
        Телефон  *
          <Input type='phone' id='phone' className="form-input mb-10" name='phone' autocomplete={'off'} onChange={handleChange} value={formData.phone} error={errors.phone} required/>
        </label>

        <label htmlFor="email" className='user-input'>
        Email *
          <Input type='email' id='email'  className="form-input mb-10" name='email' autocomplete={'off'} onChange={handleChange} value={formData.email} error={errors.email} required />
        </label>  
      </div>
        <Button type='button' onClick={()=> getDataUser()} padding='12px 0'>Сохранить</Button>
  </MainForm>
        
</StyledLocationFormWrapper>
  )
})













