//import { Session } from "next-auth";

import { Profile } from "@/components/app/shared/profile/";

export function HeaderAvatar(/* { session }: { session: Session | null } */) {
  /* const { email, image } = session?.user || {};

  if (!email) return null;
 */

  return <Profile />;
}
