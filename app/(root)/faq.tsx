import CustomScreen from "@/components/CustomScreen";
import FAQCard from "@/components/FAQ/FAQCard";
import OutlinedInput from "@/components/OutlinedInput";
import { faqs } from "@/mock/faqs";
import { themeColors } from "@/utils/color-theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useColorScheme } from "nativewind";
import React, { useState } from "react";
import { ScrollView, Text, TouchableWithoutFeedback, View } from "react-native";

const FAQs = () => {
  const [filter, setFilter] = useState<string>("");
  const { colorScheme } = useColorScheme();
  return (
    <CustomScreen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="pt-5 gap-4 px-2">
          <View>
            <Text className="text-[30px] font-Popions-SemiBold text-gray-950 dark:text-gray-50">
              FAQs
            </Text>
            <Text className="text-gray-400 dark:text-gray-600 text-[16px] font-Popions-Italic">
              Find answers to your most common questions
            </Text>
          </View>
          <View
            className="flex  flex-row gap-1 flex-1 items-center pr-2
          "
          >
            <View className="flex-1">
              <OutlinedInput
                placeholder="search"
                keyboardType="web-search"
                value={filter}
                onChangeText={(newText) => {
                  setFilter(newText);
                }}
              />
            </View>
            <View>
              {filter && (
                <TouchableWithoutFeedback
                  onPress={() => {
                    setFilter("");
                  }}
                >
                  <MaterialIcons
                    color={themeColors(colorScheme!)["--foreground"]}
                    size={25}
                    name="cancel"
                  />
                </TouchableWithoutFeedback>
              )}
            </View>
          </View>
          <View className="gap-2">
            {faqs
              .filter((faq) => {
                if (!filter) return true;
                return (
                  faq.question.toLowerCase().includes(filter.toLowerCase()) ||
                  faq.answer.toLowerCase().includes(filter.toLowerCase())
                );
              })
              .map((faq, index) => (
                <FAQCard key={index} faq={faq} />
              ))}
          </View>
        </View>
      </ScrollView>
    </CustomScreen>
  );
};

export default FAQs;
