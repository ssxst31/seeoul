import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        textAlign: "center",
        backgroundColor: "#f8f8f8",
        padding: "40px 0",
      }}
    >
      <p>출처 - 서울특별시, 서울문화포털(culture.seoul.go.kr)</p>
      <p>
        <a href="https://icons8.com">icons8</a>에서 아이콘 제공
      </p>
      <p>
        This site[내일전시] is designed to share information about Seoul
        cultural event.
      </p>
      <p>ⓒ 내일전시 2022 All Rights Reserved.</p>
      <Link href="/blog" as={`/blog`}>
        <a>
          <button>임시 블로그</button>
        </a>
      </Link>
    </footer>
  );
}
