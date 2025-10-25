import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
        name: "cart",
        initialState : [],
        reducers: {
            addCartItem: (state,action)=> {
                state.push(action.payload);
            },
            removeCartItem: (state,action)=> {
                return state.filter(item => item.id !== action.payload);
            }
        }
    }
);

export default cartSlice.reducer;
export const {addCartItem, removeCartItem} = cartSlice.actions;