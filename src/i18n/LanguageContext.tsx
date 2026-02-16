import { createContext, useContext, useState, type ReactNode } from "react";
import { en, fr, type Translations } from "./translations";

export type Lang = "en" | "fr";

interface LanguageContextType {
    lang: Lang;
    setLang: (lang: Lang) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
    lang: "en",
    setLang: () => { },
    t: en,
});

const translationsMap: Record<Lang, Translations> = { en, fr };

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLang] = useState<Lang>("en");
    const t = translationsMap[lang];

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
