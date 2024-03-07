"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { DownloadImage } from "./downloadImage";
import { TicketDownloadButton } from "../../temas/correction/shareScore/ticketDownloadButton";
import { SocialMediaShareButtons } from "../../temas/correction/shareScore/socialMediaShareButtons";

interface Prop {
  score: string;
  username: string;
  imageUrl: string;
}

export function ShareTickeScore({ imageUrl, score, username }: Prop) {
  return (
    <Drawer>
      <DrawerTrigger>
        <Button>Compartilhe sua nota!</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className='max-w-'>
         <div>
         <DrawerTitle >Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
          <SocialMediaShareButtons />
          <DownloadImage
            imageUrl={imageUrl}
            username={username}
            score={score}
          />
         </div>
         
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Cancelar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
