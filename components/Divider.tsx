import clsx from "clsx";
import React from "react";
import { View, ViewProps } from "react-native";

type DividerProps = ViewProps;

const Divider = ({ className, ...rest }: DividerProps) => {
  return (
    <View
      {...rest}
      className={clsx("h-[1px] w-full bg-gray-300 dark:bg-gray-700", className)}
    />
  );
};

export default Divider;
