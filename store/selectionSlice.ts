import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const selectionSlice = createSlice({
	name: "selection",
	initialState,
	reducers: {
		selecetLibrary: (state, action) => {
			return action.payload;
		},
	},
});

export const selectionReducer = selectionSlice.reducer;
export const selectionActions = {
	...selectionSlice.actions,
};
