import Navbar from "../../components/navbar/Navbar"
import { AddContainer, AddtoCart, Amount, AmountContainer, Br, BuyNow, Container, Desc, Divider, FilterColor, 
    FilterColorContainer, 
    FilterContainer, FilterSize, FilterSizeOption,
    FilterTitle, Image, ImageContainer, 
    InfoContainer, Price, SelectContainer, SelectSize, Title, Wrapper } from "./styled.product"
import Announcement from "../../components/Announcement"
import Footer from "../../components/footer/Footer"
import { Rating } from "@mui/material"
import { Add, Remove } from "@mui/icons-material"



const Product = () => {
    return (
       <Container>
           <Navbar/>
           <Announcement/>
           <Wrapper>
               <ImageContainer>
                   <Image 
                   src="https://i.ibb.co/S6qMxwr/jean.jpg"
                   />                  
               </ImageContainer>
               <InfoContainer>
                   <Title>Wrangler Denim JumpSuit</Title>
                   <Rating size="small" readOnly="true" value="5" style={{color: 'black', padding:"10px 0"}}/>
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
                                    <Remove style={{cursor:"pointer"}}/>
                                    <Amount type="text" value="1"/>
                                    <Add style={{cursor:"pointer"}}/>
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
