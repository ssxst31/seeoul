"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function BlackButton() {
  const { theme, setTheme } = useTheme();
  const [btnText, setBtnText] = useState<any>("");

  useEffect(() => {
    if (theme === "light") {
      return setBtnText("🌚");
    }
    setBtnText("🌝");
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed w-14 h-14  rounded-[50%] bottom-6 right-6 dark:bg-white bg-dark-200 shadow-lg hover:animate-jelly"
    >
      <div className="text-2xl">{btnText}</div>
    </button>
  );
}
