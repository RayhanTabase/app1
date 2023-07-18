import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  cart: {},
  status: '',
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartAdded(state, action) {
      const { id } = action.payload.product;
      state.cart = { ...state.cart, [id]: action.payload };
    },
    cartUpdateQuantity(state, action) {
      const { id } = action.payload.product;
      const quantity = state.cart[id].quantity + action.payload.quantity
      const product = state.cart[id].product
      state.cart = { ...state.cart, [id]: {product, quantity} };
    },
    cartRemoved(state, action) {
      const id = action.payload;
      delete state.cart[id];
    },
  },
});

export const { cartAdded, cartUpdateQuantity, cartRemoved } = cartSlice.actions;

export default cartSlice.reducer;
