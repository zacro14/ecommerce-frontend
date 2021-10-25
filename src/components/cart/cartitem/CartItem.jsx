import { Close, FavoriteBorderOutlined} from "@mui/icons-material"
import { 
    Action, AddCart, AddToWishlist,
    AmountCart,
    ColorText,  Description, 
    FiltercolorCart, 
    Info, ItemSummaryTitle,
    PriceMobileText, ProductContainer, 
    ProductDesc, ProductDetails, ProductImage, 
    ProductTitle, Quantity, RemoveCart, RemoveItem, 
    SelectsizeCart, 
    SizeText,  TotalPrice, UnitPrice 
    } 
from "../cartitem/cartItem_styled"

const CartItem = () => {
    
    return (
        <div>
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
                    src="/images/products/inhale_tshirt.jpg"
                    />
                    <ProductDetails>
                        <Description fontweight="600">
                        nikeCourt legacy canvas                       
                        </Description>
                        <Description>
                            <ColorText>Color: 
                                <FiltercolorCart 
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
                    <SelectsizeCart defaultValue>
                        <RemoveCart />
                        <AmountCart  type="text" defaultValue="1"/>
                        <AddCart />
                    </SelectsizeCart>
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
        </div>
    )
}

export default CartItem
