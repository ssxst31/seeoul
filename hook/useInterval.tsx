import React, { useEffect, useRef } from "react";

export default function useInterval(callback: () => void, interval: number): void {
  const savedCallback = useRef<(() => void) | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    const tick = () => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    };

    let id = setInterval(tick, interval);
    return () => clearInterval(id);
  }, [interval]);
}
