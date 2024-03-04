"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Reactconfetti, { ReactConfetti } from "react-confetti";

interface Props {
  children: React.ReactNode;
}
export function Confetti({ children }: Props) {
  const [windowDimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);

  return (
    <>
      <ReactConfetti
        width={windowDimension.width}
        height={windowDimension.height}
      />
      {children}
    </>
  );
}
