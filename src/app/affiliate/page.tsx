"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

import affiliateImage from "./assets/Affiliate Img.png";
import useInView from "../components/useInView";
import styles from "./style.module.css";
import AffiliateForm from "./EnrollSection/components/AffiliateForm";

const Page = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  useEffect(() => {
    if (isInView) {
      const clipRect = document.getElementById("clipRect");
      if (clipRect) {
        clipRect.classList.add("revealed");
      }
    }
  }, [isInView]);
  return (
    <div className="bg-[#FAEFB6] rounded-b-[40px] xl:rounded-b-[100px] ">
      <div className="flex flex-col pb-4 md:flex-row md:pt-8 md:items-center md:mx-10 xl:px-20 xl:mx-auto xl:pt-[69px] xl:pb-6 max-w-[1440px] ">
        <section className="w-[360px] mx-auto pt-8 md:mx-0 md:pt-0 md:basis-1/2 xl:basis-auto xl:w-[650px] ">
          <section ref={sectionRef} className="relative xl:w-[560px] ">
            <div className="text-[28px] font-[700] leading-[36.4px] text-[#F12F40] text-center xl:text-left xl:text-[38px] xl:leading-[56.6px] ">
              Monetise Your Parent Connect!
            </div>

            <div className="relative text-[28px] font-[700] leading-[36.4px] text-[#4D1435] text-balance text-center xl:text-left xl:text-[38px] xl:leading-[56.6px] ">
              Affiliate with KGKP & Create an{" "}
              <span className="xl:block relative z-10">
                Income of ₹10 Lakhs per Month
              </span>
              <svg
                className={`${
                  isInView ? styles.chalkMark : ""
                } absolute bottom-[-34px] left-5 w-[340px] h-[60px] lg:w-[472px] lg:h-[84px] lg:left-auto lg:-right-9 lg:-bottom-11`}
                viewBox="0 0 469 83"
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
                      height="82"
                      fill="white"
                    />
                  </clipPath>
                </defs>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="#FFB31F"
                  stroke="transparent"
                  strokeWidth="3"
                  strokeLinecap="butt"
                  clipPath="url(#revealClip)"
                  d="M445.059 35.22C444.009 35.89 431.779 34.58 429.819 33.59C427.559 32.45 421.729 31.6 420.409 32.21C419.429 32.67 418.959 32.52 419.059 31.77C419.219 30.61 415.439 30.02 413.979 30.98C413.539 31.27 411.769 30.98 410.039 30.33C407.719 29.45 406.419 29.57 405.049 30.79C403.749 31.94 402.989 32.03 402.509 31.1C401.479 29.1 396.429 27.89 394.169 29.09C393.009 29.71 392.239 29.7 392.319 29.08C392.519 27.6 371.589 24.61 354.109 23.62C352.259 23.52 347.589 23.08 343.729 22.64C332.359 21.36 329.049 21.55 329.549 23.48C329.919 24.93 329.639 24.87 327.469 23C326.089 21.81 324.709 21 324.409 21.2C324.109 21.4 320.359 21.24 316.079 20.83C311.799 20.42 307.129 20.54 305.689 21.09C303.959 21.75 302.879 21.69 302.509 20.9C302.129 20.09 301.469 19.96 300.449 20.51C299.619 20.95 297.889 20.92 296.609 20.45C295.079 19.88 294.199 20.1 294.069 21.06C293.869 22.5 291.489 22.55 286.319 21.2C284.109 20.62 283.829 20.88 284.239 23.07C284.699 25.52 284.649 25.53 282.809 23.44C281.459 21.9 280.529 21.53 279.579 22.16C278.629 22.79 278.079 22.69 277.659 21.8C277.259 20.94 275.949 20.87 273.459 21.57C271.289 22.18 268.609 22.12 266.769 21.43C264.489 20.57 263.639 20.66 263.489 21.8C263.349 22.8 262.239 23.11 260.259 22.7C257.409 22.11 255.569 22.12 243.029 22.77C240.209 22.91 236.649 22.97 235.109 22.89C231.089 22.68 228.279 23.31 228.119 24.46C228.049 25.01 226.659 24.94 225.039 24.31C221.799 23.04 214.479 22.76 200.609 23.37C183.889 24.1 179.029 24.55 173.169 25.89C169.969 26.62 166.979 27.08 166.539 26.9C166.099 26.73 165.669 27.04 165.599 27.61C165.519 28.17 164.489 28.46 163.309 28.24C162.129 28.02 157.849 28.64 153.809 29.61C149.769 30.58 140.289 31.95 132.739 32.66C111.779 34.63 91.6491 37.22 90.8491 38.04C90.4491 38.44 88.7291 38.84 87.0091 38.91C84.3491 39.03 83.8091 39.57 83.3991 42.61C83.1291 44.57 82.4091 46.08 81.7891 45.97C81.1391 45.85 81.1091 44.73 81.7191 43.31C82.7291 40.96 82.6291 40.88 79.4591 41.4C77.6391 41.7 75.3291 42.41 74.3191 42.98C73.3091 43.55 70.4191 44.23 67.8991 44.48C65.3791 44.74 61.0091 45.65 58.1791 46.51C55.3491 47.37 51.5991 47.92 49.8291 47.72C48.0591 47.53 46.5691 47.72 46.5091 48.14C46.4491 48.57 45.6991 48.51 44.8291 48.03C43.8191 47.46 43.1691 47.75 43.0291 48.83C42.8991 49.76 42.1891 50.32 41.4491 50.06C39.9391 49.55 36.4091 49.96 33.7091 50.96C32.7291 51.32 31.1391 51.78 30.1791 51.97C29.2191 52.16 25.5891 53.64 22.1091 55.26C16.2291 57.98 14.2491 60.14 16.1891 61.74C17.6791 62.96 24.6991 60.46 26.0091 58.23C26.7291 57.01 27.5591 56.06 27.8591 56.12C28.1591 56.17 28.0191 56.86 27.5591 57.64C26.4191 59.56 27.8991 59.67 32.1091 57.99C34.0391 57.22 35.9891 56.9 36.4391 57.27C36.8891 57.64 37.3191 57.51 37.3991 56.98C37.4691 56.45 41.4891 55.89 46.3191 55.74C51.1491 55.59 55.6891 55.19 56.3891 54.85C57.0991 54.51 59.3891 54.45 61.4891 54.71C63.5891 54.97 65.9591 54.88 66.7491 54.5C67.5491 54.12 69.2391 54.33 70.4991 54.95C71.9591 55.68 73.1991 55.65 73.9191 54.87C74.8291 53.88 75.4291 53.97 77.0691 55.32C78.7991 56.74 79.4791 56.72 81.6391 55.16C83.8091 53.6 84.1491 53.59 83.9391 55.08C83.7491 56.47 84.3391 56.8 86.8291 56.69C88.5491 56.61 90.2391 56.29 90.5991 55.97C92.1491 54.56 95.2691 54.81 95.0691 56.33C94.9491 57.24 95.4191 57.69 96.1991 57.4C96.9391 57.13 99.2091 57.12 101.239 57.37C103.269 57.62 105.719 57.41 106.689 56.89C108.059 56.16 108.529 56.26 108.839 57.38C109.079 58.24 109.369 58.05 109.579 56.91C109.839 55.53 110.509 55.27 112.059 55.95C113.399 56.54 113.979 56.43 113.619 55.66C113.249 54.88 113.859 54.8 115.299 55.43C116.909 56.14 117.829 55.9 118.489 54.59C119.009 53.58 119.879 53.13 120.439 53.58C120.989 54.04 122.259 53.68 123.249 52.79C124.919 51.29 125.039 51.31 124.839 52.97C124.719 53.96 125.129 54.86 125.729 54.97C126.339 55.08 126.819 54.81 126.809 54.38C126.799 53.94 126.959 52.7 127.189 51.62C127.589 49.67 127.609 49.68 128.939 51.94C129.779 53.36 130.369 53.72 130.499 52.88C130.639 52.04 131.449 51.9 132.689 52.51C133.819 53.07 135.329 52.93 136.259 52.18C137.139 51.46 138.579 51 139.449 51.16C140.359 51.33 140.769 50.89 140.409 50.13C139.969 49.2 140.649 49.18 142.749 50.08C145.199 51.13 145.629 51.04 145.249 49.57C144.899 48.22 145.259 48.02 146.749 48.76C147.879 49.32 149.389 49.18 150.309 48.43C151.189 47.71 152.849 47.29 153.979 47.5C155.119 47.71 156.109 47.41 156.189 46.85C156.269 46.29 157.349 46.01 158.599 46.24C159.889 46.47 160.629 46.14 160.309 45.46C159.939 44.69 160.719 44.68 162.499 45.45C164.109 46.14 165.319 46.2 165.399 45.59C165.479 45.02 166.759 44.9 168.259 45.33C169.749 45.76 171.029 45.69 171.099 45.18C171.169 44.67 171.829 44.46 172.569 44.72C173.929 45.2 178.109 44.55 184.189 42.93C186.009 42.44 188.199 42.17 189.039 42.32C189.889 42.47 191.529 41.36 192.699 39.84C193.969 38.19 195.699 37.24 196.999 37.47C198.199 37.69 199.229 37.45 199.299 36.94C199.489 35.58 206.609 34.83 207.589 36.07C208.949 37.8 214.179 37.3 215.029 35.35C215.679 33.88 216.849 33.75 221.469 34.67C224.569 35.29 228.479 35.55 230.159 35.26C233.399 34.7 249.439 35.16 253.009 35.92C254.189 36.17 255.849 36.01 256.689 35.56C257.539 35.11 258.839 35.05 259.579 35.44C260.319 35.83 262.609 35.81 264.669 35.41C266.719 35.01 270.369 35.04 272.779 35.48C276.049 36.07 277.669 35.78 279.169 34.33C281.149 32.41 281.199 32.41 282.509 34.67C283.649 36.65 284.179 36.84 286.329 36.07C287.699 35.58 289.279 35.55 289.839 36.01C290.399 36.47 291.649 36.42 292.619 35.91C293.589 35.39 295.049 35.35 295.859 35.81C296.779 36.33 297.719 35.84 298.319 34.54C299.279 32.47 299.329 32.47 300.659 34.71C301.849 36.7 302.049 36.78 302.259 35.26C302.489 33.6 304.219 33.39 308.289 34.53C309.339 34.82 310.259 34.57 310.339 33.97C310.419 33.37 311.699 33.1 313.179 33.37C314.659 33.64 316.279 33.41 316.779 32.86C317.439 32.14 317.859 32.22 318.299 33.17C318.639 33.89 319.749 34.34 320.769 34.17C323.019 33.79 322.529 31.1 319.669 28.02C318.559 26.83 318.149 25.94 318.749 26.05C320.319 26.34 324.309 30.79 324.139 32.07C324.049 32.72 325.659 33.24 328.199 33.38C330.509 33.51 334.499 34.04 337.069 34.55C339.639 35.06 341.799 35.03 341.879 34.48C341.949 33.93 345.239 34.06 349.169 34.78C353.099 35.49 356.819 35.9 357.419 35.68C358.019 35.46 360.939 35.48 363.909 35.73C373.279 36.52 375.719 36.51 376.999 35.66C377.759 35.16 379.169 35.36 380.619 36.17C381.929 36.91 383.349 37.28 383.779 36.99C384.209 36.71 386.919 36.74 389.809 37.07C402.679 38.54 414.939 39.25 416.219 38.6C416.989 38.21 418.579 38.29 419.749 38.76C424.319 40.61 446.239 44.77 450.119 44.53C453.579 44.32 454.289 43.82 454.709 41.37C455.129 38.88 454.829 38.46 452.629 38.46C451.209 38.46 449.389 37.59 448.539 36.51C446.759 34.25 446.579 34.18 445.019 35.16L445.059 35.22ZM312.309 27.99C312.229 28.55 311.649 28.92 310.999 28.8C310.359 28.68 310.199 28.18 310.649 27.69C311.099 27.19 311.689 26.83 311.959 26.88C312.229 26.93 312.379 27.43 312.309 27.99ZM314.799 31.31C313.539 32.15 312.829 30.41 313.939 29.2C314.779 28.28 315.039 28.33 315.269 29.44C315.429 30.2 315.219 31.04 314.809 31.32L314.799 31.31ZM263.959 26.56C263.879 27.12 263.299 27.49 262.649 27.37C262.009 27.25 261.849 26.75 262.299 26.26C262.749 25.76 263.339 25.4 263.609 25.45C263.879 25.5 264.029 26 263.959 26.56ZM192.579 36.69C192.499 37.25 191.919 37.62 191.269 37.5C190.629 37.38 190.469 36.88 190.919 36.39C191.369 35.89 191.959 35.53 192.229 35.58C192.499 35.63 192.649 36.13 192.579 36.69ZM190.919 40.59C190.839 41.15 190.279 41.52 189.679 41.41C189.069 41.3 188.639 40.75 188.719 40.19C188.799 39.63 189.359 39.26 189.959 39.37C190.569 39.48 190.999 40.03 190.919 40.59ZM178.319 41.91C178.169 42.99 175.999 43.06 175.499 42C175.199 41.36 175.719 40.97 176.669 41.15C177.609 41.32 178.359 41.66 178.329 41.91H178.319ZM96.2791 47.37C96.0991 48.7 94.6691 49.35 93.6891 48.55C92.6391 47.69 93.8691 46.06 95.3591 46.33C95.9291 46.43 96.3391 46.9 96.2791 47.37ZM115.399 52.07C114.949 52.57 115.439 53.13 116.479 53.32C119.229 53.82 117.939 54.23 113.699 54.21C109.489 54.19 109.019 52.82 112.889 51.85C116.279 51 116.369 51.01 115.399 52.07ZM84.3991 51.69C84.3191 52.25 84.0391 52.67 83.7691 52.63C83.4991 52.58 83.0391 52.03 82.7391 51.39C82.4391 50.75 82.7191 50.34 83.3691 50.45C84.0091 50.57 84.4691 51.12 84.3991 51.69Z"
                />
              </svg>
            </div>
          </section>

          <AffiliateForm>
            <button className="hidden custom-black-button mt-[38px] mx-auto w-[247px] h-[51px] rounded-[50px] bg-[#4D1435] items-center justify-center gap-3.5 px-7 py-4 md:flex xl:mt-[83px] xl:mx-0 xl:w-[390px] xl:h-[77px] xl:px-[60px] xl:py-6 ">
              <span className="text-[16px] font-[700] leading-[19.2px] text-white custom-button-icon xl:text-2xl xl:leading-[29.05px] ">
                Become An Affiliate
              </span>

              <svg
                className="w-4 h-4 custom-button-icon xl:w-6 xl:h-6"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="icon-arrow-right">
                  <path
                    id="Shape"
                    className="fill-current text-white"
                    d="M7.5299 3.36177C7.79025 3.10142 8.21236 3.10142 8.47271 3.36177L13.1394 8.02843C13.3997 8.28878 13.3997 8.71089 13.1394 8.97124L8.47271 13.6379C8.21236 13.8983 7.79025 13.8983 7.5299 13.6379C7.26955 13.3776 7.26955 12.9554 7.5299 12.6951L11.0585 9.1665H3.33464C2.96645 9.1665 2.66797 8.86803 2.66797 8.49984C2.66797 8.13165 2.96645 7.83317 3.33464 7.83317H11.0585L7.5299 4.30457C7.26955 4.04423 7.26955 3.62212 7.5299 3.36177Z"
                  />
                </g>
              </svg>
            </button>
          </AffiliateForm>
        </section>

        <section className="w-[331px] mx-auto mt-[50px] md:mt-0 md:basis-1/2 xl:basis-auto xl:w-[652px] xl:h-[563px] ">
          <Image
            src={affiliateImage}
            alt="Affiliate Image"
            className="w-[331px] h-[291px] object-cover md:mx-auto xl:h-full xl:w-full "
          />

          <AffiliateForm>
            <button className="custom-black-button mt-[38px] mx-auto w-[247px] h-[51px] rounded-[50px] bg-[#4D1435] flex items-center justify-center gap-3.5 px-7 py-4 md:hidden ">
              <span className="text-[16px] font-[700] leading-[19.2px] text-white custom-button-icon">
                Become An Affiliate
              </span>
              <svg
                className="w-4 h-4 custom-button-icon"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="icon-arrow-right">
                  <path
                    id="Shape"
                    className="fill-current text-white"
                    d="M7.5299 3.36177C7.79025 3.10142 8.21236 3.10142 8.47271 3.36177L13.1394 8.02843C13.3997 8.28878 13.3997 8.71089 13.1394 8.97124L8.47271 13.6379C8.21236 13.8983 7.79025 13.8983 7.5299 13.6379C7.26955 13.3776 7.26955 12.9554 7.5299 12.6951L11.0585 9.1665H3.33464C2.96645 9.1665 2.66797 8.86803 2.66797 8.49984C2.66797 8.13165 2.96645 7.83317 3.33464 7.83317H11.0585L7.5299 4.30457C7.26955 4.04423 7.26955 3.62212 7.5299 3.36177Z"
                  />
                </g>
              </svg>
            </button>
          </AffiliateForm>

          <svg
            className="mt-6 mx-auto animate-bounce md:hidden"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="left-arrow 1">
              <g id="Group">
                <g id="Group_2">
                  <path
                    id="Vector"
                    d="M12.0051 14.3118L3.02634 5.33351C2.77971 5.08629 2.44995 4.95029 2.09834 4.95029C1.74654 4.95029 1.41698 5.08629 1.16995 5.33351L0.38361 6.12024C0.136195 6.36707 0 6.69702 0 7.04863C0 7.40024 0.136195 7.7298 0.38361 7.97682L11.0736 18.667C11.3214 18.915 11.6525 19.0508 12.0045 19.0498C12.358 19.0508 12.6888 18.9152 12.9368 18.667L23.6164 7.98678C23.8638 7.73975 24 7.41019 24 7.05839C24 6.70678 23.8638 6.37721 23.6164 6.13L22.83 5.34346C22.3182 4.83165 21.4851 4.83165 20.9735 5.34346L12.0051 14.3118Z"
                    fill="#EF816C"
                  />
                </g>
              </g>
            </g>
          </svg>
        </section>
      </div>
    </div>
  );
};

export default Page;
