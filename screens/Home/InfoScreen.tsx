import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import ScreenView from "../../components/ScreenView";

interface IInfoScreenProps {}

const InfoScreen: React.FC<IInfoScreenProps> = (props) => {
	return (
		<ScreenView>
			<Text>Info Screen</Text>
		</ScreenView>
	);
};

export default InfoScreen;
