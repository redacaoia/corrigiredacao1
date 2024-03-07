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
  const handleClick =  () => {
    //window.URL.revokeObjectURL(url);
    const url =  `https://ticket-generate-score.vercel.app/api/dynamic-image?username=${username}&imageUrl=${imageUrl}&score=${score}`;
    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute("download",username)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  };

 
  const { pending } = useFormStatus();

  return (
    <Button
      type="button"
      className="max-w-80 disabled:cursor-not-allowed disabled:opacity-60"
     onClick={() =>{handleClick()}}
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
