import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	UserCredential,
	signOut,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

const initialState = {
	email: "",
	password: "",
	user: {} as UserCredential,
	error: "",
	loading: false,
	showIntro: true,
	isLoggedIn: false,
};

const login = createAsyncThunk(
	"auth/login",
	async (
		{ email, password }: { email: string; password: string },
		thunkAPI
	) => {
		signInWithEmailAndPassword(auth, email, password)
			.then((user) => thunkAPI.fulfillWithValue(user))
			.catch(() => {
				createUserWithEmailAndPassword(auth, email, password)
					.then((user) => thunkAPI.fulfillWithValue(user))
					.catch(() =>
						thunkAPI.rejectWithValue("Authentication Failed")
					);
			});
	}
);

const logout = createAsyncThunk("auth/logout", async (_payload, thunkAPI) => {
	signOut(auth)
		.then(() => thunkAPI.fulfillWithValue(""))
		.catch((err) => thunkAPI.rejectWithValue(err));
});

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setEmail: (state, action: { payload: string }) => {
			state.email = action.payload;
		},
		setPassword: (state, action: { payload: string }) => {
			state.password = action.payload;
		},
		setShowIntro: (state, action: { payload: boolean }) => {
			state.showIntro = action.payload;
		},
	},
	extraReducers(builder) {
		builder.addCase(login.pending, (state) => {
			state.loading = true;
			state.error = "";
		});
		builder.addCase(login.fulfilled, (state, action) => {
			state.loading = false;
			state.user = action.payload as unknown as UserCredential;
			state.isLoggedIn = true;
		});
		builder.addCase(login.rejected, (state) => {
			state.loading = false;
			state.error = "Authentication Failed";
			state.isLoggedIn = false;
		});
		builder.addCase(logout.pending, (state) => {
			state.loading = true;
			state.error = "";
		});
		builder.addCase(logout.fulfilled, (state, action) => {
			return initialState;
		});
	},
});

export const authReducer = authSlice.reducer;
export const authActions = {
	...authSlice.actions,
	login,
	logout,
};
