
import { Writing } from "@/components/app/shared/writing";

export function CorrectionsSection() {
  return (
    <section id='minhasredacoes'>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-black1">Minhas redações</h2>
      </div>

      <div className="flex w-full flex-col gap-8">
        <Writing.Root>
          <Writing.Score />
          <div className="flex flex-col items-start justify-between gap-2 sm:gap-4">
            <Writing.Date date="20/20/2000" time="18:00" />
            <Writing.Content title="Aquecimento Global Aquecimento Global  Aquecimento Global" />
          </div>
          <div>
            <Writing.Delete/>
            <Writing.Edit/>
          </div>
        </Writing.Root>

       
      </div>
    </section>
  );
}
