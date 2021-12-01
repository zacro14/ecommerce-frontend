import styled from 'styled-components/macro'
import { Remove, Add } from '@mui/icons-material';
import { Link } from "react-router-dom"
import { mobile } from "../../../responsive"
import { Amount, FilterColor, SelectSize } from "../../singleproduct/styled_singleproduct";

export const Info = styled.div`
  display: flex;
  padding: 10px;
  background-color: #fff;
  border-radius: 2px;
  justify-content: space-between;
  align-items: center;
  min-height: 12.5rem;
  box-shadow: 0 .0625rem rgb(0 0 0 / 5%);
  padding: 0 .625rem;
  margin-bottom: 10px; 

  ${mobile({
    flexWrap: "wrap",
    minHeight: "225px"
  })};
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  
  ${mobile({
    width: "100%",
    justifyContent: "space-between",
  })};
`;

export const ImgContainer = styled.div`
  background-color: #EBEEEF;
  border-radius: 2px;
  width: 150px;
  height: 150px;
`;

export const ProductImage = styled.img`
 width: 100%;
 height: 100%;
 object-fit: cover;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

export const Description = styled.span`
  font-size: .875rem;
  font-weight: ${props=>props.fontweight};
  padding: 10px 0;
  text-transform: uppercase;
`;

export const Links = styled(Link)`
  text-decoration: none;
  color: inherit;

  :hover{
    text-decoration: underline;
  }
`;

export const FiltercolorCart = styled(FilterColor)`
  cursor: pointer;
  width: 25px;
  height: 25px;

  &:hover{
    border: 1px solid transparent;
  }
`;

export const ColorText = styled.span`
  align-items: baseline;
  text-transform: capitalize;
`;

export const SizeText = styled(ColorText)`
  text-transform: uppercase;
`;

export const PriceMobileText = styled(ColorText)`
  display: none;

  ${mobile({display: "block"})}
`;

export const UnitPrice = styled.div`
  text-align: center;
  width: 12.5%;

  ${mobile({width: "auto",})}
`;

export const Quantity = styled(UnitPrice)``;

export const AmountCart = styled(Amount)`
`;

export const SelectsizeCart = styled(SelectSize)`
    padding: 0;
    justify-content: center;
`;

export const RemoveCart =styled(Remove)`
  cursor: pointer;
`;

export const AddCart = styled(Add)`
  cursor: pointer;
`;

export const TotalPrice = styled(UnitPrice)`
  ${mobile({display: "none"})}
`;

export const Action = styled(UnitPrice)`
  display: flex;
  justify-content: space-evenly;
`;
export const RemoveItem = styled.div`
  cursor: pointer;
  &:hover{
      color: #606770;
  }
  ${mobile({padding: "10px",})}
`;