import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import categoryReducer from "./categorySlice.js";
import productReducer from "./productSlice.js";
import searchValueReducer from "./searchValueSlice.js";
import sortValueReducer from "./sortValueSlice.js";
import cartReducer from "./cartSlice.js";
import wishListReducer from "./wishListSlice.js";
const appStore = configureStore(
    {
        reducer : {
           user: userReducer,   
           category : categoryReducer,
           products : productReducer,
           searchValue : searchValueReducer,
           sortValue : sortValueReducer,
           cart: cartReducer,
           wishlist : wishListReducer
        },
    }
);

export default appStore;