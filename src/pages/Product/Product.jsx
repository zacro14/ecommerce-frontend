import Navbar from "../../components/navbar/Navbar"
import Announcement from "../../components/Announcement"
import Footer from "../../components/footer/Footer"
import { AddContainer, AddItem, AddtoCart, Amount, AmountContainer, Br, BuyNow, Container, Desc, Divider, FilterColor, 
    FilterColorContainer, 
    FilterContainer, FilterSize, FilterSizeOption,
    FilterTitle, Image, ImageContainer, 
    // ImageGallery, 
    InfoContainer, Price, RemoveItem, SelectContainer, SelectSize, Title, Wrapper } from "./styled.product"



const Product = () => {
    return (
       <Container>
        <Announcement/>
           <Navbar/>
           <Wrapper>
               <ImageContainer>
                   <Image 
                   src="/images/products/air-force.png"
                   alt="air-force"
                   /> 
                   {/* <ImageGallery 
                   src="/images/products/Ramp Shoes.jpg" 
                   alt="shoes" 
                   />               */}
               </ImageContainer>
               <InfoContainer>
                   <Title>Wrangler Denim JumpSuit</Title>
                   <Desc>
                    - Dark washed slim fit jeans
                    <Br/>
                    - Low rise
                    <Br/>
                    - Unlined
                    <Br/>
                    - Button and zipper fastening
                    <Br/>
                    - Belt loops
                    <Br/>
                    - 5 Pockets
                    <Br/>
                    - Casual
                    <Br/>
                    - Solid
                    <Br/>
                    - Basic
                    <Br/>
                    - Denim
                    <Br/>
                    - Regular fit
                    <Br/>
                    - Model wears 32 in. and is 5'11" tall
                   </Desc>
                   <Price>&#8369;1,000</Price>
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
