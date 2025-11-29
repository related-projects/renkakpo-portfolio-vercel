import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
    return (
        <section id="education" className="py-20 bg-card/30">
            <div className="container px-4">
                <div className="text-center space-y-4 mb-16 animate-fade-up">
                    <h2 className="text-4xl md:text-5xl font-bold">Education</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Academic foundation in software engineering
                    </p>
                    <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
                </div>

                <div className="max-w-2xl mx-auto">
                    <Card className="p-8 bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-fade-up">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                            <div className="inline-flex p-4 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                                <GraduationCap className="w-10 h-10" />
                            </div>
                            <div className="space-y-2 text-center md:text-left flex-1">
                                <h3 className="text-2xl font-bold">Master's in Software Architecture</h3>
                                <p className="text-lg text-primary font-semibold">ESGIS | ESGI Paris</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Education;
