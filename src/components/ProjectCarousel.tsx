import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ProjectCard } from "./ProjectCard";

interface Project {
  image: string;
  title: string;
  href: string;
}

interface ProjectCarouselProps {
  projects: Project[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  // Duplicate projects for seamless infinite loop
  const duplicatedProjects = [...projects, ...projects, ...projects];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: true,
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-6">
        {duplicatedProjects.map((project, index) => (
          <div
            key={`${project.title}-${index}`}
            className="flex-shrink-0 w-[85%] sm:w-[45%] lg:w-[32%]"
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}
