import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { name: "bacon", unitPrice: 10.99, quantity: 10 },
    { name: "eggs", unitPrice: 3.99, quantity: 10 },
    { name: "cheese", unitPrice: 6.99, quantity: 10 },
    { name: "chives", unitPrice: 1.0, quantity: 10 },
    { name: "wine", unitPrice: 11.99, quantity: 10 },
    { name: "brandy", unitPrice: 17.55, quantity: 10 },
    { name: "bananas", unitPrice: 0.69, quantity: 10 },
    { name: "ham", unitPrice: 2.69, quantity: 10 },
    { name: "tomatoes", unitPrice: 3.26, quantity: 10 },
    { name: "tissue", unitPrice: 8.45, quantity: 10 },
  ],
  status: "idle",
  error: null,
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    validateQuantity(state, action) {
      const { name, quantity } = action.payload;
      const item = state.items.find((e) => e.name === name);
      if (item && item.quantity <= quantity) {
        return true;
      }
      return false;
    },
  },
});

export const { getInventory } = inventorySlice.actions;
export default inventorySlice.reducer;
