import Navbar from "../../components/navbar/Navbar"
//import Announcement from "../../components/Announcement";
import { Container,ProductContainer, Title } from "./styled.productlist";
//import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import Products from "../../components/products/Products";
import { ProductItem } from "../../data";
import useDocumentTitle from "../../hooks/useDocumentTitle"
import { StyledLink } from "../../components/products/styled_product";
import { useParams } from "react-router";
import { useEffect } from "react";



const ProductList = () => {
  
    const { category } = useParams();
    const cat = ProductItem.filter((cat) => cat.cat ===  category )
    useEffect(() => {

        console.log(cat)
    }, [category, cat]);

    useDocumentTitle(`${ category }- MENS|Corner`);
    return (
        <Container>
                <Navbar/>               
                <Title>{category}</Title>
               {/* <FilterContainer>
                   <Filter>
                       <FilterText> Filter Products: </FilterText>
                       <Select defaultValue="">
                           <Option >White</Option>
                           <Option >Black</Option>
                           <Option >Red</Option>
                           <Option >Blue</Option>
                           <Option >Yellow</Option>
                           <Option >Green</Option>
                       </Select>
                       <Select defaultValue="">
                           <Option >XS</Option>
                           <Option >S</Option>
                           <Option >M</Option>
                           <Option >L</Option>
                           <Option >XL</Option>                           
                       </Select>
                       </Filter>
                   <Filter>
                       <FilterText>Sort By: </FilterText>
                        <Select defaultValue="">
                           <Option >Price Low to High</Option>
                           <Option >Price High to Low</Option>                        
                       </Select>
                   </Filter>
               </FilterContainer> */}
               <ProductContainer>
                {cat.map((product)=>(
                    <StyledLink key={product.id} to ={`/product/${category}/${product.id}`}>
                        <Products item={product} key={product.id}  />
                    </StyledLink>                                  
                ))}  
                </ProductContainer>
               <Footer/>
        </Container>
       
    )
}

export default ProductList
