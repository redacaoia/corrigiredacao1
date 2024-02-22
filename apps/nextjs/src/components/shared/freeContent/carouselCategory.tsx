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
    <section id="" className="sm:px-10 md:px-0">
      <h2></h2>
      <p></p>
      <CarouselContainer>
        <CarouselContent className="-ml-1">
          {categoryItem.map((item, index) => (
            <CategoryItem key={index} {...item} />
          ))}
        </CarouselContent>
        <CarouselPrevious variant="outline" className="mr-4"/>
        <CarouselNext  variant="outline"  className="ml-4"/>
      </CarouselContainer>
    </section>
  );
}
