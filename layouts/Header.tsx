import { Suspense } from "react";

import CSRHeader from "./CSRHeader";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-20 w-full bg-white border-b border-gray-100 border-solid dark:bg-dark-100 dark:border-dark-200">
      <Suspense fallback={<div />}>
        <CSRHeader />
      </Suspense>
    </header>
  );
}
