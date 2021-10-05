import { Add, Close, FavoriteBorderOutlined, Remove} from "@mui/icons-material"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import { Amount, FilterColor, SelectSize } from "../Product/styled.product"
import { AcceptPaymentContainer, Action, AddToWishlist, CartContainer, CartTitle, CartWrapper, 
    CheckoutButton,  ColorText,  Description, Info, ItemSummaryTitle,
    LeftCartContainer, PaymentImg, PaymentMethodTitle, PaymentsImgContainer, PriceMobileText, PriceText, ProductContainer,
    ProductDesc, ProductDetails, ProductImage, ProductTitle,
    Quantity, RemoveItem, RightCartContainer, ShippingfeeText,
    SizeText,SubTotalText, SummaryContainer, SummaryInfo, SummaryInfoTotal, SummaryTitle, 
    TotalPrice, TotalPriceText, TotalText, UnitPrice } 
    from "./styled.cart"

const Cart = () => {
    return (
 <CartContainer>
     <Navbar/>
     <CartTitle>shopping bag</CartTitle>
      <CartWrapper>       
        <LeftCartContainer>
            <ItemSummaryTitle>
                <ProductTitle>Product</ProductTitle>
                <ProductDesc>unit price</ProductDesc>
                <ProductDesc>quantity</ProductDesc>
                <ProductDesc>total price</ProductDesc>
                <ProductDesc>Action</ProductDesc>
            </ItemSummaryTitle>
            <Info>
                <ProductContainer>
                    <ProductImage 
                    src="/images/products/Ramp Shoes.jpg"
                    />
                    <ProductDetails>
                        <Description fontweight="600">
                        nikeCourt legacy canvas                       
                        </Description>
                        <Description>
                            <ColorText>Color: 
                                <FilterColor 
                                color="#000" 
                                style={{margin:"0 5px "}}
                                />
                            </ColorText>                                            
                        </Description>
                        <Description>
                            <SizeText>Size: 10 
                            </SizeText>                                           
                        </Description>
                        <Description> 
                            <PriceMobileText>Price: &#8369; 4,795</PriceMobileText>                                          
                        </Description>
                    </ProductDetails>
                </ProductContainer>

                <UnitPrice>&#8369; 4,795</UnitPrice>
                <Quantity>
                    <SelectSize defaultValue style={{justifyContent: "center"}}>
                        <Remove style={{cursor:"pointer"}}/>
                        <Amount  type="text" defaultValue="1"/>
                        <Add style={{cursor:"pointer"}}/>
                    </SelectSize>
                </Quantity>
                <TotalPrice>&#8369; 4,795</TotalPrice>
                <Action>
                    <AddToWishlist >
                        <FavoriteBorderOutlined/>
                    </AddToWishlist>
                    <RemoveItem>
                        <Close/>
                    </RemoveItem>
                </Action>
            </Info>
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
      <Footer/>
 </CartContainer>
    )
}

export default Cart