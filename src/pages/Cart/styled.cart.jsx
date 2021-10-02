import styled from 'styled-components'

export const CartContainer = styled.div`
    background-color: #F5F5F5;
    color: black;
`;

export const  CartWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items:flex-start;
    margin: 0 1.875rem 0 1.875rem;
`;

export const CartTitle = styled.div`
    color:inherit;
    text-align:center;
    text-transform:capitalize;
    font-weight:800;
    margin: .625rem  ;
`;

export const LeftCartContainer = styled.div`
    flex:3;
    display: flex;
    flex-direction:column;
    background-color: #fff;
    border-radius: .1875rem;
    box-shadow: 0 .0625rem rgb(0 0 0 / 5%);
    padding:.625rem;
`;

export const ItemSummaryTitle = styled.div`
    display: flex;
    justify-content: space-between;
    text-transform:capitalize;
    align-items: center;
    height: 1.875rem;
    border-bottom: 1px solid #ccc;
`;

export const ProductTitle = styled.div`
    font-weight:600;
    font-size:.875rem;
    width:50%;
`;

export const ProductDesc= styled(ProductTitle)`
    text-align:center;
    width:15%;
`;

export const Info = styled(ItemSummaryTitle)`
    display: flex;
    justify-content: space-between;
    min-height: 12.5rem;
    border-bottom: 1px dashed #ccc;
`;

export const ProductContainer = styled.div`
    display: flex;
    justify-content:flex-start;
    width:50%;
`;

export const ProductImage = styled.img`
    height:150px;
    width:150px;
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

export const UnitPrice = styled.div`
    text-align:center;
    width:15%;
`;

export const Quantity = styled(UnitPrice)``;
export const TotalPrice = styled(UnitPrice)``;
export const Action = styled(UnitPrice)`
    display: flex;
    justify-content: space-evenly;
`;
export const RemoveItem = styled.div`
    cursor:pointer;
    &:hover{
        color: #606770;
    }
`;
export const AddToWishlist = styled(RemoveItem)``;

export const RightCartContainer = styled.div`
    flex:1 ;
    margin-left:.625rem;
`;

export const SummaryContainer = styled(LeftCartContainer)`
     display: flex;
    flex-direction:column;
`;

export const SummaryTitle = styled.span`
    font-weight:600;
    font-size:1rem;
    text-transform:capitalize;
    align-items: center;
    margin-bottom:.875rem;
`;

export const SummaryInfo = styled.div`
    display: flex;
    justify-content:space-between;
    margin-bottom:.875rem;
`;

export const SubTotalText = styled.span`
    display: flex;
    justify-content:space-between;
    text-transform:capitalize;
    font-size:.875rem;
    font-weight:500;
`;

export const PriceText = styled(SubTotalText)`
    font-weight:600;
`;

export const ShippingfeeText = styled(SubTotalText)`
`;

export const SummaryInfoTotal = styled(SummaryInfo)`
    border-top: .0625rem solid #ccc;
    margin-top: .625rem;
    padding-top: .3125rem;
    font-size:1rem;
`;

export const TotalText = styled(SubTotalText)`
    font-size:inherit;
`;

export const TotalPriceText = styled(PriceText)`
    font-weight:bold;
    font-size:inherit;
`;

export const CheckoutButton = styled.button`
    font-size:.875rem;
    text-transform:uppercase;
    border:0;
    border-radius: .125rem;
    color: #fff;
    background-color: #000;
    box-shadow: 0 .0625rem .0625rem rgb(0 0 0 / 9%);
    height: 2.5rem;
    min-width: 8.75rem;
    cursor: pointer;

    &:hover{
        opacity: 80%;
}
`;

export const AcceptPaymentContainer = styled.div`
    margin-top: 1.25rem;
`;

export const PaymentMethodTitle = styled.span`
    font-size: 1rem;
    font-weight: 600;
    text-transform:uppercase;
`;

export const PaymentsImgContainer = styled.span`
    text-transform: uppercase;
    font-weight: 600;
`;

export const PaymentImg = styled.img`
    padding: .625rem 0;
`;


