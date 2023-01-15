import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

interface IDummyProps {}

const Dummy: React.FC<IDummyProps> = (props) => {
	return (
		<View>
			<Text>Waka</Text>
		</View>
	);
};

export default Dummy;
