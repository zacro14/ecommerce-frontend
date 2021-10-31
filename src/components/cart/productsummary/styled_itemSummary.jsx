import styled from "styled-components/macro"
import { LeftCartContainer } from "../../../pages/Cart/styled.cart";

export const SummaryContainer = styled(LeftCartContainer)`
    display: flex;
    flex-direction:column;
    padding: .625rem;
    min-height: 210px;
    justify-content:space-between;
   
`;

export const AcceptPaymentContainer = styled.div`
    padding:.625rem;
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


export const PaymentMethodTitle = styled.span`
    font-size: 1rem;
    font-weight: 600;
    text-transform:uppercase;
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

export const SummaryInfoTotal = styled(SummaryInfo)`
    border-top: .0625rem solid #ccc;
    margin-top: .625rem;
    padding-top: .3125rem;
    font-size: 1rem;
`;


export const PaymentsImgContainer = styled.span`
    text-transform: uppercase;
    font-weight: 600;
`;


export const TotalText = styled(SubTotalText)`
    font-size: inherit;
`;

export const TotalPriceText = styled(PriceText)`
    font-weight: bold;
    font-size: inherit;
`;

export const PaymentImg = styled.img`
    padding: .625rem 0;
`;

