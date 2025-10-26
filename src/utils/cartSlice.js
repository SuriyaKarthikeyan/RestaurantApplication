import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
        name: "cart",
        initialState : [],
        reducers: {
            addCartItem: (state,action)=> 
                {
                  const existingItem = state.find(item => item.id === action.payload.id);
                  if (existingItem)
                  {
                  // Increase quantity if product already exists
                  existingItem.quantity += 1;
                  } 
                  else 
                  {
                  // Add new product with quantity = 1
                  state.push({ ...action.payload, quantity: 1 });
                  }
                },
            removeCartItem: (state,action)=> 
            {
                //return state.filter(item => item.id !== action.payload);
                 const existingItem = state.find(item => item.id === action.payload);
                 if (existingItem)
                 {
                    if (existingItem.quantity > 1) 
                    {
                        // Decrease quantity if more than 1
                        existingItem.quantity -= 1;
                    } 
                    else 
                    {
                        // Remove the item completely if only one remains
                        return state.filter(item => item.id !== action.payload);
                    }
                }
            }
        }
    }
);

export default cartSlice.reducer;
export const {addCartItem, removeCartItem} = cartSlice.actions;