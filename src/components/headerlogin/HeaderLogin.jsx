import styled from "styled-components/macro"
import { Logo } from "../navbar/styled/styled_navbar";
import { mobile } from "../../responsive"
import { Link } from "react-router-dom";

const HeaderContainer=styled.nav`
    display: flex;
    align-items:center;
    width:100%;
    height:5.25rem;
    margin-bottom:3.125rem;
    background-color:#fff;
    box-shadow: 0 .0625rem .0625rem 0 rgb(0 0 0 / 5%);
    z-index: 1;

    ${mobile({justifyContent: "center"})}
`;

const LoginLogo= styled(Logo)`
    padding:0 3.125rem 0 3.125rem;
    font-size:3.125rem;
`;

const Links = styled(Link)`
    text-decoration:none;
    color:inherit;
`;

const HeaderLogin = () => {
    return (
        <HeaderContainer>
            <LoginLogo>
                <Links to="/">
                Zacro
                </Links>
            </LoginLogo>
        </HeaderContainer>
    )
}

export default HeaderLogin
