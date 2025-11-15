import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shovidhyan77@gmail.com",
      link: "mailto:shovidhyan77@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9344804104",
      link: "tel:+919344804104",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/shovidhyan",
      link: "https://github.com/shovidhyan",
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="text-gradient">Contact Me</span>
          </h2>
          <p className="text-xl text-muted-foreground">Get in Touch</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card border border-primary/20 rounded-2xl p-8 space-y-6 animate-slide-in-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Name</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                  className="bg-background border-primary/30 focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  required
                  className="bg-background border-primary/30 focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message..."
                  required
                  rows={6}
                  className="bg-background border-primary/30 focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-accent-glow transition-all duration-300 glow-effect"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="bg-card border border-primary/20 rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-gradient">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="space-y-4 pt-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-4 bg-background rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <div className="font-semibold text-foreground">{info.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-card border border-primary/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gradient mb-4">Find Me Online</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/shovidhyan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-background border border-primary/30 rounded-xl text-center font-semibold hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105"
                >
                  GitHub
                </a>
                <a
                  href="mailto:shovidhyan77@gmail.com"
                  className="flex-1 py-3 bg-gradient-to-r from-primary to-accent rounded-xl text-center font-semibold text-primary-foreground hover:from-primary-glow hover:to-accent-glow transition-all duration-300 hover:scale-105"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
