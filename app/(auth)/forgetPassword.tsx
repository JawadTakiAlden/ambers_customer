import Button from "@/components/Button";
import CollapsableContainer from "@/components/CollapsableContainer";
import CustomScreen from "@/components/CustomScreen";
import OutlinedInput from "@/components/OutlinedInput";
import { usePaletteStore } from "@/store/themeStore";
import { themeColors } from "@/utils/color-theme";
import { LinearGradient } from "expo-linear-gradient";
import { useColorScheme } from "nativewind";
import React, { useState } from "react";
import { Text, View } from "react-native";

const forgetPassword = () => {
  const [activeStep, setActiveStep] = useState<string>("reset");
  const { paletteName } = usePaletteStore();
  const { colorScheme } = useColorScheme();
  return (
    <CustomScreen>
      <View className="flex-1 justify-center p-2 gap-3">
        <Text className="text-gray-950 dark:text-gray-50 font-Popions-Bold text-[22px]">
          🔐 Forgot Password – Reset & Regain Access!
        </Text>
        <View className="relative pl-[10px]">
          <View className="w-[2px] absolute h-full top-0 left-0">
            <LinearGradient
              style={{
                width: 2,
                height: "100%",
              }}
              colors={[
                themeColors(colorScheme!, paletteName)["--primary-500"],
                themeColors(colorScheme!, paletteName)["--secondary-500"],
              ]}
            />
          </View>
          <Text className="text-primary-600 dark:text-primary-400 font-Popions-Bold text-[25px]">
            Enter Your Email
          </Text>
          <CollapsableContainer expanded={activeStep === "email"}>
            <View>
              <Text className="texxt-[16px] font-Popions-Regular text-gray-950 dark:text-gray-50">
                Provide your registered email address, and we'll send you a
                verification code to reset your password.
              </Text>
              <OutlinedInput placeholder="your email" />
              <Button
                onPress={() => setActiveStep("verfication")}
                variant={"outlined"}
                color={"primary"}
              >
                Next
              </Button>
            </View>
          </CollapsableContainer>
        </View>
        <View className="relative pl-[10px]">
          <View className="w-[2px] absolute h-full top-0 left-0">
            <LinearGradient
              style={{
                width: 2,
                height: "100%",
              }}
              colors={[
                themeColors(colorScheme!, paletteName)["--secondary-500"],
                themeColors(colorScheme!, paletteName)["--success-500"],
              ]}
            />
          </View>
          <Text className="text-secondary-600 dark:text-secondary-400 font-Popions-Bold text-[25px]">
            Verify Your Request
          </Text>
          <CollapsableContainer expanded={activeStep === "verfication"}>
            <View>
              <Text className="texxt-[16px] font-Popions-Regular text-gray-950 dark:text-gray-50">
                We've sent a verification email to your inbox. Click the button
                inside the email to confirm your request and proceed to set a
                new password.
              </Text>
              <Button
                onPress={() => setActiveStep("verfication")}
                variant={"outlined"}
                color={"secondary"}
              >
                Resend activation email
              </Button>
            </View>
          </CollapsableContainer>
        </View>
        <View className="relative pl-[10px]">
          <View className="w-[2px] absolute h-full top-0 left-0">
            <LinearGradient
              style={{
                width: 2,
                height: "100%",
              }}
              colors={[
                themeColors(colorScheme!, paletteName)["--success-500"],
                themeColors(colorScheme!, paletteName)["--success-400"],
              ]}
            />
          </View>
          <Text className="text-success-600 dark:text-success-400 font-Popions-Bold text-[25px]">
            Set a New Password
          </Text>
          <CollapsableContainer expanded={activeStep === "reset"}>
            <View>
              <Text className="texxt-[16px] font-Popions-Regular text-gray-950 dark:text-gray-50">
                Create a strong new password to secure your account, then
                confirm it to complete the reset. Simple, fast, and secure!
              </Text>
              <OutlinedInput placeholder="New Password" secureTextEntry />
              <OutlinedInput
                placeholder="Confirm New Password"
                secureTextEntry
              />
              <Button
                onPress={() => setActiveStep("verfication")}
                variant={"outlined"}
                color={"success"}
              >
                Set new password
              </Button>
            </View>
          </CollapsableContainer>
        </View>
      </View>
    </CustomScreen>
  );
};

export default forgetPassword;
