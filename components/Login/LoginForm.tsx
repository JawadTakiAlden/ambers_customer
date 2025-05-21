import { router } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import Button from "../Button";
import OutlinedInput from "../OutlinedInput";

const LoginForm = () => {
  return (
    <View className="gap-1">
      <OutlinedInput
        lable="Email"
        placeholder="Enter your Email"
        keyboardType="email-address"
      />
      <OutlinedInput
        lable="Password"
        placeholder="Enter Your Password"
        secureTextEntry
      />
      <Button
        onPress={() => {
          router.replace("/(root)/(tabs)/home");
        }}
      >
        Login
      </Button>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({});
