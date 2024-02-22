import {
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Category } from "@/types/freeContent";

import { CarouselContainer } from "../carouselContainer";
import { CategoryItem } from "./categoryItem";

export function CarouselCategory({
  categoryItem,
  title,
  description,
}: Category) {
  const withoutAccents = title.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Substitui espaços, hifens e pontos por nada
  const formattedTitle = withoutAccents.replace(/[ -./]/g, "");

  // Converte para minúsculas
  const lowercaseTitle = formattedTitle.toLowerCase();

  return (
    <section
      id={lowercaseTitle}
      className="flex flex-col items-center justify-start"
    >
      <h2>{title}</h2>
      <p>{description}</p>
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
