import { WritingSection } from "~/components/app/shared/previousWritings";
import { TrendingTopics } from "~/components/app/shared/trendingTopics";

export default async function Home() {
 // await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-4">
        <h1 className="text-3xl font-extrabold">Redação IA</h1>
        <h2>
          A sua IA de correções
          <span role="img" aria-label="Fogo">
            😉
          </span>
        </h2>
      </section>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-48">
        <WritingSection />
        <TrendingTopics />
      </div>
    </div>
  );
}
