import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './itemSlice'

export const store = configureStore({
  reducer: {
    crud:itemReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch