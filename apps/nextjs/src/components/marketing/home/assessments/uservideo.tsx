import { Suspense } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";

export function UserVideo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image
          src="/video.png"
          alt=""
          quality={100}
          width={55}
          height={55}
          className="absolute -top-4 h-full w-40 rounded-sm"
        />
      </DialogTrigger>
      <DialogContent className="h-80 w-4/5 rounded-sm p-2 md:max-w-2xl">
        <Suspense fallback={<p>Loading video...</p>}>
          <iframe
            className="mx-auto rounded-sm"
            height="100%"
            width="100%"
            src="https://www.youtube.com/embed/HN1UjzRSdBk?si=G4Ugfzp0fi5uXzJG"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            loading="lazy"
          ></iframe>
        </Suspense>
        {/*  <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4"></div>
          <div className="grid grid-cols-4 items-center gap-4"></div>
        </div> */}
        <DialogClose>
          <Button variant="outline" className="mx-auto w-48 " type="submit">
            fechar
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
