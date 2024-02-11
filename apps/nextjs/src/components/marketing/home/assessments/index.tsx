import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "~/components/ui/card";
import { AssessmentsData } from "~/config/assessments";
import { CarouselContainer } from "./carouselContainer";
import RatingStars from "./ratingStars";

export function Assessments() {
  return (
    <section>
      <CarouselContainer>
        <CarouselContent className="-ml-1">
          {AssessmentsData.map((assessment, index) => (
            <CarouselItem
              key={index}
              className=" pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <CardContent
                key={index}
                className="relative  flex ite gap-2"
              >
                <div className="  items-center justify-center rounded-sm">
                  <Image
                    src="/video.png"
                    alt=""
                    quality={100}
                    width={455}
                    height={55}
                    className="rounded-sm "
                  />
                </div>
                <div className="">
                  <Image
                    src="/emojis/aspas.png"
                    alt=""
                    width={55}
                    height={55}
                  />
                </div>
                <div className="flex flex-col items-start">
                  <h3>{assessment.name}</h3>
                  <RatingStars rating={assessment.rating} />
                  <h2>{assessment.comment}</h2>
                  <p>{assessment.description}</p>
                </div>
              </CardContent>
            </CarouselItem>
          ))}
        </CarouselContent>
      </CarouselContainer>
    </section>
  );
}

/* <video
          
        controls
        width="250"
        className="w-2/3 h-full aspect-square object-cover rounded-xl "
    >
          <source src={product.video} type="video/webm" />
  </video>

  <video
          src="..."
          autoPlay
          muted
          loop
          playsInline
        >
        </video>
   */
