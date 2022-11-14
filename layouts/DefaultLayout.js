import React from "react";

import Desktop from "layouts/Desktop";

export default function DefaultLayout(props) {
  const { children } = props;

  return <Desktop>{children}</Desktop>;
}
