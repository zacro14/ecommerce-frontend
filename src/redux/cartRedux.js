import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        product: [],
        cartquantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.cartquantity += 1;
            state.product.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        removeToCart: (state, action) =>{
            state.product.filter((productitem) => productitem.id !== action.payload.id);
            state.cartquantity -= 1;
            state.total -= action.payload.price * action.payload.quantity;
        }
    }
})

export const { addProduct, removeToCart} = cartSlice.actions;
export default cartSlice.reducer; 