"use client";
import { useRef } from 'react';

import LoadingDots from "@/components/marketing/shared/icons/loadingDots";
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
   /*  //window.URL.revokeObjectURL(url);      ${username}&imageUrl=${imageUrl}&score=${score}
    const url =  `https://ticket-generate-score.vercel.app/api/dynamic-image?username=WalysonMoura`;
    const aTag =  document.createElement('a')
    aTag.href = url
    aTag.setAttribute("download",username)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove() */
    try {
      const response = await fetch(
        `https://ticket-generate-score.vercel.app/api/dynamic-image?username=vercel`
      );
  
      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.statusText}`);
      }
  
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
  
      const link = useRef(document.createElement('a'));
      link.current.href = url;
      link.current.setAttribute('download', username + '.png'); // Set default filename
  
      // Optional: Customize filename based on API response (if supported)
      const filename = response.headers.get('Content-Disposition'); // Check for header
      if (filename) {
        const filenameMatch = filename.match(/filename="([^"]+)"/);
        if (filenameMatch) {
          link.current.setAttribute('download', filenameMatch[1]);
        }
      }
  
      document.body.appendChild(link.current);
      link.current.click();
  
      // Important: Revoke the object URL to avoid memory leaks
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading image:', error);
      // Handle download error (e.g., display an error message to the user)
    } finally {
      // Always remove the link element from the DOM
      link.current.remove();
    }
  };

 
  const { pending } = useFormStatus();

  return (
    <Button
      type="button"
      className="max-w-80 disabled:cursor-not-allowed disabled:opacity-60"
     onClick={handleClick}
      disabled={pending}
    >
     
       {pending ? (
        <>
          Baixar Imagem <HiOutlineDownload className="ml-2" size={20} />
        </>
      ) : (
        <>Baixando <LoadingDots color="#808080" /></>
      )}
    </Button>
  );
}
