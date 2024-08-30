import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./StoreSlice";
export const store = configureStore({
    reducer: {
        todo:TodoReducer
    }
})