"use client";

import type { ReactNode } from "react";
import Tilt from "react-parallax-tilt";

interface Props {
  children: ReactNode;
}

export function TicketRoot({ children }: Props) {
  return (
    <Tilt
      glareEnable={true}
      glareColor="#ffffff"
      glarePosition="bottom"
      glareBorderRadius="20px"
      className="parallax-effect-glare-scale"
      perspective={500}
      glareMaxOpacity={0.45}
      scale={1.02}
    >
      {children}
    </Tilt>
  );
}
