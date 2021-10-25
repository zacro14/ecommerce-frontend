import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        product: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.product.push(action.payload.product);
            state.total += action.payload.price;
        }
    }
})

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer; 