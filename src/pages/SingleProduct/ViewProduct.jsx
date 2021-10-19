import Navbar from "../../components/navbar/Navbar"
import { useParams } from "react-router"
import { ProductItem } from "../../data"
import { useEffect } from "react"
//import Announcement from "../../components/Announcement"
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



const Product = () => {
const  { id } = useParams()
const productitem = ProductItem.find((cat) =>  cat.id ===  id  )

useEffect(()=>{
    const productid = productitem.id !== id 
    
   console.log(productid)
}, [productitem, id])

useDocumentTitle(productitem?.name)
    return (
       <Container>
           <Navbar/>
           <Wrapper>
               <ImageContainer>
                   <Image 
                   src={productitem?.img}
                   alt={productitem?.name}
                   /> 
                   {/* <ImageGallery 
                   src="/images/products/Ramp Shoes.jpg" 
                   alt="shoes" 
                   />               */}
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
                                <FilterTitle>Color</FilterTitle>
                                <SelectSize>
                                        <FilterColor color="#000"/>
                                        <FilterColor color="#EEC015"/>
                                        <FilterColor color="#adedfa"/>
                                </SelectSize>                                 
                            </FilterColorContainer>
                            <FilterSize>
                                <FilterTitle>Size</FilterTitle>
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
                                    <RemoveItem/>
                                    <Amount type="text" defaultValue="1"/>
                                    <AddItem/>
                                </SelectSize>                                   
                            </AmountContainer>
                        </FilterContainer>
                   </SelectContainer>
                   <Divider/>
                   <AddContainer>                        
                        <AddtoCart>Add To Cart</AddtoCart>
                        <BuyNow>Buy Now</BuyNow>
                   </AddContainer>
               </InfoContainer>
           </Wrapper>
           <Footer/>
       </Container>
    )
}

export default Product
