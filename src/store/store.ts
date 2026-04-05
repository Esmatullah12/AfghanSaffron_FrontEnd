import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features/auth";
import { cartReducer } from "../features/cart";
import { reviewReducer } from "../features/review";
import { productReducer } from "../features/products";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    review: reviewReducer,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

