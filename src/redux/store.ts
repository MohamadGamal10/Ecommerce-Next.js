import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './counter/counterSlice';
import { productsSlice } from './products/productsSlice';

const store = configureStore({
    reducer: {
      counter: counterSlice.reducer,  
      products: productsSlice.reducer,  
    },
  })


const makeStore = () => store;
export default makeStore;



// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']