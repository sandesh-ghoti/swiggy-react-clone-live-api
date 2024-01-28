import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
export default store = new configureStore({ reducer: { user: userSlice } });
