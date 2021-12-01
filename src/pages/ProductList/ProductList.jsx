import {  useParams } from "react-router";
import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar"
import { Container,ProductContainer, Title } from "./styled_productlist";
import Footer from "../../components/footer/Footer";
import Products from "../../components/products/ProductItem";
import useDocumentTitle from "../../hooks/useDocumentTitle"
import { publicReq } from "../../BASE_URL";
import { StyledLink } from "../../components/products/productitem_styled";



const ProductList = () => {
  
    const { category } = useParams()
    const [product, setProduct] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const getcategory = async () => {    
        try {
            setLoading(true)
            const res = await publicReq.get( category ? `/products?cat=${category}` : `/products`)
            setProduct(res.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }}
        getcategory()
    }, [category]);
    useDocumentTitle(`Shop- MENS|Corner`);
    return (
        <>
        <Navbar/>  
        <Container>             
            <Title>{"Shop"}</Title>
               <ProductContainer>
                {
                product.length === 0 ? new Array(12).fill({}).map((product, index) => (
                    <Products
                      key={`skeleton${index}`}
                      item={product}
                      isLoading={isLoading}
                    />
                  )) :

                 product.map((product)=>(
                   <StyledLink key={product.id} to ={`/product/${product.cat}/${product.id}`}>
                         <Products item={product} key={product.id}  isLoading={isLoading}  /> 
                     </StyledLink>                       
                 ))}
  
                </ProductContainer>  
        </Container>
        <Footer/>
       </>
    )
}

export default ProductList
