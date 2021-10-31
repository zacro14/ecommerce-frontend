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
    background-color: #fff;
    border-radius: .1875rem;
    box-shadow: 0 .0625rem rgb(0 0 0 / 5%);
    padding: 0 .625rem;
    margin: 0 .625rem;
`;

export const ItemSummaryTitle = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform:capitalize;
  align-items: center;
  height: 1.875rem;

  ${mobile({
      display: "none",  
  })};
`;

export const ProductTitle = styled.div`
  font-weight:600;
  font-size:.875rem;
  width:50%;
`;

export const ProductDesc= styled(ProductTitle)`
  text-align:center;
  width: 12.5%;

  ${mobile({
      width: "none",  
  })};
`;

export const RightCartContainer = styled.div`
    flex:1 ;
    position: sticky;

    ${mobile({
        paddingTop: "10px",  
    })};
`;



