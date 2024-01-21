import Image from "next/image";

interface TopicImageProps {
  imageUrl: string;
}

export function TopicImage({ imageUrl }:TopicImageProps) {
  return (
    <Image
      src={imageUrl}
      className="rounded-md"
      alt="Precedent logo"
      width={200}
      height={200}
    />
  );
}
