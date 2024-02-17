import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ImageIcon, LayoutDashboard, MessageSquare } from "lucide-react";

import { cn } from "~/lib/utils";


const routes = [
  {
    label: "signin",
    icon: LayoutDashboard,
    href: "/signin",
    color: "text-sky-500",
  },
  {
    label: "sobre nós",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "contato",
    icon: ImageIcon,
    color: "text-pink-700",
    href: "/image",
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col space-y-4 bg-[#111827] py-4 text-white">
      <div className="flex-1 px-3 py-2">
        <Link href="/" className="mb-14 flex items-center pl-3">
          <div className="relative mr-4 h-8 w-8">
            <Image fill alt="Logo" src="/logo.svg" />
          </div>
        </Link>

        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "group flex w-full cursor-pointer justify-start rounded-lg p-3 text-sm font-medium transition hover:bg-white/10 hover:text-white",
                pathname === route.href
                  ? "bg-white/10 text-white"
                  : "text-zinc-400",
              )}
            >
              <div className="flex flex-1 items-center">
                <route.icon className={cn("mr-3 h-5 w-5", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
      
        </div>
      </div>
    </div>
  );
}
