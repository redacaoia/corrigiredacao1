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
} from "@/components/ui/dialog";

import ReactPlayer from "react-player";

export function UserVideo() {
  let videosrc = "/videos/next.mp4";

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
      <DialogContent className="sm:max-w-[425px]">
        <ReactPlayer
          width="500px"
          height="400px"
          url={videosrc}
          controls={true}
          // light is usefull incase of dark mode
          light={false}
          // picture in picture
          pip={true}
        />
        <source src={videosrc} type="video/mp4" />
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
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
