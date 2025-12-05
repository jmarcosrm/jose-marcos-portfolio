import { Hero } from "@/components/Hero";
import { LinkCard } from "@/components/LinkCard";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";

// Card images
import cardGithub from "@/assets/card-github.png";
import cardLinkedin from "@/assets/card-linkedin.png";
import cardPortfolio from "@/assets/card-portfolio.png";
import cardNewsletter from "@/assets/card-newsletter.png";
import cardInstagram from "@/assets/card-instagram.png";
import cardEmail from "@/assets/card-email.png";

// Project images
import project01 from "@/assets/project-01.png";
import project02 from "@/assets/project-02.png";
import project03 from "@/assets/project-03.png";

const links = [
  {
    image: cardGithub,
    label: "GitHub",
    href: "https://github.com/josemarcos",
    description: "Código aberto",
  },
  {
    image: cardLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/josemarcos",
    description: "Conecte-se",
  },
  {
    image: cardPortfolio,
    label: "Portfólio",
    href: "https://josemarcos.com",
    description: "Trabalhos",
  },
  {
    image: cardNewsletter,
    label: "Newsletter",
    href: "https://newsletter.josemarcos.com",
    description: "Assine",
  },
  {
    image: cardInstagram,
    label: "Instagram",
    href: "https://instagram.com/josemarcos",
    description: "Fotos",
  },
  {
    image: cardEmail,
    label: "Email",
    href: "mailto:contato@josemarcos.com",
    description: "Fale comigo",
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

      {/* Links Section */}
      <section className="section-spacing relative overflow-hidden">
        <AnimatedBackground />
        <div className="container relative z-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {links.map((link, index) => (
              <div
                key={link.label}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards", opacity: 0 }}
              >
                <LinkCard {...link} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-spacing border-t border-border/50 overflow-hidden">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-10 animate-fade-up">
            Projetos
          </h2>
        </div>
        <div className="pl-6 md:pl-[calc((100vw-1200px)/2+1.5rem)]">
          <ProjectCarousel projects={projects} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
