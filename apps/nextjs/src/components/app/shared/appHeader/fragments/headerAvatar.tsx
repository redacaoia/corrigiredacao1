//import { Session } from "next-auth";

import { UserDropdown } from "~/components/app/shared/userDropdown";

interface Props {
  username: string;
}
export function HeaderAvatar(
  /* { session }: { session: Session | null } */ { username }: Props,
) {
  /* const { email, image } = session?.user || {};

  if (!email) return null;
 */

  return <UserDropdown username="Walyson Moura" />;
}
