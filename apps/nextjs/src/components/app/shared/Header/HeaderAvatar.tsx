//import { Session } from "next-auth";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";


export function HeaderAvatar(/* { session }: { session: Session | null } */) {
  /* const { email, image } = session?.user || {};

  if (!email) return null;
 */


  
  return (
    <Avatar>
      <AvatarImage
        src={`https://avatars.dicebear.com/api/micah/walysonmoura222@gmail.com.svg`}
        alt=""
      />
      <AvatarFallback>IA</AvatarFallback>
    </Avatar>
  );
}