import React from "react";

export default function Header() {
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
      <p style={{ fontSize: 40, color: "#0096FF" }}>내일 전시</p>
    </div>
  );
}
