
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-dark overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">

          {/* Left side - Main content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            {/* Greeting badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-pulse-glow">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              Available for opportunities
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-gradient bg-gradient-to-r from-primary via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Devendra Singh
              </span>
            </h1>

            <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 font-medium">
              <span className="block">Full Stack Developer</span>
              <span className="text-primary">|</span>
              <span className="block lg:inline"> MERN Stack Enthusiast</span>
              <span className="text-primary lg:inline hidden"> | </span>
              <span className="block lg:inline">AI Explorer</span>
            </div>

            <p className="text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 text-muted-foreground leading-relaxed">
              I build scalable, efficient web applications using the MERN stack. My focus is on backend logic, clean APIs, database optimization, and deploying production-ready systems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-background font-semibold px-8 py-4 neon-glow transition-all duration-300 hover:scale-105 min-w-[160px]"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-background font-semibold px-8 py-4 transition-all duration-300 hover:scale-105 min-w-[160px]"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start items-center">
              <a
                href="https://github.com/DevS-2004"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/devendra-singh-97b147216"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:devendras.it.23@nitj.ac.in"
                className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="/resume.pdf" download>
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </a>

            </div>
          </div>

          {/* Right side - Profile section with actual image */}
          <div className="flex-shrink-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main profile container */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                {/* Animated rings */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute inset-4 rounded-full border border-blue-400/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>

                {/* Profile image container */}
                <div className="absolute inset-8 bg-gradient-to-br from-primary via-blue-400 to-purple-400 rounded-full flex items-center justify-center animate-pulse-glow p-1">
                  <div className="w-full h-full bg-background rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src="\profile.jpg"
                      alt="Devendra Singh"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center animate-float">
                  <span className="text-primary text-xl">⚡</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400/20 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                  <span className="text-blue-400 text-2xl">🚀</span>
                </div>
                <div className="absolute top-1/2 -left-8 w-8 h-8 bg-purple-400/20 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                  <span className="text-purple-400 text-sm">💡</span>
                </div>
              </div>

              {/* Stats cards */}
              <div className="absolute -bottom-6 -left-6 bg-card/80 backdrop-blur-sm border border-border rounded-lg p-3 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-card/80 backdrop-blur-sm border border-border rounded-lg p-3 animate-fade-in" style={{ animationDelay: '0.9s' }}>
                <div className="text-2xl font-bold text-blue-400">2027</div>
                <div className="text-sm text-muted-foreground">Graduate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-muted-foreground">Scroll to explore</span>
            <ArrowDown
              className="w-6 h-6 text-primary cursor-pointer hover:text-primary/80 transition-colors animate-pulse"
              onClick={() => scrollToSection('about')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
