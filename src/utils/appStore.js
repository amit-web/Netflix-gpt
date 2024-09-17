import { configureStore } from "@reduxjs/toolkit";
import  userReducer from "./userSlice"
import moviesReducer from "./movieSlice"
const appStore = configureStore({
   reducer:{
       //Diffrent reducers for diffrent slices
       user:userReducer,
       movies:moviesReducer,
   } 
})

export default appStore;
