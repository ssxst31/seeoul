import React from "react";
import { useRouter } from "next/router";
import { Card } from "antd";
import Image from "next/image";

import s from "components/main.module.css";

export default function CulturalEventCard({ culturalEvent }) {
  const router = useRouter();

  const { mainImg, title, date, id } = culturalEvent;

  const handleClick = () => {
    router.push(`/detail/${id}`);
  };

  const ewq = date.indexOf("~") + 1;
  const setDate = new Date(date.slice(ewq, 100));
  const now = new Date();
  const distance = setDate.getTime() - now.getTime();
  const day = Math.floor(distance / (1000 * 60 * 60 * 24)) + 1;

  const myLoader = ({ src, width, quality }) => {
    return `https://avatars.githubusercontent.com/u/10178994?s=280&v=4`;
  };

  return (
    <Card
      className={s.pointer}
      style={{
        width: "100%",
        position: "relative",
        height: "100%",
        boxShadow: "3px 3px 3px lightgrey",
      }}
      onClick={handleClick}
      cover={<Image src={mainImg} height={500} width={500} />}
    >
      <p style={{ fontWeight: 700, fontSize: 20 }}>
        {title.length > 33 ? `${title.substr(0, 33)}...` : title}
      </p>
      <p style={{ fontSize: 15 }}>기간 : {date}</p>
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
