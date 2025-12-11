import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  thumbnail: string,
  name: string;
  price: number;
  quantity: number;
  weight: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: JSON.parse(localStorage.getItem("cart") || "[]"),
};

const saveToLocalStorage = (state: CartState) => {
  localStorage.setItem("cart", JSON.stringify(state.items));
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
    const existingItem = state.items.find((item) => item.id === action.payload.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        state.items.push({ ...action.payload, quantity: 1 });
    }
        localStorage.setItem("cart", JSON.stringify(state.items));
    },

    
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cart");
    },

    increaseQuantity: (state, action: PayloadAction<number>) => {
      const product = state.items.find((p) => p.id === action.payload);
      if (product) {
        product.quantity += 1;
        saveToLocalStorage(state);
      }
    },

    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const product = state.items.find((p) => p.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        saveToLocalStorage(state);
      }
    }
  },
});

export const { addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
