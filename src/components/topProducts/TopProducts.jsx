import { Suspense, lazy} from "react";
import styled from "styled-components/macro";
import {mobile} from "../../responsive"
import { Border, BorderContainer } from "../Categories";
import { ProductItem } from "../../data";
import { CircularProgress } from "@mui/material";
import { useState, useEffect} from "react";
const Product = lazy(()=> import("./Product"));

const Container  = styled.div`
    ${mobile({marginTop: "20px"})}
    margin-top: 30px;
`

const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    ${mobile({justifyContent: "center", padding: "10px"})}
`;

const TopProductsTitle = styled.h3`
    text-align: center;
    text-transform:uppercase;
    font-weight: 600;
    font-size: 1.875rem;

    ${mobile({justifyContent: "center", padding: "0"})}
`;

const Products = () => {
    const [product, setTopProduct] = useState([])
    useEffect(() => {
        const data = ProductItem.filter((item) => item.topProduct === true)
        setTopProduct(data)
    }, [])
    return (
    <>
        <Suspense fallback={<CircularProgress/>}>
        <Container>
            <BorderContainer>
                <Border/>
                    <TopProductsTitle>
                        top product
                    </TopProductsTitle>
                <Border/>
            </BorderContainer>   
            <Wrapper>       
                        {
                            product.map((item)=> ( 
                                    <Product item={item} key ={ item.id }/>   
                            ))    
                        }             
            </Wrapper>         
        </Container>
       </Suspense>
    </>
    )
}

export default Products