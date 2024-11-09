import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    products: [],
    searchTerm: "",
    filterData: [],

}

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        setProducts:(state,action)=>{
            state.products = action.payload;
        },
    searchTerm(state, action){
        state.searchTerm = action.payload;
        state.filterData = state.products.filter((product)=>
            product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
    )

    }
    },
})

export const {setProducts, searchTerm } = productSlice.actions;
export default productSlice.reducer