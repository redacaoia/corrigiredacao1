"use client";

import { Button } from "@/components/ui/button";

interface Prop {
  score: string;
  username: string;
  imageUrl: string;
}

export function DownloadImage({ imageUrl, score, username }: Prop) {
  const handleClick = async () => {
    // const response = await fetch("/api/file/score-ticket-image/");
    // const blob = await response.blob();
    const url =
      `https://ticket-generate-score.vercel.app/api/dynamic-image?username=${username}&imageUrl=${imageUrl}&score=${score}`;
    const link = document.createElement("a");
    link.href = url;
    link.download = "image.png";
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <Button type="button" className="max-w-80" onClick={handleClick}>
      Baixe
    </Button>
  );
}
