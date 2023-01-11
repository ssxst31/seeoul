import React from "react";
import Image from "next/image";
import Link from "next/link";

import { CulturalEvent } from "type";
import { DDay } from "utils/date";

interface CulturalEventCardProps {
  culturalEvent: CulturalEvent;
}

export default function CulturalEventCard({ culturalEvent }: CulturalEventCardProps) {
  const { mainImg, title, date, id } = culturalEvent;

  return (
    <div className="relative w-full overflow-hidden border border-gray-200 shadow-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 shadow-gray-100">
      <Link href={`/detail/${id}`} passHref>
        <a>
          <div className="relative w-full overflow-hidden h-96 sm:h-72">
            <Image src={mainImg} alt={title} layout="fill" className="duration-100 ease-linear hover:scale-110" />
          </div>
          <div className="p-6">
            <strong className="text-xl font-bold">{title.length > 30 ? `${title.substr(0, 30)}...` : title}</strong>
            <span className="block text-base">기간 : {date}</span>
            <div className="absolute right-[-1px] top-[-1px] font-bold text-red-500 bg-white w-12 text-center">
              {DDay(date)}
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
