import { Github, Linkedin, Globe, Mail, Instagram, Newspaper, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  portfolio: Globe,
  newsletter: Newspaper,
  instagram: Instagram,
  email: Mail,
};

interface LinkCardProps {
  icon: string;
  label: string;
  href: string;
  description?: string;
}

export function LinkCard({ icon, label, href, description }: LinkCardProps) {
  const Icon = iconMap[icon] || Globe;
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center justify-center py-6 transition-all duration-300"
    >
      <Icon className="w-16 h-16 text-muted-foreground group-hover:text-primary transition-colors duration-300 mb-4" />
      <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
        {label}
      </span>
      {description && (
        <span className="text-xs text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </span>
      )}
    </a>
  );
}
