import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import cartReducer from './reducers/cart'

const store = configureStore({
  reducer: {
    cart: cartReducer,
  }
});


export default store