import { Suspense } from "react";
import { lazy } from "react";
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import { 
    AcceptPaymentContainer,
    CartContainer, CartTitle, CartWrapper, 
    CheckoutButton,LeftCartContainer,
    PaymentImg, PaymentMethodTitle,PaymentsImgContainer,
    PriceText,RightCartContainer, ShippingfeeText,
    SubTotalText, SummaryContainer, SummaryInfo, 
    SummaryInfoTotal, SummaryTitle, 
    TotalPriceText, TotalText
    } 
    from "./styled.cart";
const CartItem = lazy(()=> import("../../components/cart/CartItem"));

const Cart = () => {
    return (
 <CartContainer>
     <Navbar active/>
     <Suspense fallback = { <div>Loading...</div>}>
     <CartTitle>shopping bag</CartTitle>
      <CartWrapper>       
        <LeftCartContainer>
           <CartItem />
        </LeftCartContainer>
        <RightCartContainer>
            <SummaryContainer>
                <SummaryTitle>Order summary</SummaryTitle>
                <SummaryInfo>
                    <SubTotalText>subtotal</SubTotalText>
                    <PriceText>&#8369; 499</PriceText>
                </SummaryInfo>
                <SummaryInfo>
                    <ShippingfeeText>Estimated shipping fee</ShippingfeeText>
                    <PriceText>&#8369; 60</PriceText>
                </SummaryInfo>
                <SummaryInfoTotal>
                    <TotalText>total</TotalText>
                    <TotalPriceText>&#8369; 559</TotalPriceText>
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
                    src="/images/payment/payment-method.png" 
                    />
                </PaymentsImgContainer>
            </AcceptPaymentContainer>
        </RightCartContainer>       
      </CartWrapper>
      </Suspense>
      <Footer/>
 </CartContainer>
    )
}

export default Cart