import {formatNumber} from "../../../helpers/utils"
import { Close } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addQuantity, removeProduct, subQuantity } from "../../../redux/cartRedux"
import { 
    Action, AddCart,AmountCart, ColorText,  Description, 
    FiltercolorCart, Info,PriceMobileText, 
    ProductContainer,  ProductDetails, 
    ProductImage,Quantity, RemoveCart, 
    RemoveItem, SelectsizeCart, 
    SizeText,  TotalPrice, UnitPrice 
    } from "../cartitem/cartItem_styled"



const CartItem = ({products}) => {
    const { img, name, price , quantity , color, size, id, cat } = products
    const  dispatch = useDispatch()

    const removeItem = () =>dispatch(removeProduct(id))
    const handleAddQuantity = () =>{dispatch(addQuantity(id))}
    const handleSubQuantity = () => {quantity > 1 && dispatch(subQuantity(id))}
    return (
        <>
            <Info>
                <ProductContainer>
                    <ProductImage 
                    src={img}
                    alt={name}
                    />
                    <ProductDetails>
                        <Description fontweight="600">
                            <Link to = {`/product/${cat}/${id}`} style={{textDecoration: "none", color: "inherit"}}> 
                                {name}
                            </Link>                       
                        </Description>
                        <Description>
                            <ColorText>Color: 
                                <FiltercolorCart 
                                color={color} 
                                />
                            </ColorText>                                            
                        </Description>
                        <Description>
                            Size:
                            <SizeText>
                                {size} 
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
                        <RemoveCart onClick={handleSubQuantity}/>
                        <AmountCart  value={quantity} readOnly/>
                        <AddCart  onClick={handleAddQuantity}/>
                    </SelectsizeCart>
                </Quantity>
                <TotalPrice>{formatNumber(quantity * price)}</TotalPrice>
                <Action>
                    <RemoveItem onClick={removeItem}>
                        <Close/>
                    </RemoveItem>
                </Action>
            </Info>
        </>
    )
}

export default CartItem
