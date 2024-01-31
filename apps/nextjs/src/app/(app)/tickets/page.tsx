import { ShareScore } from "~/components/app/temas/correction/shareScore";

export default function Tickets() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-4">
        <h1 className="text-3xl font-extrabold">Tickets</h1>
      </section>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-48">
        <ShareScore score={900}/>
      </div>
    </div>
  );
}
