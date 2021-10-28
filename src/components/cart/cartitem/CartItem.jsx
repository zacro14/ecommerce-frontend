import {formatNumber} from "../../../helpers/utils"
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


const CartItem = ({products}) => {
    const { img, name, price , quantity , color, size,  } = products
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
                    src={img}
                    alt={name}
                    />
                    <ProductDetails>
                        <Description fontweight="600">
                        {name}                       
                        </Description>
                        <Description>
                            <ColorText>Color: 
                                <FiltercolorCart 
                                color={color} 
                                style={{margin:"0 5px "}}
                                />
                            </ColorText>                                            
                        </Description>
                        <Description>
                            <SizeText>
                                Size: {size} 
                            </SizeText>                                           
                        </Description>
                        <Description> 
                            <PriceMobileText>Price: {formatNumber(price)}</PriceMobileText>                                          
                        </Description>
                    </ProductDetails>
                </ProductContainer>

                <UnitPrice>{formatNumber(price)}</UnitPrice>
                <Quantity>
                    <SelectsizeCart defaultValue>
                        <RemoveCart />
                        <AmountCart  value={quantity} readOnly/>
                        <AddCart  />
                    </SelectsizeCart>
                </Quantity>
                <TotalPrice>{formatNumber(quantity * price)}</TotalPrice>
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
