import { calculateTotal, formatNumber } from "../../../helpers/utils"
import { useSelector } from "react-redux"
import { AcceptPaymentContainer,CheckoutButton,
    PaymentMethodTitle,PaymentsImgContainer,
    PriceText,SubTotalText, ShippingfeeText,
    SummaryContainer, SummaryInfo, 
    SummaryInfoTotal, SummaryTitle, 
    TotalPriceText, TotalText, PaymentImg
} from "./styled_itemSummary"

const ItemSummary = () => {
 
    const cart = useSelector(state => state.cart)

    return (
        <>
            <SummaryContainer>
                <SummaryTitle>Order summary</SummaryTitle>
                <SummaryInfo>
                    <SubTotalText>subtotal</SubTotalText>
                    <PriceText>{formatNumber(calculateTotal(cart.product.map((product)=> product.price * product.quantity)))}</PriceText>
                </SummaryInfo>
                <SummaryInfo>
                    <ShippingfeeText>Estimated shipping fee</ShippingfeeText>
                    <PriceText>{formatNumber(60)}</PriceText>
                </SummaryInfo>
                <SummaryInfoTotal>
                    <TotalText>total</TotalText>
                    <TotalPriceText>{formatNumber(cart.product.map((product)=> product.price * product.quantity) + 60)}</TotalPriceText>
                </SummaryInfoTotal>
                <CheckoutButton>          
                proceed to checkout
                </CheckoutButton>
            </SummaryContainer>

            <AcceptPaymentContainer>
                <PaymentMethodTitle>
                    accepted payment methods
                </PaymentMethodTitle>
                <PaymentsImgContainer>
                    <PaymentImg 
                    src="/images/cart/payment-method.png"
                    alt="payment" 
                    />
                </PaymentsImgContainer>
            </AcceptPaymentContainer>
        </>
    )
}

export default ItemSummary
