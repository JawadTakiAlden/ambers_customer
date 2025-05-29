import { themeColors } from "@/utils/color-theme";
import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import React from "react";

const AuthLayout = () => {
  const { colorScheme } = useColorScheme();
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: themeColors(colorScheme!)["--background"],
        },
        animation: "fade",
      }}
    >
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen name="start" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AuthLayout;
