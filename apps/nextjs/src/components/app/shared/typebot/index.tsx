"use client";

import { Bubble } from "@typebot.io/nextjs";

export function Typebot() {
  return (
    <Bubble
      previewMessage={{
        message: "Eu tenho uma pergunta para você!",
        autoShowDelay: 10000,
        avatarUrl: "https://github.com/WalysonMoura.png",
      }}
      theme={{ button: { backgroundColor: "#0042DA" } }}
      typebot={undefined}
    />
  );
}
