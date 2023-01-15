import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import AuthLogo from "../../components/AuthLogo";
import ScreenView from "../../components/ScreenView";
import { AuthStackScreenProps } from "../../types";
// @ts-ignore
import OTPInput from "react-native-otp-textinput";
import { Ionicons } from "@expo/vector-icons";

interface IOTPScreenProps {}

const OTPScreen: React.FC<IOTPScreenProps & AuthStackScreenProps<"otp">> = ({
	navigation,
}) => {
	const [otpValue, setOtpValue] = React.useState("");

	return (
		<ScreenView>
			<AuthLogo />
			<OTPInput
				handleTextChange={(e: any) => {
					setOtpValue(e);
				}}
				containerStyle={styles.textInputContainer}
				textInputStyle={styles.roundedTextInput}
			/>
			<View style={styles.row}>
				<Text style={[styles.text, { marginRight: 10 }]}>
					Didn't recieve OTP ?
				</Text>
				<Pressable onPress={() => navigation.navigate("login")}>
					<Text style={[styles.boldText]}>Resend (25)</Text>
				</Pressable>
			</View>
			<Pressable
				onPress={() => {}}
				style={styles.button}
				android_ripple={{ color: "gray" }}
			>
				<Text style={styles.registerText}>Register</Text>
			</Pressable>
			<Pressable style={styles.row} onPress={() => navigation.goBack()}>
				<Ionicons name="chevron-back" color="gray" size={18} />
				<Text style={styles.backText}>Go Back</Text>
			</Pressable>
		</ScreenView>
	);
};

export default OTPScreen;

const styles = StyleSheet.create({
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
	button: {
		backgroundColor: "black",
		padding: 10,
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",
		width: "70%",
		alignSelf: "center",
		marginVertical: 50,
	},
	registerText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
	backText: {
		fontSize: 14,
		fontWeight: "bold",
	},

	textInputContainer: {
		marginBottom: 20,
		width: "80%",
		alignSelf: "center",
	},
	roundedTextInput: {
		borderRadius: 10,
		borderWidth: 4,
	},
});
