"use client";

import type { LinkProps } from "next/link";
import type { ElementType } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

type BottomMenuIconProps = LinkProps & {
  icon: ElementType;
  iconActive: ElementType;
  color?: string;
  imageUrl?: string
  imageUrlActive?: string
  href: string;
};

export function BottomMenuIcon({
  icon: Icon,
  color,
  href,
  imageUrl,
  imageUrlActive,
  iconActive: IconActive,
}: BottomMenuIconProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className="cursor-pointer rounded-full p-2 transition-all duration-300 hover:bg-slate-100 hover:transition-all hover:duration-300"
    >
      {pathname === href ?? !imageUrl ?? !imageUrlActive ? (


        <IconActive size="35" color="#0157C8" />
      ) : (
        <Icon size="35" color="#222222" />
      )}
      
      {pathname === href && imageUrl && imageUrlActive ? (
        <Image
          width={35}
          height={35}
          src={imageUrl}
          className="text-blue1"
          alt=""
        />
      ) : (
        <Image
          width={35}
          height={35}
          src="/icons/desempenho1.svg"
          className="text-primary"
          alt=""
        />
      )}
    </Link>
  );
}
