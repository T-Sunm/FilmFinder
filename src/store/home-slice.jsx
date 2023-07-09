import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    url: {},
    genres: []
}

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        getApiConfiguration: (state, action) => {
            state.url = action.payload;
        },
        getGenres: (state, action) => {
            state.genres = action.payload;
            console.log(state.genres)
        }
    }
})


export const { getApiConfiguration, getGenres } = homeSlice.actions;

export default homeSlice.reducer