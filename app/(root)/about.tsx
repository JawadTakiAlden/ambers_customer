import CustomScreen from "@/components/CustomScreen";
import { aboutUs } from "@/mock/about";
import React from "react";
import { StyleSheet } from "react-native";
import Markdown from "react-native-markdown-display";

const about = () => {
  return (
    <CustomScreen className="p-2">
      <Markdown style={style}>{aboutUs}</Markdown>
    </CustomScreen>
  );
};

export default about;

const style = StyleSheet.create({
  body: {
    color: "white",
  },
});
