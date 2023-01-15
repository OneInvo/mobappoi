import * as React from "react";
import { View, StyleSheet, ViewProps } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { vh, vw } from "../constants/Layout";

interface IScreenViewProps {
	children: React.ReactNode;
	scroll?: boolean;
}

const ScreenView: React.FC<IScreenViewProps & ViewProps> = ({
	children,
	style,
	scroll,
	...props
}) => {
	return scroll ? (
		<ScrollView
			contentContainerStyle={[styles.container, style]}
			{...props}
		>
			{children}
		</ScrollView>
	) : (
		<View style={[styles.container, style]} {...props}>
			{children}
		</View>
	);
};

export default ScreenView;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		minHeight: 1.2 * vh,
		paddingHorizontal: 0.1 * vw,
	},
});
