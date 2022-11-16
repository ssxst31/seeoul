import React from "react";
import Link from "next/link";
import { useSetRecoilState } from "recoil";

import { filterTypeState } from "store/header";
import Slider from "components/Slider";
import s from "layouts/layout.module.css";

export default function Header() {
  const setFilterType = useSetRecoilState<string>(filterTypeState);

  const provinceData = [
    "전시/미술",
    "클래식",
    "콘서트",
    "축제-문화/예술",
    "축제-전통/역사",
    "국악",
    "문화교양/강좌",
    "뮤지컬/오페라",
    "무용",
    "연극",
    "기타",
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
      <div
        style={{ borderTop: "1px #f5f5f5 solid", overflowX: "scroll" }}
        className={s.dsa}
      >
        <div
          style={{
            display: "flex",
            margin: "0 auto",
            padding: "0 30px",
            lineHeight: "40px",
          }}
          className={s.rea}
        >
          {provinceData.map((el) => (
            <div
              style={{
                fontSize: 14,
                marginRight: 20,
                fontWeight: 500,
              }}
              onClick={() => {
                setFilterType(el);
              }}
            >
              {el}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
