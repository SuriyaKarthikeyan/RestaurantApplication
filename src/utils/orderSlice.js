import {createSlice} from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "orders",
    initialState: [],
    reducers: {
        addOrder : (state,action) => {
            state.push(action.payload);
        },
       updateOrderStatus: (state, action) => {
            const { id, status } = action.payload;
            const existingOrder = state.find(order => order.id === id);
            if (existingOrder) {
                existingOrder.status = status;
            }
        }
    }
});

export default orderSlice.reducer;
export const {addOrder, updateOrderStatus} = orderSlice.actions;