import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { LinkCard } from "./LinkCard";

interface Link {
  icon: string;
  label: string;
  href: string;
  description?: string;
}

interface LinkCarouselProps {
  links: Link[];
}

export function LinkCarousel({ links }: LinkCarouselProps) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: true,
    },
    [
      Autoplay({
        delay: 2000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex justify-center">
        {links.map((link) => (
          <div
            key={link.label}
            className="flex-shrink-0 px-6"
          >
            <LinkCard {...link} />
          </div>
        ))}
      </div>
    </div>
  );
}
