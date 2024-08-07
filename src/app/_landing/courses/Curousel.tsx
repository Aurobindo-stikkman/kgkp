"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import prePregnancy from "./pre-pregnancy.png";
import arrowRight from "./icon-arrow-right.svg";
import clock from "./Clock.svg";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1350, // Tailwind's 'xl' starts at 1280px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1124, // Tailwind's 'lg' starts at 1024px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1440, // Tailwind's '2xl' starts at 1536px
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <section className="h-[431px] rounded-[16px] bg-[#CFE9E4] flex flex-col gap-4 pb-4 ">
        <Image
          src={prePregnancy}
          alt="Pre-Pregnant"
          className="h-[240px] rounded-tl-[16px] rounded-tr-[16px] w-full "
        />
        <section className="flex-grow px-6 py-4 grid gap-6 ">
          <div className="flex justify-between ">
            <div className="text-[14px] font-[600] leading-[19.6px] text-[#1A2434]">
              Pre-Pregnancy
            </div>
            <Image src={arrowRight} alt="Arrow mark" className="h-4 w-4 " />
          </div>

          <div className="text-[12px] font-[400] leading-[14.4px] text-[#1A2434] ">
            Prepares the child for motor skills and learn from nature ..
            Prepares the child for motor skills and learn from nature...
          </div>

          <div className="flex justify-between ">
            <div className="flex gap-2 ">
              <Image src={clock} alt="clock" className="w-[17px] h-[17px]" />
              <div className="text-[14px] font-[500] leading-[16.8px] text-[#1A2434] ">
                15 min/Day
              </div>
            </div>
            <div className="h-[21px] w-[60px] px-[6px] py-[2px] bg-white rounded-[20px] ">
              <div className="text-[12px] font-[600] leading-[16.8px] text-[#75C0B1] ">
                Phase 1
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="h-[431px] rounded-[16px] bg-[#CFE9E4] flex flex-col gap-4 pb-4 ">
        <Image
          src={prePregnancy}
          alt="Pre-Pregnant"
          className="h-[240px] rounded-tl-[16px] rounded-tr-[16px] w-full "
        />
        <section className="flex-grow px-6 py-4 grid gap-6 ">
          <div className="flex justify-between ">
            <div className="text-[14px] font-[600] leading-[19.6px] text-[#1A2434]">
              Pre-Pregnancy
            </div>
            <Image src={arrowRight} alt="Arrow mark" className="h-4 w-4 " />
          </div>

          <div className="text-[12px] font-[400] leading-[14.4px] text-[#1A2434] ">
            Prepares the child for motor skills and learn from nature ..
            Prepares the child for motor skills and learn from nature...
          </div>

          <div className="flex justify-between ">
            <div className="flex gap-2 ">
              <Image src={clock} alt="clock" className="w-[17px] h-[17px]" />
              <div className="text-[14px] font-[500] leading-[16.8px] text-[#1A2434] ">
                15 min/Day
              </div>
            </div>
            <div className="h-[21px] w-[60px] px-[6px] py-[2px] bg-white rounded-[20px] ">
              <div className="text-[12px] font-[600] leading-[16.8px] text-[#75C0B1] ">
                Phase 1
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="h-[431px] rounded-[16px] bg-[#CFE9E4] flex flex-col gap-4 pb-4 ">
        <Image
          src={prePregnancy}
          alt="Pre-Pregnant"
          className="h-[240px] rounded-tl-[16px] rounded-tr-[16px] w-full "
        />
        <section className="flex-grow px-6 py-4 grid gap-6 ">
          <div className="flex justify-between ">
            <div className="text-[14px] font-[600] leading-[19.6px] text-[#1A2434]">
              Pre-Pregnancy
            </div>
            <Image src={arrowRight} alt="Arrow mark" className="h-4 w-4 " />
          </div>

          <div className="text-[12px] font-[400] leading-[14.4px] text-[#1A2434] ">
            Prepares the child for motor skills and learn from nature ..
            Prepares the child for motor skills and learn from nature...
          </div>

          <div className="flex justify-between ">
            <div className="flex gap-2 ">
              <Image src={clock} alt="clock" className="w-[17px] h-[17px]" />
              <div className="text-[14px] font-[500] leading-[16.8px] text-[#1A2434] ">
                15 min/Day
              </div>
            </div>
            <div className="h-[21px] w-[60px] px-[6px] py-[2px] bg-white rounded-[20px] ">
              <div className="text-[12px] font-[600] leading-[16.8px] text-[#75C0B1] ">
                Phase 1
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="h-[431px] rounded-[16px] bg-[#CFE9E4] flex flex-col gap-4 pb-4 ">
        <Image
          src={prePregnancy}
          alt="Pre-Pregnant"
          className="h-[240px] rounded-tl-[16px] rounded-tr-[16px] w-full "
        />
        <section className="flex-grow px-6 py-4 grid gap-6 ">
          <div className="flex justify-between ">
            <div className="text-[14px] font-[600] leading-[19.6px] text-[#1A2434]">
              Pre-Pregnancy
            </div>
            <Image src={arrowRight} alt="Arrow mark" className="h-4 w-4 " />
          </div>

          <div className="text-[12px] font-[400] leading-[14.4px] text-[#1A2434] ">
            Prepares the child for motor skills and learn from nature ..
            Prepares the child for motor skills and learn from nature...
          </div>

          <div className="flex justify-between ">
            <div className="flex gap-2 ">
              <Image src={clock} alt="clock" className="w-[17px] h-[17px]" />
              <div className="text-[14px] font-[500] leading-[16.8px] text-[#1A2434] ">
                15 min/Day
              </div>
            </div>
            <div className="h-[21px] w-[60px] px-[6px] py-[2px] bg-white rounded-[20px] ">
              <div className="text-[12px] font-[600] leading-[16.8px] text-[#75C0B1] ">
                Phase 1
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="h-[431px] rounded-[16px] bg-[#CFE9E4] flex flex-col gap-4 pb-4 ">
        <Image
          src={prePregnancy}
          alt="Pre-Pregnant"
          className="h-[240px] rounded-tl-[16px] rounded-tr-[16px] w-full "
        />
        <section className="flex-grow px-6 py-4 grid gap-6 ">
          <div className="flex justify-between ">
            <div className="text-[14px] font-[600] leading-[19.6px] text-[#1A2434]">
              Pre-Pregnancy
            </div>
            <Image src={arrowRight} alt="Arrow mark" className="h-4 w-4 " />
          </div>

          <div className="text-[12px] font-[400] leading-[14.4px] text-[#1A2434] ">
            Prepares the child for motor skills and learn from nature ..
            Prepares the child for motor skills and learn from nature...
          </div>

          <div className="flex justify-between ">
            <div className="flex gap-2 ">
              <Image src={clock} alt="clock" className="w-[17px] h-[17px]" />
              <div className="text-[14px] font-[500] leading-[16.8px] text-[#1A2434] ">
                15 min/Day
              </div>
            </div>
            <div className="h-[21px] w-[60px] px-[6px] py-[2px] bg-white rounded-[20px] ">
              <div className="text-[12px] font-[600] leading-[16.8px] text-[#75C0B1] ">
                Phase 1
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="h-[431px] rounded-[16px] bg-[#CFE9E4] flex flex-col gap-4 pb-4 ">
        <Image
          src={prePregnancy}
          alt="Pre-Pregnant"
          className="h-[240px] rounded-tl-[16px] rounded-tr-[16px] w-full "
        />
        <section className="flex-grow px-6 py-4 grid gap-6 ">
          <div className="flex justify-between ">
            <div className="text-[14px] font-[600] leading-[19.6px] text-[#1A2434]">
              Pre-Pregnancy
            </div>
            <Image src={arrowRight} alt="Arrow mark" className="h-4 w-4 " />
          </div>

          <div className="text-[12px] font-[400] leading-[14.4px] text-[#1A2434] ">
            Prepares the child for motor skills and learn from nature ..
            Prepares the child for motor skills and learn from nature...
          </div>

          <div className="flex justify-between ">
            <div className="flex gap-2 ">
              <Image src={clock} alt="clock" className="w-[17px] h-[17px]" />
              <div className="text-[14px] font-[500] leading-[16.8px] text-[#1A2434] ">
                15 min/Day
              </div>
            </div>
            <div className="h-[21px] w-[60px] px-[6px] py-[2px] bg-white rounded-[20px] ">
              <div className="text-[12px] font-[600] leading-[16.8px] text-[#75C0B1] ">
                Phase 1
              </div>
            </div>
          </div>
        </section>
      </section>
    </Slider>
  );
}
