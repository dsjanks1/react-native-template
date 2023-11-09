// src/reducers/index.ts
import {combineReducers} from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';
// Import other slices here

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other slice reducers here
});

export default rootReducer;
