import BottomBarNavigation from "@/components/Navigation/BottomBarNavigation";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs
      initialRouteName="home"
      detachInactiveScreens
      tabBar={(props) => <BottomBarNavigation {...props} />}
      backBehavior="order"
      screenOptions={{
        headerShown: false,
        animation: "none",
      }}
    >
      <Tabs.Screen name="profile" />
      <Tabs.Screen name="notification" />
      <Tabs.Screen name="home" />
      <Tabs.Screen name="map" />
      <Tabs.Screen name="settings" />
    </Tabs>
  );
};

export default TabsLayout;
