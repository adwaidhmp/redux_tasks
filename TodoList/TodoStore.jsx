import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./Slice";
export const Store=configureStore({
    reducer:{
        Todo:TodoReducer
    }
}
)