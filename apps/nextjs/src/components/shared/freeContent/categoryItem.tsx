import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CarouselItem  } from "@/components/ui/carousel";
import { CategoryItem } from "@/types/freeContent";
import Link from "next/link";

//basis-48

export function CategoryItem({description,href,title}:CategoryItem) {
  return (
    <CarouselItem key={title} className="pl-1 basis-48  md:basis-1/2 lg:basis-1/3">
    <div className="p-1">
        <Link href={href}>
        
        <Card className="h-60 md:auto md:w-auto">
        <CardHeader>
    <CardTitle>{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
        </Card></Link>
      </div>
    </CarouselItem>
  );
}
