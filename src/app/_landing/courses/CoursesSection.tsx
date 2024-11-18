"use client";
import { useEffect, useRef } from "react";

import useInView from "@/app/components/useInView";
import CarouselContainer from "./CarouselContainer";

import "./styles.css";

const CoursesSection = () => {
  // Chalk stroke view
  const chalkStrokeRef = useRef(null);
  const isChalkStrokeInView = useInView(chalkStrokeRef);

  useEffect(() => {
    if (isChalkStrokeInView) {
      const clipRect = document.getElementById("clipRect");
      if (clipRect) {
        clipRect.classList.add("revealed");
      }
    }
  }, [isChalkStrokeInView]);

  return (
    <section className="px-4 py-[52px] lg:px-[80px] lg:py-[124px] ">
      <section className="h-[58px] w-[282px] mx-auto text-[20px] font-[700] leading-[28.6px] relative text-center text-[#1A2434] lg:text-[32px] lg:font-[700] lg:leading-[38.4px] lg:w-[512px] lg:h-[76px]">
        <span
          ref={chalkStrokeRef}
          className="z-10 relative w-[282px] h-[58px] text-center block lg:w-[512px] lg:h-[76px] lg:px-3 "
        >
          Select the Right Course to Unlock your Child's Genius
        </span>
        <svg
          className={`absolute w-[156.08px] h-[60.94px] left-[70.5%] bottom-[-27px] translate-x-[-50%] z-0 lg:bottom-[-51px] lg:rotate-1 lg:left-[65%] lg:w-[303.4px] lg:h-[93.76px] ${
            isChalkStrokeInView ? "chalkMark" : ""
          }`}
          viewBox="0 0 345 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="home-courses">
              <rect
                id="clipRect"
                x="0"
                y="0"
                width="0"
                height="82"
                fill="white"
              />
            </clipPath>
          </defs>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#FFB31F"
            stroke="transparent"
            strokeWidth="3"
            strokeLinecap="butt"
            clipPath="url(#home-courses)"
            d="M337.13 14.89C336.3 15.53 326.72 14.27 325.18 13.31C323.41 12.21 318.84 11.39 317.8 11.98C317.03 12.42 316.66 12.27 316.74 11.56C316.86 10.44 313.9 9.87001 312.76 10.8C312.42 11.08 311.03 10.8 309.67 10.17C307.85 9.33001 306.83 9.44001 305.76 10.61C304.74 11.72 304.15 11.81 303.77 10.91C302.96 8.98001 299.01 7.81001 297.23 8.97001C296.32 9.57001 295.71 9.56001 295.78 8.96001C295.94 7.53001 279.53 4.64001 265.83 3.69001C264.38 3.59001 260.72 3.16001 257.69 2.74001C248.78 1.50001 246.18 1.69001 246.57 3.55001C246.86 4.95001 246.64 4.89001 244.94 3.08001C243.86 1.93001 242.78 1.15001 242.54 1.34001C242.3 1.54001 239.36 1.37001 236.01 0.980012C232.66 0.590012 228.99 0.700012 227.86 1.23001C226.5 1.87001 225.66 1.80001 225.37 1.04001C225.07 0.250013 224.56 0.140012 223.75 0.670012C223.1 1.10001 221.75 1.07001 220.74 0.610013C219.54 0.0600126 218.85 0.270013 218.75 1.20001C218.6 2.59001 216.72 2.63001 212.68 1.33001C210.95 0.770012 210.73 1.02001 211.05 3.13001C211.41 5.49001 211.37 5.50001 209.93 3.49001C208.87 2.00001 208.14 1.64001 207.39 2.25001C206.65 2.86001 206.21 2.76001 205.89 1.90001C205.57 1.07001 204.55 1.00001 202.59 1.68001C200.89 2.27001 198.79 2.21001 197.35 1.54001C195.56 0.710013 194.9 0.800012 194.78 1.90001C194.67 2.87001 193.8 3.17001 192.25 2.77001C190.02 2.20001 188.58 2.21001 178.75 2.83001C176.54 2.97001 173.75 3.02001 172.54 2.94001C169.38 2.73001 167.18 3.34001 167.06 4.45001C167 4.98001 165.92 4.91001 164.64 4.30001C162.1 3.08001 156.36 2.81001 145.49 3.39001C132.38 4.10001 128.58 4.53001 123.98 5.82001C121.47 6.53001 119.13 6.97001 118.78 6.80001C118.43 6.63001 118.1 6.94001 118.04 7.48001C117.98 8.02001 117.17 8.30001 116.24 8.09001C115.31 7.88001 111.96 8.48001 108.79 9.41001C105.62 10.34 98.19 11.67 92.27 12.35C75.84 14.25 60.05 16.75 59.43 17.54C59.12 17.93 57.77 18.31 56.42 18.38C54.33 18.49 53.91 19.02 53.59 21.96C53.38 23.85 52.81 25.31 52.33 25.2C51.82 25.09 51.8 24.01 52.27 22.64C53.06 20.37 52.99 20.29 50.5 20.79C49.07 21.08 47.26 21.76 46.47 22.31C45.68 22.86 43.41 23.51 41.44 23.76C39.47 24.01 36.04 24.89 33.82 25.72C31.6 26.55 28.66 27.08 27.27 26.89C25.89 26.7 24.72 26.89 24.67 27.3C24.62 27.71 24.03 27.66 23.35 27.19C22.56 26.64 22.05 26.92 21.94 27.96C21.84 28.86 21.28 29.39 20.7 29.15C19.52 28.66 16.75 29.05 14.63 30.01C13.86 30.36 12.62 30.8 11.87 30.99C11.12 31.18 8.27003 32.6 5.54003 34.16C0.930031 36.79 -0.619969 38.87 0.900031 40.41C2.07003 41.59 7.57003 39.18 8.60003 37.03C9.16003 35.86 9.81003 34.94 10.05 34.99C10.28 35.04 10.18 35.7 9.81003 36.46C8.92003 38.31 10.07 38.42 13.38 36.8C14.89 36.06 16.42 35.75 16.78 36.11C17.13 36.47 17.47 36.34 17.53 35.83C17.59 35.32 20.73 34.78 24.52 34.64C28.31 34.5 31.86 34.11 32.42 33.79C32.98 33.46 34.77 33.4 36.42 33.65C38.06 33.9 39.92 33.81 40.55 33.45C41.18 33.09 42.5 33.28 43.49 33.89C44.64 34.59 45.61 34.56 46.17 33.81C46.88 32.86 47.35 32.94 48.64 34.24C50 35.61 50.53 35.59 52.22 34.09C53.92 32.59 54.18 32.58 54.02 34.02C53.87 35.36 54.33 35.68 56.28 35.57C57.63 35.5 58.96 35.18 59.23 34.87C60.45 33.51 62.89 33.75 62.73 35.21C62.63 36.08 63.01 36.52 63.62 36.25C64.2 35.99 65.98 35.98 67.57 36.22C69.16 36.46 71.09 36.26 71.84 35.76C72.92 35.05 73.28 35.15 73.52 36.23C73.7 37.06 73.93 36.88 74.1 35.78C74.3 34.45 74.83 34.2 76.04 34.85C77.09 35.42 77.54 35.32 77.26 34.57C76.97 33.82 77.45 33.74 78.58 34.35C79.84 35.03 80.56 34.8 81.08 33.54C81.48 32.56 82.17 32.13 82.61 32.57C83.04 33.01 84.04 32.67 84.81 31.81C86.12 30.37 86.21 30.38 86.06 31.99C85.97 32.95 86.28 33.81 86.76 33.92C87.23 34.03 87.61 33.77 87.6 33.35C87.59 32.93 87.72 31.73 87.9 30.69C88.21 28.81 88.23 28.82 89.27 31C89.93 32.37 90.39 32.72 90.5 31.91C90.61 31.1 91.25 30.97 92.21 31.56C93.1 32.1 94.28 31.97 95.01 31.24C95.7 30.55 96.83 30.1 97.51 30.26C98.22 30.42 98.55 30 98.27 29.27C97.93 28.37 98.46 28.36 100.1 29.23C102.02 30.24 102.36 30.16 102.06 28.74C101.79 27.43 102.06 27.25 103.24 27.96C104.12 28.5 105.31 28.36 106.03 27.64C106.72 26.95 108.02 26.54 108.91 26.74C109.8 26.94 110.58 26.66 110.64 26.11C110.7 25.57 111.55 25.3 112.53 25.52C113.54 25.75 114.12 25.42 113.87 24.77C113.58 24.02 114.19 24.02 115.59 24.76C116.86 25.43 117.8 25.48 117.86 24.89C117.92 24.34 118.93 24.22 120.1 24.64C121.27 25.05 122.27 24.99 122.33 24.5C122.38 24.01 122.91 23.81 123.49 24.06C124.56 24.52 127.83 23.9 132.6 22.34C134.03 21.87 135.74 21.61 136.4 21.76C137.06 21.91 138.35 20.83 139.27 19.36C140.27 17.76 141.62 16.85 142.64 17.08C143.58 17.29 144.39 17.06 144.44 16.57C144.59 15.25 150.17 14.53 150.94 15.73C152 17.4 156.11 16.91 156.78 15.04C157.29 13.62 158.2 13.5 161.83 14.39C164.26 14.99 167.33 15.24 168.64 14.96C171.18 14.42 183.75 14.86 186.56 15.6C187.49 15.84 188.78 15.68 189.45 15.25C190.11 14.81 191.13 14.76 191.72 15.13C192.3 15.5 194.1 15.49 195.71 15.1C197.32 14.71 200.18 14.74 202.07 15.17C204.63 15.74 205.9 15.46 207.08 14.06C208.63 12.2 208.67 12.21 209.69 14.39C210.59 16.3 211 16.49 212.68 15.74C213.76 15.27 215 15.24 215.43 15.68C215.87 16.12 216.85 16.08 217.61 15.58C218.37 15.08 219.51 15.04 220.15 15.48C220.87 15.98 221.61 15.51 222.08 14.25C222.84 12.25 222.87 12.25 223.92 14.42C224.85 16.35 225.01 16.41 225.17 14.95C225.35 13.34 226.7 13.14 229.9 14.24C230.72 14.52 231.44 14.28 231.51 13.7C231.57 13.12 232.57 12.86 233.73 13.12C234.89 13.38 236.16 13.16 236.55 12.63C237.07 11.93 237.4 12.02 237.75 12.93C238.02 13.62 238.89 14.06 239.69 13.89C241.45 13.53 241.07 10.93 238.83 7.95001C237.96 6.80001 237.64 5.94001 238.11 6.05001C239.34 6.33001 242.47 10.63 242.33 11.86C242.26 12.49 243.52 12.99 245.51 13.13C247.32 13.26 250.45 13.77 252.46 14.26C254.47 14.76 256.17 14.73 256.23 14.2C256.29 13.67 258.86 13.8 261.95 14.49C265.03 15.18 267.95 15.57 268.42 15.36C268.89 15.15 271.18 15.17 273.51 15.41C280.86 16.17 282.77 16.16 283.77 15.34C284.36 14.86 285.47 15.05 286.61 15.84C287.64 16.55 288.75 16.91 289.09 16.63C289.43 16.36 291.55 16.39 293.82 16.71C303.91 18.12 313.52 18.81 314.52 18.19C315.12 17.82 316.37 17.89 317.29 18.35C320.87 20.13 338.05 24.15 341.1 23.92C343.81 23.71 344.37 23.24 344.69 20.87C345.02 18.47 344.78 18.07 343.06 18.06C341.94 18.06 340.52 17.22 339.85 16.17C338.46 13.98 338.31 13.92 337.09 14.87L337.13 14.89ZM233.06 7.92001C233 8.46001 232.54 8.82001 232.04 8.70001C231.54 8.59001 231.41 8.10001 231.77 7.63001C232.12 7.15001 232.58 6.80001 232.79 6.85001C233 6.90001 233.12 7.38001 233.06 7.92001ZM235.01 11.12C234.02 11.93 233.46 10.25 234.33 9.08001C234.99 8.19001 235.19 8.24001 235.37 9.31001C235.49 10.04 235.33 10.86 235.01 11.12ZM195.15 6.53001C195.09 7.07001 194.63 7.43001 194.13 7.31001C193.63 7.20001 193.5 6.71001 193.86 6.24001C194.21 5.76001 194.67 5.41001 194.88 5.46001C195.09 5.51001 195.21 5.99001 195.15 6.53001ZM139.19 16.3C139.13 16.84 138.67 17.2 138.17 17.08C137.67 16.97 137.54 16.48 137.9 16.01C138.25 15.53 138.71 15.18 138.92 15.23C139.13 15.28 139.25 15.76 139.19 16.3ZM137.89 20.06C137.83 20.6 137.39 20.96 136.92 20.86C136.45 20.75 136.11 20.22 136.17 19.68C136.23 19.14 136.67 18.78 137.14 18.88C137.61 18.99 137.95 19.52 137.89 20.06ZM128.01 21.34C127.89 22.38 126.19 22.45 125.8 21.43C125.56 20.81 125.98 20.44 126.72 20.61C127.46 20.78 128.04 21.11 128.02 21.35L128.01 21.34ZM63.7 26.6C63.56 27.89 62.44 28.51 61.67 27.74C60.85 26.91 61.81 25.34 62.98 25.6C63.43 25.7 63.75 26.15 63.7 26.61V26.6ZM78.69 31.13C78.34 31.61 78.72 32.15 79.54 32.33C81.69 32.81 80.68 33.21 77.36 33.19C74.06 33.17 73.69 31.85 76.73 30.91C79.39 30.09 79.46 30.1 78.7 31.13H78.69ZM54.39 30.76C54.33 31.3 54.11 31.71 53.9 31.66C53.69 31.61 53.33 31.08 53.09 30.47C52.85 29.86 53.08 29.45 53.58 29.57C54.08 29.68 54.45 30.22 54.39 30.76Z"
          />
        </svg>
      </section>

      <CarouselContainer />

      <button className="custom-black-button bg-[#4D1435] h-[51px] w-[222px] px-6 py-4 flex gap-[14px] justify-center items-center rounded-[50px] mt-6 mx-auto md:mt-14 lg:mt-[80px] lg:w-[385px] lg:h-[77px] lg:px-[80px] lg:py-[24px]">
        <div className="text-[16px] font-[700] leading-[19.2px] text-white lg:text-[22.5px] lg:leading-[28.8px] custom-button-icon">
          View All Courses
        </div>
        <svg
          className="w-4 h-4 lg:w-6 lg:h-6 custom-button-icon"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="icon-arrow-right">
            <path
              id="Shape"
              d="M8.02843 3.36177C8.28878 3.10142 8.71089 3.10142 8.97124 3.36177L13.6379 8.02843C13.8983 8.28878 13.8983 8.71089 13.6379 8.97124L8.97124 13.6379C8.71089 13.8983 8.28878 13.8983 8.02843 13.6379C7.76808 13.3776 7.76808 12.9554 8.02843 12.6951L11.557 9.1665H3.83317C3.46498 9.1665 3.1665 8.86803 3.1665 8.49984C3.1665 8.13165 3.46498 7.83317 3.83317 7.83317H11.557L8.02843 4.30457C7.76808 4.04423 7.76808 3.62212 8.02843 3.36177Z"
              className="fill-current text-white"
            />
          </g>
        </svg>
      </button>
    </section>
  );
};

export default CoursesSection;
