import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// create an asunc thunk for fetching produts
export const fetchProducts = createAsyncThunk("AllProductsgets", async () => {
  const response = await axios.get("http://localhost:8000/products");
  return response.data;
});

// get single post
// export const getsinglePost = createAsyncThunk("getProductById", async (id) => {
//   const { data } = await axios.get(`http://localhost:8000/products/${id}`);
//   return data;
// });

const initialState = {
  products: [],
  isLoading: false,
  error: null,
  cart: [],
  status: "idle",
  totalPrice: 0,
};

const ProductSlicer = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    addtoCart: (state, action) => {
      const { product, quantity } = action.payload;
      // console.log(product);
      // console.log(quantity);
      const existingProductIndex = state.cart.findIndex(
        (item) => item._id === product._id
      );

      if (existingProductIndex !== -1) {
        // product is already in the cart , increase quantity
        state.cart[existingProductIndex].quantity += quantity;
        // console.log("same product");
      } else {
        // product is not in the cart add it
        state.cart.push({ ...product, quantity });
        // console.log("diffenet product");
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
    // builder
    //   .addCase(getsinglePost.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(getsinglePost.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.cart.push(action.payload);
    //     console.log(state.cart);
    //   })
    //   .addCase(getsinglePost.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.error.message;
    //   });
  },
});
export const { addtoCart } = ProductSlicer.actions;
export default ProductSlicer.reducer;
