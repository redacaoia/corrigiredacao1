"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { HiOutlineDownload } from "react-icons/hi";

interface Prop {
  score: string;
  username: string;
  imageUrl: string;
}

export function DownloadImage({ imageUrl, score, username }: Prop) {
  const handleClick = async () => {
    // const {blob2} = await fetch(`https://ticket-generate-score.vercel.app/api/dynamic-image?username=${username}&imageUrl=${imageUrl}&score=${score}`)
    //const response = await fetch("/api/file/score-ticket-image/");
    //const blob = await response.blob();
    //const url = window.URL.createObjectURL(blob);
    const url = `https://ticket-generate-score.vercel.app/api/dynamic-image?username=${username}&imageUrl=${imageUrl}&score=${score}`;
    const link = document.createElement("a");
    link.href = url;
    link.download = "image.png";
    link.click();
    //window.URL.revokeObjectURL(url);
  };

 
  const { pending } = useFormStatus();

  return (
    <Button
      type="button"
      className="max-w-80 disabled:cursor-not-allowed disabled:opacity-60"
     
      disabled={pending}
    >
      Baixar Imagem <HiOutlineDownload className="ml-2" size={20} />
      {/*  {pending ? (
        <>
          Baixar Imagem <HiOutlineDownload />
        </>
      ) : (
        <>Baixando </>
      )} */}
    </Button>
  );
}
