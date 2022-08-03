import React from "react";

import Header from "components/Header";
import Main from "components/Main";
import Footer from "components/Footer";

export default function HomepageLayout() {
  return (
    <div>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
