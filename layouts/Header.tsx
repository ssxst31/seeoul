import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Slider from "components/Slider";
import s from "layouts/layout.module.css";

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

  return (
    <header
      style={{
        position: "fixed",
        width: "100%",
        backgroundColor: "#fff",
        zIndex: 16,

        left: 0,
        borderBottom: "1px #f5f5f5 solid",
      }}
      className={s.header}
    >
      <div className={s.headerMain}>
        <div className={s.mobile}>
          <h1 style={{ margin: 0 }}>
            <a
              style={{
                fontSize: 32,
                color: "#5553FF",
                marginRight: 50,
                display: "flex",
                alignContent: "center",
              }}
              href="/"
            >
              <img
                src="/logo.png"
                style={{
                  width: 40,
                  height: 40,
                  position: "relative",
                  top: 10,
                  marginRight: 12,
                }}
                alt="logo"
              />
              <div style={{ fontSize: 26 }}>내일 전시</div>
            </a>
          </h1>
          <nav>
            <ul style={{ display: "flex" }}>
              <li>
                <Link href="/popular">
                  <a>
                    <div>
                      <span
                        style={{
                          fontSize: 15,
                          fontWeight: router.pathname === "/popular" ? 700 : 500,
                          color: router.pathname === "/popular" ? "#222222" : "#333333",
                        }}
                        className={s.bold}
                      >
                        인기 전시회
                      </span>
                      <img
                        src="/new.png"
                        style={{
                          width: 16,
                          height: 16,
                          position: "relative",
                          top: 15,
                          left: -5,
                        }}
                        alt="new"
                      />
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/review">
                  <a>
                    <div>
                      <span
                        style={{
                          fontSize: 15,
                          fontWeight: router.pathname === "/review" ? 700 : 500,
                          color: router.pathname === "/review" ? "#222222" : "#333333",
                        }}
                        className={s.bold}
                      >
                        후기
                      </span>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Slider />
      </div>
      {router.pathname === "/" && (
        <div style={{ borderTop: "1px #f5f5f5 solid", overflowX: "scroll" }} className={s.dsa}>
          <ul
            style={{
              display: "flex",
              margin: "0 auto",
              lineHeight: "40px",
            }}
            className={s.rea}
          >
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
        <div style={{ borderTop: "1px #f5f5f5 solid", overflowX: "scroll" }} className={s.dsa}>
          <ul
            style={{
              display: "flex",
              margin: "0 auto",
              lineHeight: "40px",
            }}
            className={s.rea}
          >
            {TABS2.map((t, index) => (
              <Link key={index} href={`review/?tab=${t.sort}`}>
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
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
