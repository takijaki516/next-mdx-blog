import { useEffect, useState, useCallback } from "react";

export const useScroll = (threshold: number) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const onScroll = useCallback(() => {
    // https://stackoverflow.com/questions/41576287/why-window-scrolly-element-getboundingclientrect-top-is-not-equal-to-element
    setIsScrolled(window.scrollY > threshold);
  }, [threshold]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.addEventListener("scroll", onScroll);
  }, [onScroll]);

  return isScrolled;
};
