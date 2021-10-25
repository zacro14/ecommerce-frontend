import styled from 'styled-components/macro'
import { mobile } from "../../../responsive"
import { Amount, FilterColor, SelectSize } from "../../../pages/SingleProduct/styled_viewproduct";
import { Remove, Add } from '@mui/icons-material';


export const ItemSummaryTitle = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform:capitalize;
  align-items: center;
  height: 1.875rem;
  border-bottom: 1px solid #ccc;

  ${mobile({
      display: "none",  
  })};
`;

export const ProductTitle = styled.div`
  font-weight:600;
  font-size:.875rem;
  width:50%;
`;

export const ProductDesc= styled(ProductTitle)`
  text-align:center;
  width: 12.5%;

  ${mobile({
      width: "none",  
  })};
`;

export const Info = styled(ItemSummaryTitle)`
  display: flex;
  justify-content: space-between;
  min-height: 12.5rem;
  border-bottom: 1px dashed #ccc;
  ${mobile({
    flexWrap: "wrap",
    minHeight: "225px"
  })};
`;


export const ProductContainer = styled.div`
  display: flex;
  justify-content:flex-start;
  width:50%;
  ${mobile({
    width: "100%",
    justifyContent: "space-between",
  })};
`;

export const ProductImage = styled.img`
 width: 150px;
 height: 150px;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction:column;
  padding-left:5px;
`;

export const Description = styled.span`
  justify-content: flex-start;
  font-size:.875rem;
  font-weight:${props=>props.fontweight};
  padding: 10px 0;
`;

export const FiltercolorCart = styled(FilterColor)`
  cursor: pointer;
`;

export const ColorText = styled.span`
  display: flex;
  flex-direction:row;
  align-items: center;
`;

export const SizeText = styled(ColorText)`
  display: flex;
  flex-direction:row;
  align-items: center;
`;

export const PriceMobileText = styled(ColorText)`
  display: none;

  ${mobile({display: "block"})}
`;

export const UnitPrice = styled.div`
  text-align:center;
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
export const AddToWishlist = styled(RemoveItem)`
`;
