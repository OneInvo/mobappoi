import * as React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import AuthLogo from "../../components/AuthLogo";
import ScreenView from "../../components/ScreenView";
import {
	useForm,
	FormProvider,
	SubmitHandler,
	SubmitErrorHandler,
} from "react-hook-form";
import { TextInput } from "../../components/TextInput";
import { AuthStackScreenProps } from "../../types";

interface IRegisterProps {}

type RegisterFormValues = {
	email: string;
	name: string;
	phone: number;
	password: string;
	confirmpassword: string;
};

const RegisterScreen: React.FC<
	IRegisterProps & AuthStackScreenProps<"register">
> = ({ navigation }) => {
	const { ...methods } = useForm<RegisterFormValues>({ mode: "onChange" });
	const onSubmit: SubmitHandler<RegisterFormValues> = (data) => {
		console.log(data);
		navigation.navigate("otp");
	};

	const [formError, setError] = React.useState<Boolean>(false);
	const onError: SubmitErrorHandler<RegisterFormValues> = (errors, e) => {
		return console.log({ errors });
	};

	return (
		<ScreenView scroll>
			<AuthLogo />
			<FormProvider {...methods}>
				<TextInput
					name="name"
					label="Name"
					placeholder="Name"
					keyboardType="default"
					rules={{ required: "Name is required!" }}
					setFormError={setError}
					leftIcon="person-outline"
				/>
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
					name="phone"
					label="phone"
					placeholder="Phone Number"
					keyboardType="number-pad"
					rules={{
						required: "Phone Number is required!",
						minLength: {
							value: 10,
							message: "Enter valid phone number",
						},
						maxLength: {
							value: 10,
							message: "Enter valid phone number",
						},
					}}
					setFormError={setError}
					leftIcon="phone-portrait-outline"
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
				<TextInput
					name="confirmpassword"
					label="Confirm Password"
					secureTextEntry
					placeholder="Confirm Password"
					rules={{ required: "Confirm Password is required!" }}
					setFormError={setError}
					leftIcon="lock-closed-outline"
				/>
			</FormProvider>
			<Pressable
				onPress={methods.handleSubmit(onSubmit, onError)}
				style={styles.button}
				android_ripple={{ color: "gray" }}
			>
				<Text style={styles.registerText}>Sign Up</Text>
			</Pressable>
			<Pressable onPress={methods.handleSubmit(onSubmit, onError)}>
				<Text
					style={[
						styles.boldText,
						{ marginTop: 20, marginBottom: 40 },
					]}
				>
					Terms &amp; Privacy Policy
				</Text>
			</Pressable>
			<View style={styles.row}>
				<Text style={[styles.text, { marginRight: 10 }]}>
					Already have an account?
				</Text>
				<Pressable onPress={() => navigation.navigate("login")}>
					<Text style={styles.boldText}>Log In</Text>
				</Pressable>
			</View>
		</ScreenView>
	);
};

export default RegisterScreen;

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
	registerText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
	boldText: {
		fontWeight: "bold",
		alignSelf: "center",
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		alignSelf: "center",
	},
	text: {
		fontSize: 14,
		color: "#aaa",
	},
});
