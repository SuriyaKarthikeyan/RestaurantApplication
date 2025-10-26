import {createSlice} from "@reduxjs/toolkit";

const savedAddressesSlice = createSlice(
    {
        name: "savedAddress",
        initialState : {
            address : [],
            addAddressState : false
        },
        reducers: {
            storeSavedAddress: (state,action)=> {
                state.address.push(action.payload);
            },
              toggleAddAddressState: (state) => {
                state.addAddressState = !state.addAddressState;
            }
        }
    }
);

export default savedAddressesSlice.reducer;
export const {storeSavedAddress, toggleAddAddressState } = savedAddressesSlice.actions;