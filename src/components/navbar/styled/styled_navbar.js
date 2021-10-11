import styled from 'styled-components/macro'
import { mobile } from "../../../responsive"
import { Link, NavLink } from 'react-router-dom';

export const Container = styled.header`
        background-color: #000000;
        color: white;
        z-index: 999;
        width: 100%;
        height: 60px;
        transition: transform .15s ease;
`;

export const Wrapper = styled.div`
        padding: .625rem 1.25rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
`;

export const MobileContainer = styled.div` 
        visibility: ${props=> props.isOpen ? "visible" : "hidden"} ;
        height: 100vh;
        width: ${props=> props.isOpen ? "320px" : "0"};
        color: #000;
        background-color: #fff;
        z-index: 1000;
        top: 0;
        overflow-x: hidden;
        position: absolute;
        transform: ${props=> props.isOpen ? "translateX(-156px)" : "translateX(320px)" };
        transition: transform .25s; 
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

export const Center = styled.div`
        flex: 1;
        text-align: center;
        display: flex;
        justify-content: center;
        cursor: pointer;
          
        ${mobile({
                display: "none"
        })}
`;

export const MenuItemCenter = styled.div`
        padding: 10px;
        text-transform: uppercase;

        &:hover{
                border-bottom: 1px solid #fff;
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


