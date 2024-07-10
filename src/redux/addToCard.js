import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
};

const cartProductsSlice = createSlice({
  name: "cartProducts",
  initialState,
  reducers: {
    addAllProductsToCart: (state, action) => {
      return { ...state, cards: action.payload };
    },

    addToCart: (state, action) => {
      state.cards.push(action.payload);
    },

    removeFromCart: (state, action) => {
      const index = state.cards.findIndex((product) => product.id === action.payload);
      if (index !== -1) state.cards.splice(index, 1);
    },

    incrementQuantity: (state, action) => {
      const product = state.cards.find((product) => product.id === action.payload);
      if (product) product.quantity++;
    },

    decrementQuantity: (state, action) => {
      const product = state.cards.find((product) => product.id === action.payload);
      if (product && product.quantity > 0) product.quantity--;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addAllProductsToCart,
  incrementQuantity,
  decrementQuantity,
} = cartProductsSlice.actions;

export default cartProductsSlice.reducer;
