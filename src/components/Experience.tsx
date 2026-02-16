import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

/**
 * Renders achievement text with **bold** markers converted to highlighted spans.
 */
const renderAchievement = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      const content = part.slice(2, -2);
      return (
        <span key={i} className="font-semibold text-primary">
          {content}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
};

const Experience = () => {
  const { t } = useLanguage();

  // Static data that doesn't change with language
  const companies = ["RightCom", "RightCom", "RightCom", "WorkerNav"];
  const periods = [
    "Jan 2025 – Present",
    "Jan 2022 – Dec 2024",
    "Mar 2018 – Dec 2021",
    "Apr 2025 – Dec 2025",
  ];
  const technologies = [
    ["Mobile Architecture", "Team Leadership", "CI/CD", "Performance Optimization"],
    ["Developer Relations", "Community Building", "Technical Writing", "Public Speaking"],
    ["Android", "Java", "Kotlin", "Real-time Systems", "Hardware Integration"],
    ["iOS", "SwiftUI", "Clean Architecture", "AI Integration", "Offline-first"],
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold">{t.experience.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.experience.subtitle}
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {t.experience.roles.map((role, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{role.title}</h3>
                    <div className="flex items-center gap-2 text-lg text-primary">
                      <Briefcase className="w-5 h-5" />
                      <span className="font-semibold">{companies[index]}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-primary/30 w-fit">
                    {role.type}
                  </Badge>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{periods[index]}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{role.location}</span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">{t.experience.keyImpact}</h4>
                  <ul className="space-y-2">
                    {role.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span>{renderAchievement(achievement)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="pt-4 border-t border-border">
                  <div className="flex flex-wrap gap-2">
                    {technologies[index].map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
