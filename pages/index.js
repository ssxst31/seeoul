import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export default function HomepageLayout() {
  return (
    <div>
      <Header />
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Main />
      </div>
      <Footer />
    </div>
  );
}
