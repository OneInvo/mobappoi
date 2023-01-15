import * as React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
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
import { useReduxDispatch } from "../../store/store";
import { authActions } from "../../store/authSlice";

interface ILoginProps {}

type LoginFormValues = {
	email: string;
	password: string;
};

const LoginScreen: React.FC<ILoginProps & AuthStackScreenProps<"login">> = ({
	navigation,
}) => {
	const dispatch = useReduxDispatch();

	const { ...methods } = useForm<LoginFormValues>({ mode: "onChange" });
	const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
		console.log(data);
		dispatch(authActions.setIsLoggedIn(true));
	};

	const [formError, setError] = React.useState<Boolean>(false);
	const onError: SubmitErrorHandler<LoginFormValues> = (errors, e) => {
		return console.log({ errors });
	};

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
			<Pressable
				onPress={methods.handleSubmit(onSubmit, onError)}
				style={styles.button}
				android_ripple={{ color: "gray" }}
			>
				<Text style={styles.loginText}>Login</Text>
			</Pressable>
			<View style={styles.column}>
				<Text style={styles.or}>OR</Text>
				<Text style={styles.text}>Sign up using</Text>
				<View style={styles.social}>
					<Image source={require("../../assets/logos/google.png")} />
					<Image
						source={require("../../assets/logos/facebook.png")}
					/>
				</View>
				<View style={styles.row}>
					<Text style={[styles.text, { marginRight: 10 }]}>
						Don't have an account?
					</Text>
					<Pressable onPress={() => navigation.navigate("register")}>
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
});
