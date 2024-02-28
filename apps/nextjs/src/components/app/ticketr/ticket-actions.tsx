"use client";

import { useEffect, useRef, useState } from "react";

import { SITE_URL, TWEET_TEXT } from "~/lib/constants";

interface Props {
  username: string;
}

export default function TicketActions({ username }: Props) {
  const [imgReady, setImgReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const downloadLink = useRef<HTMLAnchorElement>();
  const permalink = encodeURIComponent(`${SITE_URL}/tickets/${username}`);
  const text = encodeURIComponent(TWEET_TEXT);
  const tweetUrl = `https://twitter.com/intent/tweet?url=${permalink}&via=vercel&text=${text}`;
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${permalink}`;
  const downloadUrl = `https://ticket-generate-score.vercel.app/api/dynamic-image?username=${username}`;

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
    <>
      <a
       
        href={tweetUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        Tweet it!
      </a>
      <a
       
        href={linkedInUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        Share on LinkedIn
      </a>
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
    hh
      </a>
    </>
  );
}
