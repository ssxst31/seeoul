import React from "react";
import Link from "next/link";

import s from "components/main.module.css";

export default function Header() {
  return (
    <header
      style={{
        position: "fixed",
        height: 80,
        width: "100%",
        backgroundColor: "#fff",
        zIndex: 2,
        lineHeight: "80px",
        boxShadow: "0 2px 5px 0 rgb(0 0 0 / 12%)",
        left: 0,
      }}
      className={s.header}
    >
      <div style={{ display: "flex", maxWidth: "1280px", margin: "0 auto" }}>
        <a style={{ fontSize: 40, color: "#5553FF", marginRight: 50 }} href="/">
          <img
            src="/logo.png"
            style={{ width: 50, height: 50, position: "relative", top: 15 }}
          />
          내일 전시
        </a>
        <Link href="/popular">
          <a style={{ fontSize: 18, color: "black" }}>
            <div>
              인기 전시회
              <img
                src="/new.png"
                style={{ width: 20, height: 20, position: "relative", top: 15 }}
              />
            </div>
          </a>
        </Link>
      </div>
    </header>
  );
}
