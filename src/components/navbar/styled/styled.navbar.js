import styled from 'styled-components'

export const Container = styled.nav`
        background-color: #000000;
        color: white;
        position: sticky;
        z-index: 999;
        width:100%;
`;
export const Wrapper = styled.div`
        padding: 10px 20px;
        display: flex;
        align-items:center;
        justify-content: space-between;
`;
export const Language= styled.div`
        font-size: 14px;
        cursor: pointer;
`;
export const SearchContainer =styled.div`
        border: 0.5px solid darkgray;
        display:flex;
        align-items:center;
        margin-left: 20px;
        padding: 5px;
        background:none;
`;
export const Input = styled.input`
        border:none;
       background:none;
       color:white;
       &:focus-visible{
               outline:none;
       }    
`; 

export const Left =styled.div`
        flex: 1;
        display: flex;
        align-items:center;
`;
export const Center =styled.div`
        flex: 1;
        text-align: center;
`;
export const Logo = styled.h1`
        font-weight: 200 ;
        letter-spacing:5px;
        cursor: pointer;
`;
export const Right =styled.div`
        flex: 1;
        display: flex;
        align-items: baseline;
        justify-content: flex-end;
`;

export const MenuItem =styled.div`
        font-size: 15px;
        cursor: pointer;;
        margin-left: 25px;
        &:hover{
                color: #EEC015;
        }
`;