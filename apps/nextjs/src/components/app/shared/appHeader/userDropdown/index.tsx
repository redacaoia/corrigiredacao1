"use client";

/* import { UserButton } from "@clerk/nextjs"; */
import Link from "next/link";
//type CardProps = React.ComponentProps<typeof Card>;
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
/*  */ import {
  ChevronDown,
  CreditCard,
  LogOut,
  PlusCircle,
  User,
  UserPlus,
} from "lucide-react";
import { FaCrown, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { MdOutlineAppShortcut } from "react-icons/md";
import { SlPresent } from "react-icons/sl";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { CreateAvatarProfile } from "~/utils/createAvatarProfile";

export function UserDropdown() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const imageProfile = CreateAvatarProfile();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/*  <IoIosArrowDown /> */}
        <div className=" group flex items-center">
          <ChevronDown
            className="relative top-[1px] ml-1 h-5 w-6 text-slate-300 transition duration-200 focus:rotate-180"
            aria-hidden="true"
          />
          <Avatar className="flex border-2  border-slate-300">
            {/*  <UserButton afterSignOutUrl="/" /> */}

            <AvatarImage className="" src={imageProfile} alt="" />
            <AvatarFallback>
              <FiUser size={24} />
            </AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="ml-4 w-56">
        <DropdownMenuLabel className="text-center">
          Redação IA
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/perfil">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Perfil</span>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem disabled>
            <MdOutlineAppShortcut className="mr-2 h-4 w-4" />
            <Link href="/perfil">Baixe o App</Link>
          </DropdownMenuItem>

          {/* <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Configurações</span>
           
          </DropdownMenuItem> */}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <SlPresent className="mr-2 h-4 w-4" />
              <UserPlus className="mr-2 h-4 w-4" />
              <span>Convide um amigo</span>
            </DropdownMenuSubTrigger>

            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <IoLogoWhatsapp className="mr-2 h-4 w-4" color="#25D366" />
                  <span>Whatsapp</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <AiFillInstagram className="mr-2 h-4 w-4 " color="#E1306C" />
                  <span>Instagram</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FaFacebook className="mr-2 h-4 w-4 " color="#006AFF" />
                  <span>Facebook</span>
                </DropdownMenuItem>

                {/* <DropdownMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Message</span>
                </DropdownMenuItem> */}
                <DropdownMenuSeparator />
                <Link href="/indique-amigos">
                  <DropdownMenuItem>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    <span>Mais...</span>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          {/* <DropdownMenuItem>
            <Plus className="mr-2 h-4 w-4" />
            <span>New Team</span>
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem> */}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sair</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FaWhatsapp className="mr-2 h-4 w-4" />
          <span>Precisa de ajuda?</span>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <CreditCard className="mr-2 h-4 w-4" />
          <span>Pagamentos</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <FaCrown className="mr-2 h-4 w-4" />
          <span>
            Atualizar para <strong> Pro</strong>
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
