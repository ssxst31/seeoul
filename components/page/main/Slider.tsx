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
      title: "티보의 그림 정원",
      link: "https://www.ehyundai.com/newCulture/EH/EH000001_V.do?seq=2080148&eventState=POST&bbsCd=210&sitemapId=01020100000000&list_page=1&imgLink=/attachfiles/event/20230428013217427.png",
    },
    {
      title: "목향(木香)",
      link: "https://blog.naver.com/forloveofgod",
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
