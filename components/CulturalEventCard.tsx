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
    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden xl:aspect-w-7 xl:aspect-h-8 border border-gray-200 shadow-gray-100 shadow-lg">
      <Link href={`/detail/${id}`} passHref>
        <a>
          <div className="h-96 relative w-full sm:h-72 overflow-hidden">
            <Image src={mainImg} alt={title} layout="fill" className="hover:scale-110 ease-linear duration-100" />
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
