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
  <Card className="bg-gradient-to-br from-blue-500/10 to-primary/10 border border-primary/30 rounded-3xl shadow-xl hover:shadow-blue-500/30 transition-all duration-500 max-w-3xl mx-auto">
    <CardContent className="p-10 relative overflow-hidden">
      {/* Decorative Glow Element */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/20 blur-3xl rounded-full animate-pulse z-0"></div>

      <div className="relative z-10">
        <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
          Ready to Start Your Project?
        </h3>
        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
          Let's discuss how I can help bring your ideas to life using modern web technologies.
        </p>

        <Button
          size="lg"
          className="bg-gradient-to-r from-primary to-blue-500 hover:from-blue-600 hover:to-primary text-background font-semibold px-8 py-3 rounded-xl transition-transform duration-300 hover:scale-105 shadow-lg"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get In Touch
        </Button>
      </div>
    </CardContent>
  </Card>
</div>

      </div>
    </section>
  );
};

export default Services;
