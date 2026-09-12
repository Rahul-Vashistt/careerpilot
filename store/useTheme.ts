import { create } from "zustand";

interface ThemeProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeProps>((set) => ({
  isDark: false,

  toggleTheme: () => {
    set((state) => ({ isDark: !state.isDark }));
  },
}));
