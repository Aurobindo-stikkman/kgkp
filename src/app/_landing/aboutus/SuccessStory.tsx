"use client";
import Image from "next/image";
import rightArrow from "./icon-arrow-right.svg";
import chalkStroke from "../Chalk Stroke.png";

const SuccessStory = () => {
  return (
    <section className="h-[698px] bg-[#4D1435] pt-[52px] md:h-[550px] lg:h-[800px] lg:pt-[100px] xl:h-[1082px] xl:pt-[150px]">
      {/* Title section */}
      <section className="flex flex-col gap-[6px] lg:flex-row lg:w-[650px] lg:mx-auto justify-center xl:w-[681px]">
        <div className="text-[20px] font-[700] leading-[24px] text-[#F6E2D8] mx-auto h-6 lg:mx-0 lg:text-[24px] lg:leading-[30.4px] xl:text-[32px] xl:leading-[38.4px]">
          Success Stories:
        </div>
        <div className="text-[20px] font-[700] leading-[24px] text-[#F6E2D8] relative mx-auto h-6 lg:mx-0 lg:text-[24px] lg:leading-[30.4px] xl:text-[32px] xl:leading-[38.4px]">
          <span className="z-10 relative">Hear from our First Genius</span>
          <Image
            src={chalkStroke}
            alt="Chalk Icon"
            className="absolute w-[235.08px] h-[60.94px] -top-1 right-0 z-0 lg:w-[330.4px] lg:h-[93.76px]"
          />
        </div>
      </section>

      {/* Video section */}
      <section className="flex flex-col items-center md:flex-row md:p-4 lg:px-[100px] lg:gap-8 xl:mt-[160px] xl:pl-[157px] xl:pr-[120px] xl:mr-auto xl:gap-[128px] ">
        <iframe
          className="w-[90%] h-[207.52px] rounded-[24.56px] mt-8 mx-auto border md:basis-1/2 lg:w-[520px] lg:basis-auto lg:h-[300px] xl:w-[520px] xl:flex-shrink-0 xl:basis-[520px] xl:h-[329px] xl:rounded-[40px] "
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>

        <section className="italic text-[17px] font-[500] leading-[21.8px] text-[#F6E2D8] text-center w-[328px] mx-4 relative mt-[54px] font-inter md:basis-1/2 lg:text-left xl:w-[508px] xl:h-[120px] xl:text-[20px] xl:leading-[24.4px] ">
          14 years ago, I was exactly where you are today. This simple program,
          the reading cards, the dot cards and my parents continuous efforts
          have upped my game. Until today, I've read about 7,000 books on
          various subjects...
          <section className="mt-4 mx-auto text-[#F6E2D8] text-[12px] font-[600] leading-[14.4px] w-[147px] lg:text-[16px] lg:leading-[17.7px] lg:w-auto text-left xl:text-[18px] xl:leading-[21.6px] ">
            17 years old, Mitra Malani
          </section>
          <section className="w-[41px] h-[128px] text-[107px] font-[400] font-[Athelas] leading-[128.4px] text-[#7C4E63] absolute top-[-60px] left-0 lg:w-[48px] lg:h-[140px] xl:top-[-40px] xl:left-[-65px] ">
            “
          </section>
        </section>
      </section>

      <section className="mt-8 mx-auto text-white text-[14px] font-[500] leading-[16.8px] w-[231px] text-center md:text-[20px] md:leading-[28.9px] md:w-[600px] lg:mt-20 lg:text-[24px] lg:leading-[28.8px] ">
        Ready to give your child the gift of a brighter future?
      </section>

      <section className="mt-4 w-[219px] h-[51px] px-7 py-4 rounded-[50px] bg-[#F6E2D8] flex gap-[14px] mx-auto lg:mt-[70px] xl:mt-6 xl:w-[385px] xl:h-[77px] xl:px-[80px] xl:py-6 ">
        <section className="text-[16px] font-[700] leading-[19.2px] text-[#460C04] xl:text-[24px] xl:leading-[28.8px] ">
          View all courses
        </section>
        <Image
          src={rightArrow}
          alt="Right arrow icon"
          className="w-4 h-4 xl:w-6 xl:h-6"
        />
      </section>
    </section>
  );
};

export default SuccessStory;
