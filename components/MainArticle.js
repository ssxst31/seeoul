import React from "react";
import { Row, Col } from "antd";
import { isMobile } from "react-device-detect";

import CulturalEventCard from "components/CulturalEventCard";

export default function Main({ totalCulturalEvent }) {
  if (!totalCulturalEvent) {
    return <></>;
  }

  return (
    <article>
      <Row justify="center" gutter={[32, 32]}>
        {totalCulturalEvent.map((c) => (
          <Col key={c.id} span={isMobile ? 10 : 6}>
            <CulturalEventCard culturalEvent={c} />
          </Col>
        ))}
      </Row>
    </article>
  );
}
