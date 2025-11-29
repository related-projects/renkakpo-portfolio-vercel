import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Lead Mobile Developer",
      company: "RightCom",
      type: "Remote",
      location: "Remote",
      period: "Jan 2025 – Present",
      achievements: [
        "Spearhead the design and development of next generation mobile applications powering customer experience systems across Africa.",
        "Lead and mentor a team of mobile developers, improving engineering quality and delivery efficiency.",
        "Architect end-to-end mobile solutions, ensuring seamless integration with cloud-based products.",
        "Enhance product reliability through performance optimizations, analytics, testing, and CI/CD.",
      ],
      technologies: ["Mobile Architecture", "Team Leadership", "CI/CD", "Performance Optimization"],
    },
    {
      title: "Mobile Developer Advocate",
      company: "RightCom",
      type: "Remote",
      location: "Remote",
      period: "Jan 2022 – Dec 2024",
      achievements: [
        "Drove adoption of RightCom’s mobile products, contributing to a 25% increase in product sales.",
        "Built and cultivated a developer community, reducing support tickets by 15% through education and engagement.",
        "Improved developer onboarding and documentation, cutting onboarding time by 30%.",
        "Strengthened developer experience across the product ecosystem.",
      ],
      technologies: ["Developer Relations", "Community Building", "Technical Writing", "Public Speaking"],
    },
    {
      title: "Mobile Application Developer",
      company: "RightCom",
      type: "Remote",
      location: "Remote",
      period: "Mar 2018 – Dec 2021",
      achievements: [
        "Built and optimized Android mobile apps that contributed to a 20% increase in upselling and cross-selling.",
        "Implemented real-time notification systems that reduced wait times by 15% for enterprise clients.",
        "Developed and maintained RightQ Kiosk, improving queue efficiency by 25% across locations.",
        "Integrated REST APIs, real-time data streams, and hardware interactions for enterprise-scale reliability.",
      ],
      technologies: ["Android", "Java", "Kotlin", "Real-time Systems", "Hardware Integration"],
    },
    {
      title: "Senior iOS Developer",
      company: "WorkerNav",
      type: "Remote",
      location: "Remote",
      period: "Apr 2025 – Nov 2025",
      achievements: [
        "Rebuilt the WorkerNav iOS app (v3) using SwiftUI and Clean Architecture for improved maintainability.",
        "Integrated AI-powered reporting modules to enhance field worker productivity.",
        "Collaborated with backend and Android teams to deliver consistent multi-platform experiences.",
        "Optimized navigation flows and offline data handling for better performance.",
      ],
      technologies: ["iOS", "SwiftUI", "Clean Architecture", "AI Integration", "Offline-first"],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building innovative mobile solutions across diverse industries
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-lg text-primary">
                      <Briefcase className="w-5 h-5" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-primary/30 w-fit">
                    {exp.type}
                  </Badge>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="pt-4 border-t border-border">
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
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
