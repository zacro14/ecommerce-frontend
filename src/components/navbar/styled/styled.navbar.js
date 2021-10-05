import styled from 'styled-components'
 import { mobile } from "../../../responsive"

export const Container = styled.nav`
        background-color: #000000;
        color: white;
        z-index: 999;
        width:100%;
        position: sticky;
      
`;

export const Wrapper = styled.div`
        padding: .625rem 1.25rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

`;

export const Language= styled.div`
        font-size: .875rem;
        cursor: pointer;

        ${mobile({display: "none"})}
`;

export const SearchContainer =styled.div`
        border: .03125rem solid darkgray;
        display:flex;
        align-items:center;
        margin-left: 1.25rem;
        padding: .3125rem;
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
        align-items: center;

        
        ${mobile({
                display: "none"
        })}
`;
export const Center =styled.div`
        flex: 1;
        text-align: center;
          
        ${mobile({
                textAlign: "left"
        })}
`;
export const Logo = styled.h1`
        font-weight: 200 ;
        letter-spacing:.3125rem;
        cursor: pointer;

`;
export const Right =styled.div`
        flex: 1;
        display: flex;
        justify-content: flex-end;

        ${mobile({
                flex: 2,
                alignItems: "center",
        })}
`;

export const MenuItem =styled.div`
        font-size: .9375rem;
        cursor: pointer;;
        margin-left: 1.5625rem;
        &:hover{
                color: #EEC015;
        }
`;

export const MenuitemText = styled(MenuItem)`
        ${mobile({display: "none"})}
`;

export const MenuItemSearch = styled(MenuItem)`
        display:none;
        ${mobile({display: "block"})}
`;