import { Suspense, lazy} from "react";
import styled from "styled-components/macro";
import { mobile } from "../../responsive"
import { ProductItem } from "../../data";
import { CircularProgress } from "@mui/material";
import { useState, useEffect} from "react";
const Product = lazy(()=> import("./Product"));

const Container  = styled.section`
    margin-top: 50px;

    ${mobile({marginTop: "20px"})}
`;

const Wrapper = styled.div`
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    ${mobile({justifyContent: "center", padding: "10px"})}
`;

const TopProductsTitle = styled.h3`
    padding: 0 20px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.875rem;
    letter-spacing: 2px;

    ${mobile({justifyContent: "center", padding: "0"})}
`;

const TopProducts = (IsOffer) => {
    const [product, setTopProduct] = useState([])
    useEffect(() => {
        const data = ProductItem.filter((item) => item.topProduct === true)
        setTopProduct(data)
    }, [])
    return (
    <>
        <Suspense fallback={<CircularProgress/>}>
        <Container>   
            <TopProductsTitle>
                top products
            </TopProductsTitle>     
            <Wrapper>       
                {product.map((item)=> ( 
                        <Product item={item} key ={ item.id }/>   
                    ))}             
            </Wrapper>         
        </Container>
       </Suspense>
    </>
    )
}

export default TopProducts