"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import LoadingDots from "@/components/marketing/shared/icons/loadingDots";
import { FiDownload } from "react-icons/fi";

import { Button } from "~/components/ui/button";

interface Props {
  name: string;
  imageUrl: string;
  ticketScore: number;
}

export function TicketDownloadButton({ imageUrl, name, ticketScore }: Props) {
  const [imgReady, setImgReady] = useState(false);
  const [loading, setLoading] = useState(false);

  // const downloadUrl = `/api/ticket-images/${name}`;
  const downloadUrl = `api/dynamic-image?username=WalysonMoura`;
  const downloadLink = useRef<HTMLAnchorElement>();

  useEffect(() => {
    setImgReady(false);

    const img = new Image();

    img.src = downloadUrl;
    img.onload = () => {
      setImgReady(true);
      setLoading(false);
      if (downloadLink.current) {
        downloadLink.current.click();
        downloadLink.current = undefined;
      }
    };
  }, [downloadUrl]);

  return (
    <div className=" flex flex-col items-center gap-4">
      <h4 className="text-center text-lg ">
        Baixe e compartilhe nos seus stories do instagram!
      </h4>
      {/*   
      <Link
        href={loading ? undefined : downloadUrl}
        onClick={(e) => {
          if (imgReady) return;

          e.preventDefault();
          downloadLink.current = e.currentTarget;
          //  Aguarde o download da imagem terminar
          // setLoading(true);
        }}
        download="ticket.png"
        className="flex cursor-pointer items-center gap-3 rounded-3xl bg-black bg-opacity-80 px-14 py-6 font-semibold text-[#f1f1f1] shadow-md transition hover:bg-opacity-70"
      >
        <FiDownload size={30} /> <span className="pt-2 text-base">Baixar</span>
      </Link> */}

      <a
        href={loading ? undefined : downloadUrl}
        onClick={(e) => {
          if (imgReady) return;

          e.preventDefault();
          downloadLink.current = e.currentTarget;
          //  Aguarde o download da imagem terminar
          setLoading(true);
        }}
        download="ticket.png"
      >
        {loading ? (
          <LoadingDots />
        ) : (
          <>
            <FiDownload size={30} />
            <span className="pt-2 text-base">Baixar</span>
          </>
        )}
      </a>
    </div>
  );
}
