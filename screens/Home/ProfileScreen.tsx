import * as React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import ScreenView from "../../components/ScreenView";
import RBSheet from "rn-raw-bottom-sheet";
import {
	useForm,
	FormProvider,
	SubmitHandler,
	SubmitErrorHandler,
} from "react-hook-form";
import { TextInput } from "../../components/TextInput";
import { vh } from "../../constants/Layout";
import { Ionicons } from "@expo/vector-icons";
import { useReduxDispatch } from "../../store/store";
import { authActions } from "../../store/authSlice";

interface IProfileScreenProps {}

type LoginFormValues = {
	name: string;
	email: string;
	password: string;
	phone: string;
};

const ProfileScreen: React.FC<IProfileScreenProps> = (props) => {
	const sheetRef = React.useRef<RBSheet>(null);
	const { ...methods } = useForm<LoginFormValues>({ mode: "onChange" });
	const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
		console.log(data);
		sheetRef.current!.close();
	};

	const [formError, setError] = React.useState<Boolean>(false);
	const onError: SubmitErrorHandler<LoginFormValues> = (errors, e) => {
		return console.log({ errors });
	};

	const dispatch = useReduxDispatch();

	const logoutHandler = () => {
		dispatch(authActions.logout());
	};

	return (
		<ScreenView>
			<View style={styles.topSection}>
				<Image
					source={require("../../assets/images/logo.png")}
					style={styles.image}
					resizeMode="contain"
				/>
				<Text style={styles.name}>John Doe</Text>
				<Text style={styles.email}>doe.john@gmail.com</Text>
			</View>
			<View style={styles.line}></View>
			<View style={styles.miniBox}>
				<Text style={styles.miniTitle}>Mobile No.</Text>
				<Text style={styles.miniText}>+91 9998215705</Text>
			</View>
			<View style={styles.miniBox}>
				<Text style={styles.miniTitle}>Total Bills</Text>
				<Text style={styles.miniText}>420</Text>
			</View>
			<View style={styles.miniBox}>
				<Text style={styles.miniTitle}>Password</Text>
				<Text style={styles.miniText}>**********</Text>
			</View>
			<View style={styles.line}></View>

			<Pressable
				onPress={() => sheetRef.current!.open()}
				style={styles.button}
				android_ripple={{ color: "gray" }}
			>
				<Text style={styles.buttonText}>EDIT</Text>
			</Pressable>
			<Pressable
				onPress={logoutHandler}
				style={[styles.row, { marginTop: 30 }]}
			>
				<Ionicons name="log-out-outline" color="red" size={14} />
				<Text style={{ fontSize: 14, color: "red", marginLeft: 5 }}>
					Log Out
				</Text>
			</Pressable>

			{/* @ts-ignore */}
			<RBSheet
				ref={sheetRef}
				closeOnDragDown={true}
				closeOnPressMask={false}
				customStyles={{
					wrapper: {
						backgroundColor: "rgba(0,0,0,0.5)",
					},
					draggableIcon: {
						backgroundColor: "#000",
					},
					container: styles.sheet,
				}}
			>
				<View style={styles.form}>
					<FormProvider {...methods}>
						<TextInput
							name="name"
							label="Name"
							placeholder="Name"
							keyboardType="default"
							rules={{ required: "Name is required!" }}
							setFormError={setError}
							leftIcon="person-outline"
						/>
						<TextInput
							name="email"
							label="Email"
							placeholder="jon.doe@email.com"
							keyboardType="email-address"
							rules={{
								required: "Email is required!",
								pattern: {
									value: /\b[\w\\.+-]+@[\w\\.-]+\.\w{2,4}\b/,
									message:
										"Please enter a valid email address.",
								},
							}}
							setFormError={setError}
							leftIcon="mail-outline"
						/>
						<TextInput
							name="phone"
							label="phone"
							placeholder="Phone Number"
							keyboardType="number-pad"
							rules={{
								required: "Phone Number is required!",
								minLength: {
									value: 10,
									message: "Enter valid phone number",
								},
								maxLength: {
									value: 10,
									message: "Enter valid phone number",
								},
							}}
							setFormError={setError}
							leftIcon="phone-portrait-outline"
						/>
						<TextInput
							name="password"
							label="Password"
							secureTextEntry
							placeholder="Password"
							rules={{ required: "Password is required!" }}
							setFormError={setError}
							leftIcon="lock-closed-outline"
						/>
					</FormProvider>
					<View style={styles.sheetButtons}>
						<Pressable
							onPress={methods.handleSubmit(onSubmit, onError)}
							style={styles.saveButton}
						>
							<Text style={styles.saveText}>Save</Text>
						</Pressable>
						<Pressable
							android_ripple={{ color: "gray" }}
							style={styles.cancelButton}
							onPress={() => sheetRef.current?.close()}
						>
							<Text style={styles.cancelText}>Cancel</Text>
						</Pressable>
					</View>
				</View>
			</RBSheet>
		</ScreenView>
	);
};

export default ProfileScreen;

const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	topSection: {
		justifyContent: "center",
		alignItems: "center",
		marginTop: 20,
	},
	image: {
		width: 150,
		height: 150,
		borderRadius: 75,
		borderWidth: 8,
		borderColor: "#ffc107",
	},
	name: {
		marginVertical: 10,
		fontSize: 20,
		fontWeight: "bold",
	},
	email: {
		fontSize: 16,
		color: "#aaa",
		marginBottom: 20,
	},
	line: {
		borderBottomColor: "#ddd",
		borderBottomWidth: 1,
		marginVertical: 15,
	},
	miniBox: {
		marginVertical: 10,
	},
	miniTitle: {
		fontSize: 16,
		color: "#555",
		fontWeight: "bold",
	},
	miniText: {
		marginTop: 10,
		color: "#aaa",
	},

	button: {
		backgroundColor: "black",
		padding: 10,
		borderRadius: 5,
		marginTop: 20,
		justifyContent: "center",
		alignItems: "center",
		width: "70%",
		alignSelf: "center",
	},
	buttonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},

	sheet: {
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
		height: 0.6 * vh,
	},
	form: {
		padding: 20,
	},
	sheetButtons: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 20,
	},
	saveButton: {
		backgroundColor: "#ffc107",
		padding: 10,
		borderRadius: 5,
		width: "47%",
		alignItems: "center",
	},
	saveText: {
		color: "black",
		fontSize: 16,
		fontWeight: "bold",
	},
	cancelButton: {
		backgroundColor: "black",
		padding: 10,
		borderRadius: 5,
		width: "47%",
		alignItems: "center",
	},
	cancelText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
});
