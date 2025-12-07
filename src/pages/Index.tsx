import { Hero } from "@/components/Hero";
import { LinkCard } from "@/components/LinkCard";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { Footer } from "@/components/Footer";

// Project images
import project01 from "@/assets/project-01.png";
import project02 from "@/assets/project-02.png";
import project03 from "@/assets/project-03.png";

const links = [
  {
    icon: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/josemarcos",
  },
  {
    icon: "instagram",
    label: "Instagram",
    href: "https://instagram.com/josemarcos",
  },
  {
    icon: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/5500000000000",
  },
];

const projects = [
  {
    image: project01,
    title: "Dashboard Analytics",
    href: "https://josemarcos.com/projeto-01",
  },
  {
    image: project02,
    title: "App Fintech",
    href: "https://josemarcos.com/projeto-02",
  },
  {
    image: project03,
    title: "Brand Identity",
    href: "https://josemarcos.com/projeto-03",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />

      {/* Projects Section */}
      <section className="section-spacing overflow-hidden">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-10 animate-fade-up">
            Projetos
          </h2>
        </div>
        <ProjectCarousel projects={projects} />
      </section>

      {/* Links Section */}
      <section className="section-spacing relative border-t border-border/50">
        <div className="container">
          <div className="flex justify-center gap-2 sm:gap-4 md:gap-8 lg:gap-10">
            {links.map((link) => (
              <LinkCard key={link.label} {...link} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
