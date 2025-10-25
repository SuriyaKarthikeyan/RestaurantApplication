import {createSlice} from "@reduxjs/toolkit";

const wishListSlice = createSlice(
    {
        name: "wishlist",
        initialState : [],
        reducers: {
            addWishListItem: (state,action)=> {
                state.push(action.payload);
            },
              removeWLItem: (state,action)=> {
                return state.filter(item => item.id !== action.payload);
            }
        }
    }
);

export default wishListSlice.reducer;
export const {addWishListItem,removeWLItem} = wishListSlice.actions;