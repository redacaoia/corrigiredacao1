"use client";

/* import { UserButton } from "@clerk/nextjs"; */
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
/*  */ import {
  BellRing,
  Check,
  ChevronDown,
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import { FaCrown, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { GiPresent } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { MdNotificationsNone, MdOutlineAppShortcut } from "react-icons/md";
import { SlPresent } from "react-icons/sl";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Switch } from "~/components/ui/switch";
import { cn } from "~/lib/utils";
import { CreateAvatarProfile } from "~/utils/createAvatarProfile";

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

//type CardProps = React.ComponentProps<typeof Card>;
interface Props {
  username: string;
}



export function UserDropdown({ username }: Props) {
  const imageProfile = CreateAvatarProfile();

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
                  <FaWhatsapp className="mr-2 h-4 w-4" />
                  <span>Whatsapp</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FaInstagram className="mr-2 h-4 w-4" />
                  <span>Instagram</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Email</span>
                </DropdownMenuItem>
                {/* <DropdownMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Message</span>
                </DropdownMenuItem> */}
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  <span>Mais...</span>
                </DropdownMenuItem>
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
        <DropdownMenuItem>
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
