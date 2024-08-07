"use client";
import Image from "next/image";
import prePregnancy from "./pre-pregnancy.png";
import playingItems from "./Rectangle 1461 (1).png";
import arrowRight from "./icon-arrow-right.svg";
import clock from "./Clock.svg";
import whiteArrow from "./icon-arrow-right (1).svg";
import Carousel from "./Curousel";

const CoursesSection = () => {
  return (
    <section className="h-[1245px] px-4 pt-[52px] lg:h-[1105px] lg:px-[80px] lg:py-[124px] ">
      <section className="h-[58px] w-[282px] mx-auto text-[20px] font-[700] leading-[28.6px] text-center text-[#1A2434] lg:text-[32px] lg:font-[700] lg:leading-[38.4px] lg:w-[512px] lg:h-[76px] ">
        Select the Best Course to Unlock your Child's Genius
      </section>

      <section className="mt-6 flex flex-wrap gap-2 justify-center lg:mt-[80px]">
        <div className="h-[33] w-[51px] rounded-[40px] px-4 py-2 bg-[#EF816C45]">
          <div className="text-[14px] font-[700] leading-[16.8px] text-[#4D1435] ">
            All
          </div>
        </div>
        <div className="h-[33] w-[143px] rounded-[40px] px-4 py-2 border ">
          <div className="text-[14px] font-[500] leading-[16.8px] text-[#3C4553] ">
            Pre & Pregnancy
          </div>
        </div>
        <div className="h-[33] w-[117px] rounded-[40px] px-4 py-2 border ">
          <div className="text-[14px] font-[500] leading-[16.8px] text-[#3C4553] ">
            0-12 months
          </div>
        </div>
        <div className="h-[33] w-[95px] rounded-[40px] px-4 py-2 border ">
          <div className="text-[14px] font-[500] leading-[16.8px] text-[#3C4553] ">
            1-6 years
          </div>
        </div>
        <div className="h-[33] w-[104px] rounded-[40px] px-4 py-2 border ">
          <div className="text-[14px] font-[500] leading-[16.8px] text-[#3C4553] ">
            6-15 years
          </div>
        </div>
      </section>

      <section className="px-3 flex flex-wrap gap-6 mt-6 justify-center lg:mt-[80px] ">
        <section className="h-[431px] w-[302px] rounded-[16px] bg-[#CFE9E4] flex flex-col gap-4 pb-4 lg:hidden ">
          <Image
            src={prePregnancy}
            alt="Pre-Pregnant"
            className="h-[240px] w-[302px] rounded-tl-[16px] rounded-tr-[16px] "
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

        <section className="h-[431px] w-[302px] rounded-[16px] bg-[#F9CDC4] flex flex-col gap-4 pb-4 lg:hidden ">
          <Image
            src={playingItems}
            alt="Pre-Pregnant"
            className="h-[240px] w-[302px] rounded-tl-[16px] rounded-tr-[16px] "
          />

          <section className="flex-grow px-6 py-4 grid gap-6 ">
            <div className="flex justify-between ">
              <div className="text-[14px] font-[600] leading-[19.6px] text-[#1A2434]">
                Age: 2-7 months | Infants
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
                  Phase 2
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>

      <section className="hidden lg:block">
        <Carousel />
      </section>

      <section className="cursor-pointer bg-[#4D1435] h-[51px] w-[222px] px-6 py-4 flex gap-[14px] justify-center items-center rounded-[50px] mt-6 mx-auto lg:mt-[80px] lg:w-[385px] lg:h-[77px] lg:px-[80px] lg:py-[24px]">
        <div className="text-[16px] font-[700] leading-[19.2px] text-white lg:text-[23px] lg:leading-[28.8px] ">
          View all Courses
        </div>
        <Image
          src={whiteArrow}
          alt="White Arrow mark"
          className="h-4 w-4 lg:w-6 lg:h-6"
        />
      </section>
    </section>
  );
};

export default CoursesSection;
