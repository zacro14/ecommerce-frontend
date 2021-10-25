import styled from "styled-components/macro"
import { mobile } from "../../responsive"

export const Container= styled.footer`   
    background-color: #fff;
    color:#000;
    margin-top: 1.25rem;
    border-top: 1px solid #ccc;
`;

export const DescContainer = styled.div`
    display: flex;

    ${mobile({
        flexDirection: "column"
    })}
`;


export const Left= styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    color: inherit;
    padding:1rem; 
`;
export const Logo =styled.h1`
    font-weight: 200 ;
    letter-spacing:.3125rem;
    cursor: pointer;
    font-size:3.125rem;
`;

export const Desc =styled.p`
    margin: 1.25rem 0;
    font-weight:200;
    font-size:.8125rem;
`;
export const SocialContainer = styled.div`
    display: flex;
    margin-top:1.875rem;

    ${mobile({alignItems: "left"})}
`;

export const SocialIcon = styled.div`
    cursor:pointer;
    width:2.5rem;
    height:2.5rem;
    border-radius:50%;
    background-color: #${props=> props.color};
    display: flex;
    align-items: center;
    justify-content:center;
    color: inherit;
    margin-right: .625rem;
    
   
`;

export const Center= styled.div`
    flex:1;
    padding: 16px;
`;

export const Title = styled.h3`
    color:inherit;
    margin: 1.875rem 0;
`;
    
export const List = styled.ul`
    margin:0;
    padding: 0;
    list-style:none;
    color:inherit;
    display: flex;
    flex-wrap:wrap;  
  
`;
export const ListItem= styled.li`
    width:50%;
    font-weight:200;
    font-size:.8125rem;
    cursor: pointer;
    margin-bottom:.3125rem;

    &:hover{
        text-decoration:underline;
    }
`;  

export const Right= styled.div`
    flex:1; 
    color:inherit;
    padding: 16px;
`;

export const ContactItem = styled.div`
    display:flex;
    font-weight:200;
    font-size:.8125rem;
    margin-bottom:.625rem;
    align-items:center;
`;

export const CopyrightContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    background-color: #363738;
    color: #fff;
    font-size: .75rem;
    text-transform: capitalize;
    border-top: .0625rem solid #ccc;

    ${mobile({flexDirection: "column", padding: "16px"})}
`;

export const Copyright = styled.div`
    flex:1;
    display: flex;
    justify-content:center;
    align-items: center;
`;

export const AttribContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:flex-end;
    margin-right:.3125rem;

    ${mobile({
        alignItems: "center",
        marginTop: "10px"
    })}
`;

export const AssetAttrib = styled.a`
    text-decoration:none;
    padding-bottom:.3125rem;
`;
