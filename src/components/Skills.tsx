import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Layers, Wrench, ShieldCheck, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      skills: [
        "Android: Kotlin, Java, Jetpack Compose, Coroutines, Flow, LiveData, MVVM",
        "iOS: Swift, SwiftUI, Combine",
        "Cross-Platform: Flutter, React Native, Kotlin Multiplatform Mobile (KMM)",
      ],
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Architecture & Engineering",
      skills: [
        "Clean Architecture, MVVM, Modularization, Design System Implementation",
        "UI Architecture, Offline-first Systems, Caching & Data Persistence",
        "API Optimization (Reduced latency, improved reliability)",
        "Firmware/Hardware Interactions (ADB, command-line tools)",
      ],
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Tools & CI/CD",
      skills: [
        "Android Studio, Xcode, GitHub Actions, Firebase App Distribution",
        "Firebase Analytics, Crashlytics, Performance Monitoring",
        "Gradle, Fastlane (basic), Postman, Figma, Jira, Confluence",
      ],
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Testing & Quality",
      skills: [
        "Unit Testing (Kotlin & Swift)",
        "Espresso, Mockito",
        "Automated QA pipelines",
        "Performance Profiling and Debugging",
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Soft Skills",
      skills: [
        "Technical Leadership, Mentorship, Code Review",
        "Cross-Functional Collaboration, Agile/Scrum, Communication",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building exceptional mobile experiences
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-fade-up h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
                <div className="flex flex-col gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-sm hover:bg-primary/20 transition-colors cursor-default w-full justify-start text-left h-auto py-2 whitespace-normal leading-relaxed"
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
