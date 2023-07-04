import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./home-slice";

export const store = configureStore({
    reducer: {
        home: homeSlice,
    },
});