import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define Product Type
interface Product {
  id: number;
  name: string;
  category: string;
}

interface ProductState {
  products: Product[];
  product: Product | null;
  loading: boolean;
  error: string | null;
}

// Initial State
const initialState: ProductState = {
  products: [],
  product: null,
  loading: false,
  error: null,
};

// Fetch all products
export const fetchProducts = createAsyncThunk<Product[], number>(
  'products/fetchProducts',
  async (limit) => {
    const response = await axios.get(`https://backend-for-ecommerce-plateform2.onrender.com/api/v1/products?limit=${limit}`);
    return response.data;
  }
);

// Fetch single product by ID
export const fetchProductById = createAsyncThunk<Product, number>(
  'products/fetchProductById',
  async (id) => {
    const response = await axios.get(`/api/v1/products/${id}`);
    return response.data;
  }
);

// Create a new product
export const createProduct = createAsyncThunk<Product, Partial<Product>>(
  'products/createProduct',
  async (data) => {
    const response = await axios.post(`/api/v1/products`, data);
    return response.data;
  }
);

// Delete product
export const deleteProduct = createAsyncThunk<number, number>(
  'products/deleteProduct',
  async (id) => {
    await axios.delete(`/api/v1/products/${id}`);
    return id;
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.product = action.payload;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter((p) => p.id !== action.payload);
      });
  },
});

export default productsSlice.reducer;
