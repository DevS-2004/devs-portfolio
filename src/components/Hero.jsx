import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-dark overflow-hidden">
      {/* (Your existing background effects here...) */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">

          {/* Left Side */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-pulse-glow">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              Available for opportunities
            </div>

            {/* Typewriter Text */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              <span className="text-gradient bg-gradient-to-r from-primary via-blue-400 to-purple-400 bg-clip-text text-transparent">
                <Typewriter
                  words={['Hi, I\'m Devendra Singh']}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={90}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
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
              <a href="https://github.com/DevS-2004" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all duration-300 hover:scale-110 group">
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="https://linkedin.com/in/devendra-singh-97b147216" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all duration-300 hover:scale-110 group">
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="mailto:devendras.it.23@nitj.ac.in" className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all duration-300 hover:scale-110 group">
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-2 text-muted-foreground hover:text-white hover:bg-primary transition-all hover:shadow-[0_0_15px_hsl(var(--primary))]"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </a>
            </div>
          </div>

          {/* Right Side - Profile & Hover Cards */}
          <div className="flex-shrink-0 animate-fade-in group relative" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute inset-4 rounded-full border border-blue-400/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>

              {/* Profile Image */}
              <div className="absolute inset-8 bg-gradient-to-br from-primary via-blue-400 to-purple-400 rounded-full flex items-center justify-center animate-pulse-glow p-1">
                <div className="w-full h-full bg-background rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src="https://ik.imagekit.io/e7kcx5hsv/ChatGPT%20Image%20Jul%208,%202025,%2012_33_00%20AM.jpg?updatedAt=1752388895406"
                    alt="Devendra Singh"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Floating Cards on Hover */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-6 flex gap-4 opacity-0 translate-y-3 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-500 ease-out">
              {/* Projects Card */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgba(0,0,255,0.15)] transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 text-lg font-bold shadow-inner group-hover:scale-110 transition-transform duration-300">
                    🧩
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">3+</div>
                    <div className="text-sm text-zinc-400">Projects</div>
                  </div>
                </div>
              </div>

              {/* Graduate Card */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgba(0,0,255,0.15)] transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 text-lg font-bold shadow-inner group-hover:scale-110 transition-transform duration-300">
                    🎓
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-white group-hover:text-purple-400 transition-colors">2027</div>
                    <div className="text-sm text-zinc-400">Graduate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute left-1/2 transform -translate-x-1/2"
          style={{ bottom: '1.2rem' }} // Adjust this value as needed
        >
          <div
            onClick={() => scrollToSection('about')}
            className="group flex flex-col items-center gap-3 cursor-pointer transition-all duration-300"
          >
            {/* Ring and Icon */}
            <div className="relative w-12 h-12 flex items-center justify-center">
              <span className="absolute w-full h-full rounded-full border-2 border-primary/30 animate-ping" />
              <div className="z-10 w-10 h-10 rounded-full bg-gradient-to-tr from-primary/80 to-blue-500/80 flex items-center justify-center shadow-lg hover:shadow-primary/50 transition-shadow duration-300">
                <ArrowDown className="w-5 h-5 text-background animate-bounce" />
              </div>
            </div>

            {/* Label */}
            <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
              Scroll to explore
            </span>
          </div>
        </div>



      </div>
    </section>
  );
};

export default Hero;
