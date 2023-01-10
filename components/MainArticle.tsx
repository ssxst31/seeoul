import React from "react";

import { CulturalEvent } from "type";
import CulturalEventCard from "components/CulturalEventCard";
import Skeleton from "components/Skeleton";

interface MainArticleProps {
  totalCulturalEvent: CulturalEvent[] | null;
}

export default function MainArticle({ totalCulturalEvent }: MainArticleProps) {
  if (!totalCulturalEvent) {
    return <Skeleton width="273" height="420" row={16} />;
  }

  return (
    <article>
      <div className="grid grid-cols-1 gap-y-8 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {totalCulturalEvent.map((culturalEvent) => (
          <CulturalEventCard culturalEvent={culturalEvent} key={culturalEvent.id} />
        ))}
      </div>
    </article>
  );
}
