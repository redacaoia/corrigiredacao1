import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CarouselItem as CarouselItemUi } from "@/components/ui/carousel";
import { CategoryItem } from "@/types/freeContent";

export function CategoryItem({description,href,title}:CategoryItem) {
  return (
    <CarouselItemUi key={title} className="pl-1 md:basis-1/2 lg:basis-1/3">
      <div className="p-1">
        <Card>
        <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-2xl font-semibold">{index + 1}</span>
          </CardContent>
        </Card>
      </div>
    </CarouselItemUi>
  );
}
