import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: "dark",
    toggleTheme: () => { },
});

/**
 * Reads the initial theme from the DOM (set by the inline script in index.html).
 * This avoids any flash — the <html> element already has the correct class.
 */
const getInitialTheme = (): Theme => {
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(getInitialTheme);

    useEffect(() => {
        const root = document.documentElement;

        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }

        localStorage.setItem("theme", theme);

        // Enable smooth transitions AFTER the initial paint
        // so we don't get a flash of transition on first load
        requestAnimationFrame(() => {
            root.classList.add("theme-transition");
        });
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
