import { useParams } from "react-router"
import { ProductItem } from "../../data"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import useDocumentTitle from "../../hooks/useDocumentTitle"
import { formatNumber } from "../../helpers/utils"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import { 
    AddContainer, AddItem, AddtoCart, 
    Amount, AmountContainer,
    BuyNow, Container, Desc, Divider, 
    FilterColor, FilterColorContainer, 
    FilterContainer, FilterSize, FilterSizeOption,
    FilterTitle, Image, ImageContainer, InfoContainer, 
    Price, RemoveItem, SelectContainer, 
    SelectSize, Title, Wrapper 
} from "./styled_viewproduct"
import useCart from "../../hooks/useCart"





const Product = () => {

const  { id } = useParams()
const [productitem, setProduct] = useState({})
const [quantity, setQuantity] = useState(1)
const [color, setColor] = useState("");
const [size, setSelectedSize] = useState("");
const { addToCart, isItemOnCart } = useCart(id);

useEffect(()=>{
    try {
        const data = ProductItem.find((cat) =>  cat.id ===  id  )
        setProduct(data)
    }catch{} 
}, [id])

useDocumentTitle(productitem?.name)

const handleQuantity = (type) => {
  if (type === "decItem") {
     quantity > 1 && setQuantity(quantity - 1)
}else{
    setQuantity(quantity + 1)
}}

const handleAddtoCart =()=> {
    addToCart({ ...productitem, quantity, color: color || productitem.color[0], size: size || productitem.size[0]})
}

const setSize = (s) => {
    setSelectedSize(s)
}
const handleColor = (c) =>{
    setColor(c)
    
}

    return (
       <Container>
           <Navbar/>
           <Wrapper>
               <ImageContainer>
                   <Image 
                   src={productitem?.img}
                   alt={productitem?.name}
                   /> 
               </ImageContainer>
               <InfoContainer>
                   <Title>{productitem?.name}</Title>
                   <Desc>
                        {productitem?.desc}
                   </Desc>
                   <Price>{formatNumber(productitem?.price)}</Price>
                   <Divider/>
                   <SelectContainer>
                        <FilterContainer>                                             
                                <FilterColorContainer>
                                <FilterTitle>Colors</FilterTitle>
                                <SelectSize>
                                    { productitem.color?.map((c)=>(
                                         <FilterColor
                                         className={color === c ? "active" : ""}
                                         color={c}
                                         key={c}
                                         onClick={()=>handleColor(c)}
                                         />
                                )) }        
                                </SelectSize>                                 
                            </FilterColorContainer>
                            <FilterSize>
                                <FilterTitle>Sizes</FilterTitle>
                                    <SelectSize> 
                                        { productitem.size?.map((s) =>(
                                          <FilterSizeOption
                                          className={size === s ? "active" : ""}
                                          key={s}
                                          onClick={()=> setSize(s)}
                                          >
                                              {s}
                                          </FilterSizeOption>
                                    ))}                 
                                    </SelectSize>                         
                            </FilterSize>
                            <AmountContainer>
                                <FilterTitle>Quantity</FilterTitle>  
                                <SelectSize>                                                                
                                    <RemoveItem onClick= {() => handleQuantity("decItem")} />
                                    <Amount type="text"  maxLength= "1000" value = {quantity} readOnly/>
                                    <AddItem onClick= {() => handleQuantity("addItem")}/>
                                </SelectSize>                                   
                            </AmountContainer>
                        </FilterContainer>
                   </SelectContainer>
                   <Divider/>
                   <AddContainer>
                 
                    <AddtoCart 
                    onClick = {() => handleAddtoCart()}
                    >
                         {isItemOnCart(productitem.id) ? 'Remove From Cart' : 'Add To Cart'}
                    </AddtoCart>      
                    <BuyNow>
                     <Link style= {{textDecoration: "none", color: "inherit"}} to = {`/cart`} >
                         Buy Now
                     </Link>
                    </BuyNow>
                   </AddContainer>
               </InfoContainer>
           </Wrapper>
           <Footer/>
       </Container>
    )
}

export default Product
