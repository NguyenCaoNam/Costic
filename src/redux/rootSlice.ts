import { createSlice } from '@reduxjs/toolkit';
import { addLoading, removeLoading } from './actions';
import { RootState } from '.';

const initialState: IRootState = {
  loading: 0,
  number: 0,
  product: [],
  listFavourite: []
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
      const result = state.product.find(item => item?.id === action.payload.id)
      if (!result) {
        state.product = [...state.product, action.payload.data];
      }
    },
    clearProduct: (state) => {
      state.product = []
    },
    clearProductById: (state, action) => {
      if (action.payload) {
        const result = state.listFavourite.filter(item => item.id !== action.payload)
        state.product = result
      }
    },
    setFavourite: (state, action) => {
      if (!action.payload.isLike) {
        const result = state.listFavourite.filter(item => item.id !== action.payload.productDetail.id)
        state.listFavourite = result
      } else {
        const result = state.listFavourite.find(item => item.id === action.payload.productDetail.id)
        state.listFavourite = result ? state.listFavourite : [...state.listFavourite, action.payload.productDetail]
      }
    },
    clearFavourite: (state) => {
      state.listFavourite = []
    },
    clearFavouriteById: (state, action) => {
      if (action.payload) {
        const result = state.listFavourite.filter(item => item.id !== action.payload)
        state.listFavourite = result
      }
    }
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
export const {
  increment,
  increaseByAmount,
  decreaseByAmount,
  decrement,
  addProduct,
  setFavourite,
  clearFavourite,
  clearFavouriteById,
  clearProduct,
  clearProductById
} = rootSlice.actions
export const selectProduct = (state: RootState) => state.root.product
export const selectNumber = (state: RootState) => state.root.number