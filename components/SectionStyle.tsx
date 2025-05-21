import clsx from "clsx";
import React from "react";
import { Text, TextProps } from "react-native";

const SectionHeader = ({ children, className, ...rest }: TextProps) => {
  return (
    <Text
      className={clsx(
        "text-gray-950 dark:text-gray-50 text-[20px] font-Popions-Regular",
        className
      )}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default SectionHeader;
