import { Skeleton } from "@mui/material";
import { formatNumber } from "../../helpers/utils"
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { 
    Container, 
    DetailsContainer, 
    ProductDetailsCategory, 
    ProductDetailsContainer, 
    ProductDetailsName, 
    ProductDetailsPrice, 
    ProductImage, 
    ProductItem 
} from './productitem_styled'

const Products = ({item, isLoading}) => {
    const {name, price, cat} = item
    useDocumentTitle(`${cat}- MENS|Corner`)
    return (
       <Container Loading = {isLoading}>
           <ProductItem>
               {
                   !isLoading ?
                   <ProductImage 
                   src = {item.img} 
                   alt = {name}
                   /> :
                   <Skeleton variant="rectangular" animation="wave" height={"100%"} />
                }
           </ProductItem>
           <ProductDetailsContainer>
               <DetailsContainer>
                   { !isLoading ?
                    <ProductDetailsName>
                        {name}
                    </ProductDetailsName>
                    : <Skeleton variant="text" animation="wave" height={30} width={"50%"}/>
                   }
                   { !isLoading ?
                    <ProductDetailsCategory>
                        {cat}
                    </ProductDetailsCategory>
                    : <Skeleton variant="text" animation="wave" width={"60%"}/>
                   }
                   { !isLoading ?
                    <ProductDetailsPrice>
                        {formatNumber(price)}
                    </ProductDetailsPrice>
                    : <Skeleton variant="text" animation="wave" />

                   }
                </DetailsContainer>
            </ProductDetailsContainer>
       </Container>
    )
}

export default Products
