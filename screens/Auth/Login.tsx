import * as React from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	Pressable,
	ActivityIndicator,
} from "react-native";
import {
	useForm,
	FormProvider,
	SubmitHandler,
	SubmitErrorHandler,
} from "react-hook-form";
import { TextInput } from "../../components/TextInput";
import ScreenView from "../../components/ScreenView";
import AuthLogo from "../../components/AuthLogo";
import { AuthStackScreenProps } from "../../types";
import { useReduxDispatch, useReduxSelector } from "../../store/store";
import { authActions } from "../../store/authSlice";
import ERRORS from "../../data/errors.json";
// import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
// import { auth, googleProvider } from "../../firebaseConfig";

interface ILoginProps {}

type LoginFormValues = {
	email: string;
	password: string;
};

const LoginScreen: React.FC<ILoginProps & AuthStackScreenProps<"login">> = ({
	navigation,
}) => {
	const dispatch = useReduxDispatch();
	const { error, loading } = useReduxSelector((state) => state.auth);

	const { ...methods } = useForm<LoginFormValues>({ mode: "onChange" });
	const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
		dispatch(authActions.login(data));
	};

	const [formError, setError] = React.useState<Boolean>(false);
	const onError: SubmitErrorHandler<LoginFormValues> = (errors, e) => {
		return console.log({ errors });
	};

	const registerHandler = () => {
		dispatch(authActions.setError(""));
		navigation.navigate("register");
	};

	const googleHandler = async () => {};
	const facebookHandler = async () => {};

	return (
		<ScreenView>
			<AuthLogo />
			<FormProvider {...methods}>
				<TextInput
					name="email"
					label="Email"
					placeholder="jon.doe@email.com"
					keyboardType="email-address"
					rules={{
						required: "Email is required!",
						pattern: {
							value: /\b[\w\\.+-]+@[\w\\.-]+\.\w{2,4}\b/,
							message: "Please enter a valid email address.",
						},
					}}
					setFormError={setError}
					leftIcon="mail-outline"
				/>
				<TextInput
					name="password"
					label="Password"
					secureTextEntry
					placeholder="Password"
					rules={{ required: "Password is required!" }}
					setFormError={setError}
					leftIcon="lock-closed-outline"
				/>
			</FormProvider>
			<View style={styles.row}>
				<Text style={styles.text}>Forgot your login details?</Text>
				<Pressable>
					<Text style={styles.boldText}>Get help signing in</Text>
				</Pressable>
			</View>
			{/* @ts-ignore */}
			{error && <Text style={styles.errorText}>{ERRORS[error]}</Text>}
			<Pressable
				onPress={methods.handleSubmit(onSubmit, onError)}
				style={styles.button}
				android_ripple={{ color: "gray" }}
			>
				{loading ? (
					<ActivityIndicator />
				) : (
					<Text style={styles.loginText}>Login</Text>
				)}
			</Pressable>
			<View style={styles.column}>
				<Text style={styles.or}>OR</Text>
				<Text style={styles.text}>Sign up using</Text>
				<View style={styles.social}>
					<Pressable onPress={googleHandler}>
						<Image
							source={require("../../assets/logos/google.png")}
						/>
					</Pressable>
					<Pressable onPress={facebookHandler}>
						<Image
							source={require("../../assets/logos/facebook.png")}
						/>
					</Pressable>
				</View>
				<View style={styles.row}>
					<Text style={[styles.text, { marginRight: 10 }]}>
						Don't have an account?
					</Text>
					<Pressable onPress={registerHandler}>
						<Text style={styles.boldText}>Sign Up</Text>
					</Pressable>
				</View>
			</View>
		</ScreenView>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	button: {
		backgroundColor: "black",
		padding: 10,
		borderRadius: 5,
		marginTop: 20,
		justifyContent: "center",
		alignItems: "center",
		width: "70%",
		alignSelf: "center",
	},
	loginText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	text: {
		fontSize: 14,
		color: "#aaa",
	},
	boldText: {
		fontWeight: "bold",
	},
	column: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	or: {
		marginVertical: 20,
		fontSize: 18,
		fontWeight: "bold",
		fontFamily: "organo",
	},
	social: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "55%",
		marginVertical: 25,
	},
	errorText: {
		color: "red",
		alignSelf: "center",
		marginTop: 15,
		fontWeight: "bold",
	},
});
