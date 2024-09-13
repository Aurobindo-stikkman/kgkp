"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import scrollImg from "./Scroll.png";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <Image
        src={scrollImg}
        alt="Scroll Image"
        onClick={scrollToTop}
        className="h-10 w-10 cursor-pointer fixed bottom-[5.5rem] right-5 z-[9999] lg:bottom-[8.5rem] xl:w-20 xl:h-20"
      />
    )
  );
}
