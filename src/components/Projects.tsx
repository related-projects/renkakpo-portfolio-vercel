import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();

  // Static data that doesn't change with language
  const projectMeta = [
    {
      title: "CookIt",
      category: "Android",
      technologies: ["Kotlin", "Android SDK", "Retrofit", "Room Database", "Material Design", "Picasso", "LiveData", "ViewModel"],
      github: "https://github.com/Renekakpo/cookIt",
      screenshots: [
        "https://github.com/Renekakpo/cookIt/raw/main/screenshots/screenshot_homescreen.png",
        "https://github.com/Renekakpo/cookIt/raw/main/screenshots/screenshot_recipedetails.png",
        "https://github.com/Renekakpo/cookIt/raw/main/screenshots/screenshot_search_filter.png",
      ],
    },
    {
      title: "CurrencyX",
      category: "Android",
      technologies: ["Kotlin", "Android SDK", "Retrofit", "Room Database", "Material Design", "JUnit", "Open Exchange Rates API"],
      github: "https://github.com/Renekakpo/currencyX",
      screenshots: [
        "https://github.com/Renekakpo/currencyX/raw/main/screenshot/screenshot_currency_convert.png",
        "https://github.com/Renekakpo/currencyX/raw/main/screenshot/screenshot_search_currency.png",
      ],
    },
    {
      title: "HireTop",
      category: "Android",
      technologies: ["Kotlin", "Jetpack Compose", "Android SDK", "Material Design 3", "Firebase", "Real-time Database"],
      github: "https://github.com/Renekakpo/hiretop",
      screenshots: [
        "https://github.com/Renekakpo/hiretop/raw/main/screenshots/candidate_dashboard_screen.png",
        "https://github.com/Renekakpo/hiretop/raw/main/screenshots/candidate_explorer_screen.png",
        "https://github.com/Renekakpo/hiretop/raw/main/screenshots/enterprise_dashboard_screen.png",
      ],
    },
    {
      title: "Landmarks",
      category: "iOS",
      technologies: ["Swift", "SwiftUI", "MapKit", "Combine", "Xcode", "Core Location"],
      github: "https://github.com/Renekakpo/landmarks",
      screenshots: [
        "https://github.com/Renekakpo/landmarks/raw/main/screenshots/screenshot_featuredscreen.png",
        "https://github.com/Renekakpo/landmarks/raw/main/screenshots/screenshot_detailscreen.png",
        "https://github.com/Renekakpo/landmarks/raw/main/screenshots/screenshot_listcreen.png",
      ],
    },
    {
      title: "WeatherWise",
      category: "Flutter",
      technologies: ["Flutter", "Dart", "OpenWeather API", "Provider", "Geolocator", "Hive Database", "HTTP", "Flutter Animations"],
      github: "https://github.com/Renekakpo/WeatherWise",
      screenshots: [
        "https://github.com/Renekakpo/WeatherWise/raw/main/screenshots/home_screen.png",
        "https://github.com/Renekakpo/WeatherWise/raw/main/screenshots/settings_screen.png",
      ],
    },
  ];

  const caseStudyMeta = {
    title: "WorkerNav",
    period: "Apr 2025 – Dec 2025",
    technologies: [
      "Swift",
      "SwiftUI",
      "Combine",
      "Clean Architecture",
      "MVVM",
      "Supabase",
      "AI Integration",
      "Offline-first",
    ],
  };

  const cs = t.projects.caseStudy;
  const labels = t.projects.labels;

  return (
    <section id="projects" className="py-20">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold">{t.projects.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
        </div>

        {/* Featured Case Study */}
        <Card className="relative mb-16 p-0 overflow-hidden border-border animate-fade-up">
          <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-primary via-accent to-primary"></div>
          <div className="p-8 md:p-10 pl-10 md:pl-12 space-y-8">
            {/* Case Study Header */}
            <div className="space-y-3">
              <Badge className="bg-primary/10 text-primary border-primary/20 font-medium">
                {t.projects.caseStudyBadge}
              </Badge>
              <h3 className="text-3xl md:text-4xl font-bold">{caseStudyMeta.title}</h3>
              <p className="text-lg text-muted-foreground">{cs.subtitle}</p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground pt-1">
                <span className="font-medium text-foreground/80">{cs.role}</span>
                <span className="text-border">|</span>
                <span>{caseStudyMeta.period}</span>
              </div>
            </div>

            {/* Overview */}
            <div>
              <h4 className="text-lg font-semibold mb-2">{labels.overview}</h4>
              <p className="text-muted-foreground leading-relaxed">{cs.overview}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Role & Responsibilities */}
              <div>
                <h4 className="text-lg font-semibold mb-3">{labels.myRole}</h4>
                <ul className="space-y-2">
                  {cs.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architecture */}
              <div>
                <h4 className="text-lg font-semibold mb-3">{labels.architecture}</h4>
                <ul className="space-y-2">
                  {cs.architecture.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Key Challenges */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{labels.keyChallenges}</h4>
              <div className="grid md:grid-cols-3 gap-4">
                {cs.challenges.map((challenge, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-card border border-border/50 space-y-2"
                  >
                    <p className="text-sm font-medium text-foreground/90">
                      {challenge.problem}
                    </p>
                    <p className="text-sm text-primary/80">
                      {challenge.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact */}
            <div>
              <h4 className="text-lg font-semibold mb-3">{labels.impact}</h4>
              <ul className="space-y-2">
                {cs.impact.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="pt-4 border-t border-border">
              <div className="flex flex-wrap gap-2">
                {caseStudyMeta.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Other Projects */}
        <div className="text-center space-y-4 mb-10 animate-fade-up">
          <h3 className="text-2xl md:text-3xl font-semibold">{t.projects.otherProjects}</h3>
          <div className="h-0.5 w-12 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projectMeta.map((project, index) => {
            const projectT = t.projects.items[index];
            return (
              <Card
                key={index}
                className="group p-8 bg-card border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <Badge variant="outline" className="mt-2 border-primary/30">
                        {project.category}
                      </Badge>
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-card-hover hover:bg-primary/10 transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-muted-foreground">{projectT.description}</p>
                </div>

                {/* Screenshots */}
                {project.screenshots && project.screenshots.length > 0 && (
                  <div className="mb-6 grid grid-cols-3 gap-2">
                    {project.screenshots.map((screenshot, idx) => (
                      <div key={idx} className="aspect-[9/16] overflow-hidden rounded-lg border border-border">
                        <img
                          src={screenshot}
                          alt={`${project.title} screenshot ${idx + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Details */}
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">{labels.problem}</h4>
                    <p className="text-muted-foreground">{projectT.problem}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">{labels.solution}</h4>
                    <p className="text-muted-foreground">{projectT.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">{labels.myRole}</h4>
                    <p className="text-muted-foreground">{projectT.role}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">{labels.architecture}</h4>
                    <p className="text-muted-foreground">{projectT.architecture}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">{labels.technologies}</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">{labels.keyChallenges}</h4>
                    <p className="text-muted-foreground">{projectT.challenges}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">{labels.outcome}</h4>
                    <p className="text-muted-foreground">{projectT.outcome}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">{labels.whatILearned}</h4>
                    <p className="text-muted-foreground">{projectT.learned}</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-border">
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary/10 group-hover:border-primary/30"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t.projects.viewOnGithub}
                    </a>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
