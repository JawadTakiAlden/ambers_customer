import CustomScreen from "@/components/CustomScreen";
import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingsScreen = () => {
  return (
    <SafeAreaView>
      <CustomScreen>
        <ScrollView>
          <Text>SettingsScreen</Text>
        </ScrollView>
      </CustomScreen>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
