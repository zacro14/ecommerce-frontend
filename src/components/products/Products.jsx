import React from 'react'
import { 
    Container, 
    DetailsContainer, 
    ProductDetailsCategory, 
    ProductDetailsContainer, 
    ProductDetailsName, 
    ProductDetailsPrice, 
    ProductImage, 
    ProductItem 
} from './styled_product'

const Products = ({item}) => {
    const {name, price, cat} = item
    return (
       <Container>
           <ProductItem>
                <ProductImage 
                src = {item.img} 
                alt = {name}
                />
           </ProductItem>
           <ProductDetailsContainer>
               <DetailsContainer>
                    <ProductDetailsName>
                        {name}
                    </ProductDetailsName>
                    <ProductDetailsCategory>
                        {cat}
                    </ProductDetailsCategory>
                    <ProductDetailsPrice>
                        &#8369;{price}
                    </ProductDetailsPrice>
                </DetailsContainer>
            </ProductDetailsContainer>
       </Container>
    )
}

export default Products
