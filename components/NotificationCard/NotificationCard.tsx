import { Notification, NotificationColorMapper } from "@/types";
import { VariantProps } from "class-variance-authority";
import React from "react";
import { Text, View } from "react-native";
import Typography, { TypographyVariants } from "../Typography";

const NotificationCard = ({ notification }: { notification: Notification }) => {
  return (
    <View className="bg-gray-100 dark:bg-gray-900  px-1 py-2 rounded-2xl flex gap-3">
      <View className="flex-1 flex-row justify-between">
        <Typography
          variant={"outlined"}
          color={
            NotificationColorMapper[notification.type] as VariantProps<
              typeof TypographyVariants
            >["color"]
          }
          className="text-[16px] font-Popions-SemiBold flex-1 "
        >
          {notification.title}
        </Typography>
        <Text className="text-gray-700 dark:text-gray-300 font-Popions-Regular">
          {notification.date}
        </Text>
      </View>
      <Text className="text-gray-700 dark:text-gray-300 text-[14px] font-Popions-Regular">
        {notification.body}
      </Text>
    </View>
  );
};

export default NotificationCard;
