import {createSlice} from "@reduxjs/toolkit";

const sortValueSlice = createSlice({
    name : "sortValue",
    initialState : null,
    reducers: {
        storeSortValue : (state,action) => {
            return action.payload;
        }
    }
});

export default sortValueSlice.reducer;
export const {storeSortValue} = sortValueSlice.actions;