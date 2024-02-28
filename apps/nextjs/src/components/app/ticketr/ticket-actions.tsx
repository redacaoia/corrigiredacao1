"use client";

import { useEffect, useRef, useState } from "react";
import cn from "classnames";

import { SITE_URL, TWEET_TEXT } from "~/lib/constants";
import LoadingDots from "./loading-dots";
import styles from "./ticket-actions.module.css";
import styleUtils from "./utils.module.css";

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
  const downloadUrl = `/api/ticket-images/${username}`;

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
        className={cn(
          styles.button,
          styleUtils.appear,
          styles.first,
          "icon-button",
        )}
        href={tweetUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        Tweet it!
      </a>
      <a
        className={cn(
          styles.button,
          styleUtils.appear,
          styles.second,
          "icon-button",
          // LinkedIn Share widget doesn’t work on mobile
          styles["linkedin-button"],
        )}
        href={linkedInUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        Share on LinkedIn
      </a>
      <a
        className={cn(
          styles.button,
          styleUtils.appear,
          styles.third,
          "icon-button",
          {
            [styles.loading]: loading,
          },
        )}
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
        {loading ? <LoadingDots size={4} /> : <>Download</>}
      </a>
    </>
  );
}
