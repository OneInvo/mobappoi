import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import ScreenView from "../../components/ScreenView";

interface IHomeScreenProps {}

const HomeScreen: React.FC<IHomeScreenProps> = (props) => {
	return (
		<ScreenView>
			<Text>Home Screen</Text>
		</ScreenView>
	);
};

export default HomeScreen;
