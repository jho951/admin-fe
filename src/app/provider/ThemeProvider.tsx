import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const THEME_STORAGE_KEY = "admin-theme";

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

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
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

export const useTheme = (): ThemeContextValue => {
    const ctx = useContext(ThemeContext);
    if (!ctx) {
        throw new Error("useTheme must be used within ThemeProvider");
    }
    return ctx;
};

export default ThemeProvider;
