import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Card } from "antd";

export default function CulturalEventCard({ culturalEvent }) {
  const router = useRouter();

  const { main_img, title, date, id } = culturalEvent;

  const handleClick = () => {
    router.push(`/detail/${id}`);
  };

  return (
    <Card
      style={{ width: 240 }}
      cover={<img alt={title} src={main_img} onClick={handleClick} />}
    >
      <p style={{ fontWeight: 700 }}>{title}</p>
      <p>기간 : {date}</p>
    </Card>
  );
}
