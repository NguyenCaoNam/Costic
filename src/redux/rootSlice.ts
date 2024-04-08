import { createSlice } from '@reduxjs/toolkit';
import { addLoading, removeLoading } from './actions';
import { RootState } from '.';

const initialState: IRootState = {
  loading: 0,
  number: 0,
  product: [],
};

const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    increment: (state) => {
      state.number += 1;
    },
    decrement: (state) => {
      state.number -= 1;
    },
    increaseByAmount: (state, action) => {
      state.number += action.payload;
    },
    decreaseByAmount: (state, action) => {
      state.number -= action.payload;
    },
    addProduct: (state, action) => {
      state.product = [...state.product, action.payload];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addLoading, state => {
        state.loading++;
      })
      .addCase(removeLoading, state => {
        state.loading--;
      });
  },
});

export default rootSlice.reducer;
export const { increment, increaseByAmount, decreaseByAmount, decrement, addProduct } = rootSlice.actions
export const selectProduct = (state: RootState) => state.root.product
export const selectNumber = (state: RootState) => state.root.number