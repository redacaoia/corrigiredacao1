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
      className="w-full sm:max-w-[80%] md:max-w-full px-5"
      onMouseLeave={plugin.current.reset}
    >
      {children}
    </Carousel>
  );
}
