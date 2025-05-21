import CustomScreen from "@/components/CustomScreen";
import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const NotificationScreen = () => {
  return (
    <SafeAreaView>
      <CustomScreen>
        <ScrollView>
          <Text>Notifcaiton Page</Text>
        </ScrollView>
      </CustomScreen>
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({});
