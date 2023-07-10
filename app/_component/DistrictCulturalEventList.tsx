"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

import { useFetchCulturalEvent } from "app/hooks/useFetchCulturalEvent";
import DistrictSkeleton from "components/skeleton/DistrictSkeleton";
import DistrictCulturalEvent from "app/_component/DistrictCulturalEvent";
import { fetchCulturalEvent } from "app/api/culturalEvents";

interface DistrictCulturalEventListProps {
  location: string;
}

export default function DistrictCulturalEventList({ location }: DistrictCulturalEventListProps) {
  const searchParams = useSearchParams();
  const search2 = searchParams.get("page") as any;
  const page = search2?.page ?? "1";

  const search = undefined;
  const sort = location;
  const { totalCulturalEvent } = useFetchCulturalEvent({
    page,
    sort,
    search,
  });

  if (!totalCulturalEvent) {
    return <DistrictSkeleton width="192" height="288" />;
  }

  return (
    <div className="overflow-x-scroll scrollbar-hide">
      <div className="-2xl:w-[1220px] flex items-center justify-between">
        {totalCulturalEvent?.slice(0, 5).map((culturalEvent, index) => (
          <DistrictCulturalEvent culturalEvent={culturalEvent} key={index} />
        ))}
      </div>
    </div>
  );
}
