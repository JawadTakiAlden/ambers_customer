import CustomScreen from "@/components/CustomScreen";
import RegisterForm from "@/components/Register/RegisterForm";
import { Link } from "expo-router";
import React from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const RegisterScreen = () => {
  return (
    <KeyboardAvoidingView className="h-full bg-background" behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView className="flex-1">
          <CustomScreen className="flex-1 px-3 gap-3">
            <View className="items-center">
              <View className="w-[90%]">
                <Image
                  source={require("@/assets/images/register.png")}
                  resizeMode="contain"
                  className="max-w-full"
                />
              </View>
            </View>
            <View className="gap-5 w-full">
              <View className="gap-1">
                <Text className="text-[22px] font-Popions-Bold capitalize text-gray-950 dark:text-gray-50">
                  Join Power Flow – {"\n"} Stay{" "}
                  <Text className="text-success-600 dark:text-success-400">
                    Connected
                  </Text>
                  , {"\n"} Stay{" "}
                  <Text className="text-primary-600 dark:text-primary-400">
                    Powered!
                  </Text>
                </Text>
                <Text className="font-Popions-ExtraLightItalic text-[16px] text-gray-950 dark:text-gray-50">
                  Welcome! Create your account and take control of your
                  generator services with ease. Reliable power is just a few
                  clicks away!
                </Text>
              </View>
              <RegisterForm />
              <View className="items-center gap-1">
                <Text className="text-gray-600 dark:text-gray-400 text-[16px] font-Popions-Regular">
                  already have an account ?
                </Text>
                <Link
                  href={"/(auth)/login"}
                  className="capitalize text-[16px] font-Popions-Bold text-gray-950 dark:text-gray-50"
                >
                  login now
                </Link>
              </View>
            </View>
          </CustomScreen>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
