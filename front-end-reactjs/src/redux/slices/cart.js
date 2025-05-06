import { createSlice } from "@reduxjs/toolkit";

/*
{
  [id]: {
    quantity: 1
  },
  egg: {
    quantity: 2
  },
} 
*/

const initialState = {
  items: {},
  status: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { name } = action.payload;
      state.items[name] = {
        quantity: 1,
      };
    },
    updateItemQuantity(state, action) {
      const { name, quantity } = action.payload;
      state.items[name] = {
        quantity: parseInt(quantity),
      };
    },
    deleteItem(state, action) {
      const { name } = action.payload;
      delete state.items[name];
    },
  },
});

export const { addToCart, updateItemQuantity, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
