import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useLanguage, type Lang } from "@/i18n/LanguageContext";
import { useTheme } from "@/theme/ThemeContext";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: t.nav.about, id: "about" },
    { label: t.nav.projects, id: "projects" },
    { label: t.nav.skills, id: "skills" },
    { label: t.nav.experience, id: "experience" },
    { label: t.nav.contact, id: "contact" },
  ];

  const toggleLang = (newLang: Lang) => {
    setLang(newLang);
  };

  const LanguageToggle = () => (
    <div className="inline-flex items-center rounded-lg border border-border/50 overflow-hidden text-sm">
      <button
        onClick={() => toggleLang("en")}
        className={`px-2.5 py-1.5 font-medium transition-colors ${lang === "en"
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:text-foreground"
          }`}
      >
        EN
      </button>
      <button
        onClick={() => toggleLang("fr")}
        className={`px-2.5 py-1.5 font-medium transition-colors ${lang === "fr"
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:text-foreground"
          }`}
      >
        FR
      </button>
    </div>
  );

  const ThemeToggle = () => (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border border-border/50 text-muted-foreground hover:text-foreground hover:bg-card transition-all duration-200"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </button>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="container px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Branding */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 hover:scale-105 transition-transform group"
          >
            <img
              src="/profile.jpg"
              alt="René Kakpo"
              className="w-10 h-10 rounded-full border-2 border-primary/20 shadow-md group-hover:border-primary/40 transition-colors"
            />
            <div className="hidden sm:flex flex-col items-start">
              <span className="text-base font-bold gradient-text leading-tight">
                René Kakpo
              </span>
              <span className="text-xs text-muted-foreground leading-tight">
                {t.nav.subtitle}
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <div className="flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {t.nav.getInTouch}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-card transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left py-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
              >
                {t.nav.getInTouch}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
