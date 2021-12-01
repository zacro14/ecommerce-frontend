import styled from "styled-components/macro"
import {  mobile } from "../../responsive"


export const Container = styled.div`
    background-color:  #F5F5F5;
`;

export const Wrapper = styled.div`
    display: flex;
    margin: 50px;

    ${mobile({
        margin: "10px",
        flexDirection: "column",
    })}
`;




