import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ScreenView from "../../components/ScreenView";

interface IInfoScreenProps {}

const InfoScreen: React.FC<IInfoScreenProps> = (props) => {
	return (
		<ScreenView>
			<View style={styles.card}>
				<View style={styles.textBox}>
					<Text style={styles.title}>1. Who are we?</Text>
					<Text style={styles.text}>
						Well, get tensed no more, we are here to make your life
						easier by going digital on a paper extensive product,
						'bills'. Easy access anytime anywhere! Sign up, make the
						world a better place.
					</Text>
				</View>
				<Image
					source={require("../../assets/images/os1.png")}
					style={styles.image}
					resizeMode="contain"
				/>
			</View>
			<View style={[styles.card, { flexDirection: "row-reverse" }]}>
				<View style={styles.textBox}>
					<Text style={styles.title}>2. How we work?</Text>
					<Text style={styles.text}>
						When you purchase an item, you can view the bill on your
						desired device and we save a copy of the bill on our
						cloud. You can access it through our app anytime.
					</Text>
				</View>
				<Image
					source={require("../../assets/images/os2.png")}
					style={styles.image}
					resizeMode="contain"
				/>
			</View>
			<View style={styles.card}>
				<View style={styles.textBox}>
					<Text style={styles.title}>3. Why OneInvo?</Text>
					<Text style={styles.text}>
						By using Oneinvo you are saving millions of trees,
						billions of gallons of water, reducing CO2 emission and
						decreasing your contribution to toxic solid
						non-recyclable waste.
					</Text>
				</View>
				<Image
					source={require("../../assets/images/os3.png")}
					style={styles.image}
					resizeMode="contain"
				/>
			</View>
		</ScreenView>
	);
};

export default InfoScreen;

const styles = StyleSheet.create({
	card: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginVertical: 30,
	},
	textBox: {
		justifyContent: "center",
		alignItems: "center",
		width: "60%",
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
	},
	text: {
		fontSize: 14,
		textAlign: "center",
		color: "#666",
		marginTop: 10,
	},
	image: {
		width: "50%",
		height: 120,
	},
});
