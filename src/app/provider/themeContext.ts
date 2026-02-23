/**
 * @file src/app/provider/themeContext.ts
 * @description 애플리케이션 초기화 및 전역 설정을 담당하는 모듈입니다.
 */
import { createContext, useContext } from "react";

type Theme = "light" | "dark";
type ThemeMode = Theme | "system";

interface ThemeContextValue {
    themeMode: ThemeMode;
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
    setThemeMode: (mode: ThemeMode) => void;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const useTheme = (): ThemeContextValue => {
    const ctx = useContext(ThemeContext);
    if (!ctx) {
        throw new Error("useTheme must be used within ThemeProvider");
    }
    return ctx;
};

export type { Theme, ThemeMode, ThemeContextValue };
