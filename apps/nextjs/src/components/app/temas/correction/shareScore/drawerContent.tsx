import * as React from "react";

import { Button } from "~/components/ui/button";
import {
  DrawerClose,
  DrawerContent as DrawerContentRoot,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "~/components/ui/drawer";
import { ScrollArea } from "~/components/ui/scroll-area";
import { SocialMediaShareButtons } from "./socialMediaShareButtons";
import { TicketDownloadButton } from "./ticketDownloadButton";

interface Props {
  children: React.ReactNode;
}

export function DrawerContent({ children }: Props) {
  return (
    <DrawerContentRoot>
      <ScrollArea className="w-full">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>

          <div className="flex items-center flex-col gap-12">
            {children}
         {/*   <TicketDownloadButton name={""} imageUrl={""} ticketScore={0} /> */}
            <SocialMediaShareButtons />
          </div>

          <DrawerFooter>
            <DrawerClose asChild>
              <Button className="m-auto w-72 rounded-full" variant="outline">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </ScrollArea>
    </DrawerContentRoot>
  );
}
