import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Layers, Globe, Wrench } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  priority: "primary" | "secondary";
}

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories: SkillCategory[] = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: t.skills.categories[0],
      priority: "primary",
      skills: [
        "Kotlin",
        "Java",
        "Swift",
        "SwiftUI",
        "Jetpack Compose",
        "Coroutines",
        "Flow",
        "Combine",
        "LiveData",
        "Room",
        "Core Data",
        "Material Design 3",
      ],
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: t.skills.categories[1],
      priority: "primary",
      skills: [
        "Clean Architecture",
        "MVVM",
        "Modularization",
        "Offline-first Systems",
        "API Optimization",
        "Design Systems",
        "Unit Testing",
        "Espresso",
        "Mockito",
        "Performance Profiling",
        "Code Review",
        "Technical Leadership",
      ],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t.skills.categories[2],
      priority: "secondary",
      skills: [
        "Flutter",
        "React Native",
        "Dart",
        "TypeScript",
        "Kotlin Multiplatform",
      ],
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: t.skills.categories[3],
      priority: "secondary",
      skills: [
        "Android Studio",
        "Xcode",
        "GitHub Actions",
        "Firebase",
        "Crashlytics",
        "Gradle",
        "Fastlane",
        "Supabase",
        "Postman",
        "Figma",
        "Jira",
        "Agile / Scrum",
      ],
    },
  ];

  const primaryCategories = skillCategories.filter((c) => c.priority === "primary");
  const secondaryCategories = skillCategories.filter((c) => c.priority === "secondary");

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold">{t.skills.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.skills.subtitle}
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
        </div>

        {/* Primary Skills — larger, more prominent */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {primaryCategories.map((category, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-sm hover:bg-primary/20 transition-colors cursor-default py-1.5 px-3"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Secondary Skills — smaller, supporting */}
        <div className="grid md:grid-cols-2 gap-6">
          {secondaryCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 bg-card/60 border-border/50 hover:border-primary/20 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="inline-flex p-2 rounded-lg bg-muted text-muted-foreground">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground/80">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="text-xs text-muted-foreground border-border/60 cursor-default py-1 px-2.5"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
