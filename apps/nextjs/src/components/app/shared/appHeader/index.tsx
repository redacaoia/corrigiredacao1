"use client";

import { Header } from "./fragments";

export function AppHeader() {
  return (
    <Header.Root>
      <div className="flex items-center gap-4">
        <Header.Content name="Walyson Moura" />
      </div>
      <div className="flex items-center gap-4">
        <Header.Notifications />
        <Header.Avatar /* session={session} */ />
      </div>
    </Header.Root>
  );
}
