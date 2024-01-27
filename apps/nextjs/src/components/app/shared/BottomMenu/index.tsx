"use client";

import { BiSolidUser, BiUser } from "react-icons/bi";
import { GiProgression } from "react-icons/gi";
import { GoHome, GoHomeFill } from "react-icons/go";

import { FaCompass,FaRegCompass, } from "react-icons/fa6";
import { FaCrown } from "react-icons/fa";
import { LiaCrownSolid } from "react-icons/lia";
import { BottomMenuFragments } from "./fragments";

import { IoIosAddCircle } from "react-icons/io";

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
        href="/temas"
        icon={IoIosAddCircle}
        iconActive={IoIosAddCircle}
      />
      <BottomMenuFragments.Icon
        href="/explorar"
        icon={FaRegCompass}
        iconActive={FaCompass}
      />
      {/* <BottomMenuFragments.Icon
        href="/perfil"
        icon={BiUser}
        iconActive={BiSolidUser}
      /> */}
      <BottomMenuFragments.Icon
        href="/explorar"
        icon={LiaCrownSolid}
        iconActive={FaCrown}
      />
    </BottomMenuFragments.Root>
  );
}
