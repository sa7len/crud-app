import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Item {
    id: string
    name: string
    price: number
}

export interface itemState {
    items: Item[]
  }
const initialState: itemState = {
    items: [],
}

export const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem:(state,action: PayloadAction<Item>)=>{
        state.items.push(action.payload)
    },
    updateItem: (state, action: PayloadAction<{ id: string; newData: Partial<Item> }>) => {
        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
            const existingItem = state.items[index];
            state.items[index] = { ...existingItem, ...action.payload.newData };
        }
    },
    
    deleteItem:(state,action: PayloadAction<string>)=>{
      state.items= state.items.filter((item) =>item.id !== action.payload)
    }

  },
})

export const {addItem, updateItem,deleteItem} = itemSlice.actions

export default itemSlice.reducer