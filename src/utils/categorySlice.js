import {createSlice} from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name : "category",
    initialState : null,
    reducers: {
        showCategories : (state,action) => {
            return action.payload;
        }
    }
});

export default categorySlice.reducer;
export const {showCategories} = categorySlice.actions;