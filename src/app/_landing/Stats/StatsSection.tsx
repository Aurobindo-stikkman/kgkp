"use client";
import Image from "next/image";

import { useState, useEffect, Dispatch, SetStateAction } from "react";

import playtime1 from "./playtime.svg";
import trophy from "./trophy.svg";
import virtualClass from "./virtual-class.svg";
import handPrint from "./hand-print.svg";

const StatsSection = () => {
  const [childrenCount, setChildrenCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const [parentsCount, setParentsCount] = useState(0);
  const [counsellingCount, setCounsellingCount] = useState(0);

  useEffect(() => {
    const incrementCounter = (
      target: number,
      setValue: Dispatch<SetStateAction<number>>,
      duration: number
    ) => {
      let start = 0;
      const increment = target / (duration / 10);

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setValue(target);
          clearInterval(timer);
        } else {
          setValue(Math.round(start));
        }
      }, 0);
    };

    incrementCounter(10, setChildrenCount, 500);
    incrementCounter(17, setYearsCount, 700);
    incrementCounter(200, setParentsCount, 1500);
    incrementCounter(30, setCounsellingCount, 1000);
  }, []);

  return (
    <section className="my-[52px] pl-4 pr-3 flex items-start justify-between sm:justify-evenly md:justify-around md:overflow-hidden xl:gap-[133px] xl:my-[107px] xl:justify-center xl:px-[85px] ">
      {/* Card 1 */}
      <section className="grid gap-4 lg:w-[208px] lg:h-[278px] ">
        <Image
          src={playtime1}
          alt="Child playing"
          className="w-8 h-8 mx-auto md:w-14 md:h-14 lg:w-20 lg:h-20 xl:w-[130px] xl:h-[130px]"
        />
        <div className="w-[68px] grid gap-2 lg:w-auto">
          <div className="text-[18px] font-[700] leading-[21.6px] poetsen-one-regular text-center lg:h-[58px] lg:text-[48px] lg:leading-[57.6px]">
            {childrenCount}K<span className="text-red-600">+</span>
          </div>
          <div className="text-[10px] font-[400] leading-[14px] text-center tracking-[2%] text-[#1A2434] lg:h-8 lg:text-[18px] lg:leading-[32.4px] opacity-[70%]">
            Children Benefited
          </div>
        </div>
      </section>

      {/* Card 2 */}
      <section className="grid gap-4 lg:w-[245px] lg:h-[278px] ">
        <Image
          src={trophy}
          alt="Trophy"
          className="w-8 h-8 mx-auto md:w-14 md:h-14 lg:w-20 lg:h-20 xl:w-[130px] xl:h-[130px]"
        />
        <div className="w-[88px] grid gap-2 lg:w-auto">
          <div className="text-[18px] font-[700] leading-[21.6px] poetsen-one-regular text-center lg:h-[58px] lg:text-[48px] lg:leading-[57.6px]">
            {yearsCount}
            <span className="text-red-600">+</span>
          </div>
          <div className="text-[10px] font-[400] leading-[14px] text-center tracking-[2%] text-[#1A2434] lg:h-8 lg:text-[18px] lg:leading-[32.4px] opacity-[70%]">
            Years of KGK Program
          </div>
        </div>
      </section>

      {/* Card 3 */}
      <section className="grid gap-4 lg:w-[204px] lg:h-[310px] ">
        <Image
          src={virtualClass}
          alt="Virtual Class"
          className="w-8 h-8 mx-auto md:w-14 md:h-14 lg:w-20 lg:h-20 xl:w-[130px] xl:h-[130px]"
        />
        <div className="w-[88px] grid gap-2 lg:w-auto">
          <div className="text-[18px] font-[700] leading-[21.6px] poetsen-one-regular text-center lg:h-[58px] lg:text-[48px] lg:leading-[57.6px]">
            {parentsCount}K<span className="text-red-600">+</span>
          </div>
          <div className="text-[10px] font-[400] leading-[14px] text-center tracking-[2%] text-[#1A2434] lg:text-[18px] lg:leading-[32.4px] opacity-[70%]">
            Parents benefited from Parenting Workshops
          </div>
        </div>
      </section>

      {/* Card 4 */}
      <section className="grid gap-4 lg:w-[214px] lg:h-[310px] ">
        <Image
          src={handPrint}
          alt="Hand Print"
          className="w-8 h-8 mx-auto md:w-14 md:h-14 lg:w-20 lg:h-20 xl:w-[130px] xl:h-[130px]"
        />
        <div className="w-[88px] grid gap-2 lg:w-auto">
          <div className="text-[18px] font-[700] leading-[21.6px] poetsen-one-regular text-center lg:h-[58px] lg:text-[48px] lg:leading-[57.6px]">
            {counsellingCount}K<span className="text-red-600">+</span>
          </div>
          <div className="text-[10px] font-[400] leading-[14px] text-center tracking-[2%] text-[#1A2434] lg:text-[18px] lg:leading-[32.4px] opacity-[70%]">
            Ridge Analysis Counsellings
          </div>
        </div>
      </section>
    </section>
  );
};

export default StatsSection;
