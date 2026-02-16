import aboutVisual from "@/assets/about-visual.jpg";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative animate-fade-up">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={aboutVisual}
                alt="Mobile Development"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-xl border border-border card-glow">
              <div className="text-3xl font-bold gradient-text">8+</div>
              <div className="text-sm text-muted-foreground">{t.about.yearsLabel}</div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                {t.about.title}
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>

            <p className="text-xl md:text-2xl text-foreground/90 font-medium leading-relaxed">
              {t.about.tldr}
            </p>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              {t.about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {t.about.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 animate-fade-up"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
