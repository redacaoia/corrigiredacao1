import Image from "next/image";
import { PriceCards } from "@/components/marketing/plans/priceCards";

import { Assessments } from "~/components/marketing/home/assessments";

/* 
import { api } from "~/trpc/server";
 */
export const runtime = "edge";

export default async function HomePage() {
  // You don't need to fetch these here, just showing different usages
  // If you don't want the Suspense loading state, you could pass these
  // posts as props as use as initialData in the query.
  /*   const posts = await api.post.all();
  console.log("RSC Posts:", posts); */

  return (
    <>
      {/* <BgPattern /> */}

      <Image
        src="/gradient.svg"
        alt="Precedent logo"
        width={600}
        height={600}
        className="absolute right-0 top-0"
      />

      {/* Hero Copy */}
      <div className="mt-2 flex flex-wrap items-center gap-4 md:flex-nowrap md:justify-between">
        <h1 className="md:display h2  px-4 text-center md:w-[802px] md:px-0">
          {/* Generate the best{" "} */}
          <span className="text-crimson-9">marketing copy</span>
          {/*  <Button asChild>
              <Link href="/signin" className="z-50">
                Login
              </Link>
            </Button> */}
        </h1>
        <Image
          src="/cell.svg"
          alt="Precedent logo"
          width={600}
          height={600}
          className="z-10"
        />
      </div>
      {/* Hero CTA */}
      <div className="mb-40 mt-20 flex flex-col items-center gap-4">
        <p className="body">
          Get your{" "}
          <span className="font-semibold text-black">free account today</span>
        </p>

        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
          {
            //<SignUpButton className="block" />
          }
          {/*  <LeadCaptureForm /> */}
        </div>
        <p className="caption text-slate-11">No credit card required</p>
      </div>

      <Assessments />
      <PriceCards />
    </>
  );
}
