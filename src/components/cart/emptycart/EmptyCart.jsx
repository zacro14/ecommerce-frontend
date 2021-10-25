
import { 
    Container, EmptyTitle, 
    GetStartedText, LinktoShop, Wrapper 
} from "./styled_emptyCart"

const EmptyCart = () => {
    return (
        <Container>
            <Wrapper>
               <EmptyTitle>
                   your cart is empty
                </EmptyTitle>
               <LinktoShop to = {"/"}>
               <GetStartedText>
                   get started
               </GetStartedText>
               </LinktoShop>
            </Wrapper>
        </Container>
    )
}

export default EmptyCart
