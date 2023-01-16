import * as React from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import ScreenView from "../../components/ScreenView";

interface ISettingsScreenProps {}

const SettingsScreen: React.FC<ISettingsScreenProps> = (props) => {
	const [notifs, setNotifs] = React.useState(false);
	return (
		<ScreenView>
			<View style={styles.box}>
				<Text style={styles.text}>Notifications</Text>
				<Switch
					value={notifs}
					onValueChange={(val) => setNotifs(val)}
					trackColor={{ true: "#ffc10780", false: "#eee" }}
					thumbColor={notifs ? "goldenrod" : "#ccc"}
				/>
			</View>
		</ScreenView>
	);
};

export default SettingsScreen;

const styles = StyleSheet.create({
	box: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	text: {
		fontSize: 18,
		textTransform: "uppercase",
	},
});
