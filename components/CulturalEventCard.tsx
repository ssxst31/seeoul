import React from "react";
import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";

import { CulturalEvent } from "type";
import { DDay } from "utils/date";
import s from "components/main.module.css";

interface CulturalEventCardProps {
  culturalEvent: CulturalEvent;
}

export default function CulturalEventCard({ culturalEvent }: CulturalEventCardProps) {
  const { mainImg, title, date, id } = culturalEvent;

  return (
    <Link href={`/detail/${id}`} passHref>
      <a>
        <Card
          className={s.pointer}
          style={{
            width: "280px",
            position: "relative",
            height: "100%",
            boxShadow: "2px 4px 12px rgb(0 0 0 / 8%)",
          }}
          cover={<Image src={mainImg} height={500} width={500} alt={title} />}
        >
          <p style={{ fontWeight: 700, fontSize: 20 }}>{title.length > 33 ? `${title.substr(0, 33)}...` : title}</p>
          <p style={{ fontSize: 15 }}>기간 : {date}</p>
          <div
            style={{
              position: "absolute",
              right: -1,
              top: -1,
              fontWeight: 700,
              color: "#fc4c4c",
              backgroundColor: "white",
              width: 50,
              textAlign: "center",
            }}
          >
            {DDay(date)}
          </div>
        </Card>
      </a>
    </Link>
  );
}
