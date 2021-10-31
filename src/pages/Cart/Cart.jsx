import { Suspense, lazy } from "react";
import { useSelector } from "react-redux"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import useDocumentTitle from "../../hooks/useDocumentTitle";
import EmptyCart from "../../components/cart/emptycart/EmptyCart"
import ItemSummary from "../../components/cart/productsummary/ItemSummary";
import { 
    CartContainer, 
    CartTitle, 
    CartWrapper, 
    ItemSummaryTitle, 
    LeftCartContainer,
    ProductDesc,
    ProductTitle,
    RightCartContainer,
} from "./styled.cart";



const CartItem = lazy(()=> import("../../components/cart/cartitem/CartItem"));

const Cart = () => {
    const cart = useSelector(state => state.cart)

    useDocumentTitle ('Cart-MENS|Corner')
    return (
 <CartContainer>
    <Navbar />
    <Suspense fallback = { <div style= {{textAlign : "center", minHeight: "50vh"}}>Loading...</div>}>
    <CartTitle>shopping bag</CartTitle>
      <CartWrapper>       
        <LeftCartContainer> 
            <ItemSummaryTitle>
                <ProductTitle>Product</ProductTitle>
                <ProductDesc>unit price</ProductDesc>
                <ProductDesc>quantity</ProductDesc>
                <ProductDesc>total price</ProductDesc>
                <ProductDesc>Action</ProductDesc>
            </ItemSummaryTitle>
            {
            cart.product.length > 0 ?
            cart.product.map((product)=>(
                 <CartItem products = {product} key={product.id} /> 
            )) : <EmptyCart />
        }        
        </LeftCartContainer>
        <RightCartContainer>
            <ItemSummary />
        </RightCartContainer>       
    </CartWrapper>
    </Suspense>
    <Footer/>
 </CartContainer>
)}

export default Cart