import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./home-slice";
import themeSlice from "./darkmode-slice";

export const store = configureStore({
    reducer: {
        home: homeSlice,
        theme: themeSlice
    },
});