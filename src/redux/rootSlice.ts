import { createSlice } from '@reduxjs/toolkit';
import { addLoading, removeLoading } from './actions';
import { toastSuccess } from '../utils/plugins/Toast';

const initialState: IRootState = {
  loading: 0,
  number: 0,
  product: [],
  listFavourite: [],
  credential: {
    username: "",
    password: ""
  },
  isLogin: false,
  dataProduct: [],
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
      const result = state.product?.find(item => item?.id === action.payload.id)
      if (result) {
        const resultData = state.product?.map(item => {
          if (item?.id === action.payload.id) {
            item.quanlity = item.quanlity + action.payload.data.quanlity
          }
          return item
        })
        state.product = resultData;
      } else {
        state.product = [...state.product, action.payload.data];
      }
      toastSuccess()
    },
    incrementProduct: (state, action) => {
      const result = state.product?.map(item => {
        if (item.id === action.payload) {
          item.quanlity += 1
        }
        return item
      })
      state.product = result
    },
    decrementProduct: (state, action) => {
      const result = state.product?.map(item => {
        if (item.id === action.payload) {
          item.quanlity -= 1
        }
        return item
      })
      state.product = result
    },
    clearProduct: (state) => {
      state.product = []
    },
    clearProductById: (state, action) => {
      const result = state.product.filter(item => item.id !== action.payload)
      state.product = result
    },
    setFavourite: (state, action) => {
      if (!action.payload.isLike) {
        const result = state.listFavourite.filter(item => item?.id !== action.payload.data.id)
        state.listFavourite = result
      } else {
        const result = state.listFavourite.find(item => item?.id === action.payload.data.id)
        state.listFavourite = result ? state.listFavourite : [...state.listFavourite, action.payload.data]
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
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload
    },
    setListProduct: (state, action) => {
      state.dataProduct = action.payload
    },
    setComment: (state, action) => {
      const productFind = state.dataProduct.find((item: any) => item.id === action.payload.id)
      if (productFind) {
        const result = state.dataProduct.map((item: any) => {
          if (item?.id === productFind?.id) {
            item.comment = [...item.comment, action.payload.data]
          }
          return item
        })
        state.dataProduct = result
      }
    },
    setCredential: (state, action) => {
      state.credential = action.payload
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
  setCredential,
  increment,
  increaseByAmount,
  decreaseByAmount,
  decrement,
  addProduct,
  setFavourite,
  clearFavourite,
  clearFavouriteById,
  clearProduct,
  clearProductById,
  decrementProduct,
  incrementProduct,
  setIsLogin,
  setListProduct,
  setComment,
} = rootSlice.actions