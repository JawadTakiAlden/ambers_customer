import { vars } from "nativewind";
import { yellowPalette } from "./colors/default-palette";
import { electricBluePalette } from "./colors/electricBluePalette";
import { limeGreenPalette } from "./colors/limeGreenPalette";
import { metallicGreyPalette } from "./colors/metallicGreyPalette";
import { neonVioletPalette } from "./colors/neonVioletPalette";

export const allColors = {
  yellowPalette,
  electricBluePalette,
  limeGreenPalette,
  metallicGreyPalette,
  neonVioletPalette,
};

export type AppColors = keyof typeof allColors;

export const themeColors = (
  theme: "dark" | "light",
  color: AppColors = "yellowPalette"
) => {
  const colors = {
    yellowPalette,
    electricBluePalette,
    limeGreenPalette,
    metallicGreyPalette,
    neonVioletPalette,
  };
  return colors[color][theme];
};

export const themes = (palette: AppColors) => ({
  light: vars(themeColors("light", palette)),
  dark: vars(themeColors("dark", palette)),
});
