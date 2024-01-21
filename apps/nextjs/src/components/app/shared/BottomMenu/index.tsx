"use client";

import { BiSolidUser, BiUser } from "react-icons/bi";
import { GiProgression } from "react-icons/gi";
import { GoHome, GoHomeFill } from "react-icons/go";
import { RiMedalLine } from "react-icons/ri";

import { BottomMenuFragments } from "./fragments";

export function BottomMenu() {
  return (
    <BottomMenuFragments.Root>
      <BottomMenuFragments.Icon
        href="/home"
        icon={GoHome}
        iconActive={GoHomeFill}
      />
      <BottomMenuFragments.Icon
        href="/desempenho"
        icon={GiProgression}
        iconActive={GoHomeFill}
      />

      <BottomMenuFragments.Icon
        href="/desafios"
        icon={RiMedalLine}
        iconActive={GoHomeFill}
      />
      <BottomMenuFragments.Icon
        href="/perfil"
        icon={BiUser}
        iconActive={BiSolidUser}
      />
    </BottomMenuFragments.Root>
  );
}
