import { usePaletteStore } from "@/store/themeStore";
import { themes } from "@/utils/color-theme";
import { useColorScheme } from "nativewind";
import React, { createContext, useEffect } from "react";
import { View } from "react-native";

interface ThemeProviderProps {
  children: React.ReactNode;
}
export const ThemeContext = createContext<{
  theme: "light" | "dark";
}>({
  theme: "light",
});
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const { paletteName, mode } = usePaletteStore();

  useEffect(() => {
    setColorScheme(mode);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: colorScheme! }}>
      <View
        style={themes(paletteName)[colorScheme!]}
        className="flex-1 bg-background"
      >
        {children}
      </View>
    </ThemeContext.Provider>
  );
};
