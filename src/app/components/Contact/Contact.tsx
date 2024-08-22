"use client";
import Image from "next/image";
import arrowIcon from "../icon-arrow-right.svg";
import chalkStroke from "./assets/Chalk Stroke.png";
import kite from "./assets/Group.svg";
import kiterope from "./assets/Vector 2.svg";
import rope from "./assets/Vector 60.svg";

const Contact = () => {
  return (
    <section className="bg-[#FAEFB6] py-[52px] lg:py-[124px] overflow-hidden">
      <section className="text-[#460C04] relative text-[20px] font-[700] leading-[26px] text-center mx-auto w-[311px] lg:w-[564px] lg:text-[32px] lg:font-[600] lg:leading-[38.4px] ">
        <span className="z-10 relative">
          Ready to Begin Your Child's Journey to Becoming a Genius?
        </span>
        <Image
          src={chalkStroke}
          alt="Chalk Icon"
          className="absolute w-[120px] h-[60.94px] top-1/2 right-0 z-0 lg:w-[250.4px] lg:top-[34%] lg:right-[12%] lg:h-[93.76px]"
        />

        {/* Kite Image */}
        <Image
          src={kite}
          alt="Kite Image"
          className="hidden lg:block absolute -right-80 -top-12 z-10 w-[180.03px] h-[129.03px]"
        />
        <Image
        src={kiterope}
        alt="Kite Rope"
        className="hidden lg:block absolute -right-[228px] -top-4 h-[255px] w-[233.68px] "
        />
        <Image
        src={rope}
        alt="Kite Rope"
        className="hidden lg:block absolute right-[-312px] top-16 h-[161px] w-[335.89px] "
        />
      </section>

      <section className="mt-11 w-max bg-[#4D1435] rounded-[50px] px-7 py-4 mx-auto flex gap-[14px] items-center lg:mt-10 lg:px-20 lg:py-6 cursor-pointer">
        <section className="text-white text-[16px] font-[700] leading-[19.2px] lg:text-[24px] lg:leading-[28.8px] ">
          Explore Our Courses
        </section>
        <Image
          src={arrowIcon}
          alt="Arrow Icon mark"
          className="w-4 h-4 lg:w-6 lg:h-6"
        />
      </section>
    </section>
  );
};

export default Contact;
