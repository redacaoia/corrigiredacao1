"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Carousel } from "~/components/ui/carousel";

interface Props {
  children: React.ReactNode;
}

export function CarouselContainer({ children }: Props) {
  const plugin = React.useRef(Autoplay({ delay: 2000 }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-sm md:max-w-full "
      onMouseLeave={plugin.current.reset}
    >
      {children}
    </Carousel>
  );
}
