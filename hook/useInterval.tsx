import React, { useState, useEffect, useRef } from "react";

interface IUseInterval {
  (callback: () => void, interval: number): void;
}

export default function useInterval(callback, interval) {
  const savedCallback = useRef<(() => void) | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }

    let id = setInterval(tick, interval);
    return () => clearInterval(id);
  }, [interval]);
}
