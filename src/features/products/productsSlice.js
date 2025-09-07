import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Mock API (you can replace with your backend API)
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const res = await axios.get('https://fakestoreapi.com/products');
  return res.data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState: { items: [], loading: false },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    });
  },
});

export default productsSlice.reducer;
