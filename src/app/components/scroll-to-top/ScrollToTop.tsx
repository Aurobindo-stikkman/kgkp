"use client";
import { useEffect, useState } from "react";

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
      <svg
        onClick={scrollToTop}
        className={`h-12 w-12 cursor-pointer fixed bottom-6 right-1.5 z-[9999] lg:bottom-[3rem] xl:w-[50px] xl:h-[50px] lg:translate-x-1/2 lg:right-1/2`}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Scroll">
          <g id="Group 4">
            <g id="Ellipse 1140" filter="url(#filter0_d_1074_42598)">
              <circle
                cx="30"
                cy="26"
                r="26"
                transform="rotate(-90 30 26)"
                fill="white"
              />
              <circle
                cx="30"
                cy="26"
                r="25.5"
                transform="rotate(-90 30 26)"
                stroke="black"
                stroke-opacity="0.14"
              />
            </g>
            <path
              id="Polygon 3"
              d="M28.2679 17C29.0377 15.6667 30.9623 15.6667 31.7321 17L38.6603 29C39.4301 30.3333 38.4678 32 36.9282 32H23.0718C21.5322 32 20.5699 30.3333 21.3397 29L28.2679 17Z"
              fill="#1A2434"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_1074_42598"
            x="0"
            y="0"
            width="60"
            height="60"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1074_42598"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1074_42598"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    )
  );
}
