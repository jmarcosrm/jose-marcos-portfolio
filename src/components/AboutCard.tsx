import { Code, Sparkles, Rocket } from "lucide-react";

const tags = [
  { label: "Web", icon: Code },
  { label: "Mobile", icon: Sparkles },
  { label: "UX/UI", icon: Rocket },
];

export function AboutCard() {
  return (
    <section className="section-spacing">
      <div className="container">
        <div className="relative group">
          {/* Animated gradient border */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-3xl opacity-75 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-500 animate-pulse" />
          
          {/* Card content */}
          <div className="relative bg-background/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-border/50">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <span
                  key={tag.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                >
                  <tag.icon className="w-3 h-3" />
                  {tag.label}
                </span>
              ))}
            </div>

            {/* Title */}
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Olá! Sou <span className="text-primary">Fulano</span>
            </h2>

            {/* Description */}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Um desenvolvedor apaixonado por criar experiências digitais únicas e funcionais. 
                Com anos de experiência em desenvolvimento web e mobile, transformo ideias em 
                realidade através do código.
              </p>
              <p>
                Minha missão é construir soluções que não apenas funcionam perfeitamente, 
                mas que também proporcionam experiências memoráveis aos usuários.
              </p>
              <p className="text-foreground font-medium">
                Sempre em busca do próximo desafio! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
