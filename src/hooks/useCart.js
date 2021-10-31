import { useSelector, useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../redux/cartRedux";
const useCart = () => {
    const cart = useSelector(state => state.cart.product)
    const dispatch = useDispatch()

    const isItemOnBasket = (id) => !!cart.find((item) => item.id === id)

    const addItem =(productitem) => {
        if(isItemOnBasket(productitem.id)){
            dispatch(removeProduct(productitem.id))
            
        }else{
            dispatch(addProduct(productitem))
        }
    };

    return {addItem, isItemOnBasket, cart}
}

export default  useCart
