import LoginForm from "@/components/Login/LoginForm";
import { Link } from "expo-router";
import React from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const LoginScreen = () => {
  return (
    // <CustomScreen className="flex-1">
    <KeyboardAvoidingView className="h-full bg-background" behavior={"padding"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="justify-center flex-1 gap-3 px-2">
          <View className="items-center ">
            <View className="w-[100%] h-[300px]">
              <Image
                source={require("@/assets/images/login.png")}
                resizeMode="contain"
                className="max-w-full h-[300px]"
              />
            </View>
          </View>
          <View className="gap-5 ">
            <View className="gap-1">
              <Text className="text-[22px] font-Popions-Bold capitalize text-gray-950 dark:text-gray-50">
                Welcome Back!
              </Text>
              <Text className="font-Popions-ExtraLightItalic text-[16px] text-gray-950 dark:text-gray-50">
                Please sign in to continue.
              </Text>
            </View>
            <LoginForm />
            <View className="items-center gap-1">
              <Text className="text-gray-600 dark:text-gray-400 text-[16px] font-Popions-Regular">
                dont have an account ?
              </Text>
              <Link
                href={"/(auth)/register"}
                className="capitalize text-[16px] font-Popions-Bold text-gray-950 dark:text-gray-50"
              >
                Create one now
              </Link>
            </View>
            <View>
              <Link
                href={"/(auth)/forgetPassword"}
                className="capitalize text-center text-[16px] font-Popions-Regular text-gray-600 dark:text-gray-400 "
              >
                forget password ?
              </Link>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
