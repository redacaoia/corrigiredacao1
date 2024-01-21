import type { ReactNode } from "react";

interface HeaderRootProps {
  children: ReactNode;
}

export function HeaderRoot({ children }: HeaderRootProps) {
  return (
    <header
      className="fixed top-0 py-2 px-8 z-30 flex w-full  justify-between items-center
       bg-cyan-600 transition-all rounded-b-lg "
    >
      {children}
    </header>
  );
}