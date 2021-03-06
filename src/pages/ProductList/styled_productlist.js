import styled from "styled-components/macro"
import { mobile } from "../../responsive";

export const Container = styled.main`
    background-color: #F5F5F5;
    ${mobile({
        position: "relative",
    })}
`;
export const Title = styled.h1`
    padding: 20px;
    text-transform: capitalize;
`;
export const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;

    ${mobile({flexDirection: "column"})}
`;
export const Filter = styled.div`
    margin: 20px;

    ${mobile({
        margin: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    })}
`;
export const FilterText =styled.label`
    font-weight: 600;
    margin-right: 10px;
`;
export const Select = styled.select`
    margin-right: 20px;
    padding: 10px;
`;

export const Option = styled.option``;

export const ProductContainer = styled.div`
    padding: 0 5px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 25.00%);
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    box-sizing: border-box;

    ${mobile({
        gridTemplateColumns: "repeat(2,50%)",
         gridColumnGap: "5px"
    })}
`;
