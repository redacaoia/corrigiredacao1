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
      className="mt-16 flex flex-col items-center justify-start gap-6 "
    >
      <div className="ml-8 mr-auto flex flex-col items-start  gap-2 md:ml-0">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-base text-slate-600">{description}</p>
      </div>
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
