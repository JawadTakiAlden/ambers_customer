import { clsx } from "clsx";
import React from "react";
import { StyleSheet } from "react-native";
import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";

type CustomScreenProps = SafeAreaViewProps;

const CustomScreen = ({ children, className, ...rest }: CustomScreenProps) => {
  return (
    <SafeAreaView {...rest} className={clsx("flex-1 bg-background", className)}>
      {children}
    </SafeAreaView>
  );
};

export default CustomScreen;

const styles = StyleSheet.create({});
