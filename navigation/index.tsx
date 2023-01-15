import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import AppIntro from "../components/AppIntro";

import { useReduxSelector } from "../store/store";
import AuthStackNavigator from "./AuthStackNavigator";
import BottomTabNavigator from "./BottomTabNavigator";

export default function Navigation() {
	const showIntro = useReduxSelector((state) => state.auth.showIntro);
	const isLoggedIn = useReduxSelector((state) => state.auth.isLoggedIn);

	return showIntro ? (
		<AppIntro />
	) : (
		<NavigationContainer>
			{isLoggedIn ? <BottomTabNavigator /> : <AuthStackNavigator />}
		</NavigationContainer>
	);
}
