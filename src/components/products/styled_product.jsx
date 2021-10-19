import styled from "styled-components/macro"
import { Link } from "react-router-dom"

export const Container = styled.div`
    height: 100%;
    position: relative;
    margin: .3125rem;
    cursor: pointer;
    background-color: #fff;
    border: 1px solid transparent;

   &:hover{
       border: 1px solid #000;
       z-index: 1;
   }
`;

export const ProductItem= styled.div`
    position: relative;
    height: 18.75rem;
    background-color: #F6F6F6;
`;

export const ProductImage= styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const ProductDetailsContainer = styled.div`
   position: relative;
   text-align: left;
   padding: .3125rem;
`;
export const DetailsContainer = styled.div`
    flex-direction: column;
`;

export const ProductDetailsName = styled.p`
    text-transform: capitalize;
`;

export const ProductDetailsCategory = styled(ProductDetailsName)`
    color: rgb(117, 117, 117);
`;
export const ProductDetailsPrice = styled.p`
    padding-top: .625rem;
`;
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;



