import React, {useState} from 'react'
import { ReactComponent as Star } from '../../icons/stars-icon.svg';
import styled from 'styled-components';


const RatingStarsStyled = styled.div`
  margin:0 20px 0 0;

    input[type=radio]{
        display: none;
    }
    .rating-star{
        cursor: pointer;
    }

`


export const Rating:React.FC = () => {
    const [rating, setRating] = useState<any>(null)
    const [hover, setHover] = useState<any>(null)

  return (
    <RatingStarsStyled>
        {[...Array(5)].map((star, index) => {
            const currentRating = index + 1
          return (
            <label>
                <input
                 type="radio"
                 name='rating'
                 value={currentRating}
                 onClick={() => setRating(currentRating)}
                 />
    
                <Star 
                    className='rating-star'
                    color={currentRating <= (hover || rating) ? "#FFEBCC" : "#211E1C"} 
                    onMouseEnter={()=> setHover(currentRating)}
                    onMouseLeave={()=> setHover(null)}
                />
            </label>
          )
        })}
    </RatingStarsStyled>
  )
}
