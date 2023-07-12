"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { CulturalEvent } from "type";
import { DDay } from "utils/date";

interface CulturalEventCardProps {
  culturalEvent: CulturalEvent;
  index: number;
}

export default function CulturalEventCard({ culturalEvent }: CulturalEventCardProps) {
  const router = useRouter();

  const { mainImg, title, date } = culturalEvent;

  return (
    <div
      className="relative w-full overflow-hidden shadow-lg cursor-pointer shadow-gray-200 dark:shadow-gray-900"
      onClick={() => {
        router.push(`/detail/${title}`);
      }}
    >
      <div className="relative w-full overflow-hidden h-96 sm:h-72 hover:scale-110" style={{ position: "relative" }}>
        <Image src={mainImg} alt={title} fill className="duration-100 ease-linear hover:scale-110" sizes="100%" />
      </div>
      <div className="p-6">
        <strong className="block w-full overflow-x-hidden text-xl font-bold text-black text-ellipsis webkit-box webkit-line-clamp-2 webkit-box-vertical dark:text-white">
          {title}
        </strong>
        <span className="block text-base text-black dark:text-white">기간 : {date}</span>
        <div className="absolute py-1 text-sm font-bold text-center text-white bg-red-400 rounded-sm w-14 right-2 top-2">
          {DDay(date)}
        </div>
      </div>
    </div>
  );
}
