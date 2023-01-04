import React from "react";
import { Row, Col } from "antd";

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
