import styled from "styled-components/macro"
import { mobile } from "../../responsive";
export const Container = styled.div``;
export const Title = styled.h1`
    margin:20px;
`;
export const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;

    ${mobile({flexDirection: "column"})}
`;
export const Filter = styled.div`
    margin:20px;

    ${mobile({
        margin: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    })}
`;
export const FilterText =styled.label`
    font-weight:600;
    margin-right: 10px;
`;
export const Select = styled.select`
    margin-right: 20px;
    padding:10px;
`;

export const Option = styled.option``;

