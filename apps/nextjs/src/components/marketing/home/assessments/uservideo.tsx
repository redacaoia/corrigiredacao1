import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
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
      <DialogContent className="max-w-[300px] md:max-w-[300px] rounded-md">
        <iframe
          className="rounded-md h-[425px]"    
          width="100%"
          src="https://www.youtube.com/embed/5tV6p55gC-Y?si=O3TiKhsoFtUPSKEE"
          title="YouTube video player"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <DialogClose className="flex">
          <Button type="submit" variant="outline" className="mx-auto w-2/4">fechar</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
