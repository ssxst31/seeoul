"use client";

import React from "react";

import { CulturalEvent } from "type";
import CulturalEventCard from "components/CulturalEventCard";
import GridSkeleton from "components/skeleton/GridSkeleton";

interface MainArticleProps {
  totalCulturalEvent: CulturalEvent[] | [] | null;
}

export default function MainArticle({ totalCulturalEvent }: MainArticleProps) {
  if (!totalCulturalEvent) {
    return <GridSkeleton height="418" row={16} />;
  }

  if (totalCulturalEvent?.length === 0) {
    return <div className="inline-flex items-center justify-center w-full h-20">검색 결과가 없습니다.</div>;
  }

  return (
    <article>
      <div className="grid grid-cols-1 gap-y-8 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 -md:gap-y-4 -md:gap-x-4">
        {totalCulturalEvent.map((culturalEvent, index) => (
          <CulturalEventCard culturalEvent={culturalEvent} key={culturalEvent.id} index={index} />
        ))}
      </div>
    </article>
  );
}
