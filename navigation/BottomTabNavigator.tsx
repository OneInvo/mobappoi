import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home/HomeScreen";
import InfoScreen from "../screens/Home/InfoScreen";
import ProfileScreen from "../screens/Home/ProfileScreen";
import SettingsScreen from "../screens/Home/SettingsScreen";
import { RootTabParamList } from "../types";
import { Image } from "react-native";
import SearchBar from "../components/SearchBar";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
	return (
		<BottomTab.Navigator
			initialRouteName="Home"
			screenOptions={{
				tabBarStyle: {
					paddingBottom: 10,
					paddingTop: 5,
					height: 60,
					backgroundColor: "#ffeb3b",
				},
				tabBarInactiveTintColor: "black",
				tabBarActiveBackgroundColor: "white",
				tabBarActiveTintColor: "black",
				tabBarItemStyle: {
					borderRadius: 500,
				},
				headerStyle: {
					borderBottomColor: "#eee",
					borderBottomWidth: 1,
				},
				headerTitleAlign: "center",
				headerLeft: () => (
					<Image
						source={require("../assets/images/logo.png")}
						style={{ width: 40, height: 40, marginLeft: 15 }}
						resizeMode="contain"
					/>
				),
			}}
		>
			<BottomTab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="home-outline" color={color} />
					),
					headerTitle: "",
					headerRight: () => <SearchBar />,
				}}
			/>
			<BottomTab.Screen
				name="Info"
				component={InfoScreen}
				options={{
					title: "About Us",
					tabBarIcon: ({ color }) => (
						<TabBarIcon
							name="information-circle-outline"
							color={color}
						/>
					),
				}}
			/>
			<BottomTab.Screen
				name="Settings"
				component={SettingsScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="settings-outline" color={color} />
					),
				}}
			/>
			<BottomTab.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="person-outline" color={color} />
					),
				}}
			/>
		</BottomTab.Navigator>
	);
};

function TabBarIcon(props: {
	name: React.ComponentProps<typeof Ionicons>["name"];
	color: string;
}) {
	return <Ionicons size={26} style={{ marginBottom: -5 }} {...props} />;
}

export default BottomTabNavigator;
