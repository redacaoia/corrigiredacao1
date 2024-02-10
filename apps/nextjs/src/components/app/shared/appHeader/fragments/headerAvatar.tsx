//import { Session } from "next-auth";

import { UserDropdown } from "~/components/app/shared/userDropdown";

export function HeaderAvatar(/* { session }: { session: Session | null } */) {
  /* const { email, image } = session?.user || {};

  if (!email) return null;
 */

  return <UserDropdown />;
}
