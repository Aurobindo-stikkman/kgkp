"use client";
import { useState, useEffect, useRef } from "react";

const TestimonialsSection = () => {
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
    <section className="h-[412px] pt-[52px] bg-[#75C0B1] lg:h-[667px] lg:pt-[124px] ">
      <section className="pl-[47px] pr-[66px] text-center text-[#1A2434] text-[20px] font-[700] leading-[28.6px] md:text-[32px] md:font-[700] md:leading-[38.4px] md:w-[645px] md:p-0 md:mx-auto ">
        Real Experiences: Parents Testimonials and Child Outcomes
      </section>

      {/* Video section */}
      <section
        ref={scrollContainerRef}
        className="mt-8 px-4 flex overflow-x-scroll overflow-y-visible gap-3 relative lg:mt-[57px] lg:justify-around lg:h-[352px] lg:items-center lg:overflow-x-hidden xl:gap-[112px] xl:justify-center xl:pl-[67px] xl:pr-[74px] 2xl:justify-around "
      >
        <iframe
          className="w-[296px] h-[189px] rounded-[12px] lg:rotate-[-6.52deg] lg:order-2 xl:w-[335.35px] xl:h-[214.28px] 2xl:w-[400px] 2xl:h-[250px]"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>

        <section className="w-[296px] h-[189px] bg-slate-50 flex-grow-0 flex-shrink-0 rounded-[12px] lg:rotate-[9.88deg] lg:order-1 xl:h-[196.08px] xl:w-[335.35px] 2xl:w-[400px] 2xl:h-[250px]"></section>

        <section className="w-[296px] h-[189px] bg-slate-50 flex-grow-0 flex-shrink-0 rounded-[12px] lg:rotate-[-4.92deg] lg:order-3 xl:w-[335.35px] xl:h-[198.21px] 2xl:w-[400px] 2xl:h-[250px]"></section>

        {isScrollable && !isScrolledToEnd && (
          <div
            className="absolute top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2"
            style={{ right: `calc(${-arrowPosition}px + 5%)` }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        )}
      </section>
    </section>
  );
};

export default TestimonialsSection;
