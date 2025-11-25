import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import image1 from "./ui/assets/image.png";
import image2 from "./ui/assets/Screenshot (115).png";
import image3 from "./ui/assets/image2.png";
import Pic1 from "./ui/assets/Screenshot (116).png";
import Pic2 from "./ui/assets/Screenshot (165).png";
import Pic3 from "./ui/assets/Screenshot (166).png";
import Pic4 from "./ui/assets/Screenshot (167).png";
import Pic5 from "./ui/assets/Screenshot (168).png";
import { useEffect, useState, useRef } from "react";

const projects = [
  {
    title: "Motex Facility Services",
    description:
      "A comprehensive facility management platform offering professional services with modern UI/UX design and seamless user experience.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    github: "https://github.com/Shovidhyan/Motex-Facility-Services",
    live: "https://shovidhyan.github.io/Motex-Facility-Services/",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Cloud Kitchen Website",
    description:
      "A modern, responsive website for kitchen services with dynamic menu and seamless UI experience.",
    image: image1,
    github: "https://github.com/Shovidhyan/laxnas-kitchen",
    live: "https://laxnas-kitchen-frontend-project.onrender.com/",
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Sign to Speech",
    description:
      "An accessibility tool converting sign language gestures into natural speech using ML.",
    image: image3,
    github: "https://github.com/Shovidhyan/Sign-to-Speech",
    live: "https://shovidhyan.github.io/Sign-to-Speech/",
    tags: ["TypeScript", "AI/ML", "Accessibility"],
  },
  {
    title: "Task Master",
    description:
      "A productivity app to manage tasks and projects with clean UI and smooth workflow.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
    github: "https://github.com/Shovidhyan/Task-Master",
    live: "https://shovidhyan.github.io/Task-Master/",
    tags: ["TypeScript", "React", "Productivity"],
  },
  {
    title: "Text to Speech",
    description:
      "A web tool converting text into natural-sounding speech using browser APIs.",
    image: image2,
    github: "https://github.com/Shovidhyan/Text-to-Speech",
    live: "https://shovidhyan.github.io/Text-to-Speech/",
    tags: ["JavaScript", "Web Speech API", "Audio"],
  },
  {
    title: "Golden Leadership",
    description:
      "A professional leadership and coaching website built with responsive modern design.",
    image: Pic1,
    live: "https://goldenleadership.net/",
    tags: ["Coaching", "Leadership", "Web Development"],
  },
  {
    title: "Business Reputation Analyzer",
    description:
      "An AI-powered analytics tool providing business sentiment insights and scoring.",
    image: Pic3,
    live: "https://huggingface.co/spaces/shovidhyan/Business_Reputation_Insights_Analyzer",
    tags: ["AI/ML", "NLP", "HuggingFace"],
  },
  {
    title: "Omega Care Coimbatore",
    description:
      "A complete home nursing service website with maps, forms, and responsive sections.",
    image: Pic4,
    github: "https://github.com/Shovidhyan/omega-care-coimbatore",
    live: "https://shovidhyan.github.io/omega-care-coimbatore/",
    tags: ["React", "Healthcare", "UI/UX"],
  },
  {
    title: "MNS Landscaping",
    description:
      "A professional service website offering landscaping solutions with clean UI.",
    image: Pic5,
    live: "https://www.dalilmuhid.info/",
    tags: ["Web Development", "Informational", "Modern UI"],
  },
];

const Projects = () => {
  const [activeDot, setActiveDot] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % projects.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">MY CREATION</p>
        </div>

        {/* DESKTOP HORIZONTAL AUTO-SCROLL */}
        <div
          ref={scrollRef}
          className="hidden lg:block overflow-x-auto whitespace-nowrap auto-scroll hover:auto-scroll-stop"
        >
          <div className="flex gap-8 py-4">
            {projects.map((project) => (
              <div key={project.title} className="inline-block w-[380px]">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        {/* DOTS BELOW */}
        <div className="hidden lg:flex dots-container mt-4">
          {projects.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === activeDot ? "active" : ""}`}
            ></span>
          ))}
        </div>

        {/* MOBILE/TABLET GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:hidden mt-10">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => (
  <div className="group relative bg-card border border-primary/20 rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/50 card-hover">
    <div className="relative h-64 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent z-10" />
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>

    <div className="p-6 space-y-4">
      <h3 className="text-2xl font-bold text-gradient group-hover:scale-105 transition-transform inline-block">
        {project.title}
      </h3>

      <p className="text-muted-foreground leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary border border-primary/30 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3 pt-4">
        {project.github && (
          <Button
            size="sm"
            variant="outline"
            className="flex-1 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all"
            onClick={() => window.open(project.github, "_blank")}
          >
            <Github className="w-4 h-4 mr-2" />
            Code
          </Button>
        )}

        <Button
          size="sm"
          className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-accent-glow transition-all"
          onClick={() => window.open(project.live, "_blank")}
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Live Demo
        </Button>
      </div>
    </div>
  </div>
);

export default Projects;
