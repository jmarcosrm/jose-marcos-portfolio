import { ThemeToggle } from "./ThemeToggle";
import { AnimatedBackground } from "./AnimatedBackground";
import { User } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-20 animate-fade-up">
        <ThemeToggle />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 flex flex-col items-center">
        {/* Profile Photo Placeholder */}
        <div className="relative mb-6 animate-fade-up">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-card/50 backdrop-blur-sm border-2 border-border/50 flex items-center justify-center overflow-hidden">
            <User className="w-16 h-16 md:w-20 md:h-20 text-muted-foreground" />
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl -z-10" />
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground animate-fade-up font-medium tracking-wide" style={{ animationDelay: "0.1s" }}>
          Links & Projetos
        </p>
      </div>
    </section>
  );
}
