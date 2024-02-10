import { BsCheck2Circle } from "react-icons/bs";
import { MdStars } from "react-icons/md";

import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";

export function PriceCards() {
  return (
    <section>
      <Card className="relative flex flex-col gap-8 p-6 pt-10">
        <span className="absolute -top-4 left-4 flex items-center gap-4 rounded-lg bg-blue1 p-2 font-medium text-gray-100">
          Melhor Plano <MdStars size={24} />
        </span>

        <div className="flex flex-col items-start gap-2">
          <h2 className="text-xl font-bold ">Growth Digital Marketing</h2>
          <Separator />
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold">Benefícios</h3>
            <ul className="flex flex-col">
              <li className="flex items-center gap-4">
                <BsCheck2Circle className="text-blue1" /> Lorem ipsum dolor sit
                amet consectetur
              </li>
            </ul>
          </div>
        </div>

        <div className="relative flex justify-between">
          <span className="absolute right-0 top-0 flex items-center gap-2 rounded-lg border-slate-950 bg-transparent p-2 font-medium text-gray-100">
            Desconto de 63%
          </span>
          <div className="flex flex-col gap-1">
            <span>De</span>
            <span className="line-through">R$ 15,99 /mês</span>
          </div>
          <div className="flex flex-col gap-1">
            <span>Por</span>
            <span>
              <span className="text-xl font-bold">R$ 6 </span>
              <span>/mês</span>
            </span>
          </div>
        </div>

        <Button>Escolher</Button>
      </Card>
    </section>
  );
}
