import CustomScreen from "@/components/CustomScreen";
import Divider from "@/components/Divider";
import NavigationButton from "@/components/NavigationButton";
import Typography from "@/components/Typography";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Button from "@/components/Button";
import { usePaletteStore } from "@/store/themeStore";
import { themeColors } from "@/utils/color-theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { useColorScheme } from "nativewind";
const SettingsScreen = () => {
  const { setColorScheme, colorScheme } = useColorScheme();
  const { setMode } = usePaletteStore();
  return (
    <SafeAreaView className="bg-background flex-1 px-2">
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomScreen>
          <View className="flex flex-col gap-5">
            <View className="mb-7">
              <Text className="text-[40px] uppercase text-center text-primary-950 dark:text-primary-50">
                Power Flow
              </Text>
            </View>
            <Divider />
            <View className="gap-5">
              <View>
                <Typography color={"ghost"} variant={"outlined"}>
                  App Information
                </Typography>
                <NavigationButton
                  onPress={() => {
                    router.push("/(root)/faq");
                  }}
                  startIcon={
                    <MaterialCommunityIcons
                      name="frequently-asked-questions"
                      size={26}
                      color={themeColors(colorScheme!)["--foreground"]}
                    />
                  }
                >
                  FAQ
                </NavigationButton>
                <NavigationButton
                  startIcon={
                    <Octicons
                      name="info"
                      size={26}
                      color={themeColors(colorScheme!)["--foreground"]}
                    />
                  }
                  onPress={() => {
                    router.push("/(root)/about");
                  }}
                >
                  About us
                </NavigationButton>
                <NavigationButton
                  startIcon={
                    <MaterialIcons
                      name="privacy-tip"
                      size={26}
                      color={themeColors(colorScheme!)["--foreground"]}
                    />
                  }
                  onPress={() => {
                    router.push("/(root)/privacyPolicy");
                  }}
                >
                  Privacy Policy
                </NavigationButton>
              </View>

              <View>
                <Typography color={"ghost"} variant={"outlined"}>
                  App Language
                </Typography>
                <NavigationButton>Arabic</NavigationButton>
                <NavigationButton>English</NavigationButton>
              </View>
              <View>
                <Typography color={"ghost"} variant={"outlined"}>
                  App Theme
                </Typography>
                <NavigationButton
                  startIcon={
                    <MaterialIcons
                      color={themeColors(colorScheme!)["--foreground"]}
                      name="dark-mode"
                      size={26}
                    />
                  }
                  onPress={() => {
                    setColorScheme("dark");
                    setMode("dark");
                  }}
                >
                  Dark
                </NavigationButton>
                <NavigationButton
                  onPress={() => {
                    setColorScheme("light");
                    setMode("light");
                  }}
                  startIcon={
                    <MaterialIcons
                      color={themeColors(colorScheme!)["--foreground"]}
                      name="light-mode"
                      size={26}
                    />
                  }
                >
                  Light
                </NavigationButton>
                <NavigationButton
                  onPress={() => {
                    setColorScheme("system");
                    setMode("system");
                  }}
                  startIcon={
                    <AntDesign
                      color={themeColors(colorScheme!)["--foreground"]}
                      name="mobile1"
                      size={26}
                    />
                  }
                >
                  Default
                </NavigationButton>
                <NavigationButton
                  onPress={() => {
                    router.push("/(root)/appColors");
                  }}
                  startIcon={
                    <Ionicons
                      color={themeColors(colorScheme!)["--foreground"]}
                      name="color-palette"
                      size={26}
                    />
                  }
                >
                  App Colors
                </NavigationButton>
              </View>

              <Button
                onPress={() => {
                  router.replace("/(auth)/login");
                }}
                color={"error"}
              >
                Logout
              </Button>
            </View>
          </View>
        </CustomScreen>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
