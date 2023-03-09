import React, { useState } from "react";
import Link from "next/link";

import { useInterval } from "hooks/useInterval";

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
    { title: "마우리치오 카텔란 : WE", link: "https://ticket.leeum.org/leeum/personal/personalStep.do" },
    {
      title: "어노니머스 프로젝트",
      link: "https://groundseesaw.co.kr/product/%ec%96%b4%eb%85%b8%eb%8b%88%eb%a8%b8%ec%8a%a4-%ed%94%84%eb%a1%9c%ec%a0%9d%ed%8a%b8",
    },
    {
      title: "마리오 폰테의 트웰브",
      link: "https://www.instagram.com/mario_pontes_12",
    },
    {
      title: "마틴 마르지엘라",
      link: "https://www.lottemuseum.com",
    },
  ];

  return (
    <div className="overflow-y-hidden h-[60px]">
      <ul
        className="inline-flex flex-col text-center"
        style={{
          transform: `translateY(${-count * 64}px)`,
          transition: "all ease 2s 0s",
        }}
      >
        {slides.map((el, index) => (
          <li key={index} className="inline-flex items-center justify-end h-16">
            <Link href={el.link} target="_blank" rel="noopener noreferrer">
              <strong className="text-lg font-bold text-black dark:text-white">{el.title}</strong>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
