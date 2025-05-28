import Button from "@/components/Button";
import CounterCard, { CounterCardScreen } from "@/components/CounterCard";
import CustomScreen from "@/components/CustomScreen";
import SectionHeader from "@/components/SectionStyle";
import { counters } from "@/mock/counters";
import { LocalSearchParams } from "@/types";
import { themeColors } from "@/utils/color-theme";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useLocalSearchParams } from "expo-router";
import { useColorScheme } from "nativewind";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const CounterPayRecord = () => {
  return (
    <View className="bg-gray-100 items-center dark:bg-gray-900 rounded-3xl px-3 py-1 flex flex-row justify-between">
      <Text className="flex-1 text-[16px] font-Popions-Bold text-gray-950 dark:text-gray-50">
        4 kWh payment - 21,000 S.P
      </Text>
      <Text className="text-[16px] font-Popions-Bold text-gray-800 dark:text-gray-200">
        5/13/2025
      </Text>
    </View>
  );
};

const counterDetail = () => {
  const { colorScheme } = useColorScheme();
  const { counterId } = useLocalSearchParams<LocalSearchParams>();

  return (
    <CustomScreen>
      <ScrollView className="px-2">
        <View className="gap-4">
          <TouchableOpacity className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
            <AntDesign
              name="arrowleft"
              size={24}
              color={themeColors(colorScheme!)["--foreground"]}
            />
          </TouchableOpacity>
          <CounterCard counter={counters[+counterId]} />
          <View className="gap-3">
            <SectionHeader>consumption rate</SectionHeader>
            <View className="flex flex-row w-full flex-wrap gap-2">
              <View className="basis-[40%] flex-1 max-w-[50%]">
                <CounterCardScreen value={"02356"} title="daily" />
              </View>
              <View className="basis-[40%] flex-1 max-w-[50%]">
                <CounterCardScreen value={"02356"} title="weakly" />
              </View>
              <View className="basis-[40%] flex-1 max-w-[50%]">
                <CounterCardScreen value={"02356"} title="monthly" />
              </View>
              <View className="basis-[40%] flex-1 max-w-[50%]">
                <CounterCardScreen value={"02356"} title="yearly" />
              </View>
            </View>
          </View>
          <View>
            <SectionHeader>for this counter you are paid :</SectionHeader>
            <Text className="text-[16px] capitalize font-Popions-Bold text-gray-950 dark:text-gray-50">
              totaly : 2,451,000 S.P
            </Text>
            <View className="gap-2 relative overflow-hidden">
              <CounterPayRecord />
              <CounterPayRecord />
              <CounterPayRecord />
              <CounterPayRecord />
              <CounterPayRecord />
              <CounterPayRecord />
              <CounterPayRecord />
              <Button>Donwload all payment as PDF</Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </CustomScreen>
  );
};

export default counterDetail;
