import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
	namespace ReactNavigation {
		interface AuthParamList extends AuthStackParamList {}
	}
}

export type AuthStackParamList = {
	register: undefined;
	login: undefined;
	otp: undefined;
};

export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> =
	NativeStackScreenProps<AuthStackParamList, Screen>;

export type RootStackParamList = {
	root: undefined;
	notFound: undefined;
};

export type RootTabParamList = {
	TabOne: undefined;
	TabTwo: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
	CompositeScreenProps<
		BottomTabScreenProps<RootTabParamList, Screen>,
		NativeStackScreenProps<RootStackParamList>
	>;
