import { Skeleton } from "@mui/material"
import { useState } from "react"
import { formatNumber } from "../../helpers/utils"
import useCart from "../../hooks/useCart"
import {
    AddContainer, AddItem, AddtoCart, 
    Amount, AmountContainer,
    BuyNow, BuyNowLink, Category, Desc, Divider, 
    FilterColor, FilterColorContainer, 
    FilterContainer, FilterSize, FilterSizeOption,
    FilterTitle, Image, ImageContainer, InfoContainer, 
    Price, RemoveItem, SelectContainer, 
    SelectSize, Title
} from "../singleproduct/styled_singleproduct"

 
 const SingleProduct = ({product, isLoading}) => {
    const {addItem, isItemOnBasket} = useCart(product.id)
    const [quantity, setQuantity] = useState(1)
    const [selectedColor, setColor] = useState("");
    const [size, setSelectedSize] = useState("");
   

    const handleQuantity = (type) => {
        if (type === "decItem") {
           quantity > 1 && setQuantity(quantity - 1)
      } else {
          setQuantity(quantity + 1)
      }}

      const handleAddtoCart =()=> {
        addItem({ ...product, quantity, color: selectedColor || product.color[0], size: size || product.size[0]})
      }
    
      const setSize = (s) => {
          setSelectedSize(s)
      }
      const handleColor = (c) =>{
          setColor(c)
      }
   
    
  
     return (
         <>          
             <ImageContainer> 
                 { isLoading ?
                        <Image 
                            src={product.img}
                            alt={product.name}
                        /> 
                        : 
                        <Skeleton 
                            variant="rectangular" 
                            animation="wave" 
                            width ={"initial"}
                            height={"50vh"} 
                        /> } 
               </ImageContainer>
                        
               <InfoContainer>
                  { isLoading ?
                   <Title>
                       {product.name }
                    </Title>
                   : 
                   <Skeleton 
                        variant="text" 
                        animation="wave"
                        width={"100%"}
                        height={50}
                    /> }

                    <Category> {product.cat} </Category>

                  { isLoading ? 
                    <Price>{formatNumber(product.price)}</Price> 
                    : 
                    <Skeleton 
                        variant = "text" 
                        animation="wave"
                    /> }
                   <Divider/>

                   <SelectContainer>
                        <FilterContainer>                                             
                                <FilterColorContainer>
                                { isLoading ? 
                                <FilterTitle>Colors</FilterTitle>
                                 : 
                                <Skeleton 
                                    variant="text" 
                                    animation ="wave" 
                                    width={50}
                                /> }
                                <SelectSize>
                                    { isLoading ? product.color?.map((c)=>(
                                         <FilterColor
                                            className={selectedColor === c ? "active" : ""}
                                            color={c}
                                            key={c}
                                            onClick={()=>handleColor(c)}
                                         />)) 
                                        : 
                                        <Skeleton 
                                            variant="circular" 
                                            width={36} 
                                            height={36} 
                                            animation="wave" 
                                        /> }   
                                </SelectSize>                                 
                            </FilterColorContainer>
                            <FilterSize>
                            { isLoading ? 
                                <FilterTitle>Sizes</FilterTitle> 
                                : 
                                <Skeleton 
                                    variant="text" 
                                    animation ="wave" 
                                    width={50}
                                />}
                                   { isLoading ? <SelectSize> 
                                        {product.size?.map((s) =>(
                                          <FilterSizeOption
                                            className={size === s ? "active" : ""}
                                            key={s}
                                            onClick={()=> setSize(s)}
                                          >
                                              {s}
                                          </FilterSizeOption>
                                    ))} 
                                    </SelectSize> 
                                    : 
                                    <Skeleton 
                                        variant="rectangular" 
                                        animation="wave" 
                                    /> }                       
                            </FilterSize>
                            <AmountContainer>
                            { isLoading ? 
                            <FilterTitle>Quantity</FilterTitle> 
                            : 
                            <Skeleton 
                                variant="text" 
                                animation ="wave" 
                                width={50}
                            /> }
                               { isLoading ?
                                <SelectSize>                                                                
                                    <RemoveItem 
                                        onClick= {() => handleQuantity("decItem")} 
                                    />
                                    <Amount 
                                        type="text"  
                                        maxLength= "1000" 
                                        value = {quantity} 
                                        readOnly
                                    />
                                    <AddItem 
                                        onClick= {() => handleQuantity("addItem")}
                                    />
                                </SelectSize> 
                                : 
                                <Skeleton 
                                    variant="text"
                                    animation="wave" 
                                    width={30}
                                />}                                  
                            </AmountContainer>
                               
                        </FilterContainer>
                   </SelectContainer>
                   <Divider/>
                   { isLoading ? 
                   <AddContainer>
                        <AddtoCart 
                            onClick = {() => handleAddtoCart()}
                        >
                        { isItemOnBasket(product.id) ? 'add quantity' : 'Add To Cart'}
                        </AddtoCart>
                    
                    <BuyNowLink to ={'/cart'}> 
                        <BuyNow onClick ={handleAddtoCart}>
                            Buy Now
                        </BuyNow>
                    </BuyNowLink>
                   </AddContainer> 
                    : 
                   <Skeleton 
                        variant="rectangular" 
                        animation="wave" 
                        height ={50} 
                   /> }

                   { isLoading ?
                        <Desc> {product.desc} </Desc>
                        :
                         <Skeleton  
                            variant="text" 
                            animation="wave" 
                            height={30}
                        />}
               </InfoContainer>
         </>
     )
 }
 
 export default SingleProduct
 
 