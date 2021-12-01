import styled from 'styled-components/macro'
import { mobile } from "../../responsive"

export const CartContainer = styled.div`
    background-color: #F5F5F5;
    color: black;

    ${mobile({
        height: "100vh",
    })}
`;

export const  CartWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items:flex-start;
    margin: 0 1.875rem 0 1.875rem;
    
    ${mobile({
        flexDirection: "column",
        margin : 0,
    })};
`;

export const CartTitle = styled.h1`
    color: inherit;
    text-align: left;
    text-transform: capitalize;
    font-weight: 800;
    margin: 30px;
`;

export const LeftCartContainer = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    margin-right: 10px;
`;

export const RightCartContainer = styled.div`
    flex:1 ;
    position: sticky;

    ${mobile({
        paddingTop: "10px",  
    })};
`;



