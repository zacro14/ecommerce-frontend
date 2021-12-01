import styled from "styled-components/macro"
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { East } from "@mui/icons-material";
import { mobile } from "../../responsive";

export const Container = styled.section`
  width: 100%;
  height: 400px;
  display: flex;
  overflow: hidden;
  margin-top: 10px;
  position: relative;
  

  ${mobile({
    height: "50vh"
  })}
`;

export const Wrapper = styled.div`
  display: flex;
  transition: all  1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);

`;

export const Slide = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img =>img.img}) no-repeat center;
  background-size: cover;
  object-fit: cover;
  width: 100vw;
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 50px;
  color: #fff;
  text-transform: uppercase;

  ${mobile({
    fontSize: "40px",
  })}
`;

export const Desc = styled.p`
  margin: 20px 0 10px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #fff;

  ${mobile({
    fontSize: "16px",
  })}
`;

export const ArrrowRight= styled(ArrowForwardIosOutlinedIcon)`
`;

export const ArrowLeft = styled(ArrowBackIosOutlinedIcon)`
`;

export  const Button = styled.button`
  background-color: #222;
  padding:10px;
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 2px;
  display: flex;
  align-items: center;

  &:hover {
     color: #222;
     background-color: #fff
  }
`;

export const ExploreButtonText = styled.span`
    color: inherit;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 600;
    flex: 1 ;

    &:hover{
      text-decoration: underline;
    }
`;

export const ExploreArrow =styled(East)`
    margin-left: 15px;
`;

 export const UnorderedList = styled.ol`
    
 `;

export const ListItem = styled.li`
    
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
  display: none;
  align-items:center;
  justify-content:center;
  cursor: pointer;
  position:absolute;
  top:0;
  bottom:0;
  margin:auto;
  left: ${props=>props.direction === "left" && "10px"};
  right: ${props=>props.direction === "right" && "10px"};
  z-index: 2;
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 10%);
  opacity: .3;
  

  ${Container} :hover &{
      display: flex;
  }

  &:hover{
    background-color: #222;
    color: white;
    opacity: 1;
  }
`;