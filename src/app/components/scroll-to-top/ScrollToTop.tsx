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
        className="h-10 w-10 cursor-pointer fixed bottom-[8.5rem] right-[3.2rem] z-[9999] lg:bottom-[8.5rem] xl:w-[50px] xl:h-[50px]"
      />
    )
  );
}
