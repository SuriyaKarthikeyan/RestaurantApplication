import {createSlice} from "@reduxjs/toolkit";

const currentAddressSlice = createSlice(
    {
        name: "currentAddress",
        initialState : 
        { 
          address : null,
          changeText : false
        },
        reducers: {
            storeCurrentAddress: (state,action)=> {
                state.address = action.payload;
            },
            toggleChangeButton: (state) => {
                state.changeText = !state.changeText;
            }
        }
    }
);

export default currentAddressSlice.reducer;
export const {storeCurrentAddress, toggleChangeButton} = currentAddressSlice.actions;