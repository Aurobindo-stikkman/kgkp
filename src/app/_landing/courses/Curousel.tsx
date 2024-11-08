"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import { carouselData, ICard } from "./carouselData";

// Type definition for arrow props
interface ArrowProps {
  onClick?: () => void; // The onClick handler is optional
}

// Custom next arrow component
const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 -right-3 z-10 border rounded-full w-[52px] h-[52px] bg-white shadow-lg flex items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 18l6-6-6-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

// Custom previous arrow component
const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 left-6 z-10 border rounded-full w-[52px] h-[52px] bg-white shadow-lg flex items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 18l-6-6 6-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

interface SimpleSliderProps {
  data: ICard[];
  activeState: string;
}

export default function SimpleSlider({ data, activeState }: SimpleSliderProps) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {data.map((ele, i) => {
        return (
          <div
            key={ele.title + i}
            className="border border-[#E5E5E5] bg-white rounded-2xl overflow-hidden xl:w-[360px] xl:pb-[60px] "
          >
            <section className="flex items-center p-[4px] pb-0 ">
              <Image
                width={165}
                height={224}
                src={ele.img}
                alt={`Image ${ele.title}`}
                className="basis-1/2 shrink-0 h-[224px] rounded-tl-2xl object-cover"
              />
              <section
                style={{
                  backgroundColor: activeState ? ele.bg : "",
                }}
                className={`basis-1/2 h-[224px] rounded-tr-2xl shrink-0 pl-2 py-[30px] pr-4 flex flex-col gap-8 items-end justify-end `}
              >
                <div className="w-[137px] text-2xl font-bold leading-[33.6px] text-end text-[#1A2434] ">
                  {ele.planName}
                </div>

                <div className="bg-white rounded-[20px] w-[86px] h-[25px] ml-auto px-2.5 py-[4px] text-xs font-bold leading-[16.8px] text-[#EF816C] text-center ">
                  Phase-{ele.phase}
                </div>
              </section>
            </section>

            <section className="mt-[60px] text-2xl font-bold leading-[33.6px] text-[#1A2434] text-center ">
              {ele.categoryType} | {ele.title}
            </section>
          </div>
        );
      })}
    </Slider>
  );
}
