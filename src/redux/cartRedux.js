import { createSlice } from "@reduxjs/toolkit"

export const sumItems = (product) => {
    let itemCount = product.reduce((total, product) => total + product.quantity, 0);
    let total = product.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    return { itemCount, total }
}

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        product: [],
    },
    reducers: {
        addProduct: (state, action) => {
            state.product.push(action.payload)
        },
        removeProduct: (state , action) =>{
            state.product = state.product.filter((id) => id.id !== action.payload)
        },
        addQuantity: (state, action) =>{
            state.product =  state.product.map((item) => {
                if(item.id === action.payload){
                    return{
                        ...item,
                        quantity: item.quantity + 1
                    };
                }
            return item
            }  
        )
    },
        subQuantity: (state, action)=> {
            state.product =  state.product.map((item) => {
                if(item.id === action.payload){
                    return{
                        ...item,
                        quantity: item.quantity - 1
                    };

                }
            return item
            }
        )}
    }
})

export const { addProduct, removeProduct, addQuantity, subQuantity} = cartSlice.actions;
export default cartSlice.reducer; 