import React from "react";

import Desktop from "layouts/Desktop";

interface DefaultLayoutProps {
  children: React.FC;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return <Desktop>{children}</Desktop>;
}
