import React, { useState } from "react";
import { Moon, Sun, Download, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const [year] = useState(new Date().getFullYear());

  return (
    <footer className="w-full bg-background border-t border-border text-foreground py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Info */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-primary">Devendra Singh</h3>
          <p className="text-sm text-muted-foreground">
            Jalandhar, Punjab • +91-9305447448 • devendras.it.23@nitj.ac.in
          </p>
        </div>

        {/* Right Side: Socials, Resume, Theme Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/devendra-singh-97b147216"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-all neon-glow p-2 rounded-full"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href="https://github.com/DevS-2004"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-all neon-glow p-2 rounded-full"
          >
            <Github className="w-5 h-5" />
          </a>

          <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary hover:shadow-md hover:neon-glow"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </a>

        </div>
      </div>

      <div className="mt-6 text-center text-xs text-muted-foreground">
        © {year} Devendra Singh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
