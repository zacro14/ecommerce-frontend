import styled from "styled-components"

export const Container = styled.div`
    background-color:#F5F5F5;
   
`;
export const Wrapper = styled.div`
    padding:10px;
    display: flex;
    background-color:white;
    margin: 50px;
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
    
`;
export const ImageContainer = styled.div`
    flex-shrink:0;
    padding: 0 10px 0 10px;
`;
export const InfoContainer = styled.div`
    padding: 0 20px;
    flex:1;
`;
export const Image = styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;
 `; 
export const Title = styled.h1`
    font-weight: 200;
`;
export const Desc = styled.p`
margin-bottom:20px;
`;

export const Br = styled.br``;

export const Price = styled.span`
font-size:30px;
font-weight:500;
`;

export const Divider = styled.div`
border: 1px solid #F5F5F5;
margin:10px 0;
`;

export const SelectContainer = styled.div`
display: flex;
align-items:center;
margin-bottom:10px;
`;
export const FilterContainer = styled.div`
display: flex;
flex-direction:column;
justify-content:space-between;
align-content:center;
`;

export const FilterSize =styled.div`
display: flex;
align-items:center;
`;
export const FilterTitle = styled.label`
align-content:center;
font-weight:500;
margin-right:15px;
width:110px;
`;
export const FilterColor = styled.span`
display: flex;
background-color: ${props => props.color};
border-radius:50%;
width:20px;
height:20px;
margin:10px 10px 10px 0;
cursor: pointer;

`;

export const FilterColorContainer = styled.div`
display: flex;
align-items:center;
`;
export const SelectSize = styled.div`
display: flex;
`;
export const FilterSizeOption = styled.span`
 background: transparent;
 padding:5px;
  font-size:14px;
  border-radius:16px;
  border: 1px solid  gray;
  color: #000000;
  cursor: pointer;
  margin:10px 10px 10px 0;
  height:20px;
  width:50px;
  align-items:center;
  display: flex;
  justify-content:center;
  &:hover { 
    border: 1px solid black;
  }
`;

export const AddContainer = styled.div`
display: flex;
margin-top:30px;
`;
export const AmountContainer = styled.div`
display: flex;
margin-top: 10px;
`;
export const Amount = styled.input`
text-align:center;
width:40px;
height:20px;
border:1px solid black;
border-radius:5px;
margin: 0 5px 0 5px;

&:focus{
    outline:none
}
`;
export const AddtoCart = styled.button`
background: transparent;
color:black;
font-size:16px;
border-radius:2px;
border: 1px solid black;
min-width: 11.25rem;
height:48px;
margin:0 15px 0 0;
cursor: pointer;
&:hover{
border:none;
background-color: #EEC015;
}
`;
export const BuyNow = styled.button`
background:black;
color:white;
border:none;
border-radius:2px;
font-size:16px;
min-width: 11.25rem;
height:48px;
cursor: pointer;

&:hover{
    opacity:80%;
}
`;

