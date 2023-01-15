import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dummy from "../screens/Dummy";
import { RootTabParamList, RootTabScreenProps } from "../types";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
	return (
		<BottomTab.Navigator initialRouteName="TabOne">
			<BottomTab.Screen
				name="TabOne"
				component={Dummy}
				options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
					title: "Tab One",
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="code" color={color} />
					),
				})}
			/>
			<BottomTab.Screen
				name="TabTwo"
				component={Dummy}
				options={{
					title: "Tab Two",
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="code" color={color} />
					),
				}}
			/>
		</BottomTab.Navigator>
	);
};

function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color: string;
}) {
	return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

export default BottomTabNavigator;
