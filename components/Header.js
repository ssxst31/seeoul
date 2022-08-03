import React from "react";
import Link from "next/link";

import s from "components/main.module.css";

export default function Header() {
  return (
    <header
      style={{
        position: "fixed",
        height: 60,
        width: "100%",
        backgroundColor: "#fff",
        zIndex: 2,
      }}
      className={s.header}
    >
      <Link href="/">
        <a style={{ fontSize: 40, color: "#0096FF" }} className={s.pointer}>
          내일 전시
        </a>
      </Link>
    </header>
  );
}
