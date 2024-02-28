import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
      <DialogContent className="sm:max-w-[425px]">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5tV6p55gC-Y?si=O3TiKhsoFtUPSKEE"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <DialogClose className="flex">
          <Button type="submit">Save changes</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
