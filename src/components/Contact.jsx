import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_xbasnzk',
        'template_zbqn9ws',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || 'New Contact Form Message',
          message: formData.message,
          to_name: 'Devendra Singh'
        },
        'GJ3PeJ3clHiIP31x4'
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "devendras.it.23@nitj.ac.in",
      href: "mailto:devendras.it.23@nitj.ac.in"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/devendra-singh-97b147216",
      href: "https://linkedin.com/in/devendra-singh-97b147216"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/DevS-2004",
      href: "https://github.com/DevS-2004"
    }
  ];

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-background via-background/90 to-background/80 backdrop-blur-md">
      
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-green-400/10 to-transparent rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
            Contact <span className="text-green-400">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Let&apos;s create something impactful together. I&apos;m just one message away.
          </p>
        </div>

        {/* Form and Contact Info */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Form */}
          <Card className="bg-white/10 border border-white/20 backdrop-blur-md shadow-lg rounded-2xl transition-transform hover:scale-[1.01]">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Name *</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="bg-white/20 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-primary border border-white/20"
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email *</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="bg-white/20 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-primary border border-white/20"
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Freelance Project"
                    className="bg-white/20 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-primary border border-white/20"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Message *</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project..."
                    className="bg-white/20 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-primary border border-white/20 min-h-[120px]"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-white hover:scale-105 hover:bg-green-500/90 active:scale-95 font-semibold py-3 rounded-xl transition-transform duration-300 ease-in-out shadow-lg shadow-primary/30"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-white/10 border border-white/20 backdrop-blur-md shadow-lg rounded-2xl transition-transform hover:scale-[1.01]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/30 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-200">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-white">{info.label}</div>
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500/30 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-200">
                      <span className="text-blue-300 font-bold text-xl">📱</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">Phone</div>
                      <a
                        href="tel:+919305447448"
                        className="text-gray-300 hover:text-primary transition-colors"
                      >
                        +91 9305447448
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/20 to-blue-600/30 backdrop-blur-xl border border-white/10 text-white shadow-xl rounded-2xl text-center">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold mb-4">Let’s Build Something Amazing!</h4>
                <p className="text-gray-200 mb-6">
                  Open to exciting collaborations, freelance projects, or full-time opportunities.
                </p>
                <div className="flex justify-center gap-4">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors"
                    >
                      <info.icon className="w-5 h-5 text-white" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
