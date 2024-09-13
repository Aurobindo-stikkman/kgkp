"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

import targetFrame from "./assets/target frame.png";
import improving from "./assets/improving.png";
import chalkStroke from "./assets/Chalk Stroke.png";

const VisionSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="py-[52px] px-10 lg:py-[155px] lg:px-[124px]">
      <section className="relative text-[28px] font-[700] leading-[36.4px] text-center mx-auto text-[#1A2434] lg:text-[42px] lg:leading-[50.4px]">
        <span className="relative z-10">Our Vision & Mission</span>
        <Image
          src={chalkStroke}
          alt="Chalk Icon"
          className="absolute w-[235.08px] h-[60.94px] left-1/2 top-[15%] translate-x-[-50%] z-0 lg:w-[397.11px] lg:h-[93.76px]"
        />
      </section>

      <section className="flex flex-col gap-[52px] justify-center mt-[52px] sm:flex-row sm:mt-10 lg:mt-[117px] lg:justify-between lg:gap-[112px] lg:max-w-[1130px] lg:mx-auto">
        <section className="flex flex-col lg:items-center lg:w-[509px] ">
          <Image
            src={targetFrame}
            alt="Target Frame"
            className={`h-[194.71px] w-full lg:w-[357.17px] lg:h-[267.22px] transform transition-transform duration-500 ${
              isLoaded ? "scale-100" : "scale-90"
            }`}
          />

          <div className="mt-[52px] text-[20px] font-[600] leading-[26.8px] text-center text-[#1A2434] lg:text-[32px] lg:leading-[42.88px]">
            Vision
          </div>
          <div className="text-[16px] font-[500] leading-[21.44px] mt-2 text-[#1A2434] text-center mx-auto lg:text-[24px] lg:leading-[32.16px] lg:px-6">
            To contribute towards creating an enlightened society
          </div>
        </section>

        <section className="flex flex-col lg:items-center lg:w-[509px] ">
          <Image
            src={improving}
            alt="Target Frame"
            className={`h-194.71px w-full lg:w-[308.1px] lg:h-[270px] transform transition-transform duration-500 ${
              isLoaded ? "scale-100" : "scale-90"
            }`}
          />

          <div className="mt-[52px] text-[20px] font-[600] leading-[26.8px] text-center text-[#1A2434] lg:text-[32px] lg:leading-[42.88px]">
            Mission
          </div>
          <div className="text-[16px] font-[500] leading-[21.44px] mt-2 text-[#1A2434] text-center mx-auto lg:text-[24px] lg:leading-[32.16px] lg:px-6">
            To become a world class educational institution.
          </div>
        </section>
      </section>
    </section>
  );
};

export default VisionSection;
