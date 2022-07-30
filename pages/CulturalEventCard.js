import React from "react";
import Link from "next/link";

import { Card } from "antd";

export default function CulturalEventCard({ culturalEvent }) {
  const { org_link, main_img, title, use_fee, place, date } = culturalEvent;

  return (
    <Link href={org_link}>
      <a target="_blank">
        <Card
          style={{ width: 240 }}
          cover={<img alt="example" src={main_img} />}
        >
          <p style={{ fontWeight: 700 }}>전시명 : {title}</p>
          <p>위치 : {place}</p>
          <p>가격 : {use_fee}</p>
          <p>기간 : {date}</p>
        </Card>
      </a>
    </Link>
  );
}
