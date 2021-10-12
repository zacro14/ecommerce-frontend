import styled from "styled-components/macro"
import { mobile } from "../../responsive";
export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position:relative;
overflow:hidden;

${mobile({height: "100vh"})}
`;
export const Wrapper = styled.div`
height:100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${(props) => props.slideIndex * -100}vw);

${mobile({height: "50%"})}
`;
export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg};

`;
export const Img = styled.img`
  height: 100%;

  ${mobile({height: "100%"})}

`;

export const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

export const Title = styled.h1`
  font-size:50px;
`;
export const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
`;


export  const Button = styled.button`
  background: transparent;
  padding:10px;
  font-size:20px;
  border: 1px solid  #000000;
  color: #000000;
  cursor: pointer;
  &:hover {
      color:#EEC015;
      background-color:  #000000;
  }
`;

export const InfoContainer = styled.div`
flex:1;
padding: 50px;
`;
export const Arrow =styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
background-color:  #FFFFFF;
display:flex;
align-items:center;
justify-content:center;
cursor: pointer;
position:absolute;
top:0;
bottom:0;
margin:auto;
left: ${props=>props.direction === "left" && "10px"};
right: ${props=>props.direction === "right" && "10px"};
opacity:0.5;
z-index:2;
`;