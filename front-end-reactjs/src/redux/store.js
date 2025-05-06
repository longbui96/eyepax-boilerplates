import { configureStore } from "@reduxjs/toolkit";

import authorReducer from "./slices/author";
import inventoryReducer from "./slices/inventory";
import cartReducer from "./slices/cart";

export const store = configureStore({
  reducer: {
    author: authorReducer,
    inventory: inventoryReducer,
    cart: cartReducer,
  },
});
