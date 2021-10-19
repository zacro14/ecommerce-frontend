import styled from "styled-components/macro"
import { categories } from "../data";
import CategoriesItem from "./CategoryItem";
import { mobile } from "../responsive"
import { Link } from "react-router-dom"


const Container = styled.div`
    margin-top:30px;
`;

const Wrapper = styled.div`
    display:flex;
    padding:20px;
    justify-content:space-between;
    
    ${mobile({
        flexDirection: "column", 
        justifyContent: "center",
        padding: "10px",
    })}
`;

const CategoryTitle = styled.h3`
    text-transform:uppercase;
    text-align: center;
    font-weight: 600;
    font-size: 1.875rem;
    padding: .625rem;
   
`;
export const BorderContainer = styled.div`
    display: flex;
    align-items: center;
    margin:1.25rem 0 1.25rem 0;
`;

export const Border = styled.hr`
    height: 2px;
    width: 100%;
    background-color: #000;
    flex:1;
`;

const Categories = () => {
    
    return (
        <Container >
            <BorderContainer>
                <Border/>
                    <CategoryTitle>
                        our collections
                    </CategoryTitle>
                <Border/>
            </BorderContainer>
            <Wrapper> 
               
                {categories.map(item =>(
                    <Link key = {item.id} to={`/products/${item.title}`}>
                        <CategoriesItem  
                        item={item} 
                        key={item.id}
                        />
                    </Link>                       
                ))}
            </Wrapper>
        </Container>
    )
}

export default Categories
