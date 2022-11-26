import React from "react";
import { Row, Col } from "antd";

import CulturalEventCard from "components/CulturalEventCard";
import Skeleton from "components/Skeleton";
import { CulturalEvent } from "type";

interface MainArticleProps {
  totalCulturalEvent: CulturalEvent[] | null;
}

export default function MainArticle({ totalCulturalEvent }: MainArticleProps) {
  if (!totalCulturalEvent) {
    return <Skeleton width="23%" height="280" row={4} />;
  }

  return (
    <article>
      <Row justify="center" gutter={[32, 32]}>
        {totalCulturalEvent.map((culturalEvent) => (
          <Col key={culturalEvent.id}>
            <CulturalEventCard culturalEvent={culturalEvent} />
          </Col>
        ))}
      </Row>
    </article>
  );
}
