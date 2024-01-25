"use client";

import { Header } from "./fragments";

export function AppHeader() {
  return (
    <Header.Root>
      <div className="flex items-center gap-4">
      <Header.Avatar /* session={session} */ />
        <Header.Content name="Walyson Moura" />
      </div>
      <div className="flex items-center gap-4">
        <Header.Notifications />
      </div>
    </Header.Root>
  );
}
