import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Certifications = () => {
    const { t } = useLanguage();

    const certifications = [
        {
            title: "Associate Android Developer",
            issuer: "Google",
            year: "2022",
        },
        {
            title: "Meta iOS Developer Specialization",
            issuer: "Coursera",
            year: "2024",
        },
        {
            title: "Meta React Native Specialization",
            issuer: "Coursera",
            year: "2023",
        },
    ];

    return (
        <section id="certifications" className="py-20">
            <div className="container px-4">
                <div className="text-center space-y-4 mb-16 animate-fade-up">
                    <h2 className="text-4xl md:text-5xl font-bold">{t.certifications.title}</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t.certifications.subtitle}
                    </p>
                    <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
                </div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <Card
                            key={index}
                            className="p-6 bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-fade-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="space-y-4 text-center">
                                <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mx-auto">
                                    <Award className="w-8 h-8" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold leading-tight">{cert.title}</h3>
                                    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                                        <span className="font-semibold text-primary">{cert.issuer}</span>
                                        <Badge variant="outline" className="border-primary/30 w-fit mx-auto">
                                            {cert.year}
                                        </Badge>
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

export default Certifications;
