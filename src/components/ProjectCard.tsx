interface ProjectCardProps {
  image: string;
  title: string;
  href: string;
}

export function ProjectCard({ image, title, href }: ProjectCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="card-photo card-hover group block aspect-[4/3]"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <span className="inline-flex items-center gap-1 mt-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          Ver projeto
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      </div>
    </a>
  );
}
