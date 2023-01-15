import * as React from "react";
import { View, Image, StyleSheet } from "react-native";
import { vh } from "../constants/Layout";

interface IAuthLogoProps {}

const AuthLogo: React.FC<IAuthLogoProps> = (props) => {
	return (
		<View style={styles.container}>
			<Image
				source={require("../assets/images/logo.png")}
				resizeMode="contain"
				style={styles.image}
			/>
		</View>
	);
};

export default AuthLogo;

const styles = StyleSheet.create({
	container: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: 0.4 * vh,
	},
	image: {
		width: 100,
		height: 150,
	},
});
