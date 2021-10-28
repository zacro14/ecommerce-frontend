import { useSelector, useDispatch } from "react-redux";
import { addProduct, removeToCart } from "../redux/cartRedux";
const useCart = () => {
    const cart = useSelector(state => state.cart.product)
    const isItemOnCart = (id) => !!cart.find((item) => item.id === id);
    const dispatch = useDispatch()

   const addToCart =(productitem) => {

       if(isItemOnCart(productitem.id)) {
        dispatch(removeToCart(productitem.id));
       } else {
        dispatch(addProduct(productitem));
       }
   }
    return  { addToCart, cart , isItemOnCart }
}

export default useCart
