import { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Button } from "~/components/ui/button";
import { Toggle } from "~/components/ui/toggle";

interface Props {
  selected: boolean;
  allThemes: string;
  setActiveTheme: () => void;
  activeTheme: string;
  setFiltered: () => void;
}

export function FilterThemes({
  selected,
  allThemes,
  activeTheme,
  setActiveTheme,
  setFiltered,
}: Props) {
  useEffect(() => {
    if (activeTheme === "all") {
      setFiltered(allThemes);
      return;
    }

    const filtered = allThemes.filter((theme) => {
      theme.id.includes(activeTheme);
    });
  }, []);

  return (
    <div>
      <Button />
      <Toggle>Toggle</Toggle>
{/* 
      <button
        className={`mx-1 p-2  ${
          selected
            ? "bor bg-blue-500 text-white"
            : "border border-gray-300 bg-white"
        }`}
        onClick={onClick}
      ></button> */}

      <Carousel className="w-full max-w-sm">
        <CarouselContent className="-ml-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Toggle>{index + 1}</Toggle>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
       
      </Carousel>
    </div>
  );
}
