import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Slider from "components/Slider";
import s from "layouts/layout.module.css";

export default function Header() {
  const router = useRouter();

  const tabs = [
    { tabIndex: 0, title: "전체", sort: "total" },
    { tabIndex: 0, title: "전시/미술", sort: "exhibition" },
    { tabIndex: 0, title: "클래식", sort: "classic" },
    { tabIndex: 0, title: "콘서트", sort: "concert" },
    { tabIndex: 0, title: "축제-문화/예술", sort: "festival" },
    { tabIndex: 0, title: "국악", sort: "music" },
    { tabIndex: 0, title: "문화교양/강좌", sort: "culture" },
    { tabIndex: 0, title: "뮤지컬/오페라", sort: "opera" },
    { tabIndex: 0, title: "무용", sort: "dancing" },
    { tabIndex: 0, title: "연극", sort: "theater" },
    { tabIndex: 0, title: "기타", sort: "etc" },
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
          <Link href="/popular">
            <a>
              <div>
                <span
                  style={{ color: "#222222", fontSize: 15 }}
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
        </div>
        <Slider />
      </div>
      {router.pathname === "/" && (
        <div
          style={{ borderTop: "1px #f5f5f5 solid", overflowX: "scroll" }}
          className={s.dsa}
        >
          <div
            style={{
              display: "flex",
              margin: "0 auto",
              lineHeight: "40px",
            }}
            className={s.rea}
          >
            {tabs.map((t) => (
              <div
                style={{
                  fontSize: 14,
                  marginRight: 20,
                  fontWeight: router.query.tab === t.sort ? 700 : 500,
                  color: router.query.tab === t.sort && "#000000",
                }}
                onClick={() => {
                  router.push(`/?tab=${t.sort}`);
                }}
              >
                {t.title}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
