import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: "🎨",
      title: "Web Design",
      description: "Clean, responsive UI design for modern web applications with focus on user experience and accessibility.",
      features: ["Responsive Design", "UI/UX Design", "Modern Layouts", "Cross-browser Compatibility"]
    },
    {
      icon: "⚙️", 
      title: "Backend Development",
      description: "Scalable, secure server-side systems using Express.js, Node.js & MongoDB with API integration.",
      features: ["RESTful APIs", "Database Design", "Authentication", "Performance Optimization"]
    },
    {
      icon: "🚀",
      title: "Full Stack Solutions",
      description: "End-to-end web application development with modern frameworks and cutting-edge technologies.",
      features: ["MERN Stack", "AI Integration", "Payment Gateways", "Deployment & Hosting"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Services</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development services tailored to bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="bg-secondary/50 px-4 py-2 rounded-lg text-sm font-medium">
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-blue-500/10 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how I can help bring your ideas to life with modern web technologies.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-background font-semibold px-8"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
