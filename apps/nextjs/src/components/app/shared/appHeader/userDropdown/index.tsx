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
/* 
export function UserhDropdownt({ className, ...props }: CardProps) {
  const imageProfile = CreateAvatarProfile();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar>
          {
          //  <UserButton afterSignOutUrl="/" /> 
        }
          <AvatarImage src={imageProfile} alt="" />
          <AvatarFallback>
            <FiUser size={24} />
          </AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="mr-4 w-[380px]">
        <Card className={cn("", className)} {...props}>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className=" flex items-center space-x-4 rounded-md border p-4">
              <BellRing />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Push Notifications
                </p>
                <p className="text-sm text-muted-foreground">
                  Send notifications to device.
                </p>
              </div>
              <Switch />
            </div>
            <div>
              {notifications.map((notification, index) => (
                <div
                  key={index}
                  className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                >
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {notification.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {notification.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <Check className="mr-2 h-4 w-4" /> Mark all as read
            </Button>
          </CardFooter>
        </Card>
      </PopoverContent>
    </Popover>
  );
}

 */

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
          <DropdownMenuItem>
            <Link href="/perfil" className="flex ite">
              <User className="mr-2 h-4 w-4" />
              <span>Perfil</span>
            </Link>
          </DropdownMenuItem>
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
