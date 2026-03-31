import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features/auth";
import { cartReducer } from "../features/cart";
import { reviewReducer } from "../features/review";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    review: reviewReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
