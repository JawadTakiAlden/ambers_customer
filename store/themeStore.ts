import { AppColors } from "@/utils/color-theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface PaletteState {
  paletteName: AppColors;
  mode: "dark" | "light" | "system";
  setPaletteName: (name: AppColors) => void;
  setMode: (mode: "dark" | "light" | "system") => void;
}

export const usePaletteStore = create<PaletteState>()(
  persist(
    (set) => ({
      paletteName: "yellowPalette",
      mode: "dark",

      setPaletteName: (name: AppColors) => set(() => ({ paletteName: name })),

      setMode: (mode: "dark" | "light" | "system") => set(() => ({ mode })),
    }),
    {
      name: "palette-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
