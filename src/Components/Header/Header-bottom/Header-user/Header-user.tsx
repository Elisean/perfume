import { ReactComponent as UserIcon } from "../../../../icons/user.svg"
import { styled } from "styled-components";
import { ROUTES } from "../../../../Utils/routes";
import { NavLink } from "react-router-dom";


const UserIconWrapper = styled.div`
    margin:0 0 0 15px;
    cursor: pointer;

    .active{
        svg{
            background-color: #37332F;
            border-radius:4px;
            width:40px;
            height:40px;
        }
    }
`

export const HeaderUser:React.FC = () =>{
    return (
        <UserIconWrapper>
            <NavLink to={ROUTES.REGISTRATION} state='Регистрация'>
                <UserIcon/>
            </NavLink>
        </UserIconWrapper>
    )
}