import { themeColors } from "@/utils/color-theme";
import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import React from "react";

const _layout = () => {
  const { colorScheme } = useColorScheme();
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: themeColors(colorScheme!)["--background"],
        },
        animation: "fade_from_bottom",
      }}
      // initialRouteName="appColors"
    >
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="faq"
        options={{
          headerShown: false,
          animation: "simple_push",
        }}
      />
      <Stack.Screen
        name="about"
        options={{
          headerShown: false,
          animation: "simple_push",
        }}
      />
      <Stack.Screen
        name="privacyPolicy"
        options={{
          headerShown: false,
          animation: "simple_push",
        }}
      />
      <Stack.Screen
        name="appColors"
        options={{
          headerShown: false,
          animation: "simple_push",
        }}
      />
      <Stack.Screen
        name="[counterId]"
        options={{
          headerShown: false,
          animation: "fade_from_bottom",
        }}
      />
    </Stack>
  );
};

export default _layout;
