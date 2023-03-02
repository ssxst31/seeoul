import React from "react";
import Image from "next/image";
import Link from "next/link";

import { CulturalEvent } from "type";

interface DistrictCulturalEventProps {
  culturalEvent: CulturalEvent;
}

export default function DistrictCulturalEvent({ culturalEvent }: DistrictCulturalEventProps) {
  return (
    <div className="relative w-48 overflow-hidden h-72" key={culturalEvent.id}>
      <Link href={`/detail/${culturalEvent.title}`} passHref shallow={true}>
        <a>
          <Image
            src={culturalEvent.mainImg}
            alt={culturalEvent.title}
            layout="fill"
            className="duration-100 ease-linear hover:scale-110"
            priority={true}
          />
        </a>
      </Link>
    </div>
  );
}
