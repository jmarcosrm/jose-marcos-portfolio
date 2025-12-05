interface LinkCardProps {
  image: string;
  label: string;
  href: string;
  description?: string;
}

export function LinkCard({ image, label, href, description }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="card-photo card-hover group block aspect-square"
    >
      <img
        src={image}
        alt={label}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="card-label bottom-4 left-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
        {label}
      </span>
      {description && (
        <span className="absolute bottom-4 right-4 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </span>
      )}
    </a>
  );
}
