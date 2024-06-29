import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/ProductSlice";
import cartReducer from "../features/cart/CartSlice";

const store=configureStore({
    reducer:{
        products:productReducer,
        cart: cartReducer,
    }
})
export default store;