import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { Rating } from '../Rating/Rating'
import { Input } from '../Input/Input'
import { MainForm } from '../Main-Form/Main-Form'
import { Button } from '../Button/Button'

export const FormReview:React.FC = () => {
  const countCharacterForID = 8; 

    const [reviews, setReviews] = useState<{[key:string]: any}>({
        id:"",
        userName: "",
        rating:"",
        userDate: new Date().toLocaleDateString(),
        message: ""
    })

   
  const send = (event : any) => {
    event.preventDefault();

    try {
      fetch('http://localhost:3004/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviews),
      })
  
    } catch (error) {
      console.error('Error', error)
    }
    
  }
  const getData = (event : any) =>{
    const newReview = {...reviews}
    newReview[event.target.name] = event.target.value
    newReview.id = nanoid(countCharacterForID);
    setReviews(newReview)
  }
 
  return (
       <MainForm className='modal-form'>
           {/* пока так */}
            <br/> 
            {/* пока так */}
            <label htmlFor="user-name" >
                 Ваше имя
                 <Input type='text' name='userName' className='form-input' placeholder='Ваше имя' value={reviews?.userName} onChange={(event : any)=> getData(event)} />
            </label>
            <div className="modal-form-stars">
                 <Rating name='rating' value={reviews?.rating} onChange={(event : any) => getData(event)}/>
                 Оцените покупку*
            </div>
          
            <label htmlFor='user-review' className='modal-form-review'>
                 отзыв*
                 <textarea name='message' className='review form-input' id='user-review' value={reviews?.message} onChange={(event : any)=> getData(event)}></textarea>
            </label>
         <Button sendbutton={'true'} onClick={send}>Отправить отзыв</Button>
        </MainForm>
 
  )
}
