import styled from 'styled-components/macro'
import { mobile } from "../../../responsive"
import { Link, NavLink } from 'react-router-dom';
import { Close } from '@mui/icons-material';

export const Container = styled.header`
        background-color: #fff;
        color: #000;
        z-index: 999;
        width: 100%;
        height: 60px;
        transition: transform .15s ease;
        scroll-behavior: smooth;
        border-bottom: 1px solid #e9ecef;
        position: absolute;
        top: 0;
        
`;

export const Wrapper = styled.div`
        padding: .625rem 1.25rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
`;

export const MobileContainer = styled.div` 
        visibility: ${props=> props.isOpen ? "visible" : "hidden"} ;
        width: ${props=> props.isOpen ? "320px" : "0"};
        color: #000;
        background-color: #fff;
        z-index: 1000;
        right: 0;
        top: 0;
        bottom: 0;
        overflow-y: auto;
        position: fixed;
        padding: 20px 10px ;
        transform: ${props=> props.isOpen ? "translateX(0)" : "translateX(320px)" };
        transition: ${props=> props.isOpen ?  "transform .25s" : "0"};


        ${mobile({display: "block"})}
`;

export const MobileMenuLogo = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(9, 9, 9, 0.1);
        padding-bottom: 10px;
`;

export const MenuItemContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 100%;
        width: 100%;
`;

export const MenuItems = styled.div`
        display: flex;
        flex-direction: column;
`;

export const MobilemenuItem = styled.div`
        color: inherit;
        text-transform: capitalize;
        padding: 10px 20px;
        font-size: 16px;
`;

export const ButtonContainer = styled.div`
        display: flex;
        justify-content: center;
        padding: 20px;

`;
export const MenuLoginButton = styled.button`
        color: ${props=>  props.color ? "#fff" : "#000"};
        background-color: ${props=> props.color ? "#000" : "transparent"};
        border: 1px solid #ccc;
        border-radius: 20px;
        padding: 10px;
        width: 70%;
        height: 40px;
        margin-left: 10px;

        & :hover{
                opacity: ${props=> props.color ? ".8"  : "1"}
        }
`;

export const CloseIcon = styled(Close)`
`;

export const MobileBLurWrapper = styled.div` 
        z-index: 100;
        background-color: hsla(0,0%,7%,.36);
        backdrop-filter: blur(4px);
        display: block;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow-y: hidden;
        opacity: ${props=>props.isOpen ? 1 : 0};
        visibility: ${props=>props.isOpen ? "visible" : "hidden"};
        transition: opacity .8s ease,visibility 0s;
`;


export const Left = styled.div`
        flex: 1;
        display: flex;
        align-items: center;
`;

export const Logo = styled.h1`
        cursor: pointer;
        text-transform: uppercase;
`;

export const Span = styled.span`
        font-size: 20px;
        font-weight: 200; 
`;

export const Center = styled.ul`
        flex: 1;
        text-align: center;
        display: flex;
        justify-content: center;
        cursor: pointer;
          
        
        ${mobile({
                display: "none"
        })}
`;

export const MenuItemCenter = styled.li`
        padding: 10px;
        text-transform: uppercase;
        display : inline-block;
        
        &:hover{
                border-bottom: 1px solid #000;
        }

`;

export const Right =styled.div`
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        ${mobile({
                flex: 2,
                alignItems: "center",
        })}
`;

export const MenuItem =styled.div`
        display: flex;
        font-size: .9375rem;
        cursor: pointer;;
        margin-left: 16px;
        align-items: center;
        color: ${props=>props.active ? "#EEC015" : "inherit"};

        ${mobile({
                marginLeft: "20px",
        })}
`;

export const MenuitemText = styled(MenuItem)`
       text-decoration: none;
       
       &:hover{
                border-bottom: 1px solid #fff;
        }
        
        ${mobile({display: "none"})}
`;

export const MenuitemWishList = styled(MenuItem)`
        ${mobile({display: "none"})}
`;

export const MenuItemSearch = styled(MenuItem)`
        display:none;
        ${mobile({display: "inherit"})}
`;

export const MenuItemHamburger = styled(MenuItem)`
        display:none;
        ${mobile({display: "inherit"})}
`;

export const Links = styled(Link)`
        text-decoration: none;
        color: inherit;
`;

export const NavLinks = styled(NavLink)`
        text-decoration: none;
        color: inherit;
`;


