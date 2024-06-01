
const Footer = () => {
  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4">
            <span className="text-gradient">Devendra Singh</span>
          </div>
          
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Full Stack Developer passionate about creating innovative solutions with modern technologies.
          </p>

          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="mailto:devendras.it.23@nitj.ac.in"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Email
            </a>
            <a 
              href="https://linkedin.com/in/devendra-singh-97b147216"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/DevS-2004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
          </div>

          <div className="border-t border-border pt-6">
            <p className="text-sm text-muted-foreground">
              © 2024 Devendra Singh. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
