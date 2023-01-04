import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width2, innerHeight: height2 } = window;
  return {
    width2,
    height2,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({ width2: 0, height2: 0 }); // <-- don't invoke here

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    handleResize(); // <-- invoke this on component mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowDimensions;
}
