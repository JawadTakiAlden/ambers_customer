import React from "react";
import { Image, Text, View } from "react-native";

const CounterCard = () => {
  return (
    <View className="w-full items-center">
      <View className="bg-gray-200 dark:bg-gray-900 w-full border border-gray-300 rounded-xl p-5 relative gap-5 items-center shadow shadow-gray-500">
        <Text className="absolute top-2 left-3 text-gray-950 dark:text-gray-50 text-[20px] font-Popions-Bold">
          #3
        </Text>

        <Image
          source={require("@/assets/images/counterIcon.png")}
          resizeMode="contain"
          className="w-[50px] h-[13px]"
        />

        <View className="w-full bg-gray-300 dark:bg-gray-700 p-2 rounded-xl">
          <View className="bg-info-600/15 w-full dark:bg-info-400/15 p-2 gap-2 justify-center items-center">
            <Text className="uppercase text-[14px] font-Popions-SemiBold text-info-950 dark:text-info-50">
              POWER FLOW
            </Text>
            <View className="px-[2px] w-full justify-center py-[1px] bg-gray-200 dark:bg-info-950 items-end flex-row rounded-xl">
              <Text className="text-[20px] font-Popions-Bold text-gray-950 dark:text-gray-50">
                02356
              </Text>
              <Text className="text-[14px] font-Popions-SemiBold text-gray-950 dark:text-gray-50">
                kWh
              </Text>
            </View>
          </View>
        </View>
        <Text className="text-gray-950 dark:text-gray-50 text-center w-full font-Popions-Regular text-[16px]">
          jawad taki aldeen
        </Text>
        <View className="w-full flex flex-row items-center justify-between">
          <View className="w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-700" />
          <Image
            source={require("@/assets/images/qr.png")}
            resizeMode="contain"
            className="w-[30px] h-[30px]"
          />
          <View className="w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-700" />
        </View>
      </View>
      <View className="w-[80%] shadow shadow-gray-800 bg-gray-200 dark:bg-gray-900 h-[50px] rounded-b-xl">
        <View className="h-[10px] w-full bg-gray-300 dark:bg-gray-700 " />
      </View>
    </View>
  );
};

export default CounterCard;
