import React from "react";
import {
	View,
	TextInput as RNTextInput,
	TextInputProps as RNTextInputProps,
	Text,
	StyleSheet,
} from "react-native";
import {
	useController,
	useFormContext,
	UseControllerProps,
} from "react-hook-form";
import { Ionicons } from "@expo/vector-icons";

interface TextInputProps extends RNTextInputProps, UseControllerProps {
	label: string;
	name: string;
	defaultValue?: string;
	setFormError: Function;
	leftIcon?: React.ComponentProps<typeof Ionicons>["name"];
}

const ControlledInput = (props: TextInputProps) => {
	const formContext = useFormContext();
	const { formState } = formContext;

	const { name, label, rules, defaultValue, leftIcon, ...inputProps } = props;
	const { field } = useController({ name, rules, defaultValue });

	const hasError = Boolean(formState?.errors[name]);

	return (
		<View style={styles.container}>
			<View style={styles.textBox}>
				<Ionicons
					style={styles.icon}
					name={leftIcon}
					color="#bbb"
					size={16}
				/>
				<RNTextInput
					autoCapitalize="none"
					textAlign="left"
					style={styles.input}
					onChangeText={field.onChange}
					onBlur={field.onBlur}
					value={field.value}
					{...inputProps}
				/>
			</View>
			{hasError && (
				<View style={styles.errorContainer}>
					<Text style={styles.error}>
						{/* @ts-ignore */}
						{formState.errors[name].message}
					</Text>
				</View>
			)}
		</View>
	);
};

export const TextInput = (props: TextInputProps) => {
	const { name, rules, label, defaultValue, setFormError, ...inputProps } =
		props;

	const formContext = useFormContext();

	// Placeholder until input name is initialized
	if (!formContext || !name) {
		const msg = !formContext
			? "TextInput must be wrapped by the FormProvider"
			: "Name must be defined";
		console.error(msg);
		setFormError(true);
		return null;
	}

	return <ControlledInput {...props} />;
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
	},
	input: {
		backgroundColor: "white",
		borderColor: "#ccc",
		borderWidth: 1,
		borderRadius: 4,
		height: 40,
		padding: 10,
		paddingLeft: 40,
		width: "100%",
	},
	errorContainer: {
		flex: -1,
		height: 25,
		alignSelf: "flex-start",
		marginLeft: 10,
	},
	error: {
		color: "red",
	},
	textBox: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
	},
	icon: {
		position: "relative",
		left: 25,
		zIndex: 100,
		marginLeft: -10,
	},
});
