import Button from "@/components/Button";
import CustomScreen from "@/components/CustomScreen";
import { Link, router } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

const StartAuthScreen = () => {
  return (
    <CustomScreen className="flex-1 justify-end pt-[300px]">
      <View className={`justify-between flex-1 py-5 px-4`}>
        <View className="items-center">
          <Image
            source={require("@/assets/images/powerFlow-logo-white.png")}
            resizeMode="contain"
            alt="Power Flow"
            className="max-w-[300px] h-[90px]"
          />
        </View>
        <View className="gap-5 ">
          <Text className="text-gray-950 dark:text-gray-50  text-[24px] font-Popions-Bold text-center">
            Power Up Your Connection!
          </Text>
          <Text className="text-gray-600 dark:text-gray-400 text-center text-[16px] font-Popions-Regular">
            Stay in control of your electricity with seamless access to trusted
            generator providers.
          </Text>
          <Button
            color={"primary"}
            variant={"contained"}
            onPress={() => {
              router.push("/(auth)/login");
            }}
          >
            Log in and manage your power
          </Button>
        </View>
        <View className="flex flex-row justify-between items-center">
          <Link
            href={"/(auth)/register"}
            className="text-gray-700 dark:text-gray-300 first-letter:capitalize underline underline-offset-2 text-[16px]"
          >
            Create Account
          </Link>
          <Link
            href={"/(root)/(tabs)/home"}
            className="text-gray-700 dark:text-gray-300 first-letter:capitalize underline underline-offset-2 text-[16px]"
          >
            Login as guest
          </Link>
        </View>
      </View>
    </CustomScreen>
  );
};

export default StartAuthScreen;
