"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { isMobile } from "react-device-detect";

import { CulturalEvent } from "type";

interface RandomCulturalEventProps {
  randomCulturalEvent: CulturalEvent;
  moving: any;
}

export default function RandomCulturalEvent({ randomCulturalEvent, moving }: RandomCulturalEventProps) {
  const router = useRouter();

  return (
    <div
      className="min-h-[360px] mx-4 relative -md:mx-0 cursor-pointer"
      onClick={() => {
        if (!moving.current) {
          router.push(`/detail/${randomCulturalEvent.title}`);
        }
      }}
    >
      <Image
        src={isMobile ? randomCulturalEvent.mainImg.slice(0, -1) : randomCulturalEvent.mainImg}
        fill
        sizes="100%"
        alt={randomCulturalEvent.title}
        priority={true}
      />
    </div>
  );
}
