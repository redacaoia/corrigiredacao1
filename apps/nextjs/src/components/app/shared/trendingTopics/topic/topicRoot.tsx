import type { ReactNode } from "react";

interface PreviousWritingRootProps {
  children: ReactNode;
}

export function TopicRoot({ children }: PreviousWritingRootProps) {
  return (
    <div className="flex w-full items-center  rounded-sm justify-between gap-8 bg-white p-2">
      {children}
    </div>
  );
}
