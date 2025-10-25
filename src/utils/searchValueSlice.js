import {createSlice} from "@reduxjs/toolkit";

const searchValueSlice = createSlice({
    name : "searchValue",
    initialState : null,
    reducers: {
        storeSearchValue : (state,action) => {
            return action.payload;
        }
    }
});

export default searchValueSlice.reducer;
export const {storeSearchValue} = searchValueSlice.actions;