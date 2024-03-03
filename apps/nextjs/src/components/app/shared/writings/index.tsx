import { BsArrowRight } from "react-icons/bs";

import { Button } from "~/components/ui/button";
import { Writings } from "./writings";

export function WritingSection() {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-black1">Suas últimas redações</h2>
        <Button variant="link" className="flex items-center gap-1 text-blue1">
          Ver Todas
          <BsArrowRight />
        </Button>
      </div>

      <div className="flex w-full flex-col gap-8">
        <Writings.Root>
          <Writings.Score />
          <div className="flex flex-col items-start justify-between gap-2 sm:gap-4">
            <Writings.Date date="20/20/2000" time="18:00" />
            <Writings.Content title="Aquecimento Global Aquecimento Global  Aquecimento Global" />
          </div>
        </Writings.Root>

        <Writings.Root>
          <Writings.Score />
          <div className="flex flex-col items-start justify-between gap-2 sm:gap-4">
            <Writings.Date date="20/20/2000" time="18:00" />
            <Writings.Content title="Aquecimento Global Aquecimento Global" />
          </div>
        </Writings.Root>

        <Writings.Root>
          <Writings.Score />
          <div className="flex flex-col items-start justify-between  gap-2  sm:gap-4">
            <Writings.Date date="20/20/2000" time="18:00" />
            <Writings.Content title="Aquecimento Global Aquecimento Global" />
          </div>
        </Writings.Root>
      </div>
    </section>
  );
}
