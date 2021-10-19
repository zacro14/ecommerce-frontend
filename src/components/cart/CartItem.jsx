import { Add, Close, FavoriteBorderOutlined, Remove} from "@mui/icons-material"
import { Amount, FilterColor, SelectSize } from "../../pages/SingleProduct/styled_viewproduct"
import { 
    Action, AddToWishlist,
    ColorText,  Description, 
    Info, ItemSummaryTitle,
    PriceMobileText, ProductContainer, 
    ProductDesc, ProductDetails, ProductImage, 
    ProductTitle, Quantity, RemoveItem, 
    SizeText,  TotalPrice, UnitPrice 
    } 
    from "../cart/cartItem_styled"

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
        </div>
    )
}

export default CartItem
