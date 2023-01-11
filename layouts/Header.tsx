import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Slider from "components/Slider";

export default function Header() {
  const router = useRouter();

  const TABS = [
    { title: "전체", sort: "total" },
    { title: "전시/미술", sort: "exhibition" },
    { title: "클래식", sort: "classic" },
    { title: "콘서트", sort: "concert" },
    { title: "축제-문화/예술", sort: "festival" },
    { title: "국악", sort: "music" },
    { title: "문화교양/강좌", sort: "culture" },
    { title: "뮤지컬/오페라", sort: "opera" },
    { title: "무용", sort: "dancing" },
    { title: "연극", sort: "theater" },
    { title: "기타", sort: "etc" },
  ];

  const TABS2 = [
    { title: "전시/미술", sort: "exhibition" },
    { title: "클래식", sort: "classic" },
    { title: "콘서트", sort: "concert" },
    { title: "축제-문화/예술", sort: "festival" },
    { title: "국악", sort: "music" },
    { title: "문화교양/강좌", sort: "culture" },
    { title: "뮤지컬/오페라", sort: "opera" },
    { title: "무용", sort: "dancing" },
    { title: "연극", sort: "theater" },
  ];

  const navItemList = [
    { title: "인기 전시회", value: "popular" },
    { title: "후기", value: "review" },
  ];

  return (
    <header className="fixed top-0 left-0 z-20 w-full bg-white border-b border-gray-100 border-solid">
      <div className="flex justify-between mx-auto px-7 max-w-7xl leading-[64px] -md:px-4">
        <div className="flex -md:block">
          <h1 className="inline-flex h-16">
            <a className="flex items-center mr-12 text-3xl text-indigo-500" href="/">
              <img src="/logo.png" className="w-10 h-10 mr-3" alt="logo" />
              <div className="text-2xl">내일 전시</div>
            </a>
          </h1>
          <nav>
            <ul className="flex space-x-2">
              {navItemList.map((navItem, index) => {
                return (
                  <li key={index}>
                    <Link href={`/${navItem.value}`} passHref>
                      <a>
                        <span
                          className={`hover:font-bold ${
                            router.pathname === "/" + navItem.value
                              ? "font-bold  hover:font-bold"
                              : "font-medium hover:font-bold"
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
        <div className="overflow-x-scroll border-t border-gray-100 border-solid scrollbar-hide">
          <ul className="max-w-7xl px-7 -md:max-w-none -md:w-[733px] -md:px-4 flex mx-auto leading-10">
            {TABS.map((t, index) => (
              <li key={index}>
                <Link href={`/?tab=${t.sort}`} key={index}>
                  <a
                    style={{
                      fontSize: 14,
                      marginRight: 20,
                      fontWeight: router.query.tab === t.sort ? 700 : 500,
                      color: router.query.tab === t.sort ? "#000000" : "#333333",
                      cursor: "pointer",
                    }}
                  >
                    {t.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {router.pathname === "/review" && (
        <div className="overflow-x-scroll scrollbar-hide">
          <ul className=" max-w-7xl px-7 -md:max-w-none -md:w-[733px] -md:px-4 flex mx-auto leading-10">
            {TABS2.map((t, index) => (
              <Link key={index} href={`review/?tab=${t.sort}`}>
                <a
                  className={`mr-5 text-sm cursor-pointer ${
                    router.query.tab === t.sort ? "font-bold text-black" : "font-medium text-gray-600"
                  } `}
                >
                  {t.title}
                </a>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
