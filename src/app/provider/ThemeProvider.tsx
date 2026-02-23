/**
 * @file src/app/provider/ThemeProvider.tsx
 * @description 애플리케이션 초기화 및 전역 설정을 담당하는 모듈입니다.
 */
import React, {
    useEffect,
    useState,
    type ReactNode,
} from "react";
import {
    ThemeContext,
    type Theme,
    type ThemeMode,
    type ThemeContextValue,
} from "./themeContext";

const THEME_STORAGE_KEY = "admin-theme";
const DEFAULT_UI_DENSITY = "comfortable";

interface ThemeProviderProps {
    children: ReactNode;
}

const getSystemTheme = (): Theme => {
    if (typeof window === "undefined") {
        return "light";
    }

    const prefersDark = window.matchMedia?.(
        "(prefers-color-scheme: dark)",
    ).matches;

    return prefersDark ? "dark" : "light";
};

const getInitialThemeMode = (): ThemeMode => {
    if (typeof window === "undefined") {
        return "light";
    }

    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark" || stored === "system") {
        return stored;
    }
    return "system";
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [themeMode, setThemeModeState] = useState<ThemeMode>(() => getInitialThemeMode());
    const [systemTheme, setSystemTheme] = useState<Theme>(() => getSystemTheme());

    const theme = themeMode === "system" ? systemTheme : themeMode;

    const setTheme = (next: Theme) => {
        setThemeMode(next);
    };

    const setThemeMode = (mode: ThemeMode) => {
        setThemeModeState(mode);
        if (typeof window !== "undefined") {
            window.localStorage.setItem(THEME_STORAGE_KEY, mode);
        }
    };

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        if (typeof window === "undefined" || !window.matchMedia) return;

        const media = window.matchMedia("(prefers-color-scheme: dark)");
        const updateSystemTheme = (event?: MediaQueryListEvent) => {
            setSystemTheme((event?.matches ?? media.matches) ? "dark" : "light");
        };

        updateSystemTheme();

        if (typeof media.addEventListener === "function") {
            media.addEventListener("change", updateSystemTheme);
            return () => media.removeEventListener("change", updateSystemTheme);
        }

        media.addListener(updateSystemTheme);
        return () => media.removeListener(updateSystemTheme);
    }, []);

    // html 요소에 dark / theme-loaded 토글
    useEffect(() => {
        if (typeof document === "undefined") return;

        const root = document.documentElement; // <html>

        // 한 번만 theme-loaded 붙여서 body 보이게
        if (!root.classList.contains("theme-loaded")) {
            root.classList.add("theme-loaded");
        }

        if (!root.dataset.uiDensity) {
            root.dataset.uiDensity = DEFAULT_UI_DENSITY;
        }

        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [theme]);

    const value: ThemeContextValue = {
        themeMode,
        theme,
        toggleTheme,
        setTheme,
        setThemeMode,
    };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};
