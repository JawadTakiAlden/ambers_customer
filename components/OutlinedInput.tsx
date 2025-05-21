import clsx from "clsx";
import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";

type OutlinedInputProps = TextInputProps & {
  lable?: string;
  placeholder?: string;
};

const OutlinedInput = ({ lable, className, ...rest }: OutlinedInputProps) => {
  return (
    <View className="my-2">
      {lable && (
        <Text className="text-gray-950 dark:text-gray-50 pl-1 mb-1">
          {lable}
        </Text>
      )}
      <View className="flex flex-row items-center">
        <TextInput
          {...rest}
          className={clsx(
            "h-[40px] flex-1 read-only:text-gray-500 rounded-xl border text-primary-950 dark:text-primary-50 border-gray-300 dark:border-gray-400 px-3 py-1 placeholder:text-gray-600 dark:placeholder:text-gray-400 focus:border-primary-600 dark:focus:border-primary-400",
            className
          )}
        />
      </View>
    </View>
  );
};

export default OutlinedInput;
