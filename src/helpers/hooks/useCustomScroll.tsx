import { useEffect, useState } from "react";

export default function useCustomScroll(pixels: number, css?: string) {
  const [scrollCss, setScrollCss] = useState("");
  const [isFixed, setIsFixed] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > pixels) {
        setScrollCss(
          css ??
            "fixed transition delay-150 duration-300 ease-in-out top-0 w-full"
        );
        setIsFixed(true);
      } else {
        setScrollCss("");
        setIsFixed(false);
      }
    });
  }, [pixels, css]);

  return { isFixed, scrollCss };
}
