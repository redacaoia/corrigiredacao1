import {
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Category } from "@/types/freeContent";

import { CarouselContainer } from "../carouselContainer";
import { CategoryItem } from "./categoryItem";

export function CarouselCategory({ categoryItem }: Category) {
  
  return (
    <section id="">
      <h2></h2>
      <p></p>
      <CarouselContainer>
        <CarouselContent className="-ml-1">
          {categoryItem.map((item, index) => (
            <CategoryItem key={index} {...item} />
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </CarouselContainer>
    </section>
  );
}
