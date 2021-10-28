import { Suspense, lazy } from "react";
import { useSelector } from "react-redux"
import { formatNumber } from "../../helpers/utils"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import useDocumentTitle from "../../hooks/useDocumentTitle";
import EmptyCart from "../../components/cart/emptycart/EmptyCart"

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


const CartItem = lazy(()=> import("../../components/cart/cartitem/CartItem"));

const Cart = () => {
    const cart = useSelector(state => state.cart)
    
    useDocumentTitle ('Cart-MENS|Corner')
   
    return (
 <CartContainer>
     <Navbar />
     <Suspense fallback = { <div style= {{textAlign : "center", minHeight: "50vh"}}>Loading...</div>}>
     <CartTitle>shopping bag</CartTitle>
      <CartWrapper>       
        <LeftCartContainer>
            {
                cart.cartquantity > 0 ?
            cart.product.map((product)=>(
                 <CartItem products = {product} key={product.id} /> 
            )) : <EmptyCart />
        }        
        </LeftCartContainer>
        <RightCartContainer>
            <SummaryContainer>
                <SummaryTitle>Order summary</SummaryTitle>
                <SummaryInfo>
                    <SubTotalText>subtotal</SubTotalText>
                    <PriceText>{formatNumber(cart.total)}</PriceText>
                </SummaryInfo>
                <SummaryInfo>
                    <ShippingfeeText>Estimated shipping fee</ShippingfeeText>
                    <PriceText>{formatNumber(60)}</PriceText>
                </SummaryInfo>
                <SummaryInfoTotal>
                    <TotalText>total</TotalText>
                    <TotalPriceText>{formatNumber(cart.total + 60 )}</TotalPriceText>
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
        </RightCartContainer>       
      </CartWrapper>
      </Suspense>
      <Footer/>
 </CartContainer>
    )
}

export default Cart