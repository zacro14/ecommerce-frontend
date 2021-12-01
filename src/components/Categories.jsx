import { useEffect, useState } from "react";
import styled from "styled-components/macro"
import CategoriesItem from "./CategoryItem";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { publicReq } from "../BASE_URL";


const Container = styled.section`
    margin-top: 50px;
    background-color: #fff;
    
`;

const Wrapper = styled.div`
    display: grid;
    padding: 0 20px;
    grid-template-columns: repeat(3, 33.3333333%);
    
    ${mobile({
        flexDirection: "column", 
        justifyContent: "center",
        padding: "10px",
    })}
`;

const CategoryTitle = styled.h3`
    text-transform: uppercase;
    text-align: center;
    font-weight: 600;
    font-size: 1.875rem;
    padding: 0 1.25rem;
    letter-spacing: 2px;

    ${mobile({
        fontSize: "25px"
    })}
   
`;

const LinkCategory = styled(Link)`
    color: inherit;
    text-decoration: none;
    position: relative;
    display: block;

    & ::after{
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: auto;
        background-color: #000;
        opacity: .1;
        transition: opacity .8s ease;
    }
`;


const Categories = () => {

    const [category, setCategory] = useState([])
    const [error, setError] = useState(false)

useEffect(() => {
   const getCategory = async () => {
    try {
        const res = await publicReq.get("/categories")
        setCategory(res.data)
    } catch (error) {
        setError(true)
    }}
   getCategory()
    return () => {
        setCategory([])
        setError(false)
    }
}, [])
    
    return (
        <Container >
            <CategoryTitle>
                explore our collections
            </CategoryTitle>
            <Wrapper> 
                {!error ? category.map(item =>(
                <LinkCategory key={item.category} to={`/shop/products/${item.category}`}>
                    <CategoriesItem  
                        item={item} 
                        key={item.id}
                    />
                </LinkCategory>             
                ))
                : 
                <p> not found </p>} 
            </Wrapper>
        </Container>
    )
}

export default Categories
