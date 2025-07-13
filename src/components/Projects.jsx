import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Blog Platform",
      description: "Complete blog platform with AI integration for content generation. Features admin dashboard, comment management, and modern UI with Gemini AI integration.",
      technologies: ["React", "Node.js", "MongoDB", "Gemini AI", "ImageKit", "Vercel"],
      image: "🤖",
      liveUrl: "https://blog-devS-navy.vercel.app",
      githubUrl: "https://github.com/DevS-2004/AI-Blog-Platform",
      featured: true
    },
    {
      title: "E-Commerce Website", 
      description: "Full-featured eCommerce platform with cart functionality, product filtering, variant selection, and dual payment gateway integration.",
      technologies: ["MERN Stack", "Stripe", "Razorpay", "JWT", "Tailwind"],
      image: "🛒",
      liveUrl: "https://ecommerce-client-navy-seven.vercel.app",
      githubUrl: "https://github.com/DevS-2004/E-Commerce-Website",
      featured: true
    },
    {
      title: "Job Portal Web App",
      description: "Comprehensive job portal allowing job seekers to apply and upload resumes, while recruiters can post jobs and manage applications with dashboards.",
      technologies: ["MERN", "Clerk Auth", "Sentry", "File Upload", "Dashboard"],
      image: "💼",
      liveUrl: "https://job-portal-new-client-navy.vercel.app", 
      githubUrl: "https://github.com/DevS-2004/Job-Portal",
      featured: true
    }
  ];

  return (
<section id="projects" className="min-h-[calc(100vh-64px)] py-20 bg-background flex items-center">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase of my latest work in full-stack development, AI integration, and modern web technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 card-hover group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Project Image/Icon */}
                <div className="bg-gradient-to-br from-primary/20 to-blue-500/20 h-48 flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="bg-primary/20 text-primary px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-secondary/50 text-foreground px-3 py-1 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="bg-primary hover:bg-primary/90 text-background flex-1"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-background"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-background font-semibold px-8"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
