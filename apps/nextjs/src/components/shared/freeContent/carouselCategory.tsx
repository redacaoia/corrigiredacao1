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
    <section id="" className="flex flex-col items-center justify-start">
      <h2></h2>
      <p></p>
      <CarouselContainer>
        <CarouselContent className="-ml-1 ">
          {categoryItem.map((item, index) => (
            <CategoryItem key={index} {...item} />
          ))}
        </CarouselContent>
        <CarouselPrevious className="m-0" />
        <CarouselNext className="m-0" />
      </CarouselContainer>
    </section>
  );
}
