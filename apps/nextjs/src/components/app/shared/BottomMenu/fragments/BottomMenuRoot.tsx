import type { ReactNode } from "react";

interface PreviousWritingRootProps {
  children: ReactNode;
}

export function BottomMenuRoot({ children }: PreviousWritingRootProps) {
  return (
    <div className="relative">
      <nav
        className="bg-white fixed bottom-0 z-30 flex w-full items-center justify-between rounded-tl-lg 
    px-8 py-4 transition-all "
      >
        {children}
      </nav>
    </div>
  );
}