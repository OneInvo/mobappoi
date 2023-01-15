import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import AuthLogo from "../../components/AuthLogo";
import ScreenView from "../../components/ScreenView";

interface IRegisterProps {}

const RegisterScreen: React.FC<IRegisterProps> = (props) => {
	return (
		<ScreenView>
			<AuthLogo />
			<Text>Register</Text>
		</ScreenView>
	);
};

export default RegisterScreen;
