import CustomScreen from "@/components/CustomScreen";
import useGetMdStyle from "@/hooks/useGetMdStyle";
import privacy from "@/mock/privacy";
import React from "react";
import { ScrollView } from "react-native";
import Markdown from "react-native-markdown-display";

const privacyPolicy = () => {
  const style = useGetMdStyle();
  return (
    <CustomScreen className="p-2">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Markdown style={style}>{privacy}</Markdown>
      </ScrollView>
    </CustomScreen>
  );
};

export default privacyPolicy;
