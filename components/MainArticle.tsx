import React from "react";
import { Row, Col } from "antd";

import CulturalEventCard from "components/CulturalEventCard";

export default function MainArticle({ totalCulturalEvent }) {
  if (!totalCulturalEvent) {
    return <></>;
  }

  return (
    <article>
      <Row justify="center" gutter={[32, 32]}>
        {totalCulturalEvent.map((c) => (
          <Col key={c.id}>
            <CulturalEventCard culturalEvent={c} />
          </Col>
        ))}
      </Row>
    </article>
  );
}
