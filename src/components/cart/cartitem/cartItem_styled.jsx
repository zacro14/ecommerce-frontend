import styled from 'styled-components/macro'
import { Remove, Add } from '@mui/icons-material';
import { mobile } from "../../../responsive"
import { Amount, FilterColor, SelectSize } from "../../../pages/SingleProduct/styled_viewproduct";
import { ItemSummaryTitle} from '../../../pages/Cart/styled.cart';


export const Info = styled(ItemSummaryTitle)`
  display: flex;
  justify-content: space-between;
  min-height: 12.5rem;
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
 object-fit: cover;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction:column;
  padding-left:5px;
`;

export const Description = styled.span`
  justify-content: space-between;
  font-size:.875rem;
  font-weight:${props=>props.fontweight};
  padding: 10px 0;
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
  display: flex;
  flex-direction:row;
  align-items: baseline;
  justify-content: space-between;
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