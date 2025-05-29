import { ThemeProvider } from "@/Providers/ThemeProviders";
import { themeColors } from "@/utils/color-theme";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { colorScheme, useColorScheme } from "nativewind";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import "../global.css";

SplashScreen.preventAutoHideAsync();

colorScheme.set("system");

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  const [loaded] = useFonts({
    "Popions-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Popions-BlackItalic": require("../assets/fonts/Poppins-BlackItalic.ttf"),
    "Popions-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Popions-BoldItalic": require("../assets/fonts/Poppins-BoldItalic.ttf"),
    "Popions-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Popions-ExtraBoldItalic": require("../assets/fonts/Poppins-ExtraBoldItalic.ttf"),
    "Popions-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Popions-ExtraLightItalic": require("../assets/fonts/Poppins-ExtraLightItalic.ttf"),
    "Popions-Italic": require("../assets/fonts/Poppins-Italic.ttf"),
    "Popions-LightItalic": require("../assets/fonts/Poppins-LightItalic.ttf"),
    "Popions-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Popions-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Popions-MediumItalic": require("../assets/fonts/Poppins-MediumItalic.ttf"),
    "Popions-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Popions-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Popions-SemiBoldItalic": require("../assets/fonts/Poppins-SemiBoldItalic.ttf"),
    "Popions-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
    "Popions-ThinItalic": require("../assets/fonts/Poppins-ThinItalic.ttf"),
  });

  useEffect(() => {
    if (!loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <GestureHandlerRootView>
        <Stack
          screenOptions={{
            contentStyle: {
              backgroundColor: themeColors(colorScheme!)["--background"],
            },
            animation: "fade_from_bottom",
          }}
        >
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(root)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" options={{ headerShown: false }} />
        </Stack>
        <StatusBar
          barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
          animated
        />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
