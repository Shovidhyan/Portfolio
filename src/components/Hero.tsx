import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import image1 from "./ui/assets/Prof.jpg";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const roles = ["Full-Stack Developer", "MERN Stack Expert", "Python Developer", "Content Creator", "AI Enthusiast"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // --- Typing Effect Logic ---
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentRole.length) {
          setTypedText(currentRole.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
          setTypedText(currentRole.slice(0, typedText.length - 1));
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mt-20 sm:mt-0">
                <span className="text-gradient bg-200% animate-gradient-shift block">
                  MERN Stack
                </span>
                <span className="text-foreground block">Developer</span>
              </h1>

              <div className="h-16 flex items-center">
                <p className="text-xl md:text-2xl text-muted-foreground">
                  Also I am <span className="text-primary font-semibold">{typedText}</span>
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-accent-glow transition-all duration-300 glow-effect group"
                onClick={scrollToContact}
              >
                Hire Me
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                onClick={() => window.location.href = "mailto:shovidhyan77@gmail.com"}
              >
                <Mail className="mr-2" />
                Contact Me
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="space-y-2 group">
                <div className="text-5xl font-bold text-gradient group-hover:scale-110 transition-transform">2+</div>
                <p className="text-muted-foreground">Years of Experience in Web development</p>
              </div>
              <div className="space-y-2 group">
                <div className="text-5xl font-bold text-gradient group-hover:scale-110 transition-transform">10+</div>
                <p className="text-muted-foreground">Projects Worked in my career</p>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image Area */}
          <div className="relative animate-slide-in-right my-16 lg:my-0">
            <div className="relative z-10 flex justify-center items-center">
              
              {/* REMOVED: Lightning Effects */}
              {/* REMOVED: Fire/Flicker Effects */}

              {/* Standard Soft Glow (Kept for aesthetics, but steady/pulsing, not flickering) */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-30 animate-glow-pulse -z-20" />

              {/* Image Container */}
              <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full overflow-hidden border-4 border-primary/50 shadow-[0_0_50px_hsl(var(--primary)/0.5)] z-20 bg-background">
                <img
                  src={image1}
                  alt="Shovidhyan D"
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Floating Name Tag */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-card/90 border border-primary/30 rounded-2xl px-8 py-4 shadow-lg animate-bounce-slow backdrop-blur-sm z-30 whitespace-nowrap">
              <h2 className="text-2xl font-bold text-primary">Shovidhyan Devaraj</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;