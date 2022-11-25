import React, { useState } from "react";
import Link from "next/link";

import useInterval from "hook/useInterval";

export default function Slider() {
  const [count, setCount] = useState<number>(0);

  useInterval(() => {
    if (count < 3) {
      setCount((count) => count + 1);
    } else {
      setCount(0);
    }
  }, 3000);

  const slides = [
    { title: "서수영 개인전", link: "http://www.helenandjae.com" },
    { title: "김미경 : Resonance", link: "http://www.galleryluan.com" },
    {
      title: "우주 백패킹",
      link: "http://www.ddp.or.kr/index.html?menuno=230",
    },
    {
      title: "DDP-NFT 기획전",
      link: "http://www.ddp.or.kr/index.html?menuno=244",
    },
  ];

  return (
    <div style={{ overflowY: "hidden", height: 60 }}>
      <div
        style={{
          transform: `translateY(${-count * 64}px)`,
          transition: "all ease 2s 0s",
          textAlign: "center",
        }}
      >
        {slides.map((el, index) => (
          <Link href={el.link} key={index} passHref>
            <a target="_blank" rel="noopener noreferrer">
              <div style={{ fontSize: 17, fontWeight: 700, color: "#000000" }}>{el.title}</div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
