import {createSlice} from "@reduxjs/toolkit";

const productSlice = createSlice(
    {
        name: "products",
        initialState : null,
        reducers: {
            showProducts: (state,action)=> {
                return action.payload;
            }
        }
    }
);

export default productSlice.reducer;
export const {showProducts} = productSlice.actions;