import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import Slider from "components/Slider";

export default function Header() {
  const router = useRouter();

  const TABS = [
    { title: "전체", sort: "total" },
    { title: "전시/미술", sort: "exhibition" },
    { title: "클래식", sort: "classic" },
    { title: "콘서트", sort: "concert" },
    { title: "축제", sort: "festival" },
    { title: "국악", sort: "music" },
    { title: "교육/체험", sort: "education" },
    { title: "뮤지컬/오페라", sort: "opera" },
    { title: "무용", sort: "dancing" },
    { title: "연극", sort: "theater" },
    { title: "독주/독창회", sort: "solo" },
    { title: "기타", sort: "etc" },
  ];

  const navItemList = [
    { title: "인기 전시회", value: "popular" },
    { title: "후기", value: "review" },
  ];

  return (
    <header className="fixed top-0 left-0 z-20 w-full bg-white border-b border-gray-100 border-solid dark:bg-dark-100 dark:border-dark-200">
      <div className="flex justify-between mx-auto px-7 max-w-7xl -md:px-4">
        <div className="flex -md:block">
          <h1 className="inline-flex mr-12 -md:mr-0">
            <a className="flex items-center -md:h-16" href="/">
              <div className="relative w-10 h-10 mr-3">
                <Image src="/logo.png" width={40} height={40} alt="logo" layout="fill" objectFit="contain" />
              </div>
              <div className="text-2xl text-indigo-600">내일전시</div>
            </a>
          </h1>
          <nav className="inline-flex items-center -md:block">
            <ul className="flex items-center space-x-2 -md:h-11">
              {navItemList.map((navItem, index) => {
                return (
                  <li key={index}>
                    <Link href={`/${navItem.value}`} passHref>
                      <a>
                        <span
                          className={`hover:font-bold hover:leading-3 ${
                            router.pathname === "/" + navItem.value ? "font-bold" : "font-medium"
                          } `}
                        >
                          {navItem.title}
                        </span>
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <Slider />
      </div>
      {router.pathname === "/" && (
        <div className="overflow-x-scroll border-t border-gray-100 border-solid scrollbar-hide dark:border-dark-200">
          <ul className="max-w-7xl px-7 -md:max-w-none -md:w-[717px] -md:px-4 flex mx-auto h-10 items-center space-x-5">
            {TABS.map((t, index) => (
              <li key={index}>
                <Link href={`/?tab=${t.sort}`} key={index} shallow={true} scroll={true} passHref>
                  <a>
                    <span
                      className={`text-sm cursor-pointer hover:font-bold hover:text-black dark:hover:text-white ${
                        router.query.tab === t.sort
                          ? "font-bold text-black dark:text-white"
                          : "font-medium text-neutral-400 "
                      }`}
                    >
                      {t.title}
                    </span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {router.pathname === "/review" && (
        <div className="overflow-x-scroll border-t border-gray-100 border-solid scrollbar-hide">
          <ul className="max-w-7xl px-7 -md:max-w-none -md:w-[672px] -md:px-4 flex mx-auto h-10 items-center space-x-5">
            {TABS.filter((t) => t.sort !== "total").map((t, index) => (
              <Link href={`review/?tab=${t.sort}`} key={index} shallow={true} scroll={true} passHref>
                <a>
                  <span
                    className={`text-sm cursor-pointer hover:font-bold hover:text-black ${
                      router.query.tab === t.sort ? "font-bold text-black" : "font-medium text-neutral-400"
                    }`}
                  >
                    {t.title}
                  </span>
                </a>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
