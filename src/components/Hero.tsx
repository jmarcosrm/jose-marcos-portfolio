import { ThemeToggle } from "./ThemeToggle";
import heroBg from "@/assets/hero-bg.png";

export function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
      </div>

      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-10 animate-fade-up">
        <ThemeToggle />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground animate-fade-up drop-shadow-lg">
          José Marcos
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground animate-fade-up-delay-1 font-medium tracking-wide">
          Links & Projetos
        </p>
      </div>
    </section>
  );
}
