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
    { title: "디즈니 아트컬렉션", link: "https://mpx.co.kr" },
    { title: "변용국 : 빛의 거울", link: "http://www.tongingallery.com/637" },
    {
      title: "하리보 기념전",
      link: "https://hariboworld.modoo.at/",
    },
    {
      title: "Tape Seoul",
      link: "https://www.kmcaseoul.org/",
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
          <li key={index} className="inline-flex items-center h-16">
            <Link href={el.link} key={index} passHref>
              <a target="_blank" rel="noopener noreferrer">
                <strong className="text-lg font-bold text-black">{el.title}</strong>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
