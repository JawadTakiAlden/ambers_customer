import CustomScreen from "@/components/CustomScreen";
import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MapScreen = () => {
  return (
    <CustomScreen>
      <SafeAreaView>
        <ScrollView>
          <Text className="text-gray-950 dark:text-gray-50">Map Page</Text>
        </ScrollView>
      </SafeAreaView>
    </CustomScreen>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
