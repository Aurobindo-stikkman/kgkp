"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import prePregnancy from "./pre-pregnancy.png";
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
                  className="fill-current text-[#4D1435]"
                />
              </g>
            </svg>
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
              className="fill-current text-[#4D1435]"
            />
          </g>
        </svg>
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
              className="fill-current text-[#4D1435]"
            />
          </g>
        </svg>
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
              className="fill-current text-[#4D1435]"
            />
          </g>
        </svg>
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
              className="fill-current text-[#4D1435]"
            />
          </g>
        </svg>
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
              className="fill-current text-[#4D1435]"
            />
          </g>
        </svg>
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
