import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { CulturalEvent } from "type";

interface DistrictCulturalEventProps {
  culturalEvent: CulturalEvent;
}

export default function DistrictCulturalEvent({ culturalEvent }: DistrictCulturalEventProps) {
  const router = useRouter();

  return (
    <div
      className="relative w-48 overflow-hidden cursor-pointer h-72"
      key={culturalEvent.id}
      onClick={() => {
        router.push(`/detail/${culturalEvent.title}`);
      }}
    >
      <Image
        src={culturalEvent.mainImg}
        alt={culturalEvent.title}
        fill
        sizes="100%"
        className="duration-100 ease-linear hover:scale-110"
        priority={true}
      />
    </div>
  );
}
