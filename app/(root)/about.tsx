import CustomScreen from "@/components/CustomScreen";
import useGetMdStyle from "@/hooks/useGetMdStyle";
import { aboutUs } from "@/mock/about";
import React from "react";
import { ScrollView } from "react-native";
import Markdown from "react-native-markdown-display";

const about = () => {
  const style = useGetMdStyle();
  return (
    <CustomScreen className="p-2">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Markdown style={style}>{aboutUs}</Markdown>
      </ScrollView>
    </CustomScreen>
  );
};

export default about;
