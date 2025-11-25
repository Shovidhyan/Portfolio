import { useEffect, useState } from "react";
import { Code, Video, Cpu, Palette, Database, Sparkles } from "lucide-react";
import image1 from "./ui/assets/IMG-20241107-WA0018.jpg";


const services = [
  // 🔥 CODING & TECH SERVICES FIRST
  {
    icon: Code,
    title: "Full-Stack Development",
    description:
      "Building real-world solutions using MERN stack, Python, and AI with a focus on smart mobility, accessibility, and sustainability.",
  },
  {
    icon: Database,
    title: "Python Development",
    description:
      "Developing robust backend systems, automation scripts, and AI-powered applications using Python to solve real-world challenges efficiently.",
  },
  {
    icon: Cpu,
    title: "AI Development",
    description:
      "Designing intelligent applications that leverage artificial intelligence to automate, analyze, and enhance user experiences and decision-making.",
  },

  // 🎨 CREATIVE / DESIGN SERVICES AFTER
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "Delivering visually appealing designs, UI/UX elements, and brand assets tailored to enhance engagement and identity across platforms.",
  },
  {
    icon: Video,
    title: "Content Creation",
    description:
      "Crafting engaging technical content that simplifies complex concepts, empowers learners, and showcases real-world tech applications.",
  },

  // ✨ INNOVATION LAST
  {
    icon: Sparkles,
    title: "Innovation & More",
    description:
      "Constantly exploring new technologies and innovative solutions to create cutting-edge digital experiences.",
  },
];

const rotatingRoles = [
  "MERN Stack Developer",
  "AI Developer",
  "Python Developer",
  "Tech Innovator",
  "Problem Solver",
];

const Services = () => {
  // ===========================
  // Inline Typing Effect (Hero-style)
  // ===========================
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = rotatingRoles[roleIndex];
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
          setRoleIndex((prev) => (prev + 1) % rotatingRoles.length);
        } else {
          setTypedText(currentRole.slice(0, typedText.length - 1));
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex]);

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground">What I Offer</p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-card border border-primary/20 rounded-2xl p-8 transition-all duration-500 hover:border-primary/50 card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:bg-primary/40 transition-all" />
                  <div className="relative w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gradient group-hover:scale-105 transition-transform inline-block">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary bg-200% animate-gradient-shift opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
              </div>
            );
          })}
        </div>

        {/* Developer Showcase */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12 border border-primary/20 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent" />

            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                {/* Typing Effect */}
                <h3 className="text-3xl font-bold text-gradient flex items-center">
                  {typedText}
                  <span className="animate-pulse ml-1">|</span>
                </h3>

                <p className="text-xl text-foreground">Crafting Digital Solutions</p>

                <p className="text-muted-foreground leading-relaxed">
                  Passionate about creating seamless, scalable, and innovative web applications
                  that solve real-world problems and deliver delightful user experiences.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-30 animate-glow-pulse" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30">
                  <img
                    src={image1}
                    alt="Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
