/**
 * @file src/app/provider/ThemeProvider.tsx
 * @description 애플리케이션 초기화 및 전역 설정을 담당하는 모듈입니다.
 */
import React, {
    useEffect,
    useState,
    type ReactNode,
} from "react";
import { ThemeContext, type Theme, type ThemeContextValue } from "./themeContext";

const THEME_STORAGE_KEY = "admin-theme";
const DEFAULT_UI_DENSITY = "comfortable";

interface ThemeProviderProps {
    children: ReactNode;
}

const getInitialTheme = (): Theme => {
    if (typeof window === "undefined") {
        return "light";
    }

    // 1) localStorage 우선
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark") {
        return stored;
    }

    // 2) 시스템 설정
    const prefersDark = window.matchMedia?.(
        "(prefers-color-scheme: dark)",
    ).matches;

    return prefersDark ? "dark" : "light";
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setThemeState] = useState<Theme>(() => getInitialTheme());

    const setTheme = (next: Theme) => {
        setThemeState(next);
        if (typeof window !== "undefined") {
            window.localStorage.setItem(THEME_STORAGE_KEY, next);
        }
    };

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

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
        theme,
        toggleTheme,
        setTheme,
    };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};
