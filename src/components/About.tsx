
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Users, MessageSquare } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="bg-gradient-to-br from-card to-secondary p-8 rounded-2xl">
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                I am a final-year <span className="text-primary font-semibold">B.Tech student in Information Technology</span> at Dr. B.R. Ambedkar NIT Jalandhar, with a passion for solving real-world problems using full stack development.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                I specialize in <span className="text-blue-400 font-semibold">backend engineering, RESTful APIs, secure integrations, and server-side logic</span> — and complement it with frontend development using modern tools like React and Tailwind CSS.
              </p>
              <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                My core interest lies in building <span className="text-primary font-semibold">structured, scalable, and user-centric applications</span> with practical use cases — powered by AI, cloud, or complex workflows.
              </p>
              
              <Button className="bg-primary hover:bg-primary/90 text-background font-semibold">
                Download Resume
              </Button>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="space-y-6">
              {/* Education */}
              <Card className="bg-card border-border hover:border-primary/50 transition-colors card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Education</h3>
                      <p className="text-muted-foreground">Academic Background</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-medium">B.Tech (Information Technology)</div>
                    <div className="text-primary">Dr. B.R. Ambedkar NIT Jalandhar</div>
                    <div className="text-sm text-muted-foreground">2023 - 2027 (Final Year)</div>
                  </div>
                </CardContent>
              </Card>

              {/* Soft Skills */}
              <Card className="bg-card border-border hover:border-primary/50 transition-colors card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Soft Skills</h3>
                      <p className="text-muted-foreground">Professional Abilities</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {['Leadership', 'Team Collaboration', 'Communication', 'PPT Creation'].map((skill) => (
                      <div key={skill} className="bg-secondary/50 px-3 py-2 rounded-lg text-sm font-medium text-center">
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
