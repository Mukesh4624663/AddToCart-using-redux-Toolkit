import { configureStore } from "@reduxjs/toolkit";
import ProductSlicer from "./features/productSlice";

export const store = configureStore({
  reducer: ProductSlicer,
});
