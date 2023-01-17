import React from "react";
import Image from "next/image";
import Link from "next/link";

import { CulturalEvent } from "type";
import { DDay } from "utils/date";

interface CulturalEventCardProps {
  culturalEvent: CulturalEvent;
  index: number;
}

export default function CulturalEventCard({ culturalEvent, index }: CulturalEventCardProps) {
  const { mainImg, title, date, id } = culturalEvent;

  return (
    <div className="relative w-full overflow-hidden border border-gray-200 shadow-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 shadow-gray-100 dark:shadow-gray-900 dark:border-dark-200">
      <Link href={`/detail/${id}`} passHref shallow={true}>
        <a>
          <div className="relative w-full overflow-hidden h-96 sm:h-72">
            <Image
              src={mainImg}
              alt={title}
              layout="fill"
              className="duration-100 ease-linear hover:scale-110"
              priority={index < 3}
            />
          </div>
          <div className="p-6">
            <strong className="block w-full overflow-x-hidden text-xl font-bold text-ellipsis webkit-box webkit-line-clamp-2 webkit-box-vertical">
              {title}
            </strong>
            <span className="block text-base">기간 : {date}</span>
            <div className="absolute py-1 text-sm font-bold text-center text-white bg-red-400 rounded-sm w-14 right-2 top-2">
              {DDay(date)}
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
