import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

interface Project {
  image: string;
  title: string;
  href: string;
}

interface ProjectCarouselProps {
  projects: Project[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  return (
    <div className="w-full">
      <style>{`
        .swiper {
          width: 100%;
          padding-bottom: 50px;
        }
        
        .swiper-slide {
          background-position: center;
          background-size: cover;
          width: 300px;
        }
        
        .swiper-slide img {
          display: block;
          width: 100%;
        }
        
        .swiper-3d .swiper-slide-shadow-left {
          background-image: none;
        }
        .swiper-3d .swiper-slide-shadow-right {
          background: none;
        }

        .swiper-pagination-bullet {
          background: hsl(var(--foreground) / 0.3);
        }

        .swiper-pagination-bullet-active {
          background: hsl(var(--primary));
        }
      `}</style>
      
      <Swiper
        spaceBetween={50}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Autoplay, Pagination]}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={`${project.title}-${index}`}>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-3xl overflow-hidden group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded-xl transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </SwiperSlide>
        ))}
        {/* Duplicate slides for smoother infinite loop */}
        {projects.map((project, index) => (
          <SwiperSlide key={`${project.title}-duplicate-${index}`}>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-3xl overflow-hidden group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded-xl transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
