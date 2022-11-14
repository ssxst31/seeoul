import React from "react";

import Header from "layouts/Header";
import Footer from "layouts/Footer";

export default function ResponsiveContainer(props) {
  const { children } = props;

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
