"use client";

import { GreetingByTime } from "~/utils/greetingByTime";

interface HeaderContentProps {
  name: string;
}

export async function HeaderContent({ name }: HeaderContentProps) {
  const greetingByTime = GreetingByTime();

  return (
    <div className="flex flex-col gap-1 text-white">
      <h2 className="text-xl font-bold">{greetingByTime}👋</h2>
      <h3 className="text-base font-normal">Bem Vindo, {name}</h3>
    </div>
  );
}
