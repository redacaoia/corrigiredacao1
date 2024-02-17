import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { HeaderFragments } from "./fragments";

export async function MarketingHeader() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <HeaderFragments.Root session={session}>
      <HeaderFragments.MenuBarButton />
      <HeaderFragments.Content />
      <HeaderFragments.DesktopMenuBar />
    </HeaderFragments.Root>
  );
}
