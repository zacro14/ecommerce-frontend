import styled from "styled-components"

export const Container = styled.div`
    height:60vh;
    display:flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
    background-color: #F0F2F5;
    color: #000000;
`;
export const Title = styled.h1`
    font-size:50px;
`;
export const  Description= styled.div`
    font-size:15px;
    font-weight:300;
    margin-bottom: 20px;
`;

export const Button = styled.button`
    flex:1;
    border: none;
    background-color: #000000;
    color:  #FFFFFF;
    cursor: pointer;

    &:hover{
        background-color:#000000;   
        color: #EEC015;     
    }

`;
export const InputContainer = styled.div`
    width:50%;
    height:45px;
    background-color: white;   
    display:flex;
    justify-content:space-between;
    border: 1px solid #000000;
   
`;
export const Input = styled.input`
    border: none;
    flex:8;
    padding-left:10px;

    &:focus{
        outline:none;
        ${InputContainer}{
            border: 1px solid #EEC015;
        }
    }
`;
