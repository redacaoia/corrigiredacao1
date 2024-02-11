import { BsCheck2Circle } from "react-icons/bs";
import { MdStars } from "react-icons/md";

import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";

export function PriceCards() {
  return (
    <section className="grid grid-cols-1 gap-24 md:grid-cols-3 md:gap-6">
      <Card className="relative flex flex-col justify-between gap-12 bg-primary p-6 pt-10 text-gray-100 shadow-2xl">
        <span className="absolute -top-4 left-4 flex items-center gap-2 rounded-sm bg-blue1 p-2 font-medium text-gray-100">
          Melhor Plano <MdStars size={24} />
        </span>

        <div className="flex flex-col items-start gap-2">
          <h2 className="text-xl font-bold ">Growth Digital Marketing</h2>
          {/*   <Separator className="bg-slate-700" /> */}
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

        <div className="flex flex-col items-center gap-2">
          <div className="relative flex w-full items-end justify-between pt-14">
            <span className="w-25 h-15 absolute right-0 top-0 flex items-center gap-2 rounded-sm border  border-slate-100 bg-transparent p-2 text-sm font-medium text-gray-100">
              Desconto de 63%
            </span>

            <div className="flex flex-col">
              <span className="font-medium">De</span>
              <span className="flex ">
                <span className="text-start">R$</span>
                <span className="text-5xl font-bold line-through ">15,99</span>
                <span className="mt-2">/mês</span>
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-medium">Por</span>
              <span className="flex ">
                <span className="text-start">R$</span>
                <span className="text-5xl font-bold">6</span>
                <span className="mt-5">/mês</span>
              </span>
            </div>
          </div>
          <Separator className="bg-slate-700" />
          <span className="text-slate-400">pagamento anual - total R$ 72</span>
        </div>

        <Button className="bg-slate-100 text-base font-semibold text-primary hover:bg-slate-50/90">
          Escolher
        </Button>
      </Card>

      <Card className=" relative flex flex-col justify-between gap-12 bg-slate-50 p-6 pt-10 text-primary shadow-2xl">
        <span className="absolute -top-4 left-4 flex items-center gap-2 rounded-sm bg-primary px-4 py-2 font-medium text-gray-100">
          Básico
        </span>

        <div className="flex flex-col items-start gap-2">
          <h2 className="text-xl font-bold ">Growth Digital Marketing</h2>
          {/*   <Separator className="bg-slate-700" /> */}
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

        <div className="flex flex-col items-center gap-2">
          <div className="relative flex w-full items-end justify-between pt-14">
            <span className="text-2xl font-bold">
              Sem <br />
              Desconto
            </span>
            <div className="flex flex-col">
              <span className="font-medium">Por</span>
              <span className="flex ">
                <span className="text-start">R$</span>
                <span className="text-5xl font-bold">10,99</span>
                <span className="mt-5">/mês</span>
              </span>
            </div>
          </div>
          <Separator className="bg-slate-700" />
          <span className="text-slate-400">pagamento anual - total R$ 132</span>
        </div>

        <Button
          variant="outline"
          className="hover  bg-transparent text-base font-semibold text-primary"
        >
          Escolher
        </Button>
      </Card>

      <Card className="relative flex flex-col justify-between gap-12 bg-slate-50 p-6 pt-10 text-primary shadow-2xl">
        <span className="absolute -top-4 left-4 flex items-center gap-2 rounded-sm bg-primary px-4 py-2 font-medium text-gray-100">
          Gratuito
        </span>

        <div className="flex flex-col items-start gap-2">
          <h2 className="text-xl font-bold ">Growth Digital Marketing</h2>
          {/*   <Separator className="bg-slate-700" /> */}
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

        <Button
          variant="outline"
          className="hover  bg-transparent text-base font-semibold text-primary"
        >
          Escolher
        </Button>
      </Card>
    </section>
  );
}
