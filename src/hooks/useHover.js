import { useEffect, useRef, useState } from "react";

export const useHover = () => {
  const ref = useRef();

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (el) {
      el.addEventListener("mouseover", () => setHovered(true));
      el.addEventListener("mouseleave", () => setHovered(false));
    }

    return () => {
      el.removeEventListener("mouseover", () => setHovered(true));
      el.removeEventListener("mouseleave", () => setHovered(false));
    };
  }, [ref]);

  return { hovered, ref };
};
