import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/Auth/Login";
import OTPScreen from "../screens/Auth/OTP";
import RegisterScreen from "../screens/Auth/Register";
import { AuthStackParamList } from "../types";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name="login"
				component={LoginScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="register" component={RegisterScreen} />
			<Stack.Screen name="otp" component={OTPScreen} />
		</Stack.Navigator>
	);
};

export default AuthStackNavigator;
