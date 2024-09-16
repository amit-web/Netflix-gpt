import { configureStore } from "@reduxjs/toolkit";
import  userReducer from "./userSlice"

const appStore = configureStore({
   reducer:{
       //Diffrent reducers for diffrent slices
       user:userReducer,
   } 
})

export default appStore;
