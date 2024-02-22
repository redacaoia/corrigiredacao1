import { freeContent } from "@/config/app";

import { CarouselCategory } from "./carouselCategory";
import { CategoryButton } from "./categoryButton";

export function FreeContent() {
  return (
    <div>
      {/* <CategoryButton /> */}

      <div className="grid  grid-cols-2 gap-2  py-5 md:grid-cols-5 md:px-20 ">
        {freeContent.categories.map((category, index) => (
          <CategoryButton
            categoryTitle={category.title}
            key={index}
            {...category}
          />
        ))}
      </div>
      {freeContent.categories.map((category, index) => (
        <CarouselCategory key={index} {...category} title={category.title} />
      ))}
    </div>
  );
}
