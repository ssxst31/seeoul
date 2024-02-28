"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { CulturalEvent } from "type";
import { getEventStatus } from "utils/date";

interface CulturalEventCardProps {
  culturalEvent: CulturalEvent;
  index: number;
}

export default function CulturalEventCard({ culturalEvent }: CulturalEventCardProps) {
  const router = useRouter();

  const { mainImg, title, date, isFree, guName } = culturalEvent;

  return (
    <article
      className="relative w-full overflow-hidden cursor-pointer  dark:shadow-gray-900"
      onClick={() => {
        router.push(`/detail/${title}`);
      }}
    >
      <div className="relative w-full overflow-hidden h-96 sm:h-72 rounded">
        <Image unoptimized src={mainImg} alt={title} fill className="duration-100 ease-linear hover:scale-110" />
      </div>
      <div className="p-2">
        <strong className="block w-full overflow-hidden text-base font-bold text-black text-ellipsis webkit-box webkit-line-clamp-2 webkit-box-vertical dark:text-white">
          {title}
        </strong>
        <span className="block text-sm text-black dark:text-white">기간 : {date}</span>
        <div className="space-x-1">
          {isFree === "무료" && (
            <span className="bg-gray-100 mt-1 text-gray-700 text-xs font-medium inline-block rounded-md p-1">
              #무료
            </span>
          )}
          <span className="bg-gray-100 mt-1 text-gray-700 text-xs font-medium inline-block rounded-md p-1">
            #{guName}
          </span>
        </div>
        <div className="absolute p-1 text-sm font-medium text-center text-white bg-red-400 rounded-sm right-2 top-2">
          {getEventStatus(date)}
        </div>
      </div>
    </article>
  );
}
