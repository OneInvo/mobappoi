import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const librarySlice = createSlice({
	name: "library",
	initialState,
	reducers: {
		selecetLibrary: (state, action) => {
			return action.payload;
		},
	},
});

export const libraryReducer = librarySlice.reducer;
export const libraryActions = {
	...librarySlice.actions,
};
