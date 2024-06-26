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
import { UserVideo } from "./uservideo";

export function Assessments() {
  return (
    //grid grid-cols-1 gap-16  px-5  md:grid-cols-3 md:gap-4 md:px-10
    <section className="">
      <CarouselContainer>
      <CarouselContent className="-ml-1 my-20">
        {AssessmentsData.map((assessment, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card
                key={index}
                className="relative grid  h-72 grid-cols-5 gap-4 p-5 shadow-2xl md:gap-20"
              >
                <div className="col-span-2  rounded-sm">
                  <UserVideo />
                </div>

                <div className="col-span-3 flex gap-4 ">
                  <div className="mt-14 h-6 w-28  md:hidden">
                    <Image
                      src="/emojis/aspas.png"
                      alt=""
                      width={55}
                      height={55}
                      className="h-full w-full"
                    />
                  </div>

                  <div className="flex flex-col items-start gap-2 ">
                    <h3 className="uppercase">{assessment.name}</h3>
                    <RatingStars rating={assessment.rating} />
                    <h2 className=" font-semibold">{assessment.comment}</h2>
                    <p className="text-xs">{assessment.description}</p>
                  </div>
                </div>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

     {/*  <CarouselPrevious />
      <CarouselNext /> */}
      </CarouselContainer>
      
      {/*  <CarouselContainer>
        <CarouselContent className="-ml-1 ">
          {AssessmentsData.map((assessment, index) => (
            <CarouselItem
              key={index}
              className=" pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div
                key={index}
                className="relative   flex items-center justify-center gap-2"
              >
                <div className="rounded-sm">
                  <Image
                    src="/video.png"
                    alt=""
                    quality={100}
                    width={455}
                    height={55}
                    className="rounded-sm "
                  />
                </div>
                <div className="flex ">
                  <div className="">
                    <Image
                      src="/emojis/aspas.png"
                      alt=""
                      width={250}
                      height={250}
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <h3>{assessment.name}</h3>
                    <RatingStars rating={assessment.rating} />
                    <h2>{assessment.comment}</h2>
                    <p>{assessment.description}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </CarouselContainer> */}
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
