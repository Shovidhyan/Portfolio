import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="home">
        <Hero />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-primary/20 py-8">
        <div className="container px-4 mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Shovidhyan D. Crafted with passion and creativity.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
