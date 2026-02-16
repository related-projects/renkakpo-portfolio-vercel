import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-up">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm text-muted-foreground">{t.hero.status}</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              {t.hero.headline}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              {t.hero.secondary}
            </p>
          </div>

          {/* Description */}
          <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            {t.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
            >
              {t.hero.viewProjects}
            </Button>
            <a href="/rene_kakpo_portfolio_resume.pdf" download target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/10 font-semibold px-8 py-6 text-lg w-full sm:w-auto"
              >
                {t.hero.downloadResume}
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/Renekakpo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card hover:bg-card-hover transition-all duration-300 hover:scale-110 border border-border/50"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/renekakpo/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card hover:bg-card-hover transition-all duration-300 hover:scale-110 border border-border/50"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:renkakpo@gmail.com"
              className="p-3 rounded-lg bg-card hover:bg-card-hover transition-all duration-300 hover:scale-110 border border-border/50"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
