import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import AuthLogo from "../../components/AuthLogo";
import ScreenView from "../../components/ScreenView";

interface IOTPScreenProps {}

const OTPScreen: React.FC<IOTPScreenProps> = (props) => {
	return (
		<ScreenView>
			<AuthLogo />
			<Text>OTPScreen</Text>
		</ScreenView>
	);
};

export default OTPScreen;
