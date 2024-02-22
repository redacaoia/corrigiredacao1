import { freeContent } from "@/config/app";

import { CarouselCategory } from "./carouselCategory";
import { CategoryButton } from "./categoryButton";

export function FreeContent() {
  return (
    <div>
      {/* <CategoryButton /> */}

    {/*   {freeContent.categories.map((category, index) => (
        <CategoryButton
          categoryTitle={category.title}
          key={index}
          {...category}
        />
      ))} */}

      {freeContent.categories.map((category, index) => (
        <>
          <CategoryButton
            categoryTitle={category.title}
            key={index}
            {...category}
          />
          <CarouselCategory key={index} {...category} />
        </>
      ))}
    </div>
  );
}
