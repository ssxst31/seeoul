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
            <strong style={{ fontWeight: 700, fontSize: 20 }}>
              {title.length > 30 ? `${title.substr(0, 30)}...` : title}
            </strong>
            <span style={{ fontSize: 15, display: "block" }}>기간 : {date}</span>
            <div
              style={{
                position: "absolute",
                right: -1,
                top: -1,
                fontWeight: 700,
                color: "#fc4c4c",
                backgroundColor: "white",
                width: 50,
                textAlign: "center",
              }}
            >
              {DDay(date)}
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
