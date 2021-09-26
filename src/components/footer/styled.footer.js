import styled from "styled-components"

export const Container= styled.footer`
    display: flex;
    background-color: #000000;
`;


export const Left= styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    color: white;
    padding:1rem; 
`;
export const Logo =styled.h1`
    font-weight: 200 ;
    letter-spacing:5px;
    cursor: pointer;
    font-size:50px;
`;

export const Desc =styled.p`
    margin: 20px 0;
    font-weight:200;
    font-size:13px;
`;
export const SocialContainer = styled.div`
    display: flex;
 
`;

export const SocialIcon = styled.div`
    cursor:pointer;
    width:40px;
    height:40px;
    border-radius:50%;
    background-color: #${props=> props.color};
    display: flex;
    align-items: center;
    justify-content:center;
    color: white;
    margin-right: 10px;
    
   
`;

export const Center= styled.div`
    flex:1;
`;

export const Title = styled.h3`
    color:white;
    margin: 30px 0;
`;
    
export const List = styled.ul`
    margin:0;
    padding: 0;
    list-style:none;
    color:white;
    display: flex;
    flex-wrap:wrap; 
    
  
`;
export const ListItem= styled.li`
    width:50%;
    font-weight:200;
    font-size:13px;
    cursor: pointer;
    margin-bottom:5px;

    &:hover{
        color:#EEC015;
    }
`;  

export const Right= styled.div`
flex:1; 
color:white;
`;

export const ContactItem = styled.div`
    display:flex;
    font-weight:200;
    font-size:13px;
    margin-bottom:10px;
    align-items:center;
    `;

