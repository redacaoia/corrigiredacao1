"use client";

import { useEffect, useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";

import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { Sidebar } from "./sidebar";

export function MenuBarButton() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex items-center md:hidden">
      <Sheet>
        <SheetTrigger>
          <RiMenu4Fill size={45} color="#000" />
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
}
