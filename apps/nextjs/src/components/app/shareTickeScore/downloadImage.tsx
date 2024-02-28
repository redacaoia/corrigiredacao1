"use client";

import { Button } from "@/components/ui/button";

export function DownloadImage() {
  const handleClick = async () => {
    const response = await fetch("/api/file/score-ticket-image/");
    const blob = await response.blob();
    const url = await fetch("https://og-examples.vercel.sh/api/dynamic-image?username=vercel");
    const link = document.createElement("a");
    link.href = url;
    link.download = "image.png";
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <Button type="button" onClick={handleClick}>
      Baixe
    </Button>
  );
}
