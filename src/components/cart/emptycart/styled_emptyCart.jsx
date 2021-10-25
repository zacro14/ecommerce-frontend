import styled from "styled-components/macro"
import { Link } from "react-router-dom"

export const Container = styled.div`
    min-height: 50vh;
    background: transparent;
`;

export const Wrapper = styled.div`
    padding: .625rem;
`;

export  const EmptyTitle = styled.h1`
    text-transform: uppercase;
    color: #000;
    font-weight: 900;
    text-align: center;
`;

export const LinktoShop = styled(Link)`
    background-color: #000;
    text-decoration: none;
    padding: 21px;
    align-items: center;
`

;

export const GetStartedText = styled.span`
    border-radius: 2px;
    color: #fff;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 2px;
   
`;