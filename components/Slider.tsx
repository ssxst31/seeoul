import React, { useState } from "react";
import Link from "next/link";

import useInterval from "hooks/useInterval";

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
    { title: "한국소년 개인전", link: "https://www.arthub.co.kr/sub01/board05_view.htm?No=47045" },
    { title: "이재석 : 창끝의 궤적", link: "http://chapterii.org" },
    {
      title: "박기웅 : 48 VILLAINS",
      link: "https://seoulsky.lotteworld.com/ko/main/index.do",
    },
    {
      title: "두 개의 시선",
      link: "https://www.facebook.com/gkartina",
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
            <Link href={el.link} passHref>
              <a target="_blank" rel="noopener noreferrer">
                <strong className="text-lg font-bold text-black dark:text-white">{el.title}</strong>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
