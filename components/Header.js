import React from "react";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/`);
  };

  return (
    <div
      style={{
        position: "fixed",
        height: 60,
        width: "100%",
        backgroundColor: "#fff",
        zIndex: 1,
        padding: "0 20px",
      }}
    >
      <p style={{ fontSize: 40, color: "#0096FF" }} onClick={handleClick}>
        내일 전시
      </p>
    </div>
  );
}
