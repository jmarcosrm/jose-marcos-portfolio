import { Linkedin, Instagram, MessageCircle, Globe, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  linkedin: Linkedin,
  instagram: Instagram,
  whatsapp: MessageCircle,
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
      className="group flex flex-col items-center justify-center py-4 sm:py-6 transition-all duration-300"
    >
      <Icon className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-muted-foreground group-hover:text-primary transition-colors duration-300 mb-2 sm:mb-4" />
      <span className="font-medium text-xs sm:text-sm md:text-base text-foreground group-hover:text-primary transition-colors duration-300">
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
