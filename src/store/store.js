import { configureStore } from "@reduxjs/toolkit";
import { blogReducer } from "./blogSlise";
import { authReducer } from "./authSlice";

export  const store = configureStore({

    reducer:{
        blogReducer:blogReducer,
        authReducer:authReducer

    }
})