import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slicepage";
export const store=configureStore({
    reducer:{
        page:reducer
    }
})