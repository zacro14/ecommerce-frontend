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
import { useEffect, useState } from "react";



const ProductList = () => {
  
    const { category } = useParams()
    const [product, setProduct] = useState([])
    

    useEffect(() => {
        const data = ProductItem.filter((cat) => cat.cat ===  category )
        setProduct(data)
    }, [category]);

    useDocumentTitle(`${category }- MENS|Corner`);
    return (
        <Container>
                <Navbar/>               
                <Title>{category}</Title>
               <ProductContainer>
                {product.map((product)=>(
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
