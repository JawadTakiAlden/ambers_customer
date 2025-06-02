import { usePaletteStore } from "@/store/themeStore";
import { themeColors } from "@/utils/color-theme";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { PlatformPressable } from "@react-navigation/elements";
import { useLinkBuilder } from "@react-navigation/native";
import { useColorScheme } from "nativewind";
import React, { ReactNode, useEffect } from "react";
import { Text, View } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

const BottomBarNavigation = ({
  state,
  navigation,
  descriptors,
}: BottomTabBarProps) => {
  const { buildHref } = useLinkBuilder();
  const { colorScheme } = useColorScheme();
  const bottom = useSharedValue(0);
  const { paletteName } = usePaletteStore();

  useEffect(() => {
    bottom.value = withSpring(26);
  }, []);

  const primaryColor =
    colorScheme === "dark"
      ? themeColors("dark", paletteName)["--primary-400"]
      : themeColors("light", paletteName)["--primary-600"];
  const grayColor =
    colorScheme === "dark"
      ? themeColors("dark", paletteName)["--gray-400"]
      : themeColors("light", paletteName)["--gray-600"];

  const routeIcons: {
    [key: string]: ({ color }: { color: string }) => ReactNode;
  } = {
    home: ({ color }) => <AntDesign name="home" size={24} color={color} />,
    map: ({ color }) => <Feather name="map-pin" size={24} color={color} />,
    notification: ({ color }) => (
      <MaterialIcons name="notifications" size={24} color={color} />
    ),
    profile: ({ color }) => (
      <MaterialCommunityIcons name="account" size={24} color={color} />
    ),
    settings: ({ color }) => (
      <MaterialIcons name="settings" size={24} color={color} />
    ),
  };
  return (
    <View className="relative h-fit bg-background">
      <Animated.View
        style={{
          bottom,
        }}
        className="overflow-hidden bg-gray-100 dark:bg-gray-900 w-[98%] ml-[1%]  px-3 py-5 shadow shadow-gray-900 dark:shadow-gray-500 flex flex-row justify-between rounded-full"
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <PlatformPressable
              key={index}
              pressOpacity={0}
              href={buildHref(route.name, route.params)}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, marginTop: isFocused ? -20 : 0 }}
              className="flex justify-center items-center"
            >
              {routeIcons[route.name]({
                color: isFocused ? primaryColor : grayColor,
              })}
              <Text
                style={{ color: isFocused ? primaryColor : grayColor }}
                className="text-[12px] font-Popions-Regular capitalize"
              >
                {typeof label === "string" && label}
              </Text>
            </PlatformPressable>
          );
        })}
      </Animated.View>
    </View>
  );
};

export default BottomBarNavigation;
