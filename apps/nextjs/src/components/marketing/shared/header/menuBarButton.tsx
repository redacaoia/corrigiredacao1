"use client";

import { useEffect, useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";

import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { Sidebar } from "../marketingHeader/fragments/sidebar";
import { HiOutlineMenuAlt2 } from "react-icons/hi";


export function MenuBarButton() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <RiMenu4Fill size={45} color="#000" />
        <HiOutlineMenuAlt2 size={40} className="text-primary"/>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
