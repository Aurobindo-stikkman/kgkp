"use client";
import Image from "next/image";
import { useState } from "react";
import handSticker from "./hand-sticker.svg";
import blueKite from "./blue kite.svg";

import { carouselData, allCards } from "./carouselData";
import SimpleSlider from "./Curousel";

const CarouselContainer = () => {
  const [activeState, setActiveState] = useState("All");

  const handleChangeActiveState = (name: string) => setActiveState(name);

  const data = allCards.filter(
    (card) => activeState === "All" || card.category === activeState
  );

  return (
    <div className="mt-6 lg:mt-[80px] max-w-[1280px] mx-auto">
      {/* Categories */}
      <section className="flex flex-wrap gap-2 justify-center ">
        <div
          style={{
            backgroundColor:
              activeState === "All" ? carouselData[activeState].bg : "",
          }}
          onClick={() => handleChangeActiveState("All")}
          className={`h-[33px] w-[51px] cursor-pointer rounded-[40px] px-4 py-2 border`}
        >
          <div
            className={`w-[19px] h-[17px] text-sm leading-[16.8px] ${
              activeState === "All"
                ? "font-bold text-[#4D1435]"
                : "font-medium text-[#3C4553]"
            }`}
          >
            All
          </div>
        </div>

        <div
          style={{
            backgroundColor:
              activeState === "Pre & Pregnancy"
                ? carouselData[activeState].bg
                : "",
          }}
          onClick={() => handleChangeActiveState("Pre & Pregnancy")}
          className="h-[33px] w-[145px] rounded-[40px] cursor-pointer px-4 py-2 border"
        >
          <div
            className={`w-[113px] h-[17px] text-sm leading-[16.8px] ${
              activeState === "Pre & Pregnancy"
                ? "font-bold text-[#4D1435]"
                : "font-medium text-[#3C4553]"
            }`}
          >
            Pre & Pregnancy
          </div>
        </div>

        <div
          style={{
            backgroundColor:
              activeState === "0 - 6 years" ? carouselData[activeState].bg : "",
          }}
          onClick={() => handleChangeActiveState("0 - 6 years")}
          className="h-[33px] w-[99px] rounded-[40px] cursor-pointer px-4 py-2 border "
        >
          <div
            className={`w-[69px] h-[17px] text-sm leading-[16.8px] ${
              activeState === "0 - 6 years"
                ? "font-bold text-[#4D1435]"
                : "font-medium text-[#3C4553]"
            }`}
          >
            0-6 years
          </div>
        </div>

        <div
          style={{
            backgroundColor:
              activeState === "6 - 15 years"
                ? carouselData[activeState].bg
                : "",
          }}
          onClick={() => handleChangeActiveState("6 - 15 years")}
          className="h-[33px] w-[106px] rounded-[40px] cursor-pointer px-4 py-2 border "
        >
          <div
            className={`w-[74px] h-[17px] text-sm leading-[16.8px] ${
              activeState === "6 - 15 years"
                ? "font-bold text-[#4D1435]"
                : "font-medium text-[#3C4553]"
            }`}
          >
            6-15 years
          </div>
        </div>
      </section>

      {/* Cards */}
      <div className="w-[328px] mx-auto mt-7 mb-4 flex justify-center flex-col gap-8 md:flex-row md:w-auto lg:gap-[52px] xl:hidden ">
        {data.slice(0, 2).map((ele, i) => {
          return (
            <div
              key={i}
              className="w-[328px] pb-8 border border-[#E5E5E5] rounded-2xl grid gap-8 overflow-hidden xl:w-[360px] xl:pb-[60px] xl:gap-[60px] "
            >
              <section className="flex items-center p-[4px] pb-0 ">
                <Image
                  width={165}
                  height={224}
                  src={ele.img}
                  alt={`Image ${ele.title}`}
                  className="basis-[165px] shrink-0 h-[224px] rounded-tl-2xl object-cover"
                />
                <section
                  style={{
                    backgroundColor: activeState ? ele.bg : "",
                  }}
                  className={`h-[224px] rounded-tr-2xl grow shrink-0 pr-3 py-[30px] flex flex-col gap-8 items-end justify-end`}
                >
                  <div className="w-[137px] text-2xl font-bold leading-[33.6px] text-end text-[#1A2434] ">
                    {ele.planName}
                  </div>

                  <div className="bg-white rounded-[20px] w-[86px] h-[25px] ml-auto px-2.5 py-[4px] text-xs font-bold leading-[16.8px] text-[#EF816C] text-center ">
                    Phase-{ele.phase}
                  </div>
                </section>
              </section>

              <section className="text-2xl font-bold leading-[33.6px] text-[#1A2434] text-center ">
                {ele.categoryType} | {ele.title}
              </section>
            </div>
          );
        })}
      </div>

      {/* Carousel section */}
      <div className="hidden mt-20 xl:block relative">
        <Image
          src={handSticker}
          alt="Hand-sticker"
          className="absolute top-[-8.8rem] right-[-3rem] hidden xl:block"
        />
        <SimpleSlider data={data} activeState={activeState} />
        <Image
          src={blueKite}
          alt="Blue Kite"
          className="absolute bottom-[-145px] left-[-26px] hidden xl:block"
        />
      </div>
    </div>
  );
};

export default CarouselContainer;
