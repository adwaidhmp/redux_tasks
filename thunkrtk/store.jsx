import { configureStore } from "@reduxjs/toolkit";
import reducer from "./thunkslice";

export const store=configureStore({
    reducer:{
        posts:reducer
    }
})