import { ReactComponent as UserIcon } from "../../../../icons/user.svg"
import { styled } from "styled-components";
import { ROUTES } from "../../../../Utils/routes";
import { Link } from "react-router-dom";

const UserIconWrapper = styled.div`
    margin:0 0 0 15px;
    cursor: pointer;
`

export const HeaderUser:React.FC = () =>{
    return (
        <UserIconWrapper>
            <Link to={ROUTES.USER}>
                <UserIcon/>
            </Link>
        </UserIconWrapper>
    )
}