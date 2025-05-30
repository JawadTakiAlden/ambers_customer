import CustomScreen from "@/components/CustomScreen";
import NotificationCard from "@/components/NotificationCard/NotificationCard";
import SectionHeader from "@/components/SectionStyle";
import { notifications } from "@/mock/notifications";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

const NotificationScreen = () => {
  return (
    <CustomScreen>
      <View className="gap-3 p-2">
        <FlatList
          ListHeaderComponent={() => (
            <SectionHeader>My Notification</SectionHeader>
          )}
          contentContainerStyle={{
            gap: 10,
          }}
          data={notifications}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => <NotificationCard notification={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </CustomScreen>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({});
