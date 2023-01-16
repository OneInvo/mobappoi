import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { vw } from "../constants/Layout";

interface ISearchBarProps {}

const SearchBar: React.FC<ISearchBarProps> = (props) => {
	return (
		<View style={styles.container}>
			<TextInput style={styles.textInput} placeholder="Search" />
			<Ionicons
				name="search-outline"
				size={20}
				color="gray"
				style={styles.icon}
			/>
		</View>
	);
};

export default SearchBar;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
	},
	textInput: {
		padding: 5,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5,
		width: 0.4 * vw,
		paddingLeft: 10,
	},
	icon: {
		position: "relative",
		right: 30,
	},
});
