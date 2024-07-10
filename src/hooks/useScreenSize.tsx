"use client";

import { useEffect, useState } from "react";

const initialize = () => {
  if (window.innerWidth < 640) {
    return true;
  } else {
    return false;
  }
};

export default function useScreenSize() {
  const [size, setSize] = useState(initialize);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setSize(true);
      } else {
        setSize(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile: size };
}
