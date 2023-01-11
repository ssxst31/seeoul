import React from "react";

import Header from "layouts/Header";
import Footer from "layouts/Footer";

interface ResponsiveContainerProps {
  children: JSX.Element | JSX.Element[];
}

export default function ResponsiveContainer({ children }: ResponsiveContainerProps) {
  return (
    <>
      <div className="mx-auto max-w-7xl">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
}
