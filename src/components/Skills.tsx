import { useEffect, useRef, useState } from "react";

const skills = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description: "Expert in building interactive and dynamic web applications using React.js.",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description: "Experienced in backend development, building REST APIs and handling server-side logic.",
  },
  {
    name: "Adobe Photoshop",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
    description: "Skilled in graphic design, photo editing, and UI/UX asset creation.",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    description: "Proficient in NoSQL databases, managing data efficiently for scalable applications.",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    description: "Hands-on experience with cloud computing, AWS services, and deployment strategies.",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    description: "Strong command over Python, including scripting, automation, and backend development.",
  },
];


const Skills = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            skills.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 relative" ref={sectionRef}>
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground">MY TOP SKILLS</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group relative bg-card border border-primary/20 rounded-2xl p-8 transition-all duration-500 hover:border-primary/50 card-hover ${
                visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              
              <div className="relative space-y-4">
                {/* Icon */}
                <div className="w-20 h-20 mx-auto relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-lg group-hover:bg-primary/40 transition-all" />
                  <div className="relative bg-card border border-primary/30 rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold text-gradient group-hover:scale-105 transition-transform inline-block">
                    {skill.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
