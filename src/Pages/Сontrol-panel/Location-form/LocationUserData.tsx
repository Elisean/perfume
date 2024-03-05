import React, { useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as Circle } from '../../../icons/check-circle.svg'
import { LocationForm } from './LocationForm'

const StyledWrapperUserData = styled.section`
  margin:30px 0 0 0;

  .user-notification{
    display:flex;
    padding:10px 12px;
    background-color: var(--gray);
    width:250px;
  }
  .notification{
    margin:0 0 0 10px;
  }
  .user-warning{
    margin:30px 0 0 0;
  }
  .user-address-title{
    margin:30px 0 0 0;
  }
  .user-address-item{
    margin:10px 0 0 0;
  }
  .user-change{
    margin:35px 0 0 0;
    color:var(--text);
    text-decoration:underline;
  }
`


export const LocationUserData:React.FC = () => {

  const [userChange, setUserChange] = useState(false)

  const userData = JSON.parse(localStorage.getItem("userData") || '[]')

 

  return (
    <StyledWrapperUserData>

      <div className='user-notification'>
        <Circle/>
        <p className='notification'>Адрес успешно изменен</p>
      </div>

      <h2 className='user-warning'>Следующие адреса будут использованы при оформлении заказов по-умолчанию</h2>
      <h3 className='user-address-title'>Платёжный адрес:</h3>
     
          {
            userData.map((userData:any, index:number)=>{
              return (
                <ul key={index} className='user-address-list'>
                    <li className='user-address-item'>{userData.name}</li>
                    <li className='user-address-item'>{userData.surName}</li>
                    <li className='user-address-item'>{userData.address}</li>
                    <li className='user-address-item'>{userData.city}</li>
                    <li className='user-address-item'>{userData.area}</li>
                    <li className='user-address-item'>{userData.postcode}</li>
                    <button type='button' className='user-change' onClick={()=> setUserChange(!userChange)}>Изменить</button>
                </ul>
              )
            })
          }
          {
              userChange && <LocationForm />
          }
       
          
          
      
    </StyledWrapperUserData>
  )
}

