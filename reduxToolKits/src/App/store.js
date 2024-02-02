import { configureStore } from '@reduxjs/toolkit'; //awlay need to this configureStore
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
   reducer: todoReducer
});