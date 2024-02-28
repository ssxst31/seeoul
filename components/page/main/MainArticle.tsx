import React from "react";

import { CulturalEvent } from "type";
import CulturalEventCard from "components/page/main/CulturalEventCard";

interface MainArticleProps {
  totalCulturalEvent: CulturalEvent[];
}

export default async function MainArticle({ totalCulturalEvent }: MainArticleProps) {
  if (totalCulturalEvent.length === 0) {
    return <div className="inline-flex items-center justify-center w-full h-20">검색 결과가 없습니다.</div>;
  }

  return (
    <article>
      <div className="grid grid-cols-1 gap-y-7 gap-x-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-5 -md:gap-y-4 -md:gap-x-4">
        {totalCulturalEvent.map((culturalEvent, index) => (
          <CulturalEventCard culturalEvent={culturalEvent} key={culturalEvent.id} index={index} />
        ))}
      </div>
    </article>
  );
}
