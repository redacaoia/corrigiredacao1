"use client";

import type { LinkProps } from "next/link";
import type { ElementType } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type BottomMenuIconProps = LinkProps & {
  icon: ElementType;
  iconActive: ElementType;
  color?: string;
  imageUrl?: string;
  href: string;
};

export function BottomMenuIcon({
  icon: Icon,
  color,
  href,
  imageUrl,
  iconActive: IconActive,
}: BottomMenuIconProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className="cursor-pointer rounded-full p-2 transition-all duration-300 hover:bg-slate-100 hover:transition-all hover:duration-300"
    >
      {pathname === href && !imageUrl ? (
        <IconActive size="35" color="#0157C8" />
      ) : (
        <Icon size="35" color="#222222" />
      )}

      {pathname === href && imageUrl ? (
        <Image src="/icons/desempenho1.svg" className="text-blue1" alt="" />
      ) : (
        <Image src="/icons/desempenho.svg" className="text-primary" alt="" />
      )}
    </Link>
  );
}
