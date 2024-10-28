import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    products: [],
    totalQuantity: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
       addToCart(state, action){
        

       }
    },
})

export const {setProducts} = cartSlice.actions;
export default cartSlice.reducer