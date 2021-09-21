import Navbar from "../../components/navbar/Navbar"
import Announcement from "../../components/Announcement";
import { Container, Filter, FilterContainer, FilterText, Option, Select, Title } from "./styled.productlist";
import Products from "../../components/Products";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";

 

const ProductList = () => {
    return (
        <Container>
                <Navbar/>
                <Announcement/>
                <Title>Dresses</Title>
               <FilterContainer>
                   <Filter>
                       <FilterText> Filter Products: </FilterText>
                       <Select>
                           <Option disabled selected>Color</Option>
                           <Option >White</Option>
                           <Option >Black</Option>
                           <Option >Red</Option>
                           <Option >Blue</Option>
                           <Option >Yellow</Option>
                           <Option >Green</Option>
                       </Select>
                       <Select>
                           <Option disabled selected>All</Option>
                           <Option >XS</Option>
                           <Option >S</Option>
                           <Option >M</Option>
                           <Option >L</Option>
                           <Option >XL</Option>                           
                       </Select>
                       </Filter>
                   <Filter><FilterText>Sort By: </FilterText>
                        <Select>
                           <Option  disabled selected>Newest</Option>
                           <Option >Price Low to High</Option>
                           <Option >Price High to Low</Option>                        
                       </Select>
                   </Filter>
               </FilterContainer>
               <Products/>
               <Newsletter/>
               <Footer/>
        </Container>
       
    )
}

export default ProductList
