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
    { title: "반고흐 인 서울", link: "https://thart.co.kr/36" },
    {
      title: "안소현 : 수무한 바람",
      link: "https://www.sohyunart.com",
    },
    {
      title: "고의선 개인전",
      link: "https://blog.naver.com/galleryjy/223235704806",
    },
    {
      title: "바위가 되는 법",
      link: "https://ticket.leeum.org/leeum/personal/exhibitList.do#none",
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
              <strong className="text-base font-bold text-black dark:text-white">{el.title}</strong>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
