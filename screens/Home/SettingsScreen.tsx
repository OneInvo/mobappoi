import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import ScreenView from "../../components/ScreenView";

interface ISettingsScreenProps {}

const SettingsScreen: React.FC<ISettingsScreenProps> = (props) => {
	return (
		<ScreenView>
			<Text>Settings Screen</Text>
		</ScreenView>
	);
};

export default SettingsScreen;
