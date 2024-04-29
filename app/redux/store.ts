import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import cartReducer from './feature/cart/cartSlice';
import productSlice from './feature/products/productSlice';
// import userReducer from './feature/user/userSlice';
import { api } from './api/apiSlice';
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productSlice,
    // user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
