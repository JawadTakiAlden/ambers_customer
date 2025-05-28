import { FAQ } from "@/types";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import CollapsableContainer from "../CollapsableContainer";

const FAQCard = ({ faq }: { faq: FAQ }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setOpen((prev) => !prev);
      }}
    >
      <View className="w-full bg-gray-100 dark:bg-gray-900 rounded-xl p-3">
        <Text className="text-[18px] capitalize border-b border-b-gray-100 dark:border-b-gray-900 font-Popions-SemiBold text-gray-950 dark:text-gray-50">
          {faq.question}
        </Text>
        <CollapsableContainer expanded={open}>
          <View>
            <Text className="text-[16px] capitalize font-Popions-Regular text-gray-800 dark:text-gray-200">
              {faq.answer}
            </Text>
          </View>
        </CollapsableContainer>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FAQCard;

const styles = StyleSheet.create({});
