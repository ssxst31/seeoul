import React from "react";
import { Row, Col } from "antd";

import CulturalEventCard from "components/CulturalEventCard";
import { CulturalEvent } from "type";

interface MainArticleProps {
  totalCulturalEvent: CulturalEvent[];
}

export default function MainArticle({ totalCulturalEvent }: MainArticleProps) {
  if (!totalCulturalEvent) {
    return <></>;
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
