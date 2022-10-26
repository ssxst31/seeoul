import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Card } from "antd";

import s from "components/main.module.css";

export default function CulturalEventCard({ culturalEvent }) {
  const router = useRouter();

  const { MAIN_IMG, TITLE, DATE, id } = culturalEvent;

  const handleClick = () => {
    router.push(`/detail/${TITLE}`);
  };

  const ewq = DATE.indexOf("~") + 1;
  const setDate = new Date(DATE.slice(ewq, 100));
  const now = new Date();
  const distance = setDate.getTime() - now.getTime();
  const day = Math.floor(distance / (1000 * 60 * 60 * 24)) + 1;

  return (
    <Card
      className={s.pointer}
      style={{ width: "100%", position: "relative", height: "100%" }}
      cover={<img alt={TITLE} src={MAIN_IMG} onClick={handleClick} />}
    >
      <p style={{ fontWeight: 700 }}>
        {TITLE.length > 25 ? `${TITLE.substr(0, 25)}...` : TITLE}
      </p>
      <p>기간 : {DATE}</p>
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          fontWeight: 700,
          color: "#fc4c4c",
          backgroundColor: "white",
          width: 50,
          textAlign: "center",
        }}
      >
        {distance > 0 ? "D-" + day : "종료"}
      </div>
    </Card>
  );
}
