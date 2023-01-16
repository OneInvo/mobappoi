import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import ScreenView from "../../components/ScreenView";

interface IProfileScreenProps {}

const ProfileScreen: React.FC<IProfileScreenProps> = (props) => {
	return (
		<ScreenView>
			<Text>Profile Screen</Text>
		</ScreenView>
	);
};

export default ProfileScreen;
