import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Card } from "antd";

export default function CulturalEventCard({ culturalEvent, index }) {
  const router = useRouter();

  const { main_img, title, use_fee, place, date } = culturalEvent;

  const handleClick = () => {
    router.push(`/detail/${index}`);
  };

  return (
    <Card
      style={{ width: 240 }}
      cover={<img alt="example" src={main_img} onClick={handleClick} />}
    >
      <p style={{ fontWeight: 700 }}>{title}</p>
      <p>기간 : {date}</p>
    </Card>
  );
}
