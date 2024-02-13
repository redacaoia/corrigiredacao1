"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Carousel } from "~/components/ui/carousel";

interface Props {
  children: React.ReactNode;
}

export function CarouselContainer({ children }: Props) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-auto py-20"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      {children}
    </Carousel>
  );
}
