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
		let response;

		try {
			response = await signInWithEmailAndPassword(auth, email, password);
			return thunkAPI.fulfillWithValue(response);
		} catch (e: any) {
			return thunkAPI.rejectWithValue(e.code);
		}
	}
);

const logout = createAsyncThunk("auth/logout", async (_payload, thunkAPI) => {
	let response;

	try {
		response = await signOut(auth);
		return thunkAPI.fulfillWithValue(response);
	} catch (e: any) {
		return thunkAPI.rejectWithValue(e.code);
	}
});

const register = createAsyncThunk(
	"auth/register",
	async (
		{ email, password }: { email: string; password: string },
		thunkAPI
	) => {
		let response;

		try {
			response = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			return thunkAPI.fulfillWithValue(response);
		} catch (e: any) {
			return thunkAPI.rejectWithValue(e.code);
		}
	}
);

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

		//dummy
		setIsLoggedIn: (state, action: { payload: boolean }) => {
			state.isLoggedIn = action.payload;
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
		builder.addCase(login.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload as string;
			state.isLoggedIn = false;
		});
		builder.addCase(logout.pending, (state) => {
			state.loading = true;
			state.error = "";
		});
		builder.addCase(logout.fulfilled, (state, action) => {
			return initialState;
		});
		builder.addCase(register.pending, (state) => {
			state.loading = true;
			state.error = "";
		});
		builder.addCase(register.fulfilled, (state, action) => {
			state.loading = false;
			state.user = action.payload as unknown as UserCredential;
			state.isLoggedIn = true;
		});
		builder.addCase(register.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload as string;
			state.isLoggedIn = false;
		});
	},
});

export const authReducer = authSlice.reducer;
export const authActions = {
	...authSlice.actions,
	login,
	logout,
	register,
};
