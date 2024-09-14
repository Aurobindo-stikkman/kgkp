import Image from "next/image";

import strengthIcon from "./assets/motivation 1.svg";
import brainIcon from "./assets/brain 1.svg";
import growthIcon from "./assets/idea 1.svg";
import chalkStroke from "./assets/Chalk Stroke.png";

import eqImage from "./assets/EQ.svg";
import iqImage from "./assets/IQ.svg";
import sqImage from "./assets/SQ.svg";
import card1 from "./assets/card-1.png";
import card2 from "./assets/card-2.png";
import card3 from "./assets/card3.png";
import milestoneImg from "./assets/2x1 1.png";
import inteligenceImg from "./assets/Screenshot 2024-06-28 at 11.37.34 AM 3.png";
import analysisImage from "./assets/DMIT 1.png";
import Courses from "./Courses";
import snakeFrame from "./assets/snake-frame.svg";
import whiteRock from "./assets/white-rock.svg";

import styles from "./style.module.css";

const Methods = () => {
  return (
    <div className="relative overflow-x-hidden">
      {/* Method section */}
      <section className="bg-[#F6E2D7] pt-6 pb-[52px] rounded-bl-[40px] rounded-br-[40px] lg:pt-[124px] lg:pb-[124px] lg:rounded-br-[100px] lg:rounded-bl-[100px] xl:px-20 ">
        <section className="relative mx-auto text-[28px] font-[700] leading-[36.4px] text-[#4D1435] text-center w-max lg:text-[42px] lg:leading-[50.4px]">
          <span className="z-10 relative">The KGKP Method</span>
          <svg
            className={`absolute w-[235.08px] h-[60.94px] left-[43%] top-[28%] translate-x-[-50%] z-0 lg:w-[397.11px] ${styles.chalkMark} lg:h-[93.76px] lg:left-[unset] lg:top-[5%] lg:right-[-52%]`}
            viewBox="0 0 345 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="revealClip">
                <rect
                  id="clipRect"
                  x="0"
                  y="0"
                  width="0"
                  height="41"
                  fill="white"
                />
              </clipPath>
            </defs>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M337.13 14.89C336.3 15.53 326.72 14.27 325.18 13.31C323.41 12.21 318.84 11.39 317.8 11.98C317.03 12.42 316.66 12.27 316.74 11.56C316.86 10.44 313.9 9.87001 312.76 10.8C312.42 11.08 311.03 10.8 309.67 10.17C307.85 9.33001 306.83 9.44001 305.76 10.61C304.74 11.72 304.15 11.81 303.77 10.91C302.96 8.98001 299.01 7.81001 297.23 8.97001C296.32 9.57001 295.71 9.56001 295.78 8.96001C295.94 7.53001 279.53 4.64001 265.83 3.69001C264.38 3.59001 260.72 3.16001 257.69 2.74001C248.78 1.50001 246.18 1.69001 246.57 3.55001C246.86 4.95001 246.64 4.89001 244.94 3.08001C243.86 1.93001 242.78 1.15001 242.54 1.34001C242.3 1.54001 239.36 1.37001 236.01 0.980012C232.66 0.590012 228.99 0.700012 227.86 1.23001C226.5 1.87001 225.66 1.80001 225.37 1.04001C225.07 0.250013 224.56 0.140012 223.75 0.670012C223.1 1.10001 221.75 1.07001 220.74 0.610013C219.54 0.0600126 218.85 0.270013 218.75 1.20001C218.6 2.59001 216.72 2.63001 212.68 1.33001C210.95 0.770012 210.73 1.02001 211.05 3.13001C211.41 5.49001 211.37 5.50001 209.93 3.49001C208.87 2.00001 208.14 1.64001 207.39 2.25001C206.65 2.86001 206.21 2.76001 205.89 1.90001C205.57 1.07001 204.55 1.00001 202.59 1.68001C200.89 2.27001 198.79 2.21001 197.35 1.54001C195.56 0.710013 194.9 0.800012 194.78 1.90001C194.67 2.87001 193.8 3.17001 192.25 2.77001C190.02 2.20001 188.58 2.21001 178.75 2.83001C176.54 2.97001 173.75 3.02001 172.54 2.94001C169.38 2.73001 167.18 3.34001 167.06 4.45001C167 4.98001 165.92 4.91001 164.64 4.30001C162.1 3.08001 156.36 2.81001 145.49 3.39001C132.38 4.10001 128.58 4.53001 123.98 5.82001C121.47 6.53001 119.13 6.97001 118.78 6.80001C118.43 6.63001 118.1 6.94001 118.04 7.48001C117.98 8.02001 117.17 8.30001 116.24 8.09001C115.31 7.88001 111.96 8.48001 108.79 9.41001C105.62 10.34 98.19 11.67 92.27 12.35C75.84 14.25 60.05 16.75 59.43 17.54C59.12 17.93 57.77 18.31 56.42 18.38C54.33 18.49 53.91 19.02 53.59 21.96C53.38 23.85 52.81 25.31 52.33 25.2C51.82 25.09 51.8 24.01 52.27 22.64C53.06 20.37 52.99 20.29 50.5 20.79C49.07 21.08 47.26 21.76 46.47 22.31C45.68 22.86 43.41 23.51 41.44 23.76C39.47 24.01 36.04 24.89 33.82 25.72C31.6 26.55 28.66 27.08 27.27 26.89C25.89 26.7 24.72 26.89 24.67 27.3C24.62 27.71 24.03 27.66 23.35 27.19C22.56 26.64 22.05 26.92 21.94 27.96C21.84 28.86 21.28 29.39 20.7 29.15C19.52 28.66 16.75 29.05 14.63 30.01C13.86 30.36 12.62 30.8 11.87 30.99C11.12 31.18 8.27003 32.6 5.54003 34.16C0.930031 36.79 -0.619969 38.87 0.900031 40.41C2.07003 41.59 7.57003 39.18 8.60003 37.03C9.16003 35.86 9.81003 34.94 10.05 34.99C10.28 35.04 10.18 35.7 9.81003 36.46C8.92003 38.31 10.07 38.42 13.38 36.8C14.89 36.06 16.42 35.75 16.78 36.11C17.13 36.47 17.47 36.34 17.53 35.83C17.59 35.32 20.73 34.78 24.52 34.64C28.31 34.5 31.86 34.11 32.42 33.79C32.98 33.46 34.77 33.4 36.42 33.65C38.06 33.9 39.92 33.81 40.55 33.45C41.18 33.09 42.5 33.28 43.49 33.89C44.64 34.59 45.61 34.56 46.17 33.81C46.88 32.86 47.35 32.94 48.64 34.24C50 35.61 50.53 35.59 52.22 34.09C53.92 32.59 54.18 32.58 54.02 34.02C53.87 35.36 54.33 35.68 56.28 35.57C57.63 35.5 58.96 35.18 59.23 34.87C60.45 33.51 62.89 33.75 62.73 35.21C62.63 36.08 63.01 36.52 63.62 36.25C64.2 35.99 65.98 35.98 67.57 36.22C69.16 36.46 71.09 36.26 71.84 35.76C72.92 35.05 73.28 35.15 73.52 36.23C73.7 37.06 73.93 36.88 74.1 35.78C74.3 34.45 74.83 34.2 76.04 34.85C77.09 35.42 77.54 35.32 77.26 34.57C76.97 33.82 77.45 33.74 78.58 34.35C79.84 35.03 80.56 34.8 81.08 33.54C81.48 32.56 82.17 32.13 82.61 32.57C83.04 33.01 84.04 32.67 84.81 31.81C86.12 30.37 86.21 30.38 86.06 31.99C85.97 32.95 86.28 33.81 86.76 33.92C87.23 34.03 87.61 33.77 87.6 33.35C87.59 32.93 87.72 31.73 87.9 30.69C88.21 28.81 88.23 28.82 89.27 31C89.93 32.37 90.39 32.72 90.5 31.91C90.61 31.1 91.25 30.97 92.21 31.56C93.1 32.1 94.28 31.97 95.01 31.24C95.7 30.55 96.83 30.1 97.51 30.26C98.22 30.42 98.55 30 98.27 29.27C97.93 28.37 98.46 28.36 100.1 29.23C102.02 30.24 102.36 30.16 102.06 28.74C101.79 27.43 102.06 27.25 103.24 27.96C104.12 28.5 105.31 28.36 106.03 27.64C106.72 26.95 108.02 26.54 108.91 26.74C109.8 26.94 110.58 26.66 110.64 26.11C110.7 25.57 111.55 25.3 112.53 25.52C113.54 25.75 114.12 25.42 113.87 24.77C113.58 24.02 114.19 24.02 115.59 24.76C116.86 25.43 117.8 25.48 117.86 24.89C117.92 24.34 118.93 24.22 120.1 24.64C121.27 25.05 122.27 24.99 122.33 24.5C122.38 24.01 122.91 23.81 123.49 24.06C124.56 24.52 127.83 23.9 132.6 22.34C134.03 21.87 135.74 21.61 136.4 21.76C137.06 21.91 138.35 20.83 139.27 19.36C140.27 17.76 141.62 16.85 142.64 17.08C143.58 17.29 144.39 17.06 144.44 16.57C144.59 15.25 150.17 14.53 150.94 15.73C152 17.4 156.11 16.91 156.78 15.04C157.29 13.62 158.2 13.5 161.83 14.39C164.26 14.99 167.33 15.24 168.64 14.96C171.18 14.42 183.75 14.86 186.56 15.6C187.49 15.84 188.78 15.68 189.45 15.25C190.11 14.81 191.13 14.76 191.72 15.13C192.3 15.5 194.1 15.49 195.71 15.1C197.32 14.71 200.18 14.74 202.07 15.17C204.63 15.74 205.9 15.46 207.08 14.06C208.63 12.2 208.67 12.21 209.69 14.39C210.59 16.3 211 16.49 212.68 15.74C213.76 15.27 215 15.24 215.43 15.68C215.87 16.12 216.85 16.08 217.61 15.58C218.37 15.08 219.51 15.04 220.15 15.48C220.87 15.98 221.61 15.51 222.08 14.25C222.84 12.25 222.87 12.25 223.92 14.42C224.85 16.35 225.01 16.41 225.17 14.95C225.35 13.34 226.7 13.14 229.9 14.24C230.72 14.52 231.44 14.28 231.51 13.7C231.57 13.12 232.57 12.86 233.73 13.12C234.89 13.38 236.16 13.16 236.55 12.63C237.07 11.93 237.4 12.02 237.75 12.93C238.02 13.62 238.89 14.06 239.69 13.89C241.45 13.53 241.07 10.93 238.83 7.95001C237.96 6.80001 237.64 5.94001 238.11 6.05001C239.34 6.33001 242.47 10.63 242.33 11.86C242.26 12.49 243.52 12.99 245.51 13.13C247.32 13.26 250.45 13.77 252.46 14.26C254.47 14.76 256.17 14.73 256.23 14.2C256.29 13.67 258.86 13.8 261.95 14.49C265.03 15.18 267.95 15.57 268.42 15.36C268.89 15.15 271.18 15.17 273.51 15.41C280.86 16.17 282.77 16.16 283.77 15.34C284.36 14.86 285.47 15.05 286.61 15.84C287.64 16.55 288.75 16.91 289.09 16.63C289.43 16.36 291.55 16.39 293.82 16.71C303.91 18.12 313.52 18.81 314.52 18.19C315.12 17.82 316.37 17.89 317.29 18.35C320.87 20.13 338.05 24.15 341.1 23.92C343.81 23.71 344.37 23.24 344.69 20.87C345.02 18.47 344.78 18.07 343.06 18.06C341.94 18.06 340.52 17.22 339.85 16.17C338.46 13.98 338.31 13.92 337.09 14.87L337.13 14.89ZM233.06 7.92001C233 8.46001 232.54 8.82001 232.04 8.70001C231.54 8.59001 231.41 8.10001 231.77 7.63001C232.12 7.15001 232.58 6.80001 232.79 6.85001C233 6.90001 233.12 7.38001 233.06 7.92001ZM235.01 11.12C234.02 11.93 233.46 10.25 234.33 9.08001C234.99 8.19001 235.19 8.24001 235.37 9.31001C235.49 10.04 235.33 10.86 235.01 11.12ZM195.15 6.53001C195.09 7.07001 194.63 7.43001 194.13 7.31001C193.63 7.20001 193.5 6.71001 193.86 6.24001C194.21 5.76001 194.67 5.41001 194.88 5.46001C195.09 5.51001 195.21 5.99001 195.15 6.53001ZM139.19 16.3C139.13 16.84 138.67 17.2 138.17 17.08C137.67 16.97 137.54 16.48 137.9 16.01C138.25 15.53 138.71 15.18 138.92 15.23C139.13 15.28 139.25 15.76 139.19 16.3ZM137.89 20.06C137.83 20.6 137.39 20.96 136.92 20.86C136.45 20.75 136.11 20.22 136.17 19.68C136.23 19.14 136.67 18.78 137.14 18.88C137.61 18.99 137.95 19.52 137.89 20.06ZM128.01 21.34C127.89 22.38 126.19 22.45 125.8 21.43C125.56 20.81 125.98 20.44 126.72 20.61C127.46 20.78 128.04 21.11 128.02 21.35L128.01 21.34ZM63.7 26.6C63.56 27.89 62.44 28.51 61.67 27.74C60.85 26.91 61.81 25.34 62.98 25.6C63.43 25.7 63.75 26.15 63.7 26.61V26.6ZM78.69 31.13C78.34 31.61 78.72 32.15 79.54 32.33C81.69 32.81 80.68 33.21 77.36 33.19C74.06 33.17 73.69 31.85 76.73 30.91C79.39 30.09 79.46 30.1 78.7 31.13H78.69ZM54.39 30.76C54.33 31.3 54.11 31.71 53.9 31.66C53.69 31.61 53.33 31.08 53.09 30.47C52.85 29.86 53.08 29.45 53.58 29.57C54.08 29.68 54.45 30.22 54.39 30.76Z"
              fill="#FFB31F"
              stroke="transparent"
              strokeWidth="3"
              strokeLinecap="butt"
              clipPath="url(#revealClip)"
            />
          </svg>
        </section>

        <section className="mt-11 flex flex-col sm:justify-center lg:mt-[75px] lg:flex-row lg:gap-16 2xl:gap-24 ">
          <section className="mx-auto relative sm:mx-auto md:h-[273px] md:w-[485.33px] lg:relative lg:basis-1/2 lg:h-auto xl:w-[760px] xl:left-0 xl:flex-grow xl:overflow-hidden xl:h-[409px]">
            <svg
              width="707"
              height="482"
              className="h-full w-full"
              viewBox="0 0 707 482"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2257_5319)">
                <path
                  d="M66 355.399V363.542C66 398.628 86.7703 430.387 118.915 444.45L157.814 461.468C172.996 468.111 189.155 472.246 205.661 473.714L325.072 484.332C345.049 486.108 365.132 486.379 385.15 485.143L584.008 472.866C598.672 471.96 613.077 468.577 626.61 462.86L655.245 450.763C683.974 438.627 703.161 411.049 704.552 379.893C705.481 359.09 698.348 338.73 684.638 323.056L673.998 310.892C669.539 305.795 666.014 299.952 663.583 293.63L659.236 282.323C653.296 266.874 638.454 256.679 621.902 256.679C611.787 256.679 602.047 252.847 594.644 245.954L566.755 219.986C552.017 206.262 534.197 196.28 514.797 190.878L482.265 181.821C464.582 176.898 445.613 180.596 431.074 191.8L417.319 202.4C403.61 212.965 384.386 212.532 371.166 201.36C369.387 199.856 367.469 198.525 365.437 197.384L346.851 186.949C331.73 178.459 314.68 174 297.339 174H295.179C279.254 174 263.596 178.095 249.71 185.891L240.536 191.042C231.163 196.305 223.481 204.125 218.386 213.59L213.896 221.931C206.782 235.149 192.983 243.392 177.973 243.392H174.246C158.607 243.392 144.786 253.561 140.133 268.491L138.754 272.915C134.921 285.213 123.535 293.59 110.654 293.59C100.898 293.59 91.7769 298.423 86.2989 306.495L76.6654 320.69C69.7155 330.931 66 343.022 66 355.399Z"
                  fill="#F0F0FD"
                />
                <mask
                  id="mask0_2257_5319"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="-203"
                  y="0"
                  width="858"
                  height="483"
                >
                  <path
                    d="M654.996 0H-202.381V482.274H654.996V0Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_2257_5319)">
                  <path
                    d="M626.494 476.892V2.06445"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M596.514 476.892V2.06396"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M566.537 476.892V2.06445"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M536.561 476.892V2.06445"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M506.578 476.892V2.06445"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M476.6 476.892V2.06445"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M446.621 476.892V2.06396"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M416.643 476.892V2.06396"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M386.662 476.892V2.06445"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M356.686 476.892V2.06396"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M326.703 476.892V2.06396"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M296.727 476.892V2.06445"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M266.748 476.892V2.06445"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M236.771 476.892V2.06396"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M215.849 465.979H219.208"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M225.849 465.979H700.687"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M215.849 436H219.208"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M225.849 436H700.687"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M215.849 406.021H219.208"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M225.849 406.021H700.687"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M215.849 376.042H219.208"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M225.849 376.042H700.687"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M215.849 346.063H219.208"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M225.849 346.063H700.687"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M215.849 316.084H219.208"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M225.849 316.084H700.687"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M215.849 286.105H219.208"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M225.849 286.105H700.687"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M215.849 256.127H219.208"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M225.849 256.127H700.687"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M215.849 226.148H219.208"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M225.849 226.148H700.687"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M215.849 196.169H219.208"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M225.849 196.169H700.687"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M215.849 166.19H219.208"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M225.849 166.19H700.687"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M215.849 136.211H219.208"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M225.849 136.211H700.687"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M215.849 106.232H219.208"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M225.849 106.232H700.687"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M215.849 76.2534H219.208"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M225.849 76.2534H700.687"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M215.849 46.2749H219.208"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M225.849 46.2749H700.687"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M215.85 16.2959H219.208"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M225.85 16.2959H700.688"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M215.847 476.891V2.06348"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M185.871 476.892V2.06396"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M155.891 476.892V2.06396"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M125.916 476.891V2.06348"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M95.9355 476.892V2.06396"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M65.9551 476.892V2.06396"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M35.9766 476.892V2.06396"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M5.99805 476.892V2.06396"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M-244.75 465.979H230.088"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M233.408 465.979H236.767"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M-244.75 436H230.088"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M233.408 436H236.767"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M-244.75 406.021H230.088"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M233.408 406.021H236.767"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M-244.75 376.043H230.088"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M233.408 376.043H236.767"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M-244.75 346.063H230.088"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M233.408 346.063H236.767"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M-244.75 316.085H230.088"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M233.408 316.085H236.767"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M-244.75 286.106H230.088"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M233.408 286.106H236.767"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M-244.75 256.127H230.088"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M233.408 256.127H236.767"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M-244.75 226.148H230.088"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M233.408 226.148H236.767"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M-244.75 196.169H230.088"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M233.408 196.169H236.767"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M-244.75 166.19H230.088"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M233.408 166.19H236.767"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M-244.75 136.212H230.088"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M233.408 136.212H236.767"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M-244.75 106.232H230.088"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M233.408 106.232H236.767"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M-244.75 76.2544H230.088"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M233.408 76.2544H236.767"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M-244.75 46.2749H230.088"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M233.408 46.2749H236.767"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M-244.75 16.2959H230.088"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                    stroke-dasharray="6.64 6.64"
                  />
                  <path
                    d="M233.408 16.2959H236.767"
                    stroke="#E4E4FD"
                    stroke-width="0.646024"
                    stroke-miterlimit="10"
                  />
                </g>
                <path
                  d="M570.887 206.051C593.089 204.472 609.809 185.194 608.231 162.992C606.653 140.789 587.375 124.07 565.172 125.648C542.969 127.226 526.25 146.504 527.828 168.707C529.406 190.909 548.684 207.629 570.887 206.051Z"
                  fill="#8BA026"
                />
                <path
                  d="M604.075 170.643C606.743 150.718 592.753 132.403 572.827 129.735C552.902 127.068 534.587 141.058 531.92 160.983C529.252 180.908 543.242 199.223 563.167 201.891C583.093 204.558 601.407 190.568 604.075 170.643Z"
                  fill="#A7B82C"
                />
                <path
                  d="M573.393 198.897C591.648 195.934 604.044 178.734 601.082 160.479C598.119 142.225 580.919 129.828 562.664 132.79C544.41 135.753 532.013 152.953 534.976 171.208C537.938 189.463 555.138 201.859 573.393 198.897Z"
                  fill="white"
                />
                <path
                  d="M568.018 135.854V142.965"
                  stroke="#302017"
                  stroke-width="0.870416"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M589.232 144.641L584.203 149.67"
                  stroke="#302017"
                  stroke-width="0.870416"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M598.019 165.855H590.908"
                  stroke="#302017"
                  stroke-width="0.870416"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M589.232 187.07L584.203 182.042"
                  stroke="#302017"
                  stroke-width="0.870416"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M568.018 195.857V188.745"
                  stroke="#302017"
                  stroke-width="0.870416"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M546.803 187.07L551.831 182.042"
                  stroke="#302017"
                  stroke-width="0.870416"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M538.016 165.855H545.127"
                  stroke="#302017"
                  stroke-width="0.870416"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M546.803 144.641L551.831 149.67"
                  stroke="#302017"
                  stroke-width="0.870416"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M572.271 124.224C572.271 126.192 570.675 127.788 568.706 127.788C566.738 127.788 565.143 126.192 565.143 124.224C565.143 122.255 566.739 120.659 568.706 120.659C570.675 120.659 572.271 122.255 572.271 124.224Z"
                  stroke="#8BA026"
                  stroke-width="1.74083"
                  stroke-miterlimit="10"
                />
                <path
                  d="M568.016 166.744H578.264"
                  stroke="#F7478F"
                  stroke-width="1.74083"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M568.016 152.077V166.745"
                  stroke="#F7478F"
                  stroke-width="3.48171"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M571.216 167.539C571.63 165.787 570.545 164.032 568.793 163.618C567.041 163.204 565.286 164.289 564.872 166.041C564.458 167.793 565.543 169.548 567.295 169.962C569.047 170.376 570.802 169.291 571.216 167.539Z"
                  fill="#EEBC33"
                />
                <path
                  d="M396.602 67.2788C396.602 67.2788 425.679 72.1408 455.462 64.6606C455.462 64.6606 450.082 130.862 453.638 139.09C453.638 139.09 413.433 136.846 394.732 139.09C394.732 139.09 394.359 72.515 396.602 67.2788Z"
                  fill="#C6C6DB"
                />
                <path
                  d="M395.106 64.6606C395.106 64.6606 425.679 72.1408 455.462 64.6606C455.462 64.6606 448.586 128.244 452.142 136.472C452.142 136.472 411.937 134.228 393.236 136.472C393.236 136.472 392.862 69.8969 395.106 64.6606Z"
                  fill="#E4E4FD"
                />
                <path
                  d="M425.384 103.944C425.384 103.944 430.388 122.177 417.75 123.439"
                  stroke="#A7B82C"
                  stroke-width="1.03095"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M422.437 89.923C422.437 89.923 422.373 89.7542 422.269 89.4626C421.715 87.9028 420.036 82.8336 421.09 81.3774C422.341 79.6492 427.243 79.7452 428.393 82.0494C429.542 84.3541 424.741 89.9225 424.741 89.9225"
                  fill="#CF3B78"
                />
                <path
                  d="M424.801 90.3801C424.801 90.3801 424.875 90.2153 425.008 89.9358C425.718 88.4407 428.116 83.6698 429.891 83.3853C431.998 83.0477 435.396 86.5817 434.579 89.0239C433.763 91.4661 426.431 92.0095 426.431 92.0095"
                  fill="#F7478F"
                />
                <path
                  d="M426.148 92.3738C426.148 92.3738 426.317 92.3095 426.609 92.2059C428.169 91.6513 433.237 89.9732 434.694 91.027C436.422 92.2778 436.326 97.18 434.022 98.3295C431.718 99.4789 426.149 94.6785 426.149 94.6785"
                  fill="#CF3B78"
                />
                <path
                  d="M425.69 94.7368C425.69 94.7368 425.855 94.8105 426.134 94.9436C427.629 95.654 432.4 98.052 432.685 99.827C433.022 101.933 429.488 105.332 427.046 104.515C424.604 103.699 424.061 96.3663 424.061 96.3663"
                  fill="#F7478F"
                />
                <path
                  d="M423.698 96.084C423.698 96.084 423.762 96.2528 423.866 96.5444C424.42 98.1042 426.099 103.173 425.045 104.63C423.794 106.358 418.892 106.262 417.742 103.958C416.593 101.653 421.394 96.0844 421.394 96.0844"
                  fill="#CF3B78"
                />
                <path
                  d="M421.334 95.6275C421.334 95.6275 421.26 95.7923 421.128 96.0718C420.417 97.5669 418.019 102.338 416.244 102.623C414.138 102.96 410.739 99.4259 411.556 96.9837C412.372 94.5415 419.705 93.998 419.705 93.998"
                  fill="#F7478F"
                />
                <path
                  d="M419.987 93.6335C419.987 93.6335 419.818 93.6982 419.527 93.8014C417.967 94.356 412.898 96.0346 411.442 94.9807C409.714 93.7299 409.81 88.8277 412.114 87.6783C414.419 86.5288 419.987 91.3293 419.987 91.3293"
                  fill="#CF3B78"
                />
                <path
                  d="M420.445 91.2705C420.445 91.2705 420.28 91.1968 420.001 91.0637C418.507 90.3528 413.735 87.9553 413.45 86.1803C413.113 84.0734 416.647 80.6752 419.089 81.4919C421.531 82.3087 422.074 89.641 422.074 89.641"
                  fill="#F7478F"
                />
                <path
                  d="M426.434 92.7671C426.434 94.5939 424.953 96.0747 423.126 96.0747C421.299 96.0747 419.818 94.5939 419.818 92.7671C419.818 90.9402 421.299 89.4595 423.126 89.4595C424.953 89.4595 426.434 90.9402 426.434 92.7671Z"
                  fill="#EEBC33"
                  stroke="#EEBC33"
                  stroke-width="0.681391"
                  stroke-miterlimit="10"
                />
                <path
                  d="M426 115.536C434.405 116.001 434.703 106.842 434.703 106.842C427.781 107.123 426.197 114.322 426.197 114.322C426.197 114.322 429.002 114.042 431.714 109.741"
                  stroke="#A7B82C"
                  stroke-width="1.03095"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M422.049 61.9601C422.049 61.9601 425.276 61.539 426.749 61.9601C428.22 62.3808 426.257 73.5436 424.994 73.0113C423.732 72.479 423.732 72.479 423.732 72.479L422.049 61.9601Z"
                  fill="#D98B47"
                />
                <path
                  d="M311.04 69.0796C311.04 69.0796 339.254 74.0519 368.259 67.0366C368.259 67.0366 362.468 131.322 365.852 139.348C365.852 139.348 326.802 136.825 308.611 138.847C308.611 138.847 308.815 74.1484 311.04 69.0796Z"
                  fill="#C6C6DB"
                />
                <path
                  d="M309.608 66.5229C309.608 66.5229 339.254 74.0522 368.259 67.0369C368.259 67.0369 361.036 128.765 364.421 136.792C364.421 136.792 325.371 134.269 307.18 136.29C307.18 136.29 307.383 71.5922 309.608 66.5229Z"
                  fill="#E4E4FD"
                />
                <path
                  d="M314.701 110.366C313.997 110.36 313.4 109.841 313.312 109.143C313.073 107.266 313.138 103.761 316.643 102.699C321.509 101.225 323.023 101.542 324.362 98.7226C325.701 95.9031 323.413 91.6367 331.011 89.8836C338.61 88.1304 346.787 89.5982 347.767 93.1046C348.747 96.6109 348.922 99.747 350.33 100.568C351.738 101.389 356.084 101.63 357.17 104.572C357.855 106.426 357.655 108.393 357.414 109.593C357.28 110.26 356.694 110.735 356.015 110.729L314.701 110.366Z"
                  fill="#CF3B78"
                />
                <path
                  d="M357.429 107.704C357.296 108.37 356.71 108.845 356.03 108.839L314.717 108.477C314.014 108.471 313.417 107.952 313.328 107.254C313.314 107.143 313.301 107.025 313.29 106.904C313.191 107.73 313.233 108.525 313.312 109.143C313.4 109.842 313.997 110.36 314.701 110.367L356.014 110.729C356.694 110.735 357.279 110.259 357.413 109.593C357.568 108.821 357.703 107.73 357.599 106.557C357.557 106.984 357.496 107.374 357.429 107.704Z"
                  fill="#45437E"
                />
                <path
                  d="M331.415 110.665C331.389 113.569 329.015 115.902 326.111 115.876C323.208 115.851 320.875 113.477 320.901 110.573C320.926 107.67 323.3 105.337 326.204 105.362C329.107 105.387 331.44 107.762 331.415 110.665Z"
                  fill="#302017"
                />
                <path
                  d="M328.545 110.986C328.533 112.305 327.454 113.366 326.135 113.354C324.816 113.342 323.756 112.264 323.767 110.945C323.779 109.626 324.857 108.566 326.177 108.577C327.496 108.588 328.556 109.667 328.545 110.986Z"
                  fill="#45437E"
                />
                <path
                  d="M320.519 110.916C320.85 110.919 321.141 110.694 321.216 110.371C321.739 108.107 323.776 106.428 326.195 106.449C328.608 106.47 330.615 108.185 331.098 110.457C331.167 110.781 331.454 111.012 331.785 111.015H331.792C332.243 111.019 332.597 110.605 332.503 110.164C331.886 107.246 329.308 105.044 326.208 105.017C323.1 104.99 320.489 107.146 319.822 110.054C319.721 110.493 320.067 110.912 320.519 110.916Z"
                  fill="#45437E"
                />
                <path
                  d="M349.917 110.828C349.892 113.731 347.517 116.064 344.614 116.039C341.71 116.013 339.377 113.639 339.403 110.735C339.428 107.832 341.802 105.499 344.706 105.524C347.609 105.55 349.942 107.924 349.917 110.828Z"
                  fill="#302017"
                />
                <path
                  d="M347.046 111.148C347.035 112.467 345.956 113.527 344.637 113.516C343.318 113.504 342.258 112.426 342.27 111.106C342.281 109.787 343.36 108.727 344.679 108.738C345.998 108.75 347.058 109.829 347.046 111.148Z"
                  fill="#45437E"
                />
                <path
                  d="M339.021 111.078C339.352 111.081 339.643 110.856 339.717 110.533C340.24 108.269 342.278 106.59 344.697 106.611C347.11 106.633 349.116 108.347 349.6 110.619C349.668 110.944 349.956 111.174 350.286 111.177H350.294C350.745 111.181 351.099 110.768 351.005 110.326C350.387 107.408 347.81 105.207 344.709 105.179C341.602 105.152 338.991 107.308 338.324 110.216C338.223 110.655 338.57 111.074 339.021 111.078Z"
                  fill="#45437E"
                />
                <path
                  d="M347.146 99.0429C347.142 96.8838 346.422 94.3287 345.99 92.9904C345.805 92.4156 345.338 91.9686 344.753 91.8168C334.786 89.2268 328.739 91.4252 327.771 92.6679C327.019 93.6347 326.537 97.1812 326.345 98.8607L347.146 99.0429Z"
                  fill="#45437E"
                />
                <path
                  d="M340.217 90.1043L339.605 90.0991L339.522 99.8531L340.134 99.8583L340.217 90.1043Z"
                  fill="#CF3B78"
                />
                <path
                  d="M339.497 99.8711L339.443 105.99"
                  stroke="#BD366D"
                  stroke-width="0.593957"
                  stroke-miterlimit="10"
                />
                <path
                  d="M337.875 65.0429C337.875 65.0429 341.015 64.6616 342.441 65.0831C343.868 65.5047 341.865 76.3353 340.643 75.8075C339.421 75.2797 339.421 75.2797 339.421 75.2797L337.875 65.0429Z"
                  fill="#D98B47"
                />
                <path
                  d="M239.025 40.6498L238.867 45.4123C238.842 46.1799 239.313 46.8765 240.035 47.1378L244.516 48.7596C246.131 49.3437 246.054 51.6533 244.404 52.1293L239.826 53.4511C239.088 53.6641 238.572 54.3281 238.546 55.0953L238.389 59.8578C238.332 61.5738 236.112 62.2151 235.149 60.7928L232.478 56.8471C232.047 56.2112 231.256 55.925 230.518 56.138L225.94 57.4598C224.29 57.9362 222.995 56.0232 224.05 54.6679L226.977 50.9075C227.448 50.3016 227.476 49.4607 227.045 48.8248L224.373 44.8791C223.411 43.4573 224.83 41.634 226.444 42.2186L230.926 43.8404C231.648 44.1017 232.456 43.8686 232.927 43.2626L235.855 39.5022C236.909 38.1474 239.082 38.9333 239.025 40.6498Z"
                  fill="#EEBC33"
                />
                <path
                  d="M462.245 206.5L462.088 211.263C462.062 212.031 462.534 212.727 463.256 212.988L467.737 214.61C469.351 215.194 469.275 217.503 467.625 217.98L463.047 219.302C462.309 219.515 461.793 220.179 461.767 220.946L461.609 225.709C461.553 227.425 459.333 228.066 458.37 226.644L455.698 222.699C455.268 222.063 454.477 221.777 453.739 221.99L449.161 223.311C447.511 223.788 446.216 221.874 447.27 220.519L450.197 216.759C450.669 216.153 450.697 215.312 450.267 214.676L447.594 210.731C446.632 209.309 448.051 207.486 449.666 208.07L454.147 209.692C454.869 209.953 455.677 209.72 456.149 209.114L459.075 205.353C460.13 203.998 462.302 204.784 462.245 206.5Z"
                  fill="#EEBC33"
                />
                <path
                  d="M504.03 97.0349L503.909 99.3432C503.89 99.7151 504.113 100.057 504.46 100.191L506.618 101.019C507.396 101.317 507.338 102.436 506.533 102.652L504.3 103.251C503.94 103.347 503.683 103.665 503.664 104.037L503.544 106.345C503.5 107.177 502.418 107.467 501.964 106.769L500.705 104.83C500.501 104.518 500.12 104.372 499.761 104.468L497.528 105.067C496.723 105.283 496.113 104.343 496.636 103.696L498.091 101.899C498.325 101.609 498.346 101.202 498.144 100.89L496.884 98.9511C496.43 98.2527 497.135 97.3815 497.913 97.6798L500.071 98.5077C500.419 98.6412 500.813 98.5354 501.047 98.2455L502.501 96.4486C503.027 95.8016 504.073 96.203 504.03 97.0349Z"
                  fill="#EEBC33"
                />
                <path
                  d="M225.21 259.189L227.013 262.199C227.304 262.684 227.874 262.927 228.425 262.8L231.844 262.015C233.076 261.732 233.951 263.191 233.121 264.145L230.816 266.79C230.444 267.217 230.39 267.833 230.68 268.318L232.483 271.328C233.133 272.412 232.016 273.695 230.853 273.2L227.625 271.825C227.104 271.603 226.501 271.742 226.129 272.168L223.824 274.813C222.993 275.767 221.428 275.1 221.54 273.841L221.85 270.346C221.9 269.783 221.581 269.251 221.061 269.03L217.833 267.655C216.67 267.159 216.82 265.465 218.052 265.182L221.472 264.397C222.023 264.271 222.43 263.804 222.48 263.24L222.79 259.745C222.902 258.486 224.559 258.105 225.21 259.189Z"
                  fill="#EEBC33"
                />
                <path
                  d="M275.371 149.272H150.07V156.177H275.371V149.272Z"
                  fill="#F5AB6B"
                />
                <path
                  d="M176.713 173.026H166.724V221.652H176.713V173.026Z"
                  fill="#FFD86E"
                />
                <path
                  d="M176.713 176.63H166.724V178.73H176.713V176.63Z"
                  fill="white"
                />
                <path
                  d="M176.713 180.546H166.724V182.647H176.713V180.546Z"
                  fill="white"
                />
                <path
                  d="M176.713 215.2H166.724V217.299H176.713V215.2Z"
                  fill="white"
                />
                <path
                  d="M176.715 221.652H186.703V173.027H176.715V221.652Z"
                  fill="#F7478F"
                />
                <path
                  d="M196.69 173.026H186.701V221.652H196.69V173.026Z"
                  fill="#8BA026"
                />
                <path
                  d="M196.69 176.63H186.701V178.73H196.69V176.63Z"
                  fill="white"
                />
                <path
                  d="M196.69 215.2H186.701V217.299H196.69V215.2Z"
                  fill="white"
                />
                <path
                  d="M204.77 221.807L214.619 220.148L206.542 172.199L196.693 173.858L204.77 221.807Z"
                  fill="#62A4DA"
                />
                <path
                  d="M204.176 218.243L214.025 216.583L213.677 214.513L203.827 216.172L204.176 218.243Z"
                  fill="white"
                />
                <path
                  d="M203.52 214.394L213.369 212.735L213.02 210.664L203.171 212.323L203.52 214.394Z"
                  fill="white"
                />
                <path
                  d="M260.024 190.959C260.024 191.657 254.562 192.22 247.817 192.22C241.073 192.22 235.6 191.658 235.6 190.959C235.6 190.271 241.073 189.708 247.817 189.708C254.561 189.708 260.024 190.271 260.024 190.959Z"
                  fill="#62A4DA"
                />
                <path
                  d="M242.96 176.072L237.25 177.008L241.486 202.841L247.196 201.905L242.96 176.072Z"
                  fill="#A7B82C"
                />
                <path
                  d="M244.004 200.272C243.314 200.385 242.664 199.918 242.551 199.228L239.417 180.116C239.304 179.427 239.771 178.776 240.461 178.663C241.15 178.55 241.801 179.018 241.914 179.707L245.047 198.819C245.161 199.509 244.693 200.159 244.004 200.272Z"
                  fill="#C4D933"
                />
                <path
                  d="M237.26 177.019L242.969 176.083L239.979 171.455C239.622 170.902 238.778 171.04 238.615 171.679L237.26 177.019Z"
                  fill="#A7B82C"
                />
                <path
                  d="M247.194 201.914L241.484 202.851L241.665 203.95L247.374 203.014L247.194 201.914Z"
                  fill="#C4D933"
                />
                <path
                  d="M242.958 176.083L237.248 177.019L237.324 177.481L243.033 176.545L242.958 176.083Z"
                  fill="#C4D933"
                />
                <path
                  d="M259.565 177.172L254.467 175.203L245.557 198.271L250.655 200.24L259.565 177.172Z"
                  fill="#F7478F"
                />
                <path
                  d="M248.839 197.389C248.223 197.151 247.917 196.46 248.155 195.844L254.747 178.778C254.985 178.162 255.677 177.855 256.293 178.093C256.909 178.331 257.215 179.023 256.977 179.639L250.385 196.705C250.147 197.321 249.455 197.627 248.839 197.389Z"
                  fill="#F76DA5"
                />
                <path
                  d="M254.471 175.223L259.569 177.192L259.348 171.991C259.322 171.37 258.568 171.079 258.131 171.521L254.471 175.223Z"
                  fill="#F7478F"
                />
                <path
                  d="M250.649 200.247L245.551 198.277L245.171 199.26L250.27 201.229L250.649 200.247Z"
                  fill="#F76DA5"
                />
                <path
                  d="M259.556 177.21L254.457 175.24L254.298 175.653L259.396 177.622L259.556 177.21Z"
                  fill="#F76DA5"
                />
                <path
                  d="M251.55 176.85L246.238 175.562L240.412 199.597L245.724 200.885L251.55 176.85Z"
                  fill="#EEBC33"
                />
                <path
                  d="M243.533 198.251C242.892 198.096 242.498 197.45 242.653 196.809L246.963 179.028C247.118 178.387 247.765 177.993 248.406 178.148C249.047 178.304 249.441 178.95 249.285 179.591L244.975 197.372C244.82 198.013 244.174 198.407 243.533 198.251Z"
                  fill="#FFD86E"
                />
                <path
                  d="M246.227 175.539L251.538 176.827L250.641 171.7C250.534 171.088 249.748 170.897 249.372 171.392L246.227 175.539Z"
                  fill="#EEBC33"
                />
                <path
                  d="M245.728 200.878L240.416 199.59L240.168 200.614L245.48 201.901L245.728 200.878Z"
                  fill="#FFD86E"
                />
                <path
                  d="M251.556 176.844L246.244 175.556L246.14 175.986L251.452 177.274L251.556 176.844Z"
                  fill="#FFD86E"
                />
                <path
                  d="M260.024 190.959V222.316C251.883 224.106 243.741 224.106 235.6 222.316V190.959C235.6 191.657 241.073 192.22 247.817 192.22C254.561 192.22 260.024 191.657 260.024 190.959Z"
                  fill="#57B4F7"
                />
                <path
                  d="M275.371 221.46H150.07V228.365H275.371V221.46Z"
                  fill="#F5AB6B"
                />
                <path
                  d="M204.964 142.015H192.826V149.117H204.964V142.015Z"
                  fill="#A7B82C"
                />
                <path
                  d="M199.021 142.015H192.826V149.117H199.021V142.015Z"
                  fill="#C4D933"
                />
                <path
                  d="M204.964 142.015L199.021 142.427V149.116L198.082 142.015H204.964Z"
                  fill="#D9F038"
                />
                <path
                  d="M228.064 140.378H213.127V149.116H228.064V140.378Z"
                  fill="#A7B82C"
                />
                <path
                  d="M220.75 140.378H213.127V149.116H220.75V140.378Z"
                  fill="#C4D933"
                />
                <path
                  d="M228.062 140.377L220.749 140.884V149.116L219.594 140.377H228.062Z"
                  fill="#D9F038"
                />
                <path
                  d="M225.262 121.455V141.992H213.128V133.008C213.128 131.879 212.672 130.86 211.931 130.119C211.195 129.379 210.172 128.922 209.043 128.922C206.79 128.922 204.962 130.75 204.962 133.008V141.992H192.824V121.455H225.262Z"
                  fill="#F7478F"
                />
                <path
                  d="M208.264 128.533C206.011 128.533 204.183 130.361 204.183 132.619V141.603H192.822V141.992H204.96V133.008C204.96 130.75 206.788 128.922 209.041 128.922C209.545 128.922 210.026 129.018 210.471 129.184C209.835 128.774 209.078 128.533 208.264 128.533Z"
                  fill="#CF3B78"
                />
                <path
                  d="M224.482 121.455V141.604H213.127V141.993H225.26V121.455H224.482Z"
                  fill="#CF3B78"
                />
                <path
                  d="M228.062 121.457H225.262V141.993H228.062V121.457Z"
                  fill="#CF3B78"
                />
                <path
                  d="M191.512 121.457H229.431L210.471 104.854L191.512 121.457Z"
                  fill="#FFD86E"
                />
                <path
                  d="M210.471 104.854L209.334 105.85L227.156 121.457H229.431L210.471 104.854Z"
                  fill="#EEBC33"
                />
                <path
                  d="M254.623 134.823H230.119V149.16H254.623V134.823Z"
                  fill="#62A4DA"
                />
                <path
                  d="M242.625 134.823H230.119V149.16H242.625V134.823Z"
                  fill="#6EB9F5"
                />
                <path
                  d="M254.624 134.823L242.626 135.655V149.16L240.73 134.823H254.624Z"
                  fill="#85C7FF"
                />
                <path
                  d="M189.799 126.222H175.018V149.273H189.799V126.222Z"
                  fill="#EEBC33"
                />
                <path
                  d="M189.799 126.222C189.799 126.732 186.49 127.146 182.408 127.146C178.327 127.146 175.018 126.732 175.018 126.222C175.018 125.712 178.327 125.298 182.408 125.298C186.49 125.298 189.799 125.712 189.799 126.222Z"
                  fill="#FFD86E"
                />
                <path
                  d="M248.579 115.314H236.168V134.67H248.579V115.314Z"
                  fill="#57B4F7"
                />
                <path
                  d="M248.577 115.315C248.577 115.743 245.799 116.09 242.372 116.09C238.944 116.09 236.166 115.743 236.166 115.315C236.166 114.886 238.944 114.539 242.372 114.539C245.799 114.539 248.577 114.886 248.577 115.315Z"
                  fill="#6EB9F5"
                />
                <mask
                  id="mask1_2257_5319"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="-203"
                  y="0"
                  width="858"
                  height="483"
                >
                  <path
                    d="M654.996 0H-202.381V482.274H654.996V0Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask1_2257_5319)">
                  <path
                    d="M500.57 -2.70654C500.57 -2.70654 503.897 13.3679 523.514 15.017C523.514 15.017 498.287 36.2675 490.45 31.4769C484.24 27.6808 500.57 -2.70654 500.57 -2.70654Z"
                    fill="#A7B82C"
                  />
                  <path
                    d="M536.954 23.0557C536.954 23.0557 543.864 37.9459 563.34 35.071C563.34 35.071 543.632 61.5215 534.908 58.6471C527.995 56.3697 536.954 23.0557 536.954 23.0557Z"
                    fill="#F7478F"
                  />
                  <path
                    d="M582.564 42.8159C582.564 42.8159 592.251 56.0677 610.789 49.4414C610.789 49.4414 596.632 79.2339 587.515 78.1206C580.29 77.2383 582.564 42.8159 582.564 42.8159Z"
                    fill="#85C7FF"
                  />
                  <path
                    d="M629.066 52.8818C629.066 52.8818 641.203 63.9344 658.046 53.7423C658.046 53.7423 650.119 85.7604 640.962 86.4892C633.707 87.0657 629.066 52.8818 629.066 52.8818Z"
                    fill="#EEBC33"
                  />
                  <path
                    d="M480.174 -24.8198C480.174 -24.8198 537.479 60.3699 679.228 54.1272"
                    stroke="#8C5D43"
                    stroke-width="1.16277"
                    stroke-miterlimit="10"
                  />
                </g>
                <path
                  d="M375.583 465.979C514.962 465.979 627.95 454.006 627.95 439.236C627.95 424.466 514.962 412.493 375.583 412.493C236.205 412.493 123.217 424.466 123.217 439.236C123.217 454.006 236.205 465.979 375.583 465.979Z"
                  fill="#F0F0FD"
                />
                <path
                  d="M478.337 447.289H437.462C434.018 447.289 431.226 444.497 431.226 441.054C431.226 437.611 434.018 434.819 437.462 434.819H478.337C481.78 434.819 484.572 437.611 484.572 441.054C484.572 444.498 481.78 447.289 478.337 447.289Z"
                  fill="#CF3B78"
                />
                <path
                  d="M472.904 440.184H436.875C435.822 440.184 434.969 439.33 434.969 438.277V438.037C434.969 436.984 435.822 436.13 436.875 436.13H472.904C473.957 436.13 474.811 436.984 474.811 438.037V438.277C474.811 439.33 473.957 440.184 472.904 440.184Z"
                  fill="#F7478F"
                />
                <path
                  d="M475.928 434.793H439.866C436.422 434.793 433.631 432.001 433.631 428.558C433.631 425.115 436.422 422.323 439.866 422.323H475.928C479.372 422.323 482.163 425.115 482.163 428.558C482.163 432.001 479.372 434.793 475.928 434.793Z"
                  fill="#57B4F7"
                />
                <path
                  d="M471.65 422.296H444.145C440.701 422.296 437.91 419.505 437.91 416.061C437.91 412.618 440.701 409.826 444.145 409.826H471.65C475.094 409.826 477.886 412.618 477.886 416.061C477.886 419.505 475.094 422.296 471.65 422.296Z"
                  fill="#62A4DA"
                />
                <path
                  d="M467.907 409.799H447.889C444.446 409.799 441.654 407.008 441.654 403.564C441.654 400.121 444.445 397.329 447.889 397.329H467.907C471.351 397.329 474.142 400.121 474.142 403.564C474.143 407.007 471.351 409.799 467.907 409.799Z"
                  fill="#A7B82C"
                />
                <path
                  d="M470.019 428.558H439.494C438.251 428.558 437.242 427.55 437.242 426.306C437.242 425.062 438.25 424.054 439.494 424.054H470.019C471.262 424.054 472.271 425.062 472.271 426.306C472.271 427.55 471.262 428.558 470.019 428.558Z"
                  fill="#5549FA"
                />
                <path
                  d="M466.028 414.704H443.018C442.08 414.704 441.32 413.944 441.32 413.006C441.32 412.069 442.08 411.309 443.018 411.309H466.028C466.965 411.309 467.725 412.069 467.725 413.006C467.725 413.944 466.965 414.704 466.028 414.704Z"
                  fill="#6EB9F5"
                />
                <path
                  d="M463.042 401.786H446.003C445.244 401.786 444.629 401.171 444.629 400.411V400.19C444.629 399.431 445.244 398.816 446.003 398.816H463.042C463.801 398.816 464.416 399.431 464.416 400.19V400.411C464.416 401.171 463.801 401.786 463.042 401.786Z"
                  fill="#C4D933"
                />
                <path
                  d="M486.547 451.01H429.25C428.223 451.01 427.39 450.177 427.39 449.15C427.39 448.122 428.223 447.29 429.25 447.29H486.547C487.575 447.29 488.407 448.123 488.407 449.15C488.407 450.177 487.574 451.01 486.547 451.01Z"
                  fill="#D98B47"
                />
                <path
                  d="M459.989 397.329H455.806V381.213C455.806 380.058 456.743 379.122 457.898 379.122C459.052 379.122 459.989 380.058 459.989 381.213V397.329Z"
                  fill="#D98B47"
                />
                <path
                  d="M242.448 393.962H153.945V445.741H242.448V393.962Z"
                  fill="#A7B82C"
                />
                <path
                  d="M199.115 393.962H153.945V445.741H199.115V393.962Z"
                  fill="#C4D933"
                />
                <path
                  d="M242.448 393.962L199.115 396.966V445.741L192.268 393.962H242.448Z"
                  fill="#D9F038"
                />
                <path
                  d="M261.612 342.183H173.109V393.962H261.612V342.183Z"
                  fill="#EEBC33"
                />
                <path
                  d="M218.278 342.183H173.109V393.962H218.278V342.183Z"
                  fill="#FFD257"
                />
                <path
                  d="M261.612 342.183L218.279 345.187V393.962L211.432 342.183H261.612Z"
                  fill="#FFDD82"
                />
                <path
                  d="M226.694 304.417H163.004V341.679H226.694V304.417Z"
                  fill="#57B4F7"
                />
                <path
                  d="M195.509 304.417H163.004V341.679H195.509V304.417Z"
                  fill="#57B4F7"
                />
                <path
                  d="M226.694 304.417L195.51 306.578V341.679L190.582 304.417H226.694Z"
                  fill="#62A4DA"
                />
                <path
                  d="M356.767 290.841C354.754 286.583 357.323 281.542 361.954 280.681C366.01 279.928 371.66 280.499 377.796 285.997C389.789 296.743 396.583 302.423 396.583 302.423L418.643 290.479C418.643 290.479 422.098 292.941 422.303 296.345C422.508 299.75 403.12 316.014 397.166 317.851C391.212 319.689 376.204 312.041 367.783 304.703C362.857 300.411 358.839 295.225 356.767 290.841Z"
                  fill="#985A46"
                />
                <path
                  d="M418.842 289.985C418.842 289.985 424.193 284.191 425.91 283.501C427.627 282.809 428.695 283.727 428.343 284.218C427.992 284.708 425.658 286.594 426.252 286.955C426.846 287.314 433.923 285.814 434.79 287.286C435.657 288.757 430.567 289.434 430.567 289.434C430.567 289.434 436.588 288.158 436.041 289.775C435.494 291.392 431.084 292.642 431.084 292.642C431.084 292.642 435.667 290.765 436.407 291.768C437.146 292.771 433.219 294.476 433.219 294.476C433.219 294.476 436.581 293.348 436.369 294.681C436.157 296.013 430.236 297.971 427.275 297.99C424.315 298.009 421.158 297.57 421.158 297.57L417.582 291.439L418.842 289.985Z"
                  fill="#985A46"
                />
                <path
                  d="M432.634 289.037C432.279 289.253 431.903 289.402 431.523 289.533C431.143 289.665 430.741 289.717 430.347 289.797C429.558 289.952 428.765 290.107 427.957 290.145C427.946 290.145 427.936 290.137 427.936 290.126C427.935 290.115 427.943 290.106 427.953 290.105C428.347 290.035 428.733 289.93 429.117 289.82C429.503 289.715 429.887 289.603 430.27 289.486C430.653 289.372 431.026 289.221 431.419 289.145C431.812 289.067 432.209 289.003 432.624 288.998C432.636 288.998 432.645 289.007 432.645 289.019C432.645 289.026 432.641 289.033 432.634 289.037Z"
                  fill="#6E4233"
                />
                <path
                  d="M433.345 291.885C432.976 292.108 432.587 292.264 432.192 292.402C431.798 292.541 431.382 292.602 430.974 292.689C430.565 292.775 430.155 292.858 429.743 292.929C429.329 292.989 428.914 293.067 428.488 293.045C428.477 293.045 428.469 293.035 428.469 293.024C428.469 293.014 428.478 293.006 428.487 293.005L428.491 293.005C428.899 292.974 429.301 292.844 429.698 292.733C430.098 292.624 430.496 292.503 430.892 292.378C431.29 292.257 431.677 292.098 432.085 292.015C432.492 291.929 432.903 291.857 433.333 291.846C433.345 291.845 433.354 291.854 433.355 291.866C433.355 291.875 433.351 291.881 433.345 291.885Z"
                  fill="#6E4233"
                />
                <path
                  d="M433.224 294.496C432.882 294.705 432.52 294.847 432.152 294.968C431.785 295.093 431.397 295.136 431.016 295.205C430.635 295.272 430.253 295.336 429.868 295.384C429.482 295.42 429.092 295.471 428.701 295.413C428.69 295.411 428.682 295.401 428.684 295.39C428.685 295.38 428.694 295.373 428.704 295.373H428.707C429.086 295.377 429.462 295.275 429.833 295.187C430.206 295.1 430.576 294.997 430.945 294.893C431.314 294.79 431.674 294.646 432.052 294.58C432.431 294.511 432.812 294.454 433.213 294.457C433.224 294.457 433.234 294.466 433.234 294.478C433.234 294.485 433.23 294.492 433.224 294.496Z"
                  fill="#6E4233"
                />
                <path
                  d="M368.853 305.912C368.853 305.912 357.52 303.926 355.868 291.384C354.511 281.089 361.614 276.097 370.894 278.521C380.842 281.119 383.086 290.58 383.086 290.58C383.086 290.58 386.845 290.006 387.235 290.815C387.626 291.624 385.158 293.019 384.987 293.865C384.817 294.711 384.95 296.017 383.184 296.625C381.418 297.233 382.644 298.663 380.938 300.025C379.231 301.387 378.454 301.17 378.011 302.16C377.569 303.15 377.171 304.891 376.281 305.122C375.39 305.352 374.543 306.215 373.871 307.284C373.2 308.354 372.329 310.584 371.394 310.413C370.459 310.243 368.853 305.912 368.853 305.912Z"
                  fill="#E4E4FD"
                />
                <path
                  d="M357.663 194.227C357.663 194.227 358.071 179.821 363.685 178.067C369.299 176.312 370.728 179.142 371.202 180.402C371.675 181.663 379.117 177.033 382.418 180.936C385.719 184.838 389.704 192.522 384.395 195.984C384.395 195.984 393.952 196.991 389.981 204.998C386.009 213.005 378.43 209.334 378.43 209.334C378.43 209.334 370.34 220.176 365.197 214.301C360.054 208.425 357.045 209.188 357.045 209.188C357.045 209.188 346.947 196.006 357.663 194.227Z"
                  fill="#302017"
                />
                <path
                  d="M324.671 208.274C324.671 208.274 324.263 193.869 318.649 192.114C313.035 190.359 311.606 193.189 311.132 194.45C310.659 195.71 303.216 191.081 299.916 194.983C296.615 198.885 292.629 206.569 297.939 210.031C297.939 210.031 288.381 211.038 292.353 219.045C296.325 227.052 303.904 223.381 303.904 223.381C303.904 223.381 311.994 234.223 317.137 228.348C322.28 222.472 325.289 223.235 325.289 223.235C325.289 223.235 335.387 210.053 324.671 208.274Z"
                  fill="#302017"
                />
                <path
                  d="M343.867 263.156C343.867 263.156 344.658 272.132 343.867 274.91C343.076 277.688 352.404 282.935 361.938 280.465L363.721 268.684C363.721 268.684 346.664 266.063 343.867 263.156Z"
                  fill="#854F3D"
                />
                <path
                  d="M343.868 274.91C343.868 274.91 332.929 280.343 332.068 286.073C331.166 292.074 330.833 335.663 334.949 339.161C339.064 342.659 382.687 344.923 386.185 337.103C389.683 329.284 382.687 288.336 376.719 282.986C370.752 277.636 362.487 276.839 362.487 276.839C362.487 276.839 357.313 281.854 343.868 274.91Z"
                  fill="#E4E4FD"
                />
                <path
                  d="M334.949 339.161C334.949 339.161 327.053 344.876 331.166 385.87C331.166 385.87 329.187 423.834 329.496 434.946H339.681C339.681 434.946 361.664 379.697 361.939 371.98L371.473 406.241C371.473 406.241 379.806 432.477 381.967 434.946H391.844L386.186 337.103C370.2 342 353.081 342.529 334.949 339.161Z"
                  fill="#854F3D"
                />
                <path
                  d="M381.846 211.025C384.743 216.828 386.017 223.586 385.961 229.952C385.838 243.774 394.272 245.974 388.197 258.854C382.122 271.734 350.313 276.84 334.859 255.795C334.859 255.795 331.339 260.025 325.804 257.372C320.27 254.718 316.45 246.951 317.834 241.479C319.217 236.006 324.119 237.25 324.119 237.25C324.119 237.25 316.297 228.739 317.632 216.235C319.087 202.603 332.304 191.758 345.604 190.692C358.087 189.691 372.527 196.944 379.612 207.227C380.444 208.433 381.187 209.705 381.846 211.025Z"
                  fill="#985A46"
                />
                <path
                  d="M385.672 229.982C385.672 229.982 386.635 225.185 390.111 225.07C393.587 224.955 399.344 236.77 388.464 243.239C388.464 243.239 385.011 234.087 385.672 229.982Z"
                  fill="#985A46"
                />
                <path
                  d="M328.072 245.898C327.529 245.143 326.879 244.456 326.181 244.191C326.015 244.109 325.843 244.086 325.685 244.047C325.517 244.052 325.365 244.025 325.205 244.074C324.898 244.113 324.58 244.259 324.271 244.429C324.116 244.528 323.963 244.652 323.811 244.756L323.753 244.795L323.726 244.828C323.709 244.848 323.691 244.867 323.672 244.885C323.628 244.914 323.608 244.966 323.581 245.008C323.476 245.18 323.413 245.425 323.402 245.734C323.393 246.045 323.425 246.407 323.499 246.773C323.585 247.144 323.699 247.52 323.853 247.894C324.115 248.656 324.53 249.388 324.984 250.072C325.421 250.776 325.98 251.378 326.56 251.893C326.856 252.14 327.176 252.348 327.499 252.491C327.822 252.635 328.167 252.74 328.52 252.711C329.244 252.712 330.025 252.234 330.728 251.599L330.741 251.587C330.768 251.562 330.81 251.564 330.835 251.591C330.855 251.614 330.857 251.647 330.841 251.671C330.346 252.452 329.626 253.179 328.681 253.407C327.733 253.636 326.752 253.295 325.975 252.783C325.185 252.263 324.518 251.582 323.959 250.829C323.401 250.075 322.925 249.257 322.587 248.377C322.26 247.498 322.038 246.556 322.131 245.597C322.189 245.122 322.345 244.642 322.657 244.261C322.803 244.064 323.009 243.914 323.208 243.787C323.417 243.676 323.62 243.553 323.834 243.453C324.275 243.281 324.74 243.128 325.225 243.157C325.467 243.143 325.7 243.217 325.935 243.268C326.156 243.362 326.383 243.447 326.575 243.591C327.371 244.133 327.881 244.977 328.201 245.856C328.213 245.89 328.195 245.928 328.161 245.941C328.133 245.951 328.102 245.941 328.085 245.918L328.072 245.898Z"
                  fill="#6E4233"
                />
                <path
                  d="M388.857 231.69C388.694 231.455 388.593 231.196 388.536 230.903C388.48 230.612 388.491 230.285 388.618 229.928C388.749 229.577 389.076 229.238 389.439 229.057C389.626 228.943 389.803 228.915 389.994 228.862C390.178 228.834 390.327 228.808 390.54 228.805C391.049 228.815 391.493 229.037 391.8 229.284C392.121 229.53 392.334 229.811 392.517 230.085C392.879 230.642 393.065 231.214 393.186 231.791C393.397 232.938 393.287 234.141 392.74 235.202C392.603 235.464 392.453 235.723 392.263 235.951C392.063 236.176 391.859 236.391 391.62 236.566C391.136 236.906 390.585 237.129 390.027 237.112L389.996 237.111C389.961 237.111 389.933 237.081 389.933 237.045C389.934 237.021 389.948 237 389.969 236.99C390.821 236.558 391.436 235.759 391.72 234.859C392.013 233.958 392.036 232.976 391.855 232.049C391.764 231.586 391.628 231.126 391.4 230.719C391.182 230.317 390.844 229.937 390.415 229.877C389.967 229.82 389.472 229.937 389.235 230.326C388.989 230.7 388.943 231.206 388.99 231.667C388.994 231.703 388.968 231.735 388.932 231.739C388.907 231.742 388.885 231.73 388.872 231.711L388.857 231.69Z"
                  fill="#6E4233"
                />
                <path
                  d="M358.737 244.114C358.737 244.114 358.519 237.004 352.397 236.256C346.275 235.509 342.568 240.788 342.933 243.469C343.298 246.149 352.365 250.163 358.737 244.114Z"
                  fill="white"
                />
                <path
                  d="M358.736 244.114C358.508 243.111 358.185 242.143 357.76 241.236C357.339 240.329 356.808 239.482 356.149 238.778C355.489 238.077 354.704 237.517 353.823 237.19C352.95 236.847 351.993 236.726 351.034 236.757C350.079 236.794 349.078 236.936 348.15 237.204C347.21 237.454 346.324 237.853 345.543 238.403C343.984 239.507 343.015 241.409 342.93 243.468C342.718 242.454 342.822 241.371 343.16 240.356C343.511 239.343 344.152 238.41 344.987 237.701C345.82 236.983 346.822 236.506 347.841 236.168C348.876 235.857 349.913 235.672 351.003 235.633C352.083 235.622 353.206 235.756 354.224 236.213C355.241 236.653 356.146 237.354 356.807 238.214C357.49 239.061 357.946 240.044 358.265 241.042C358.568 242.046 358.749 243.081 358.736 244.114Z"
                  fill="#302017"
                />
                <path
                  d="M346.219 243.287C347.119 245.82 349.769 247.093 352.137 246.13C354.505 245.167 355.695 242.333 354.795 239.8C353.894 237.267 351.245 235.994 348.877 236.957C346.508 237.921 345.318 240.754 346.219 243.287Z"
                  fill="#8BA026"
                />
                <path
                  d="M347.781 242.652C348.353 244.262 350.037 245.071 351.543 244.459C353.048 243.847 353.805 242.046 353.233 240.436C352.66 238.825 350.976 238.016 349.471 238.628C347.965 239.24 347.209 241.042 347.781 242.652Z"
                  fill="#302017"
                />
                <path
                  d="M351.661 239.85C351.623 240.683 352.501 241.406 353.623 241.466C354.746 241.526 355.687 240.899 355.726 240.067C355.764 239.234 354.886 238.51 353.764 238.45C352.642 238.391 351.7 239.017 351.661 239.85Z"
                  fill="white"
                />
                <path
                  d="M345.555 243.156C345.537 243.547 346.033 243.891 346.663 243.925C347.293 243.958 347.818 243.669 347.837 243.277C347.854 242.886 347.358 242.542 346.729 242.508C346.099 242.475 345.573 242.765 345.555 243.156Z"
                  fill="white"
                />
                <path
                  d="M385.875 237.37C385.875 237.37 384.11 231.07 378.557 231.975C373.003 232.879 370.908 238.551 371.822 240.853C372.736 243.155 381.604 244.414 385.875 237.37Z"
                  fill="white"
                />
                <path
                  d="M385.874 237.37C385.019 235.701 383.869 234.163 382.367 233.224C381.615 232.765 380.783 232.479 379.926 232.425C379.069 232.372 378.197 232.513 377.362 232.805C376.529 233.09 375.691 233.494 374.946 233.972C374.561 234.2 374.212 234.475 373.872 234.759C373.544 235.054 373.238 235.372 372.962 235.716C371.868 237.095 371.444 239 371.82 240.854C371.409 239.996 371.264 239.01 371.329 238.032C371.41 237.054 371.742 236.077 372.298 235.243C372.842 234.398 373.594 233.713 374.401 233.149C375.226 232.596 376.087 232.158 377.029 231.826C377.972 231.519 378.994 231.347 380.013 231.455C381.029 231.574 382.017 231.954 382.815 232.56C383.631 233.146 384.262 233.92 384.772 234.736C385.269 235.563 385.659 236.446 385.874 237.37Z"
                  fill="#302017"
                />
                <path
                  d="M374.673 239.847C376.026 241.88 378.639 242.337 380.511 240.868C382.382 239.399 382.803 236.56 381.45 234.527C380.098 232.495 377.484 232.037 375.613 233.506C373.742 234.975 373.321 237.814 374.673 239.847Z"
                  fill="#8BA026"
                />
                <path
                  d="M375.799 238.964C376.702 240.321 378.447 240.626 379.696 239.645C380.945 238.664 381.226 236.769 380.323 235.412C379.421 234.054 377.676 233.749 376.426 234.73C375.177 235.711 374.896 237.606 375.799 238.964Z"
                  fill="#302017"
                />
                <path
                  d="M378.706 235.376C378.856 236.13 379.789 236.551 380.79 236.316C381.792 236.082 382.482 235.279 382.332 234.525C382.182 233.771 381.248 233.349 380.247 233.584C379.246 233.819 378.556 234.621 378.706 235.376Z"
                  fill="white"
                />
                <path
                  d="M374.059 239.9C374.129 240.254 374.643 240.435 375.204 240.303C375.766 240.171 376.164 239.777 376.094 239.422C376.023 239.068 375.51 238.888 374.948 239.02C374.387 239.151 373.988 239.546 374.059 239.9Z"
                  fill="white"
                />
                <path
                  d="M368.035 238.996C368.147 240.527 368.607 241.868 369.379 242.772C369.77 243.222 370.236 243.588 370.773 243.869C370.914 243.932 371.041 244.013 371.174 244.087C371.314 244.154 371.466 244.206 371.61 244.267L371.829 244.357L371.937 244.403L372.09 244.461C372.294 244.539 372.499 244.614 372.705 244.72C373.107 244.926 373.516 245.191 373.9 245.56C374.274 245.924 374.653 246.424 374.795 247.056C374.942 247.681 374.843 248.346 374.608 248.844C374.383 249.356 374.044 249.741 373.685 250.048C372.97 250.668 372.132 250.998 371.285 251.127C370.44 251.232 369.544 251.126 368.872 250.663L368.856 250.651C368.825 250.63 368.818 250.589 368.839 250.559C368.855 250.536 368.884 250.526 368.911 250.533C369.618 250.727 370.375 250.657 371.065 250.43C371.759 250.208 372.408 249.822 372.91 249.301C373.405 248.793 373.762 248.069 373.56 247.391C373.366 246.717 372.743 246.241 372.098 245.931C371.776 245.764 371.429 245.647 371.082 245.481C370.91 245.402 370.734 245.332 370.565 245.244L370.078 244.948C369.449 244.529 368.859 244.011 368.467 243.35C367.648 242.045 367.512 240.411 367.905 238.956C367.915 238.922 367.95 238.901 367.985 238.91C368.012 238.918 368.031 238.942 368.033 238.969L368.035 238.996Z"
                  fill="#6E4233"
                />
                <path
                  d="M342.714 234.595C342.501 234.58 342.292 234.491 342.132 234.326C341.783 233.97 341.79 233.398 342.146 233.05C348.221 227.11 355.225 229.567 355.52 229.674C355.987 229.844 356.227 230.36 356.058 230.827C355.889 231.296 355.374 231.544 354.905 231.369C354.652 231.28 348.649 229.213 343.406 234.341C343.215 234.528 342.961 234.612 342.714 234.595Z"
                  fill="#302017"
                />
                <path
                  d="M372.348 228.819C372.091 228.819 371.836 228.71 371.658 228.499C371.338 228.12 371.384 227.553 371.763 227.232C371.931 227.088 375.961 223.741 382.412 224.959C382.902 225.052 383.224 225.525 383.131 226.013C383.038 226.503 382.567 226.826 382.077 226.733C376.504 225.68 373.071 228.488 372.928 228.608C372.759 228.75 372.553 228.819 372.348 228.819Z"
                  fill="#302017"
                />
                <path
                  d="M376.223 257.973C375.845 260.137 374.906 262.248 372.742 262.861C370.596 263.474 368.81 261.743 367.457 259.614C371.065 256.223 375.863 257.829 376.223 257.973Z"
                  fill="#D02B48"
                />
                <path
                  d="M376.223 257.972C375.863 257.828 371.065 256.223 367.458 259.614C365.817 256.998 365.485 255.67 365.395 255.346C365.629 255.508 369.243 256.854 372.274 256.313C375.376 255.754 376.392 253.397 376.392 253.397C376.392 253.397 376.711 255.267 376.223 257.972Z"
                  fill="#5F2A18"
                />
                <path
                  d="M376.243 257.973C376.243 257.973 376.243 257.973 376.225 257.973"
                  stroke="#5F2A18"
                  stroke-width="1.80371"
                  stroke-miterlimit="10"
                />
                <path
                  opacity="0.17"
                  d="M360.199 251.025C360.538 253.262 358.219 255.47 355.017 255.956C351.816 256.443 348.945 255.023 348.605 252.786C348.265 250.549 350.585 248.341 353.787 247.854C356.988 247.368 359.859 248.787 360.199 251.025Z"
                  fill="#E6A29B"
                />
                <path
                  opacity="0.17"
                  d="M387.56 245.28C388.012 247.332 385.998 249.52 383.061 250.167C380.125 250.814 377.378 249.674 376.927 247.622C376.475 245.57 378.489 243.383 381.425 242.736C384.362 242.089 387.108 243.229 387.56 245.28Z"
                  fill="#E6A29B"
                />
                <path
                  d="M381.674 434.806C381.674 434.806 381.243 441.091 381.674 442.886C382.105 444.682 396.769 452.463 404.849 451.665C407.228 451.43 409.785 450.425 409.944 447.715C410.223 442.977 405.969 441.978 402.437 440.491C400.559 439.701 398.673 438.919 396.838 438.031C396.363 437.802 394.175 437.011 394.175 436.302C394.175 435.105 395.231 431.255 393.756 430.786C392.28 430.316 386.993 430.756 385.995 430.786C384.997 430.816 385.696 434.606 385.696 434.606L381.674 434.806Z"
                  fill="#EEBC33"
                />
                <path
                  d="M404.85 448.972C396.77 449.77 382.106 441.989 381.675 440.194C381.582 439.805 381.53 439.201 381.505 438.502C381.461 440.21 381.472 442.043 381.675 442.887C382.106 444.682 396.77 452.463 404.85 451.665C407.229 451.431 409.786 450.425 409.945 447.716C409.986 447.033 409.922 446.436 409.79 445.896C409.187 447.951 406.952 448.765 404.85 448.972Z"
                  fill="white"
                />
                <path
                  d="M395.718 437.539C395.718 437.539 391.066 437.685 389.631 440.025"
                  stroke="white"
                  stroke-width="0.591411"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M399.146 439.064C399.146 439.064 394.493 439.211 393.059 441.552"
                  stroke="white"
                  stroke-width="0.591411"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M402.525 440.309C402.525 440.309 397.872 440.455 396.438 442.795"
                  stroke="white"
                  stroke-width="0.591411"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M392.675 438.051C392.675 438.051 392.047 433.784 394.236 434.011C396.426 434.237 392.675 438.051 392.675 438.051Z"
                  stroke="white"
                  stroke-width="0.591411"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M392.676 438.051C392.676 438.051 389.7 434.397 388.349 435.75C386.562 437.539 392.676 438.051 392.676 438.051Z"
                  stroke="white"
                  stroke-width="0.591411"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M329.228 434.806C329.228 434.806 328.798 441.091 329.228 442.887C329.659 444.682 344.323 452.463 352.404 451.665C354.783 451.431 357.339 450.425 357.498 447.716C357.777 442.978 353.523 441.979 349.991 440.492C348.114 439.701 346.227 438.919 344.392 438.032C343.917 437.803 341.729 437.012 341.729 436.303C341.729 435.106 342.785 431.255 341.31 430.786C339.834 430.317 334.547 430.757 333.549 430.786C332.551 430.816 333.25 434.607 333.25 434.607L329.228 434.806Z"
                  fill="#EEBC33"
                />
                <path
                  d="M352.403 448.973C344.322 449.771 329.658 441.99 329.227 440.194C329.134 439.806 329.083 439.202 329.058 438.503C329.014 440.211 329.025 442.043 329.227 442.887C329.658 444.683 344.322 452.464 352.403 451.666C354.782 451.431 357.338 450.426 357.497 447.716C357.538 447.033 357.474 446.436 357.342 445.896C356.74 447.951 354.505 448.765 352.403 448.973Z"
                  fill="white"
                />
                <path
                  d="M343.273 437.539C343.273 437.539 338.62 437.686 337.185 440.026"
                  stroke="white"
                  stroke-width="0.591411"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M346.698 439.065C346.698 439.065 342.045 439.211 340.611 441.552"
                  stroke="white"
                  stroke-width="0.591411"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M350.079 440.309C350.079 440.309 345.426 440.455 343.992 442.796"
                  stroke="white"
                  stroke-width="0.591411"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M340.23 438.052C340.23 438.052 339.601 433.785 341.791 434.012C343.98 434.238 340.23 438.052 340.23 438.052Z"
                  stroke="white"
                  stroke-width="0.591411"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M340.23 438.051C340.23 438.051 337.255 434.398 335.903 435.751C334.116 437.539 340.23 438.051 340.23 438.051Z"
                  stroke="white"
                  stroke-width="0.591411"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M356.128 278.584C356.128 278.584 354.426 283.984 347.607 283.251C340.787 282.518 341.154 276.595 341.154 276.595L343.884 274.91L356.128 278.584Z"
                  fill="white"
                />
                <path
                  d="M356.064 278.548C356.064 278.548 361.362 287.856 370.716 279.15C370.716 279.15 366.482 276.837 362.487 276.839C362.487 276.839 357.239 278.521 356.064 278.548Z"
                  fill="white"
                />
                <path
                  d="M386.998 325.707C386.998 325.707 405.011 372.738 409.43 379.572C413.85 386.405 389.543 401.936 366.893 401.936C344.243 401.936 320.212 386.405 317.174 382.057C314.135 377.708 332.027 325.292 332.027 325.292C331.464 317.932 331.142 310.439 331.166 302.756C341.467 294.05 336.611 279.654 336.611 279.654C338.118 278.174 341.707 275.916 343.867 274.91C343.867 274.91 348.796 287.865 357.71 286.853C366.626 285.842 365.839 277.226 365.839 277.226C368.333 277.421 371.147 278.786 372.794 280.051C372.794 280.051 379.004 298.333 383.4 301.024C383.4 301.024 386.638 315.59 386.998 325.707Z"
                  fill="#F76DA5"
                />
                <path
                  d="M389.632 397.404C389.632 397.404 378.018 349.927 376.919 348.828C375.82 347.729 383.275 399.526 383.275 399.526C383.275 399.526 388.575 397.826 389.632 397.404Z"
                  fill="#F74D92"
                />
                <path
                  d="M354.804 400.61C354.804 400.61 358.618 351.027 357.51 350.294C356.403 349.562 346.699 398.448 346.699 398.448C346.699 398.448 352 400.086 354.804 400.61Z"
                  fill="#F74D92"
                />
                <path
                  d="M325.07 388.329C325.07 388.329 331.306 362.384 332.588 362.384C333.871 362.384 329.462 390.93 329.462 390.93L325.07 388.329Z"
                  fill="#F74D92"
                />
                <path
                  d="M406.938 386.943C406.938 386.943 399.45 366.23 397.618 366.047C395.786 365.864 404.583 389.09 404.583 389.09L406.938 386.943Z"
                  fill="#F74D92"
                />
                <path
                  d="M332.027 325.291C332.027 325.291 356.414 335.373 386.999 325.706"
                  stroke="#F74D92"
                  stroke-width="1.4349"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M371.081 206.839C371.081 206.839 369.039 222.882 359.122 225.653C349.204 228.424 347.891 225.653 347.891 225.653C347.891 225.653 346.724 234.987 339.432 236.592C332.14 238.196 337.391 242.863 334.328 246.218C331.265 249.572 333.453 251.905 333.453 251.905C333.453 251.905 329.369 251.03 328.786 247.092C328.202 243.155 328.056 238.05 327.036 237.321C326.015 236.592 318.933 237.855 317.62 242.668C317.62 242.668 312.743 241.259 310.701 227.258C308.66 213.257 321.931 192.547 340.891 189.339C359.851 186.13 368.747 194.151 368.747 194.151C368.747 194.151 390.15 197.615 388.837 213.476C387.525 229.336 384.025 229.336 386.65 232.946C389.275 236.556 387.087 239.29 387.087 239.29C387.087 239.29 386.978 235.353 383.915 232.399C380.853 229.446 384.134 222.445 381.509 215.663C378.884 208.881 371.081 206.839 371.081 206.839Z"
                  fill="#302017"
                />
                <path
                  d="M347.842 225.6C348.892 223.926 349.969 222.358 351.041 220.798C351.3 220.401 351.559 220.006 351.838 219.627C352.108 219.243 352.36 218.845 352.622 218.456L353.412 217.294C353.676 216.908 353.934 216.518 354.176 216.118C354.434 215.73 354.705 215.348 354.954 214.953C355.202 214.559 355.433 214.154 355.696 213.767C355.966 213.383 356.187 212.974 356.436 212.577C356.671 212.174 356.938 211.786 357.168 211.378C358.16 209.775 359.021 208.113 360.065 206.419L360.204 206.457L359.777 207.837L359.562 208.526L359.303 209.2C359.129 209.648 358.964 210.102 358.781 210.547L358.187 211.863C357.361 213.601 356.436 215.297 355.375 216.905C354.307 218.508 353.151 220.051 351.911 221.522C350.667 222.99 349.356 224.401 347.938 225.706L347.842 225.6Z"
                  fill="#4A3123"
                />
                <path
                  d="M355.794 195.114C355.109 197.005 354.249 198.817 353.35 200.611C352.897 201.506 352.401 202.377 351.922 203.261C351.419 204.13 350.905 204.994 350.367 205.843L349.557 207.118C349.289 207.544 348.984 207.946 348.698 208.361L347.826 209.597L346.912 210.807C345.682 212.411 344.333 213.932 342.928 215.408C342.215 216.135 341.436 216.808 340.693 217.508L339.495 218.483C339.086 218.797 338.717 219.154 338.266 219.422C337.408 219.984 336.502 220.59 335.712 221.078L334.491 221.851L333.311 222.673C331.784 223.816 330.326 225.068 329.217 226.589C329.063 226.771 328.937 226.967 328.819 227.168C328.7 227.368 328.56 227.563 328.455 227.771L328.151 228.405C328.06 228.62 327.99 228.842 327.905 229.063C327.618 229.951 327.483 230.938 327.716 231.882L327.588 231.945C327.205 230.987 327.221 229.942 327.427 228.962C327.621 227.972 328.058 227.05 328.571 226.195C329.624 224.485 331.065 223.061 332.602 221.796L333.784 220.878C334.188 220.585 334.608 220.316 335.019 220.034C335.852 219.48 336.651 218.904 337.464 218.339L337.768 218.126L338.055 217.889L338.627 217.415L339.768 216.464C340.479 215.774 341.223 215.118 341.908 214.402C344.69 211.575 347.158 208.448 349.439 205.198C350.016 204.39 350.555 203.556 351.11 202.733C351.643 201.894 352.191 201.066 352.702 200.214C353.742 198.523 354.742 196.803 355.668 195.048L355.794 195.114Z"
                  fill="#4A3123"
                />
                <path
                  d="M375.088 201.887C375.979 201.746 376.868 201.825 377.758 201.96C378.637 202.128 379.522 202.372 380.353 202.784C381.199 203.163 381.984 203.701 382.699 204.344C383.072 204.65 383.362 205.045 383.678 205.413C383.836 205.598 383.956 205.814 384.096 206.014C384.222 206.223 384.382 206.414 384.478 206.64C384.673 207.082 384.902 207.551 385.025 207.952C385.171 208.368 385.324 208.782 385.432 209.21C385.649 210.066 385.868 210.921 385.957 211.803C386.182 213.546 386.185 215.351 385.66 217.065L385.516 217.058C385.524 215.379 385.254 213.696 384.86 212.061C384.664 211.242 384.426 210.432 384.152 209.635C383.886 208.837 383.583 208.044 383.208 207.306C383.131 207.112 382.998 206.948 382.896 206.768C382.781 206.595 382.687 206.406 382.555 206.246C382.292 205.923 382.05 205.582 381.742 205.299C381.168 204.692 380.486 204.194 379.774 203.755C378.339 202.889 376.722 202.313 375.07 202.03L375.088 201.887Z"
                  fill="#4A3123"
                />
                <path
                  d="M320.999 200.662C319.93 202.278 318.896 203.818 317.901 205.367C317.666 205.763 317.43 206.156 317.174 206.534C316.932 206.921 316.71 207.319 316.477 207.71C316.234 208.094 316.02 208.494 315.791 208.884L315.453 209.474L315.149 210.079C314.259 211.654 313.53 213.302 312.826 214.979C312.655 215.401 312.494 215.828 312.31 216.252L311.85 217.556C311.767 217.773 311.673 217.991 311.598 218.213C311.531 218.436 311.47 218.66 311.392 218.884L311.166 219.562L310.909 220.247L310.766 220.239L310.907 218.827L310.977 218.12C311.011 217.886 311.063 217.655 311.105 217.422L311.37 216.027L311.746 214.658L311.938 213.974L312.179 213.306C312.345 212.862 312.49 212.41 312.673 211.974L313.247 210.674C313.429 210.236 313.674 209.828 313.884 209.404C314.788 207.739 315.835 206.153 317.01 204.67C318.191 203.191 319.474 201.795 320.907 200.552L320.999 200.662Z"
                  fill="#4A3123"
                />
                <path
                  d="M403.036 319.766L401.684 315.804L383.758 321.921L385.111 325.883L403.036 319.766Z"
                  fill="#A7B82C"
                />
                <path
                  d="M385.915 323.405C385.751 322.926 386.007 322.406 386.485 322.243L399.747 317.717C400.225 317.553 400.745 317.809 400.909 318.288C401.072 318.766 400.816 319.286 400.338 319.449L387.076 323.975C386.598 324.138 386.078 323.883 385.915 323.405Z"
                  fill="#C4D933"
                />
                <path
                  d="M401.699 315.806L403.051 319.768L405.995 317.08C406.346 316.759 406.147 316.173 405.672 316.134L401.699 315.806Z"
                  fill="#A7B82C"
                />
                <path
                  d="M385.143 325.889L383.791 321.927L383.028 322.188L384.38 326.15L385.143 325.889Z"
                  fill="#C4D933"
                />
                <path
                  d="M403.053 319.769L401.701 315.807L401.38 315.916L402.733 319.878L403.053 319.769Z"
                  fill="#C4D933"
                />
                <path
                  d="M327.709 287.681C328.197 282.996 333.009 280.02 337.414 281.687C341.272 283.146 345.807 286.566 348.2 294.45C352.877 309.858 355.738 318.239 355.738 318.239L380.793 319.474C380.793 319.474 382.47 323.371 380.878 326.388C379.287 329.405 354.274 333.249 348.231 331.731C342.188 330.213 333.325 315.889 329.934 305.246C327.951 299.021 327.206 292.503 327.709 287.681Z"
                  fill="#985A46"
                />
                <path
                  d="M381.222 319.155C381.222 319.155 388.802 316.978 390.629 317.278C392.455 317.578 392.892 318.917 392.337 319.154C391.782 319.391 388.809 319.793 389.129 320.409C389.45 321.024 396.279 323.413 396.257 325.121C396.234 326.829 391.532 324.766 391.532 324.766C391.532 324.766 397.341 326.8 396.035 327.898C394.728 328.996 390.31 327.777 390.31 327.777C390.31 327.777 395.201 328.55 395.313 329.792C395.426 331.033 391.183 330.453 391.183 330.453C391.183 330.453 394.642 331.233 393.77 332.262C392.897 333.291 386.82 331.893 384.279 330.373C381.739 328.853 379.268 326.841 379.268 326.841L379.391 319.745L381.222 319.155Z"
                  fill="#985A46"
                />
                <path
                  d="M393.506 325.5C393.091 325.501 392.692 325.433 392.299 325.347C391.905 325.263 391.534 325.098 391.156 324.963C390.402 324.686 389.642 324.407 388.932 324.02C388.923 324.015 388.919 324.003 388.924 323.993C388.929 323.984 388.94 323.98 388.95 323.984C389.322 324.129 389.707 324.239 390.093 324.344C390.477 324.454 390.863 324.558 391.25 324.657C391.638 324.758 392.035 324.822 392.41 324.962C392.787 325.099 393.159 325.249 393.516 325.461C393.526 325.467 393.529 325.479 393.523 325.49C393.52 325.496 393.514 325.499 393.506 325.5Z"
                  fill="#6E4233"
                />
                <path
                  d="M392.637 328.304C392.206 328.304 391.792 328.235 391.383 328.148C390.974 328.063 390.587 327.898 390.192 327.762C389.798 327.623 389.405 327.481 389.015 327.329C388.63 327.164 388.235 327.017 387.882 326.777C387.873 326.771 387.87 326.758 387.876 326.749C387.882 326.741 387.893 326.738 387.902 326.742L387.905 326.744C388.27 326.929 388.68 327.027 389.079 327.138C389.478 327.252 389.88 327.355 390.284 327.455C390.687 327.557 391.1 327.622 391.492 327.762C391.884 327.901 392.274 328.052 392.647 328.266C392.657 328.271 392.66 328.284 392.655 328.294C392.651 328.3 392.644 328.304 392.637 328.304Z"
                  fill="#6E4233"
                />
                <path
                  d="M391.176 330.473C390.775 330.475 390.392 330.408 390.015 330.321C389.636 330.236 389.282 330.073 388.921 329.934C388.56 329.793 388.201 329.65 387.846 329.491C387.498 329.322 387.137 329.163 386.833 328.91C386.825 328.903 386.824 328.89 386.831 328.882C386.837 328.874 386.848 328.872 386.857 328.878L386.86 328.879C387.181 329.079 387.555 329.187 387.918 329.304C388.282 329.423 388.652 329.528 389.022 329.63C389.391 329.734 389.773 329.797 390.131 329.938C390.491 330.075 390.846 330.224 391.187 330.434C391.197 330.441 391.2 330.453 391.194 330.463C391.19 330.47 391.183 330.473 391.176 330.473Z"
                  fill="#6E4233"
                />
                <path
                  d="M330.222 306.835C330.222 306.835 321.564 299.257 326.658 287.678C330.84 278.172 339.501 277.59 346.177 284.477C353.334 291.86 350.343 301.112 350.343 301.112C350.343 301.112 353.854 302.571 353.769 303.465C353.683 304.359 350.849 304.271 350.265 304.906C349.68 305.541 349.116 306.727 347.291 306.33C345.466 305.934 345.772 307.792 343.606 308.072C341.441 308.351 340.889 307.762 339.997 308.379C339.105 308.996 337.862 310.278 336.981 310.013C336.1 309.747 334.928 310.046 333.799 310.612C332.67 311.177 330.769 312.632 330.058 312.002C329.348 311.37 330.222 306.835 330.222 306.835Z"
                  fill="#E4E4FD"
                />
                <path
                  d="M564.614 419.209C564.614 419.209 569.261 415.498 570.886 414.867C572.512 414.237 586.431 421.44 590.153 428.141C591.248 430.114 591.842 432.639 589.824 434.218C586.296 436.98 583.235 434.214 580.183 432.272C578.56 431.239 576.94 430.195 575.265 429.247C574.832 429.002 573.043 427.729 572.492 428.11C571.563 428.753 569.142 431.641 567.985 430.747C566.828 429.854 564.328 425.514 563.815 424.723C563.302 423.933 566.62 422.438 566.62 422.438L564.614 419.209Z"
                  fill="#57B4F7"
                />
                <path
                  d="M588.061 429.588C584.339 422.886 570.42 415.684 568.795 416.314C568.443 416.45 567.947 416.735 567.39 417.091C568.692 416.139 570.121 415.163 570.884 414.867C572.51 414.237 586.429 421.44 590.151 428.141C591.247 430.114 591.84 432.639 589.822 434.218C589.314 434.616 588.817 434.888 588.326 435.076C589.598 433.503 589.029 431.331 588.061 429.588Z"
                  fill="white"
                />
                <path
                  d="M574.281 428.644C574.281 428.644 571.894 424.953 572.941 422.582"
                  stroke="white"
                  stroke-width="0.558322"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M577.306 430.483C577.306 430.483 574.92 426.793 575.966 424.421"
                  stroke="white"
                  stroke-width="0.558322"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M580.085 432.438C580.085 432.438 577.699 428.747 578.745 426.376"
                  stroke="white"
                  stroke-width="0.558322"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M573.043 426.005C573.043 426.005 569.393 427.81 570.745 429.388C572.098 430.966 573.043 426.005 573.043 426.005Z"
                  stroke="white"
                  stroke-width="0.558322"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M573.043 426.006C573.043 426.006 568.608 425.659 568.932 423.883C569.361 421.535 573.043 426.006 573.043 426.006Z"
                  stroke="white"
                  stroke-width="0.558322"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M565.995 419.499L567.366 425.79C567.366 425.79 564.676 426.835 561.05 428.019C560.599 426.133 559.15 424.246 558.756 422.36L565.995 419.499Z"
                  fill="#E3AD8D"
                />
                <path
                  d="M558.451 422.48L558.755 422.36C559.148 424.247 560.598 426.133 561.049 428.019C554.06 430.301 543.587 433.099 542.156 429.925C539.984 425.105 558.451 422.48 558.451 422.48Z"
                  fill="#3C3A6E"
                />
                <path
                  d="M513.661 392.851C510.604 398.188 501.985 412.234 499.376 417.82C496.251 424.513 491.109 433.267 494.872 440.757C499.396 449.76 510.717 449.223 518.963 448.245L521.454 448.763L530.275 398.176L513.661 392.851Z"
                  fill="#3C3A6E"
                />
                <path
                  d="M530.398 332.715C530.398 332.715 519.317 337.008 514 344.527C508.683 352.046 501.277 363.881 501.277 363.881L485.957 357.365C485.957 357.365 480.226 359.715 480.263 362.898C480.3 366.08 497.248 377.982 502.498 379.07C507.748 380.158 518.743 363.823 521.643 360.106C524.542 356.389 530.398 332.715 530.398 332.715Z"
                  fill="#F0C6AD"
                />
                <path
                  d="M535.593 331.125C534.739 331.965 515.482 331.113 510.064 346.511C510.064 346.511 521.024 357.47 523.954 358.157C526.884 358.843 535.593 331.125 535.593 331.125Z"
                  fill="#85C7FF"
                />
                <path
                  d="M486.524 355.44C486.524 355.44 481.884 346.661 480.017 345.265C478.15 343.87 476.555 344.642 476.824 345.352C477.094 346.062 479.324 349.112 478.485 349.358C478.178 349.448 476.887 348.952 475.305 348.362C471.939 352.724 472.829 357.461 472.609 362.1C472.983 362.242 473.345 362.368 473.676 362.458C477.272 363.437 481.36 364.323 481.36 364.323L487.86 358.176L486.524 355.44Z"
                  fill="#F0C6AD"
                />
                <path
                  d="M478.508 349.369C478.181 350.105 477.927 350.874 477.733 351.651C477.534 352.426 477.402 353.218 477.384 354.008C477.362 354.799 477.5 355.573 477.724 356.299C477.84 356.664 477.999 357.013 478.194 357.35C478.399 357.679 478.64 357.991 478.912 358.297C478.922 358.307 478.921 358.323 478.912 358.333C478.904 358.34 478.891 358.341 478.882 358.337C478.522 358.138 478.186 357.878 477.907 357.559C477.632 357.237 477.414 356.865 477.25 356.472C476.925 355.675 476.911 354.805 476.981 353.986C477.052 353.16 477.239 352.357 477.491 351.581C477.753 350.808 478.073 350.058 478.463 349.346C478.47 349.334 478.485 349.33 478.498 349.337C478.509 349.342 478.514 349.358 478.508 349.369Z"
                  fill="#E3AD8D"
                />
                <path
                  d="M473.064 360.199L483.646 355.81L476.8 339.307L466.218 343.697L473.064 360.199Z"
                  fill="#57B4F7"
                />
                <path
                  d="M466.243 343.705C466.395 344.07 468.886 343.384 471.808 342.172C474.73 340.959 476.976 339.68 476.825 339.315C476.673 338.95 474.181 339.636 471.259 340.849C468.337 342.061 466.091 343.34 466.243 343.705Z"
                  fill="#6EB9F5"
                />
                <path
                  d="M479.823 351.6C480.043 349.878 474.559 350.341 473.792 350.41C474.488 350.255 478.795 349.274 477.631 347.834C477.209 347.303 475.883 347.157 474.166 347.282C471.013 347.512 468.463 349.965 467.979 353.089L467.965 353.178C467.533 355.915 467.985 359.24 471.275 361.945C472.603 363.037 474.47 363.21 476.022 362.471C478.583 361.253 481.015 359.847 481.039 358.615C481.054 356.907 477.927 357.62 475.804 358.274C475.565 358.372 475.316 358.455 475.108 358.534C475.108 358.534 475.115 358.509 475.105 358.493C475.322 358.429 475.555 358.355 475.804 358.273C478.277 357.35 482.158 355.642 480.821 354.452C479.781 353.514 477.274 353.585 475.256 353.838C477.311 353.396 479.713 352.641 479.823 351.6Z"
                  fill="#F0C6AD"
                />
                <path
                  d="M477.381 357.662C477.036 357.884 476.673 358.057 476.306 358.218C475.938 358.378 475.551 358.485 475.169 358.61C474.409 358.864 473.646 359.111 472.88 359.349L472.869 359.319C473.602 358.995 474.34 358.679 475.08 358.371C475.448 358.215 475.811 358.041 476.193 357.919C476.576 357.799 476.963 357.691 477.369 357.632L477.381 357.662Z"
                  fill="#E3AD8D"
                />
                <path
                  d="M476.2 353.631C475.861 353.842 475.503 354.002 475.142 354.151C474.78 354.299 474.4 354.393 474.025 354.504C473.279 354.734 472.529 354.954 471.777 355.167L471.767 355.137C472.489 354.838 473.214 354.546 473.942 354.264C474.305 354.12 474.662 353.958 475.038 353.85C475.414 353.743 475.793 353.647 476.191 353.602L476.2 353.631Z"
                  fill="#E3AD8D"
                />
                <path
                  d="M473.799 350.424C473.571 350.601 473.326 350.728 473.076 350.843C472.825 350.957 472.555 351.018 472.292 351.097C471.767 351.259 471.239 351.414 470.708 351.559L470.697 351.529C471.196 351.297 471.698 351.073 472.204 350.857C472.456 350.746 472.701 350.618 472.966 350.544C473.231 350.47 473.5 350.407 473.788 350.395L473.799 350.424Z"
                  fill="#E3AD8D"
                />
                <path
                  d="M557.978 315.409C557.978 315.409 557.15 324.809 557.978 327.718C558.806 330.628 549.037 336.122 539.053 333.536L537.185 321.199C537.185 321.199 555.048 318.454 557.978 315.409Z"
                  fill="#F0AE86"
                />
                <path
                  d="M557.978 327.718C557.978 327.718 568.611 333.59 570.335 339.408C572.059 345.227 571.629 391.342 567.319 395.005C563.009 398.669 517.324 401.039 513.661 392.85C509.997 384.661 517.324 341.779 523.573 336.176C529.823 330.573 538.478 329.738 538.478 329.738C538.478 329.738 543.897 334.991 557.978 327.718Z"
                  fill="#62A4DA"
                />
                <path
                  d="M518.203 260.814C515.17 266.892 513.835 273.969 513.894 280.635C514.023 295.11 505.19 297.414 511.552 310.903C517.914 324.391 551.022 331.128 567.411 307.699C567.411 307.699 571.097 312.129 576.893 309.35C582.689 306.572 586.689 298.438 585.24 292.707C583.792 286.975 578.658 288.278 578.658 288.278C578.658 288.278 586.849 279.365 585.452 266.269C583.928 251.993 570.085 240.636 556.157 239.519C543.084 238.472 527.962 246.068 520.542 256.837C519.673 258.099 518.894 259.431 518.203 260.814Z"
                  fill="#F0C6AD"
                />
                <path
                  d="M514.196 280.667C514.196 280.667 513.188 275.644 509.548 275.523C505.908 275.403 499.879 287.776 511.273 294.551C511.273 294.551 514.89 284.967 514.196 280.667Z"
                  fill="#F0C6AD"
                />
                <path
                  d="M574.384 297.292C574.483 296.275 574.877 295.248 575.77 294.439C575.989 294.232 576.27 294.091 576.551 293.942C576.849 293.839 577.16 293.718 577.483 293.701C578.139 293.605 578.753 293.77 579.326 293.947C579.601 294.05 579.857 294.177 580.125 294.298L580.224 294.345L580.339 294.424L580.567 294.591C580.725 294.698 580.85 294.84 580.976 294.982C581.481 295.559 581.722 296.264 581.823 296.901C581.972 298.187 581.688 299.301 581.322 300.335C580.486 302.352 579.2 304.159 577.211 305.298C576.705 305.561 576.172 305.812 575.564 305.895C574.969 305.979 574.328 305.979 573.753 305.754C573.606 305.715 573.477 305.628 573.344 305.562C573.212 305.493 573.083 305.424 572.973 305.328L572.638 305.062C572.542 304.961 572.452 304.854 572.363 304.751C572.27 304.65 572.191 304.541 572.124 304.425L571.917 304.09C571.803 303.854 571.714 303.61 571.619 303.38L571.614 303.368C571.6 303.332 571.617 303.291 571.652 303.276C571.684 303.263 571.72 303.275 571.739 303.303C572.257 304.1 572.994 304.814 573.921 305.025C574.85 305.238 575.817 304.895 576.598 304.366C577.39 303.831 578.065 303.128 578.627 302.35C579.188 301.572 579.666 300.728 579.998 299.829C580.341 298.94 580.575 297.986 580.493 297.045C580.441 296.58 580.297 296.123 580.01 295.765C579.736 295.398 579.287 295.193 578.87 294.968C578.021 294.575 576.968 294.503 576.184 295.067C575.392 295.587 574.851 296.449 574.519 297.335C574.505 297.372 574.464 297.39 574.428 297.376C574.398 297.365 574.38 297.334 574.383 297.303L574.384 297.292Z"
                  fill="#A67E67"
                />
                <path
                  d="M510.721 282.432C510.527 281.926 510.281 281.451 509.996 281.329C509.87 281.261 509.783 281.289 509.681 281.325C509.644 281.336 509.568 281.365 509.521 281.372C509.46 281.397 509.361 281.421 509.333 281.445C509.358 281.494 509.363 281.528 509.312 281.61C509.271 281.694 509.197 281.82 509.142 281.975C509.081 282.125 509.016 282.294 508.971 282.48C508.913 282.658 508.873 282.853 508.835 283.048C508.684 283.838 508.635 284.672 508.707 285.49C508.801 286.309 509.019 287.11 509.697 288.006L509.717 288.032C509.739 288.062 509.733 288.104 509.704 288.126C509.684 288.141 509.657 288.144 509.636 288.134C509.164 287.921 508.737 287.602 508.395 287.207C508.055 286.81 507.806 286.34 507.639 285.849C507.302 284.863 507.26 283.797 507.443 282.777C507.55 282.269 507.707 281.766 507.972 281.31C508.226 280.866 508.619 280.4 509.203 280.321C509.34 280.311 509.471 280.314 509.605 280.317C509.739 280.344 509.876 280.346 510.004 280.405C510.265 280.49 510.504 280.675 510.644 280.912C510.922 281.394 510.935 281.942 510.862 282.455C510.857 282.491 510.823 282.515 510.788 282.51C510.764 282.507 510.745 282.491 510.737 282.469L510.721 282.432Z"
                  fill="#A67E67"
                />
                <path
                  d="M542.402 295.467C542.402 295.467 542.631 288.02 549.043 287.237C555.454 286.454 559.336 291.983 558.954 294.79C558.572 297.597 549.076 301.801 542.402 295.467Z"
                  fill="white"
                />
                <path
                  d="M542.403 295.467C542.39 294.385 542.579 293.301 542.896 292.249C543.23 291.204 543.707 290.174 544.423 289.288C545.115 288.387 546.062 287.654 547.128 287.192C548.194 286.713 549.37 286.573 550.501 286.585C551.642 286.625 552.729 286.819 553.812 287.145C554.879 287.499 555.929 287.998 556.801 288.75C557.232 289.126 557.626 289.549 557.949 290.02C558.27 290.492 558.526 291.002 558.714 291.531C559.068 292.594 559.177 293.728 558.954 294.79C558.866 292.634 557.851 290.642 556.219 289.485C555.4 288.909 554.473 288.491 553.489 288.23C552.517 287.949 551.468 287.8 550.469 287.762C549.464 287.729 548.462 287.856 547.547 288.215C546.625 288.558 545.803 289.143 545.112 289.878C544.421 290.615 543.865 291.502 543.425 292.452C542.979 293.403 542.641 294.416 542.403 295.467Z"
                  fill="#302017"
                />
                <path
                  d="M555.513 294.601C554.57 297.253 551.795 298.586 549.315 297.577C546.835 296.569 545.589 293.601 546.532 290.949C547.474 288.296 550.249 286.963 552.729 287.972C555.209 288.98 556.455 291.948 555.513 294.601Z"
                  fill="#8C5D43"
                />
                <path
                  d="M553.878 293.936C553.278 295.622 551.515 296.469 549.938 295.828C548.362 295.187 547.569 293.3 548.169 291.614C548.768 289.928 550.532 289.08 552.109 289.721C553.685 290.362 554.477 292.249 553.878 293.936Z"
                  fill="#302017"
                />
                <path
                  d="M549.813 291C549.853 291.873 548.933 292.63 547.758 292.693C546.582 292.756 545.597 292.099 545.556 291.228C545.516 290.356 546.435 289.598 547.611 289.535C548.786 289.473 549.772 290.128 549.813 291Z"
                  fill="white"
                />
                <path
                  d="M556.209 294.463C556.227 294.873 555.708 295.234 555.048 295.268C554.388 295.304 553.838 295 553.819 294.59C553.8 294.181 554.319 293.82 554.979 293.784C555.639 293.75 556.189 294.053 556.209 294.463Z"
                  fill="white"
                />
                <path
                  d="M513.984 288.404C513.984 288.404 515.833 281.806 521.649 282.754C527.464 283.701 529.659 289.64 528.702 292.051C527.745 294.463 518.457 295.781 513.984 288.404Z"
                  fill="white"
                />
                <path
                  d="M513.984 288.404C514.209 287.436 514.618 286.511 515.137 285.644C515.671 284.79 516.333 283.979 517.187 283.366C518.023 282.731 519.057 282.333 520.121 282.208C521.189 282.095 522.259 282.275 523.247 282.597C524.234 282.945 525.134 283.404 525.999 283.982C526.845 284.573 527.632 285.291 528.202 286.176C528.784 287.049 529.132 288.072 529.216 289.097C529.284 290.121 529.133 291.153 528.702 292.052C529.097 290.11 528.652 288.116 527.506 286.671C527.217 286.312 526.897 285.979 526.553 285.669C526.198 285.372 525.832 285.084 525.429 284.845C524.648 284.344 523.771 283.922 522.898 283.624C522.024 283.318 521.111 283.171 520.214 283.226C519.315 283.282 518.445 283.581 517.657 284.062C516.869 284.543 516.173 285.205 515.567 285.949C514.955 286.692 514.43 287.521 513.984 288.404Z"
                  fill="#302017"
                />
                <path
                  d="M525.716 290.998C524.3 293.127 521.562 293.606 519.603 292.067C517.643 290.528 517.203 287.556 518.619 285.427C520.036 283.298 522.772 282.819 524.732 284.358C526.691 285.896 527.133 288.869 525.716 290.998Z"
                  fill="#8C5D43"
                />
                <path
                  d="M524.536 290.072C523.591 291.494 521.764 291.813 520.455 290.786C519.147 289.759 518.853 287.774 519.798 286.352C520.744 284.931 522.571 284.611 523.879 285.638C525.187 286.665 525.482 288.651 524.536 290.072Z"
                  fill="#302017"
                />
                <path
                  d="M521.492 286.315C521.335 287.105 520.357 287.546 519.31 287.3C518.261 287.054 517.538 286.214 517.695 285.424C517.852 284.634 518.83 284.193 519.878 284.439C520.927 284.685 521.649 285.525 521.492 286.315Z"
                  fill="white"
                />
                <path
                  d="M526.356 291.054C526.282 291.425 525.745 291.614 525.157 291.476C524.569 291.338 524.152 290.925 524.225 290.554C524.299 290.182 524.836 289.994 525.424 290.132C526.013 290.27 526.43 290.683 526.356 291.054Z"
                  fill="white"
                />
                <path
                  d="M532.801 290.067C533.259 290.778 533.48 291.614 533.538 292.492C533.555 292.931 533.522 293.382 533.432 293.832C533.352 294.286 533.171 294.721 532.968 295.146C532.57 296.022 531.845 296.692 531.113 297.251C530.925 297.386 530.727 297.506 530.531 297.632C530.332 297.742 530.127 297.832 529.924 297.932L529.348 298.189C529.199 298.251 529.049 298.313 528.919 298.386C528.352 298.644 528.005 298.998 527.923 299.183C527.869 299.281 527.829 299.405 527.88 299.605C527.932 299.796 528.038 300.042 528.203 300.282C528.545 300.752 529.057 301.221 529.659 301.552C530.259 301.907 530.944 302.142 531.749 302.19L531.773 302.191C531.811 302.193 531.84 302.226 531.838 302.264C531.836 302.293 531.816 302.317 531.789 302.325C531.021 302.561 530.191 302.508 529.429 302.282C528.667 302.049 527.956 301.637 527.391 301.063C527.111 300.775 526.869 300.44 526.715 300.058C526.557 299.679 526.519 299.237 526.629 298.831C526.738 298.423 526.988 298.071 527.285 297.794C527.582 297.514 527.925 297.293 528.284 297.117C528.641 296.935 529.024 296.811 529.366 296.65C529.541 296.571 529.721 296.502 529.892 296.416L530.385 296.122C531.022 295.707 531.616 295.197 532.014 294.541C532.833 293.251 533.012 291.599 532.666 290.108C532.657 290.07 532.68 290.032 532.718 290.023C532.748 290.017 532.778 290.029 532.793 290.054L532.801 290.067Z"
                  fill="#A67E67"
                />
                <path
                  d="M559.186 285.497C559.409 285.481 559.627 285.388 559.796 285.215C560.16 284.843 560.154 284.244 559.781 283.88C553.419 277.658 546.083 280.232 545.775 280.343C545.285 280.522 545.034 281.062 545.211 281.551C545.387 282.042 545.928 282.301 546.418 282.119C546.682 282.025 552.97 279.86 558.46 285.231C558.661 285.426 558.927 285.515 559.186 285.497Z"
                  fill="#8C5D43"
                />
                <path
                  d="M528.151 279.448C528.42 279.448 528.687 279.335 528.874 279.113C529.209 278.716 529.161 278.123 528.764 277.786C528.588 277.635 524.367 274.13 517.611 275.406C517.099 275.503 516.761 275.998 516.858 276.509C516.955 277.022 517.449 277.36 517.962 277.263C523.798 276.161 527.394 279.101 527.543 279.227C527.721 279.376 527.937 279.448 528.151 279.448Z"
                  fill="#8C5D43"
                />
                <path
                  d="M524.092 309.98C524.488 312.247 525.471 314.457 527.738 315.099C529.985 315.741 531.855 313.928 533.272 311.699C529.494 308.148 524.47 309.829 524.092 309.98Z"
                  fill="#D02B48"
                />
                <path
                  d="M524.092 309.98C524.47 309.829 529.494 308.148 533.272 311.699C534.991 308.96 535.496 307.891 535.591 307.55C535.345 307.72 531.402 308.809 528.228 308.242C524.979 307.657 524.092 305.189 524.092 305.189C524.092 305.189 523.582 307.146 524.092 309.98Z"
                  fill="#5F2A18"
                />
                <path
                  d="M524.072 309.98C524.072 309.98 524.072 309.98 524.091 309.98"
                  stroke="#5F2A18"
                  stroke-width="1.88891"
                  stroke-miterlimit="10"
                />
                <path
                  opacity="0.54"
                  d="M540.874 302.703C540.518 305.046 542.948 307.359 546.3 307.868C549.653 308.378 552.66 306.891 553.015 304.548C553.371 302.204 550.942 299.892 547.589 299.383C544.237 298.874 541.23 300.361 540.874 302.703Z"
                  fill="#E6A29B"
                />
                <path
                  opacity="0.54"
                  d="M512.218 296.688C511.745 298.837 513.855 301.129 516.93 301.806C520.005 302.483 522.882 301.29 523.355 299.141C523.828 296.991 521.719 294.7 518.643 294.023C515.568 293.346 512.691 294.539 512.218 296.688Z"
                  fill="#E6A29B"
                />
                <path
                  d="M557.979 327.718C557.979 327.718 546.386 332.61 538.479 329.738L535.176 330.641C535.176 330.641 542.116 340.427 560.067 328.979L557.979 327.718Z"
                  fill="#85C7FF"
                />
                <path
                  d="M510.821 275.79C507.479 273.884 507.063 246.945 529.952 240.198C552.841 233.45 571.886 244.282 571.886 244.282C571.886 244.282 570.487 241.263 571.886 240.198C573.283 239.133 574.856 242.861 574.856 242.861C574.856 242.861 574.681 237.534 576.603 238.067C578.525 238.6 577.476 244.815 577.476 244.815C577.476 244.815 579.049 241.974 581.32 243.039C583.592 244.104 578.525 248.544 578.525 248.544C578.525 248.544 588.309 254.225 588.659 266.477C589.008 278.729 583.086 289.149 583.086 289.149C574.852 286.519 570.632 298.778 570.632 298.778C563.438 295.271 574.68 270.562 569.613 271.501C564.546 272.441 553.888 264.195 553.888 264.195C553.888 264.195 557.033 270.384 548.646 271.449C540.259 272.514 525.757 256.889 525.757 256.889C516.322 262.571 513.929 275.636 513.929 279.542C513.93 279.542 512.308 276.637 510.821 275.79Z"
                  fill="#D98B47"
                />
                <g opacity="0.63">
                  <path
                    d="M553.849 264.259C551.952 263.687 550.216 262.81 548.558 261.816L547.934 261.446C547.728 261.318 547.533 261.177 547.331 261.044C546.933 260.77 546.527 260.507 546.135 260.223C545.356 259.65 544.604 259.039 543.858 258.419C543.491 258.102 543.144 257.759 542.788 257.428C542.438 257.092 542.071 256.773 541.748 256.404L540.765 255.32C540.444 254.949 540.143 254.561 539.847 254.171C538.674 252.604 537.642 250.873 537.121 248.956L537.251 248.88L538.032 250.066C538.286 250.465 538.602 250.822 538.884 251.202C539.03 251.388 539.167 251.581 539.318 251.763L539.782 252.3C540.097 252.654 540.388 253.028 540.724 253.363C542.006 254.76 543.411 256.039 544.841 257.283C546.264 258.537 547.756 259.712 549.271 260.855C550.029 261.427 550.8 261.98 551.578 262.524C552.351 263.075 553.133 263.615 553.929 264.131L553.849 264.259Z"
                    fill="#F5AB6B"
                  />
                </g>
                <g opacity="0.63">
                  <path
                    d="M576.133 265.679C573.627 265.214 571.242 264.365 568.935 263.35C567.769 262.862 566.659 262.262 565.538 261.678C564.432 261.065 563.36 260.391 562.295 259.699C561.255 258.972 560.228 258.219 559.248 257.4C558.285 256.563 557.327 255.709 556.479 254.741C554.75 252.863 553.259 250.646 552.545 248.186L552.678 248.116C553.858 250.292 555.482 252.2 557.291 253.884C559.094 255.581 561.079 257.078 563.136 258.455C565.181 259.853 567.313 261.125 569.493 262.305C571.675 263.48 573.905 264.577 576.189 265.54L576.133 265.679Z"
                    fill="#F5AB6B"
                  />
                </g>
                <g opacity="0.63">
                  <path
                    d="M523.019 252.047C522.488 253.19 521.84 254.151 521.172 255.08C520.496 255.998 519.782 256.859 519.053 257.691C518.326 258.524 517.558 259.315 516.798 260.113C516.02 260.909 515.248 261.681 514.359 262.564L514.217 262.514C514.586 261.411 515.163 260.395 515.805 259.436C516.443 258.47 517.174 257.574 517.925 256.698C518.69 255.834 519.501 255.013 520.332 254.216C521.162 253.416 522.021 252.649 522.924 251.931L523.019 252.047Z"
                    fill="#F5AB6B"
                  />
                </g>
                <path
                  d="M534.12 347.346C534.12 347.346 524.57 346.543 524.55 346.541C524.222 346.513 523.372 351.329 523.305 351.821C523.053 353.652 522.94 355.68 523.621 357.44C524.862 360.651 529.916 362.339 532.407 359.565C535.103 356.564 534.056 351.011 534.12 347.346Z"
                  fill="#85C7FF"
                />
                <path
                  d="M522.525 397.069C522.525 397.069 543.578 402.05 568.367 393.554C568.367 393.554 572.856 409.98 568.367 416.845C563.878 423.709 546.946 429.356 546.946 429.356C546.946 429.356 558.254 426.621 566.908 424.644C567.887 429.505 569.121 434.003 569.592 438.652C556.39 444.872 533.391 453.465 524.656 451.413C512.133 448.471 513.547 413.985 522.525 397.069Z"
                  fill="#45437E"
                />
                <path
                  d="M576.593 422.658C577.538 422.903 579.515 430.509 579.279 432.96C579.207 433.702 575.315 435.955 569.591 438.651C569.122 434.003 567.886 429.504 566.908 424.644C572.041 423.472 576.241 422.567 576.593 422.658Z"
                  fill="#F0C6AD"
                />
                <path
                  d="M575.407 423.247C575.407 423.247 580.562 419.13 582.365 418.432C584.168 417.732 599.609 425.722 603.737 433.156C604.952 435.345 605.611 438.146 603.372 439.898C599.458 442.961 596.063 439.894 592.677 437.739C590.878 436.593 589.08 435.435 587.222 434.383C586.742 434.112 584.757 432.698 584.146 433.121C583.115 433.834 580.429 437.038 579.146 436.047C577.862 435.056 575.09 430.241 574.52 429.364C573.952 428.488 577.632 426.83 577.632 426.83L575.407 423.247Z"
                  fill="#57B4F7"
                />
                <path
                  d="M601.418 434.761C597.289 427.328 581.849 419.337 580.046 420.036C579.656 420.187 579.106 420.504 578.488 420.898C579.933 419.843 581.518 418.76 582.365 418.432C584.168 417.733 599.608 425.723 603.737 433.157C604.952 435.346 605.611 438.146 603.372 439.899C602.809 440.34 602.257 440.641 601.713 440.849C603.123 439.105 602.492 436.695 601.418 434.761Z"
                  fill="white"
                />
                <path
                  d="M586.13 433.714C586.13 433.714 583.483 429.619 584.643 426.989"
                  stroke="white"
                  stroke-width="0.619365"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M589.487 435.754C589.487 435.754 586.84 431.66 588.001 429.03"
                  stroke="white"
                  stroke-width="0.619365"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M592.572 437.923C592.572 437.923 589.924 433.828 591.085 431.199"
                  stroke="white"
                  stroke-width="0.619365"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M584.757 430.788C584.757 430.788 580.708 432.789 582.208 434.54C583.708 436.29 584.757 430.788 584.757 430.788Z"
                  stroke="white"
                  stroke-width="0.619365"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M584.759 430.787C584.759 430.787 579.839 430.403 580.198 428.432C580.674 425.827 584.759 430.787 584.759 430.787Z"
                  stroke="white"
                  stroke-width="0.619365"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M562.34 395.385C562.688 397.863 562.85 401.256 563.132 403.742C563.779 409.452 564.843 415.811 559.213 419.284C555.209 421.754 550.455 422.825 546.66 425.662C545.608 426.448 542.748 428.468 543.856 430.03C544.702 431.221 547.201 431.204 548.483 431.215C552.082 431.244 555.607 430.34 559.118 429.666C561.89 429.132 564.652 428.534 567.391 427.851"
                  stroke="#5549FA"
                  stroke-width="0.751366"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M547.506 398.062C547.506 398.062 552.595 408.668 563.181 404.167"
                  stroke="#5549FA"
                  stroke-width="0.751366"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M572.709 344.228C572.074 339.336 566.958 336.348 562.389 338.21C558.389 339.84 553.733 343.54 551.436 351.857C546.947 368.112 544.173 376.961 544.173 376.961L517.975 378.917C517.975 378.917 516.323 383.042 518.068 386.158C519.814 389.274 546.102 392.638 552.389 390.889C558.675 389.14 567.574 373.909 570.844 362.677C572.756 356.107 573.363 349.264 572.709 344.228Z"
                  fill="#F0C6AD"
                />
                <path
                  d="M547.975 358.308C547.975 358.308 550.945 331.907 565.861 335.639C580.777 339.372 572.532 365.353 572.532 365.353L547.975 358.308Z"
                  fill="#85C7FF"
                />
                <path
                  d="M517.518 378.595C517.518 378.595 509.524 376.516 507.621 376.879C505.716 377.241 505.295 378.654 505.882 378.887C506.469 379.121 509.593 379.463 509.273 380.116C508.953 380.769 501.867 383.451 501.936 385.238C502.005 387.026 506.874 384.742 506.874 384.742C506.874 384.742 500.846 387.025 502.242 388.14C503.639 389.255 508.232 387.862 508.232 387.862C508.232 387.862 503.131 388.8 503.048 390.103C502.963 391.407 507.389 390.687 507.389 390.687C507.389 390.687 503.788 391.595 504.729 392.649C505.67 393.703 511.996 392.079 514.615 390.421C517.235 388.762 519.769 386.59 519.769 386.59L519.452 379.164L517.518 378.595Z"
                  fill="#F0C6AD"
                />
                <path
                  d="M504.813 385.522C505.181 385.291 505.567 385.124 505.958 384.97C506.347 384.814 506.762 384.736 507.164 384.62C507.567 384.506 507.969 384.388 508.368 384.262C508.769 384.142 509.169 384.016 509.555 383.855C509.566 383.85 509.578 383.854 509.583 383.865C509.587 383.875 509.583 383.886 509.574 383.892C508.841 384.316 508.054 384.628 507.271 384.938C506.878 385.089 506.495 385.272 506.085 385.37C505.675 385.47 505.26 385.552 504.825 385.562C504.813 385.562 504.803 385.552 504.803 385.541C504.803 385.533 504.807 385.526 504.813 385.522Z"
                  fill="#E3AD8D"
                />
                <path
                  d="M505.802 388.434C506.187 388.201 506.59 388.032 506.998 387.877C507.404 387.72 507.835 387.641 508.254 387.523C508.674 387.408 509.093 387.289 509.508 387.16C509.921 387.032 510.348 386.919 510.725 386.716L510.729 386.714C510.739 386.709 510.751 386.712 510.757 386.722C510.762 386.732 510.759 386.743 510.75 386.749C510.387 387.01 509.978 387.175 509.579 387.357C509.175 387.527 508.767 387.686 508.358 387.842C507.949 387.996 507.548 388.178 507.121 388.278C506.696 388.38 506.264 388.463 505.813 388.475C505.801 388.475 505.791 388.465 505.791 388.454C505.791 388.446 505.795 388.438 505.802 388.434Z"
                  fill="#E3AD8D"
                />
                <path
                  d="M507.383 390.667C507.734 390.437 508.102 390.272 508.475 390.119C508.847 389.963 509.245 389.886 509.629 389.767C510.013 389.65 510.398 389.531 510.775 389.397C511.152 389.264 511.541 389.142 511.872 388.925L511.875 388.922C511.885 388.916 511.898 388.919 511.904 388.928C511.91 388.937 511.908 388.949 511.901 388.955C511.589 389.229 511.216 389.404 510.856 389.591C510.489 389.766 510.116 389.926 509.742 390.083C509.367 390.237 509.001 390.418 508.607 390.517C508.214 390.617 507.815 390.698 507.395 390.707C507.383 390.707 507.373 390.697 507.373 390.685C507.373 390.678 507.377 390.671 507.383 390.667Z"
                  fill="#E3AD8D"
                />
              </g>
              <defs>
                <clipPath id="clip0_2257_5319">
                  <rect width="707" height="482" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </section>

          <section className="lg:basis-1/2 lg:relative">
            <section className="text-center text-[#4D1435] mt-11 font-semibold text-[16px] leading-[21.44px] mx-auto w-[274px] lg:w-auto lg:text-left lg:mx-4 xl:w-[504px] xl:text-[20px] xl:leading-[26.8px] ">
              From Potential to Prodigy: <br className="lg:hidden " />
              <span className="font-normal">
                A Proven Programme for Raising a{" "}
              </span>
              <br className="lg:hidden " />
              World-Ready Genius
            </section>

            <section className="mt-8 text-[14px] font-[400] leading-[22.4px] text-[#4D1435] mx-4 lg:w-[545px] xl:mt-6 xl:text-[16px] xl:leading-[25.6px] xl:inline-block ">
              The Kaushalya Genius Kid Program (KGKP) uses a scientifically
              designed approach to enhance your child's IQ, EQ, and SQ,
              unlocking his/her full potential.
              <br className="xl:hidden" />
              <br className="xl:hidden" />
              The program includes a curriculum which is developed using cutting
              edge technologies like Ridge Analysis, Brain Development Profile,
              Milestones Acceleration, Theory of Multiple Intelligences and so
              on to boost your child’s intellectual abilities. The program also
              enhances emotional and spiritual quotients through guided
              parenting practices, storytelling, and regular sessions on various
              relevant topics.
              <div className="mt-6 xl:text-[16px] xl:leading-[25.6px]">
                KGKP’s holistic and time-tested method ensures comprehensive
                personality development, fostering academic excellence,
                emotional intelligence, and a balanced, peaceful lifestyle.
              </div>
            </section>
          </section>
        </section>

        <section className="relative mt-[52px] mx-7 text-[#4D1435] text-[28px] font-[700] leading-[36.4px] text-center lg:w-[639px] lg:mx-auto xl:mt-[120.73px] xl:text-[42px] xl:leading-[50.4px]">
          <span className="z-10 relative">
            Learn How we Actualize the Genius of your Child
          </span>
          <Image
            src={chalkStroke}
            alt="Chalk Icon"
            className="absolute w-[196.08px] h-[40.94px] left-1/2 top-[15%] translate-x-[-50%] z-0 sm:top-0 sm:w-[307.11px] sm:h-[83.76px] xl:top-1/2 xl:w-[468.21px] xl:h-24"
          />
        </section>

        {/* Details */}
        <section className="flex flex-col mt-8 gap-8 lg:flex-row lg:mt-[103px] lg:gap-0 lg:px-[70px] xl:px-[150px] xl:mx-auto xl:justify-center ">
          <section className="flex flex-col mx-[29px] gap-8 lg:mx-0 lg:h-[600px] xl:h-[550px] ">
            <Image
              src={iqImage}
              alt="IQ Image"
              className="w-[211px] h-[177px] mx-auto lg:h-[337px] lg:w-full lg:order-2 lg:object-fill lg:overflow-visible xl:object-cover"
            />
            <section className="grid gap-3 lg:order-1 lg:self-start xl:w-[380px] ">
              <div className="text-[18px] font-[600] leading-[21.6px] text-[#4D1435] lg:text-[24px] lg:leading-[28.8px] ">
                IQ | Intelligence quotient
              </div>
              <div className="text-[14px] font-[400] leading-[19.6px] text-[#4D1435] ">
                Our program boosts IQ through ridge analysis and brain
                development profile to build a strong foundation in the first
                six years. This high IQ leads to academic excellence and helps
                children actualize their innate talents.
              </div>
            </section>
          </section>
          <section className="flex flex-col mx-[29px] gap-8 lg:mx-0 lg:h-[670px] lg:justify-end ">
            <Image
              src={eqImage}
              alt="IQ Image"
              className="w-[211px] h-[177px] mx-auto lg:h-[337px] lg:w-full lg:self-end lg:object-cover lg:overflow-visible "
            />
            <section className="grid gap-3 lg:self-end xl:w-[380px] ">
              <div className="text-[18px] font-[600] leading-[21.6px] text-[#4D1435] lg:text-[24px] lg:leading-[28.8px] ">
                EQ | Emotional quotient
              </div>
              <div className="text-[14px] font-[400] leading-[19.6px] text-[#4D1435] ">
                We build your child’s EQ by sowing seeds of emotional
                intelligence from ages 0-6 and enhancing it through weekly
                expert-led sessions and practical assignments from ages 6-15,
                covering vital life skills and emotional development.
              </div>
            </section>
          </section>
          <section className="flex flex-col mx-[29px] gap-8 lg:mx-0 lg:h-[600px] xl:h-[550px] ">
            <Image
              src={sqImage}
              alt="IQ Image"
              className="w-[211px] h-[177px] mx-auto lg:h-[337px] lg:w-full lg:order-2 lg:object-fill lg:overflow-visible xl:object-cover"
            />
            <section className="grid gap-3 lg:order-1 lg:self-start xl:w-[380px] ">
              <div className="text-[18px] font-[600] leading-[21.6px] text-[#4D1435] lg:text-[24px] lg:leading-[28.8px] ">
                SQ | Spiritual quotient
              </div>
              <div className="text-[14px] font-[400] leading-[19.6px] text-[#4D1435] ">
                Our weekly sessions of SQ enhance values and mindfulness,
                creating spiritual grounding, fostering an all round personality
                and inner peace in your child, and promoting positive parenting.
              </div>
            </section>
          </section>
        </section>
      </section>

      {/* courses secton */}
      <Courses />

      <section className="bg-[#FAEFB6] py-[52px] flex flex-col lg:flex-row lg:items-center lg:px-[52px] lg:py-[86px] lg:justify-between xl:w-[1280px] xl:rounded-[100px] xl:mx-auto">
        <section className="relative text-[#460C04] text-[20px] font-[700] leading-[26px] text-center mx-auto w-[315px] lg:text-left lg:m-0 lg:text-[32px] lg:font-[600] lg:leading-[38.4px] lg:basis-[60%] ">
          <div className="z-10 relative">
            Ready to Begin Your Child's Journey to Becoming a Genius{" "}
            <span className="lg:hidden">Ready for the World</span>?
          </div>
          <Image
            src={chalkStroke}
            alt="Chalk Icon"
            className="absolute w-[268.26px] h-[70.94px] left-1/2 bottom-[-35px] translate-x-[-50%] z-0 lg:w-[267px] lg:h-[72px] lg:left-[25%]"
          />
        </section>

        <section className="cursor-pointer custom-black-button mt-11 w-[254px] bg-[#4D1435] rounded-[50px] px-7 py-4 mx-auto flex gap-[14px] justify-center lg:m-0 lg:px-[80px] lg:py-6 lg:w-[385px] lg:h-[77px] lg:rounded-[50px]">
          <section className="text-white text-[16px] font-[700] leading-[19.2px] lg:text-[18px] lg:font-[600] lg:leading-[28.8px] custom-button-icon">
            Explore Our Courses
          </section>
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
        </section>
      </section>

      {/* Cards section */}
      <section className="my-[52px] px-3 lg:mt-24 lg:mb-[124px] lg:relative">
        <section className="text-[20px] relative font-[700] leading-[26px] text-[#1A2434] text-center mx-auto md:text-[30px] md:leading-[30.8px] ">
          <span className="z-10 relative">Academic Excellence</span>
          <Image
            src={chalkStroke}
            alt="Chalk Icon"
            className="absolute w-[235.08px] h-[60.94px] left-1/2 top-0 translate-x-[-50%] z-0 lg:w-[397.11px] lg:h-[93.76px] lg:top-[-10px]"
          />
        </section>

        <section className="mt-8 text-[14px] font-[500] leading-[19.6px] text-center text-[#1A2434] mx-auto md:text-[18px] md:leading-[25.2px] md:w-[551px] ">
          In any school across the world, about 10% children are academically
          brilliant. The rest are average or thereabouts.
        </section>

        <section className="mt-4 text-[14px] font-[400] leading-[19.6px] text-center text-[#1A2434] mx-auto lg:text-[18px] lg:leading-[25.2px] lg:w-[922px] ">
          The only difference between these two groups is that the brilliant
          children:1) Read better, 2) Do Math better, 3) Have more encyclopedic
          knowledge. KGKP bridges this gap for every child in the first 6 years.
        </section>

        <section className="mt-6 flex gap-6 flex-col items-center lg:flex-row lg:pt-20 lg:justify-between lg:mx-auto xl:mx-20 2xl:mx-auto 2xl:w-[1280px] ">
          {/* Card-1 */}
          <section className="bg-white w-[356px] grid gap-6 rounded-[40px] border pb-6 overflow-hidden lg:hover:transition-transform lg:hover:duration-500 lg:hover:scale-105">
            <Image src={card1} alt="Card - 1" className="basis-1/2 w-full" />
            <div className="basis-1/2 px-4 grid gap-3 ">
              <div className="text-[16px] font-[600] leading-[19.2px] text-[#1A2434] text-center ">
                Reading Program
              </div>
              <div className="text-[12px] font-[400] leading-[19.2px] text-[#1A2434] text-center ">
                We use short videos daily to teach children to recognize and
                pronounce words, phrases, and sentences, gradually enabling them
                to read and comprehend a newspaper by age six. This fosters a
                love for reading and also empowers children to access and
                understand knowledge from books, libraries and the internet.
              </div>
            </div>
          </section>

          {/* Card-2 */}
          <section className="bg-white w-[356px] grid gap-6 rounded-[40px] border pb-6 overflow-hidden lg:hover:transition-transform lg:hover:duration-500 lg:hover:scale-105">
            <Image src={card2} alt="Card - 2" className="basis-1/2 w-full" />
            <div className="basis-1/2 px-4 grid gap-3 ">
              <div className="text-[16px] font-[600] leading-[19.2px] text-[#1A2434] text-center ">
                Math Program
              </div>
              <div className="text-[12px] font-[400] leading-[19.2px] text-[#1A2434] text-center ">
                Our math program employs short videos that use dot cards to
                teach quantity recognition, addition, subtraction,
                multiplication, division, equations and mixed equations in the
                first 12 months and further continues with advanced math and
                arithmetic. This nurtures high math ability and consequently,
                quick decision-making capabilities.
              </div>
            </div>
          </section>

          {/* Card-3 */}
          <section className="bg-white w-[356px] grid gap-6 rounded-[40px] border pb-6 overflow-hidden lg:hover:transition-transform lg:hover:duration-500 lg:hover:scale-105">
            <Image src={card3} alt="Card - 3" className="basis-1/2 w-full" />
            <div className="basis-1/2 px-4 grid gap-3">
              <div className="text-[16px] font-[600] leading-[19.2px] text-[#1A2434] text-center ">
                Math Program
              </div>
              <div className="text-[12px] font-[400] leading-[19.2px] text-[#1A2434] text-center ">
                Our math program employs short videos that use dot cards to
                teach quantity recognition, addition, subtraction,
                multiplication, division, equations and mixed equations in the
                first 12 months and further continues with advanced math and
                arithmetic. This nurtures high math ability and consequently,
                quick decision-making capabilities.
              </div>
            </div>
          </section>
        </section>
        <Image
          src={snakeFrame}
          alt="snakeFrame"
          className="hidden lg:block lg:absolute -z-10 h-[728px] w-[1516px] left-0 -top-11"
        />
      </section>

      {/* Milestone section */}
      <section className="rounded-[40px] bg-[#F6E2D7] py-[52px] px-4 lg:rounded-[100px] lg:py-[124px] lg:px-[88px] ">
        <section className="relative text-[28px] font-[700] leading-[36.4px] text-center text-[#460C04] mx-auto w-[197px] lg:text-[42px] lg:font-[600] lg:leading-[50.4px] lg:w-fit ">
          <span className="z-10 relative">Milestones Acceleration</span>
          <Image
            src={chalkStroke}
            alt="Chalk Icon"
            className="absolute w-[235.08px] h-[60.94px] left-1/2 top-1/2 translate-x-[-50%] z-0 lg:w-[397.11px] lg:h-[93.76px] lg:top-0"
          />
        </section>

        <Image
          src={milestoneImg}
          alt="2x1 1"
          className="h-[164px] mx-auto rounded-[20px] mt-8 md:h-[400px] lg:h-[500px] xl:h-[634px] "
        />

        <section className="mt-8 text-[14px] font-[400] leading-[22.4px] text-[#460C04] md:w-[633px] md:mx-auto md:text-center lg:mt-[52px] ">
          Milestones Acceleration is a structured approach that enhances your
          child's brain development during the first six crucial years. In these
          first six years, there are 7 stages of brain development and in each
          stage, there are 6 milestones to be developed that affect the IQ of
          your child. Meaning, there are a total of 42 developmental milestones
          that are critical for boosting your child's IQ and overall cognitive
          abilities. The faster your child achieves these milestones, the higher
          will be the IQ of your child for the rest of his/her life.
          <div className="mt-6 text-[14px] font-[400] leading-[22.4px] text-[#460C04]">
            Our structured program focuses on accelerating these developmental
            milestones by guiding parents to do specific activities with the
            child and assess their development. The early and accelerated
            achievement of milestones creates very high levels of IQ in your
            child.
          </div>
        </section>

        <section className="relative mt-[52px] text-[28px] font-[700] leading-[36.4px] text-[#460C04] text-center mx-auto w-[191px] sm:w-fit lg:hidden">
          <span className="z-10 relative">Multiple Intelligence</span>
          <Image
            src={chalkStroke}
            alt="Chalk Icon"
            className="absolute w-[235.08px] h-[60.94px] left-1/2 top-0 translate-x-[-50%] z-0 lg:w-[397.11px] lg:h-[93.76px] lg:top-0"
          />
        </section>

        <section className="flex flex-col md:flex-row md:justify-center lg:mt-[124px] lg:mx-auto xl:w-[1156px] xl:justify-around">
          <Image
            src={inteligenceImg}
            alt="Inteligence Image"
            className="pt-8 rounded-[32.63px] mx-auto md:w-[321.42px] md:h-[310px] md:order-2 xl:mx-0 "
          />

          <section className="mt-8 text-[14px] font-[400] leading-[22.4px] text-[#460C04] md:order-1 lg:w-[633px]">
            <section className="hidden lg:block text-[42px] font-[600] leading-[50.4px] text-[#1A2434] ">
              Multiple Intelligence
            </section>
            The concept of multiple intelligences is a theory proposed by Howard
            Gardner, a psychologist and a professor of education to propose that
            human brain is capable of different types of intelligences. These
            multiple intelligences include logical, linguistic, spatial,
            kinesthetic, interpersonal, intrapersonal, musical and naturalistic
            intelligences. Every child at the moment of birth has the potential
            intelligence to become a genius in onr or more of these
            intelligences.
            <div className="mt-6 text-[14px] font-[400] leading-[22.4px] text-[#460C04]">
              These intelligences are functions of different lobes in the brain
              and our Ridge Analysis report mentions critical information about
              the intelligence profile of the child. This information is used in
              our age appropriate activity plan for the child and parents are
              also counselled to practise some activities at home or through
              other available resources.
            </div>
          </section>
        </section>
      </section>

      {/* Analysis section */}
      <section className="py-[52px] px-4 items-center flex flex-col lg:flex-row lg:py-[124px] lg:justify-evenly xl:gap-24 xl:justify-center">
        <section className="relative text-[28px] font-[700] leading-[36.4px] text-[#1A2434] mx-auto w-[203px] lg:hidden">
          <span className="z-10 relative">Ridge Analysis</span>
          <Image
            src={chalkStroke}
            alt="Chalk Icon"
            className="absolute w-[235.08px] h-[60.94px] left-1/2 top-[15%] translate-x-[-50%] z-0 lg:w-[373.8px] lg:h-[88.26px] lg:top-0"
          />
        </section>
        <Image
          src={analysisImage}
          alt="Analysis image"
          className="h-[318px] rounded-[20px] mt-8 mx-auto xl:w-[568px] xl:h-[553px] xl:mx-0"
        />

        <section className="max-w-[573px]">
          <section className="hidden lg:block relative text-[42px] font-[700] leading-[50.4px] text-[#1A2434]">
            <span className="z-10 relative">Ridge Analysis</span>
            <Image
              src={chalkStroke}
              alt="Chalk Icon"
              className="absolute w-[235.08px] h-[60.94px] left-0 top-[15%] z-0 lg:w-[373.8px] lg:h-[88.26px] lg:top-0"
            />
          </section>

          <section className="mt-8 text-[14px] font-[400] leading-[19.6px] text-[#1A2434] xl:text-[16px] xl:leading-[22.4px] ">
            Ridge Analysis is a scientific method that helps to understand the
            inborn intelligences and learning styles by analysing fingerprints.
            The report gives clear information about:
          </section>

          <section className="mt-8 grid gap-6 xl:mt-[52px]">
            <section className="flex gap-6 items-center group">
              <Image
                src={strengthIcon}
                alt="Strength Icon"
                className="w-[42px] h-[42px] xl:w-[52px] xl:h-[52px] group-hover:scale-110 transition-transform duration-500"
              />
              <div className="text-[16px] font-[600] leading-[19.2px] text-[#1A2434] text-center xl:text-[18px] xl:leading-[21.6px]">
                Strengths & weaknesses
              </div>
            </section>

            <section className="flex gap-6 items-center group">
              <Image
                src={brainIcon}
                alt="Strength Icon"
                className="w-[42px] h-[42px] xl:w-[52px] xl:h-[52px] group-hover:scale-110 transition-transform duration-500"
              />
              <div className="text-[16px] font-[600] leading-[19.2px] text-[#1A2434] text-center xl:text-[18px] xl:leading-[21.6px]">
                Growth rate of every brain lobe
              </div>
            </section>
            <section className="flex gap-6 items-center group">
              <Image
                src={growthIcon}
                alt="Strength Icon"
                className="w-[42px] h-[42px] xl:w-[52px] xl:h-[52px] group-hover:scale-110 transition-transform duration-500"
              />
              <div className="text-[16px] font-[600] leading-[19.2px] text-[#1A2434] text-center xl:text-[18px] xl:leading-[21.6px]">
                Learning style of the child
              </div>
            </section>
          </section>

          <section className="mt-8 text-[14px] font-[400] leading-[19.6px] text-[#1A2434] xl:mt-[52px] xl:text-[18px] xl:leading-[22.4px]">
            Ridge Analysis report can be generated after a child is 1 year old
            to identify the exact talent profile of the child. This report is
            then used to identify where the highest potential genius of the
            child lies and create a unique activity plan that parents can use to
            help their child actualise their potential genius.
          </section>
        </section>
      </section>

      <Image
        src={whiteRock}
        alt="White Rock"
        className="hidden xl:block absolute right-[-370px] bottom-[487px] w-[630px] h-[630px]"
      />
    </div>
  );
};

export default Methods;
