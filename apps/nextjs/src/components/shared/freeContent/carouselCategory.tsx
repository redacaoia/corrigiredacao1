import {
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { CarouselContainer } from "../carouselContainer";

export function CarouselCategory() {
  return (
    <CarouselContainer>
      <CarouselContent className="-ml-1">
        
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </CarouselContainer>
  );
}
