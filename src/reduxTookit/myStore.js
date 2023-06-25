import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
const myStore2 = configureStore({
    reducer: {
        cart: cartReducer,
    }
});
export default myStore2;