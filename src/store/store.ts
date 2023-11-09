// src/store.ts
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../reduces'; // This will be created in step 3

const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
