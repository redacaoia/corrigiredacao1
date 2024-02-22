import { freeContent } from "@/config/app";

import { CarouselCategory } from "./carouselCategory";
import { CategoryButton } from "./categoryButton";

export function FreeContent() {
  return (
    <div>
      {/* <CategoryButton /> */}

      <div className="grid  md:grid-cols-5 grid-cols-3  gap-2 md:px-20 py-5 ">
        {freeContent.categories.map((category, index) => (
          <CategoryButton
            categoryTitle={category.title}
            key={index}
            {...category}
          />
        ))}
      </div>
      {freeContent.categories.map((category, index) => (
        <CarouselCategory key={index} {...category} />
      ))}
    </div>
  );
}
