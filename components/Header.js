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
      }}
      className={s.header}
    >
      <div style={{ display: "flex" }}>
        <Link href="/">
          <a
            style={{ fontSize: 40, color: "#0096FF", marginRight: 50 }}
            className={s.pointer}
          >
            내일 전시
          </a>
        </Link>
        <Link href="/popular">
          <a style={{ fontSize: 18, color: "black" }} className={s.pointer}>
            인기 전시회
          </a>
        </Link>
      </div>
    </header>
  );
}
