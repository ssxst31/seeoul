import React from "react";
import Link from "next/link";

import Header from "layouts/Header";

export default function Error500() {
  return (
    <>
      <Header />
      <div style={{ textAlign: "center", paddingTop: 200 }}>
        <img src="/404.png" />
        <div style={{ fontSize: 120, color: "#5553FF" }}>404</div>
        <div style={{ fontSize: 30 }}>서비스 이용에 불편을 드려 죄송합니다.</div>
        <div style={{ fontSize: 20 }}>시스템 에러가 발생하여 페이지를 표시할 수 없습니다.</div>
        <div style={{ height: 20, width: "100%" }} />
        <Link href="/">
          <button
            style={{
              fontSize: 30,
              backgroundColor: "purple",
              borderRadius: 12,
              color: "#ffffff",
              width: 300,
              height: 80,
            }}
          >
            Go HOME
          </button>
        </Link>
        <div style={{ height: 20, width: "100%" }} />
      </div>
    </>
  );
}
