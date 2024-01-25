import { ReactComponent as BasketIcon } from "../../../../icons/basket.svg"
import { styled } from "styled-components"
import { Link } from "react-router-dom"
import { ROUTES } from "../../../../Utils/routes"

const BasketIconWrapper = styled.div`
    margin:0 0 0 30px;
    cursor: pointer;
    position:relative;

    .count{
        color: #000;
        text-align: center;
        font-family: 'Montserrat', sans-serif;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        border-radius: 30px;
        background: var(--red);
        position:absolute;
        top: -13px;
        left: 10px;
        width: 20px;
        height: 20px;
        padding:3px 0 0 0;
    }
`

export const HeaderBasket:React.FC = () =>{
    return (
        <BasketIconWrapper>
            <Link to={ROUTES.BASKET}>
            <span className="count">0</span>
            <BasketIcon />
            </Link>
        </BasketIconWrapper>
    )
}