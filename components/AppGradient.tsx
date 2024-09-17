import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
	children: any;
	colors: string[];
};

const AppGradient = ({ children, colors }: Props) => {
	return (
		<LinearGradient colors={colors} className="flex-1">
			<SafeAreaView className="flex-1 px-5 py-3">{children}</SafeAreaView>
		</LinearGradient>
	);
};

export default AppGradient;
