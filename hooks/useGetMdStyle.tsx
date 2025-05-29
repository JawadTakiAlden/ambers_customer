import { themeColors } from "@/utils/color-theme";
import { colorScheme } from "nativewind";
import { useMemo } from "react";
import { StyleSheet } from "react-native";

const useGetMdStyle = () => {
  const style = useMemo(
    () =>
      StyleSheet.create({
        body: {
          backgroundColor: themeColors(colorScheme.get()!)["--background"],
          color: themeColors(colorScheme.get()!)["--foreground"],
        },
        blockquote: {
          backgroundColor: themeColors(colorScheme.get()!)[
            colorScheme.get() === "dark" ? "--gray-800" : "--gray-200"
          ],
          borderColor: themeColors(colorScheme.get()!)[
            colorScheme.get() === "dark" ? "--gray-700" : "--gray-300"
          ],
        },
        hr: {
          backgroundColor: themeColors(colorScheme.get()!)["--background"],
        },
        code_inline: {
          borderColor: themeColors(colorScheme.get()!)[
            colorScheme.get() === "dark" ? "--gray-700" : "--gray-300"
          ],
          backgroundColor: themeColors(colorScheme.get()!)["--background"],
        },
        code_block: {
          borderColor: themeColors(colorScheme.get()!)[
            colorScheme.get() === "dark" ? "--gray-700" : "--gray-300"
          ],
          backgroundColor: themeColors(colorScheme.get()!)["--background"],
        },
        fence: {
          borderColor: themeColors(colorScheme.get()!)[
            colorScheme.get() === "dark" ? "--gray-700" : "--gray-300"
          ],
          backgroundColor: themeColors(colorScheme.get()!)["--background"],
        },
        table: {
          borderColor: themeColors(colorScheme.get()!)[
            colorScheme.get() === "dark" ? "--gray-700" : "--gray-300"
          ],
        },
        tr: {
          borderColor: themeColors(colorScheme.get()!)[
            colorScheme.get() === "dark" ? "--gray-700" : "--gray-300"
          ],
        },
        blocklink: {
          borderColor: themeColors(colorScheme.get()!)[
            colorScheme.get() === "dark" ? "--gray-700" : "--gray-300"
          ],
        },
      }),
    [colorScheme.get()]
  );

  return style;
};

export default useGetMdStyle;
