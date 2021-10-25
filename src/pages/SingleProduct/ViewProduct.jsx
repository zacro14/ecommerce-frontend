import Navbar from "../../components/navbar/Navbar"
import { useParams } from "react-router"
import { ProductItem } from "../../data"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import Footer from "../../components/footer/Footer"
import useDocumentTitle from "../../hooks/useDocumentTitle"
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
import { addProduct } from "../../redux/cartRedux"




const Product = () => {
const dispatch = useDispatch()
const  { id } = useParams()
const [productitem, setProduct] = useState([]) 

useEffect(()=>{
    try {
        const productdata = ProductItem.find((cat) =>  cat.id ===  id  )
        setProduct(productdata)
         console.log(productdata)
    }catch (error){
        console.log(error.message)
    }
   
}, [id])

useDocumentTitle(productitem?.name)
const [quantity, setQuantity] = useState(1)
const handleQuantity = (type) => {
  if (type === "decItem") {
     quantity > 1 && setQuantity(quantity - 1)
}else{
    setQuantity(quantity + 1)
}
  }

  const handleAddtoCart =()=> {
    dispatch(addProduct({ productitem, quantity}))
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
                   <Price>&#8369;{productitem.price}</Price>
                   <Divider/>
                   <SelectContainer>
                        <FilterContainer>                                             
                                <FilterColorContainer>
                                <FilterTitle>Colors</FilterTitle>
                                <SelectSize>
                                        <FilterColor  
                                        color="#bdb6b6"
                                        />
                                        <FilterColor color="#EEC015"/>
                                        <FilterColor color="#adedfa"/>
                                </SelectSize>                                 
                            </FilterColorContainer>
                            <FilterSize>
                                <FilterTitle>Sizes</FilterTitle>
                                    <SelectSize>                   
                                        <FilterSizeOption>XS</FilterSizeOption>
                                        <FilterSizeOption>S</FilterSizeOption>
                                        <FilterSizeOption>M</FilterSizeOption>
                                        <FilterSizeOption>L</FilterSizeOption>
                                        <FilterSizeOption>XL</FilterSizeOption>
                                    </SelectSize>                         
                            </FilterSize>
                            <AmountContainer>
                                <FilterTitle>Quantity</FilterTitle>  
                                <SelectSize>                                                                
                                    <RemoveItem onClick= {() => handleQuantity("decItem")} />
                                    <Amount type="text"  maxLength= "1000" defaultValue = {quantity} value = {quantity} />
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
                        Add To Cart
                    </AddtoCart>
                                        
                   
                    <Link to = {`/cart`} >
                     <BuyNow>Buy Now</BuyNow>
                    </Link>
                
                   </AddContainer>
               </InfoContainer>
           </Wrapper>
           <Footer/>
       </Container>
    )
}

export default Product
