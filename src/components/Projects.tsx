import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Cloud Kitchen Website",
    description: "A modern, responsive website for a kitchen service business featuring dynamic menu displays, online ordering system, and seamless user experience.",
    image: "https://shovidhyan.github.io/Portfolio/assets/img1-XLfK_P_p.png",
    github: "https://github.com/Shovidhyan/laxnas-kitchen.git",
    live: "https://laxnas-kitchen-frontend-project.onrender.com/",
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">MY CREATION</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-card border border-primary/20 rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/50 card-hover animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gradient group-hover:scale-105 transition-transform inline-block">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
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

                {/* Links */}
                <div className="flex gap-3 pt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-accent-glow transition-all"
                    onClick={() => window.open(project.live, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
