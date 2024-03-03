import { BsArrowRight } from "react-icons/bs";

import { Button } from "~/components/ui/button";
import { Writing } from "../../shared/writing";

export function TrendingTopics() {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-black1">
          Temas Em Alta
          <span role="img" aria-label="Fogo">
            🔥
          </span>
        </h2>
        <Button variant="link" className="flex items-center gap-1 text-blue1">
          Ver Todas
          <BsArrowRight />
        </Button>
      </div>

      <div className="flex w-full flex-col gap-8">
        <Writing.Root>
          <Writing.Image imageUrl="/1.jpg" />
          <Writing.Content title="Aquecimento Global" />
        </Writing.Root>

        <Writing.Root>
          <Writing.Image imageUrl="/1.jpg" />
          <Writing.Content title="Aquecimento Global" />
        </Writing.Root>

        <Writing.Root>
          <Writing.Image imageUrl="/1.jpg" />
          <Writing.Content title="Aquecimento Global" />
        </Writing.Root>
      </div>
    </section>
  );
}
