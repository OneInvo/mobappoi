import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { vw } from "../constants/Layout";
import { authActions } from "../store/authSlice";
import { useReduxDispatch } from "../store/store";

interface IAppIntroProps {}

const slides = [
	{
		key: 1,
		title: "Who are we?",
		text: "Well, get tensed no more, we are here to make your life easier by going digital on a paper extensive product, 'bills'. Easy access anytime anywhere! Sign up, make the world a better place.",
		image: require("../assets/images/os1.png"),
	},
	{
		key: 2,
		title: "How we work?",
		text: "When you purchase an item, you can view the bill on your desired device and we save a copy of the bill on our cloud. You can access it through our app anytime.",
		image: require("../assets/images/os2.png"),
	},
	{
		key: 3,
		title: "Why OneInvo?",
		text: "By using Oneinvo you are saving millions of trees, billions of gallons of water, reducing CO2 emission and decreasing your contribution to toxic solid non-recyclable waste.",
		image: require("../assets/images/os3.png"),
	},
];

const RenderItem = ({
	item,
}: {
	item: { title: string; text: string; image: any };
}) => {
	return (
		<View style={styles.slide}>
			<Text style={styles.title}>{item.title}</Text>
			<Image
				style={styles.image}
				source={item.image}
				resizeMode="contain"
			/>
			<Text style={styles.text}>{item.text}</Text>
		</View>
	);
};

const AppIntro: React.FC<IAppIntroProps> = () => {
	const dispatch = useReduxDispatch();

	return (
		<AppIntroSlider
			dotStyle={{ backgroundColor: "#ccc" }}
			activeDotStyle={{ backgroundColor: "teal" }}
			renderItem={RenderItem}
			data={slides}
			onDone={() => dispatch(authActions.setShowIntro(false))}
			showSkipButton={true}
			onSkip={() => dispatch(authActions.setShowIntro(false))}
			renderNextButton={() => (
				<View style={styles.iconBox}>
					<Ionicons
						style={styles.icon}
						color="teal"
						name="chevron-forward"
						size={25}
					/>
				</View>
			)}
			renderDoneButton={() => (
				<View style={styles.continueBox}>
					<Text style={styles.continue}>Continue</Text>
					<Ionicons
						style={styles.icon}
						color="teal"
						name="chevron-forward"
						size={25}
					/>
				</View>
			)}
			renderSkipButton={() => (
				<View style={styles.skipBox}>
					<Text style={styles.skip}>Skip</Text>
				</View>
			)}
		/>
	);
};

export default AppIntro;

const styles = StyleSheet.create({
	slide: {
		backgroundColor: "white",
		height: "100%",
		justifyContent: "space-around",
		alignItems: "center",
		paddingVertical: 0.4 * vw,
	},
	title: {
		fontSize: 32,
		color: "black",
		fontWeight: "bold",
		textAlign: "center",
		fontFamily: "raleway",
	},
	text: {
		color: "#aaa",
		fontSize: 16,
		textAlign: "center",
		paddingHorizontal: 0.1 * vw,
	},
	image: {
		width: 0.7 * vw,
		height: 0.7 * vw,
	},
	iconBox: {
		width: 50,
		height: 50,
		borderRadius: 20,
		justifyContent: "center",
		alignItems: "center",
		marginRight: 0.1 * vw,
	},
	icon: {},
	skip: {
		color: "teal",
	},
	continue: {
		color: "teal",
	},
	skipBox: {
		width: 50,
		height: 50,
		borderRadius: 20,
		justifyContent: "center",
		alignItems: "center",
		marginLeft: 0.1 * vw,
	},
	continueBox: {
		display: "flex",
		flexDirection: "row",
		height: 50,
		borderRadius: 20,
		justifyContent: "center",
		alignItems: "center",
		marginRight: 0.05 * vw,
	},
});
