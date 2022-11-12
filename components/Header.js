import React from "react";
import Link from "next/link";

import s from "components/main.module.css";

export default function Header() {
  return (
    <header
      style={{
        position: "fixed",
        height: 64,
        width: "100%",
        backgroundColor: "#fff",
        zIndex: 2,
        lineHeight: "64px",
        boxShadow: "0 2px 5px 0 rgb(0 0 0 / 12%)",
        left: 0,
      }}
      className={s.header}
    >
      <div
        style={{
          display: "flex",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 30px",
        }}
      >
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
          <div>내일 전시</div>
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
    </header>
  );
}
