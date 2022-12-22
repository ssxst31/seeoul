import React from "react";

import Header from "layouts/Header";
import Footer from "layouts/Footer";

interface ResponsiveContainerProps {
  children: JSX.Element | JSX.Element[];
}

export default function ResponsiveContainer({ children }: ResponsiveContainerProps) {
  return (
    <>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
}
