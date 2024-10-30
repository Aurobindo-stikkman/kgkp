"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

import card1 from "./assets/card-1.png";
import card2 from "./assets/card-2.png";
import card3 from "./assets/card-3.png";

const Page = () => {
  const [isScrollable, setIsScrollable] = useState(false);
  const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);
  const [arrowPosition, setArrowPosition] = useState(0);
  const scrollContainerRef = useRef<any>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const checkScrollable = () => {
      if (scrollContainer.scrollWidth > scrollContainer.clientWidth) {
        setIsScrollable(true);
      } else {
        setIsScrollable(false);
      }
    };

    const handleScroll = () => {
      const maxScrollLeft =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;
      if (
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth - 1
      ) {
        setIsScrolledToEnd(true);
      } else {
        setIsScrolledToEnd(false);
      }

      setArrowPosition(scrollContainer.scrollLeft);
    };

    checkScrollable();
    scrollContainer.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkScrollable);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScrollable);
    };
  }, []);

  return (
    <div className="bg-[#75C0B1] py-[52px] xl:py-[124px] ">
      <div className="w-[201px] mx-auto h-[58px] text-[20px] font-[700] leading-[28.6px] text-[#1A2434] text-center xl:w-[652px] xl:h-[46px] xl:text-[38px] xl:leading-[45.99px] ">
        Success Stories from Our Affiliates
      </div>

      <div className="hidden xl:block mx-auto mt-6 w-[664px] h-[50px] text-lg font-normal leading-[25px] text-center text-[#1A2434] ">
        Don’t just take our word for it. See how our affiliates are making a
        difference in their communities while earning rewards.
      </div>

      <section
        className="mt-8 px-[26px] relative overflow-x-scroll flex gap-x-6 lg:justify-center lg:overflow-hidden xl:mt-[88px] xl:gap-12 "
        ref={scrollContainerRef}
      >
        {/* Card - 1 */}
        <section className="w-[298px] h-[198px] shrink-0 bg-white rounded-[13px] p-6 xl:w-[335px] xl:p-[26.47px] xl:order-2 ">
          <section className="flex items-center gap-[13.24px] ">
            <Image
              src={card1}
              alt="Card - 1"
              className="rounded-full overflow-hidden shrink-0 w-[74px] h-[74px] object-cover xl:w-[75.29px] xl:h-[75.29px] "
            />

            <section className="grow ">
              <div className="text-[15px] font-[700] leading-[18px] text-[#1A2434] xl:text-[16.55px] xl:leading-[19.86px] ">
                Dr. Rajiv Kapoor
              </div>

              <div className="mt-[6.62px] text-[14px] font-[500] leading-[16.8px] text-[#1A2434] xl:text-[13.24px] xl:leading-[15.89px] ">
                Paediatrician
              </div>
            </section>
          </section>

          <section className="mt-3.5 text-[14px] font-[400] leading-[19.6px] text-[#1A2434] xl:mt-[13.24px] xl:h-[57px] xl:text-[13.24px] xl:leading-[18.53px] ">
            An excellent program that truly enhances children's development.
            Parents appreciate the guidance
          </section>
        </section>

        {/* Card - 2 */}
        <section className="w-[298px] h-[198px] shrink-0 bg-white rounded-[13px] p-6 xl:w-[335px] xl:p-[26.47px] xl:order-1 ">
          <section className="flex items-center gap-[13.24px] ">
            <Image
              src={card2}
              alt="Card - 2"
              className="rounded-full overflow-hidden shrink-0 w-[74px] h-[74px] object-cover xl:w-[75.29px] xl:h-[75.29px] "
            />

            <section className="grow ">
              <div className="text-[15px] font-[700] leading-[18px] text-[#1A2434] xl:text-[16.55px] xl:leading-[19.86px] ">
                Dr. Anjali Mehta
              </div>

              <div className="mt-[6.62px] text-[14px] font-[500] leading-[16.8px] text-[#1A2434] xl:text-[13.24px] xl:leading-[15.89px] ">
                Paediatrician
              </div>
            </section>
          </section>

          <section className="mt-3.5 text-[14px] font-[400] leading-[19.6px] text-[#1A2434] xl:mt-[13.24px] xl:h-[57px] xl:text-[13.24px] xl:leading-[18.53px] ">
            KGKP empowers parents with valuable resources, making my referrals
            impactful and rewarding.
          </section>
        </section>

        {/* Card - 3 */}
        <section className="w-[298px] h-[198px] shrink-0 bg-white rounded-[13px] p-6 xl:w-[335px] xl:p-[26.47px] xl:order-3 ">
          <section className="flex items-center gap-[13.24px] ">
            <Image
              src={card3}
              alt="Card - 3"
              className="rounded-full overflow-hidden shrink-0 w-[74px] h-[74px] object-cover xl:w-[75.29px] xl:h-[75.29px] "
            />

            <section className="grow ">
              <div className="text-[15px] font-[700] leading-[18px] text-[#1A2434] xl:text-[16.55px] xl:leading-[19.86px] ">
                Ms. Neha Sharma
              </div>

              <div className="mt-[6.62px] text-[14px] font-[500] leading-[16.8px] text-[#1A2434] xl:text-[13.24px] xl:leading-[15.89px] ">
                Teacher
              </div>
            </section>
          </section>

          <section className="mt-3.5 text-[14px] font-[400] leading-[19.6px] text-[#1A2434] xl:mt-[13.24px] xl:h-[57px] xl:text-[13.24px] xl:leading-[18.53px] ">
            KGKP allows me to support my students' growth beyond the classroom,
            with visible results.
          </section>
        </section>

        {isScrollable && !isScrolledToEnd && (
          <div
            className="shadow-md h-7 w-7 flex justify-center items-center absolute top-1/2 transform -translate-y-1/2 bg-white rounded-full lg:hidden"
            style={{ right: `calc(${-arrowPosition}px + 10%)` }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="icon-chevron-right">
                <path
                  id="Shape"
                  d="M6.47157 3.52851C6.21122 3.26816 5.78911 3.26816 5.52876 3.52851C5.26841 3.78886 5.26841 4.21097 5.52876 4.47132L9.05735 7.99992L5.52876 11.5285C5.26841 11.7889 5.26841 12.211 5.52876 12.4713C5.78911 12.7317 6.21122 12.7317 6.47157 12.4713L10.4716 8.47132C10.7319 8.21097 10.7319 7.78886 10.4716 7.52851L6.47157 3.52851Z"
                  fill="#460C04"
                />
              </g>
            </svg>
          </div>
        )}
      </section>
    </div>
  );
};

export default Page;
