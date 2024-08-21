"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import ListingFAQ from "@/app/components/ListingFAQ";

import MobileSearch from "./_sections/MobileSearch";
import SearchHeader from "./_sections/SearchHeader";

import generalInfo from "./_sections/general-info.svg";
import contentMarketing from "./_sections/content-marketing.svg";
import chatIcon from "./_sections/chat.svg";
import badgeIcon from "./_sections/badge.svg";
import creditCardIcon from "./_sections/credit-card.svg";

const obj = [
  {
    q: "Who can benefit from RU Education?",
    ans: "Headstart your kid’s development right from the time of conception till the age of 15 years and beyond with Kaushalya Genius kid Program.. This is a a summary. Headstart your kid’s development right from the time of conception till the age of 15 years and beyond with Kaushalya Genius kid Program. This is a a summary. Text need to be edited .. Headstart your kid’s development right from the time of conception till the age of 15 years and beyond with Kaushalya Genius kid Program",
  },
  {
    q: "How do I get started with RU Education?",
    ans: "Headstart your kid’s development right from the time of conception till the age of 15 years and beyond with Kaushalya Genius kid Program.. This is a a summary. Headstart your kid’s development right from the time of conception till the age of 15 years and beyond with Kaushalya Genius kid Program. This is a a summary. Text need to be edited .. Headstart your kid’s development right from the time of conception till the age of 15 years and beyond with Kaushalya Genius kid Program",
  },
  {
    q: "What types of courses does RU Education offer?",
    ans: "Headstart your kid’s development right from the time of conception till the age of 15 years and beyond with Kaushalya Genius kid Program.. This is a a summary. Headstart your kid’s development right from the time of conception till the age of 15 years and beyond with Kaushalya Genius kid Program. This is a a summary. Text need to be edited .. Headstart your kid’s development right from the time of conception till the age of 15 years and beyond with Kaushalya Genius kid Program",
  },
  {
    q: "Can my child access the courses on a tablet or smartphone?",
    ans: "Headstart your kid’s development right from the time of conception till the age of 15 years and beyond with Kaushalya Genius kid Program.. This is a a summary. Headstart your kid’s development right from the time of conception till the age of 15 years and beyond with Kaushalya Genius kid Program. This is a a summary. Text need to be edited .. Headstart your kid’s development right from the time of conception till the age of 15 years and beyond with Kaushalya Genius kid Program",
  },
  {
    q: "Who do I contact for technical support?",
    ans: "Headstart your kid’s development right from the time of conception till the age of 15 years and beyond with Kaushalya Genius kid Program.. This is a a summary. Headstart your kid’s development right from the time of conception till the age of 15 years and beyond with Kaushalya Genius kid Program. This is a a summary. Text need to be edited .. Headstart your kid’s development right from the time of conception till the age of 15 years and beyond with Kaushalya Genius kid Program",
  },
  {
    q: "How do I track my child's progress?",
    ans: "Headstart your kid’s development right from the time of conception till the age of 15 years and beyond with Kaushalya Genius kid Program.. This is a a summary. Headstart your kid’s development right from the time of conception till the age of 15 years and beyond with Kaushalya Genius kid Program. This is a a summary. Text need to be edited .. Headstart your kid’s development right from the time of conception till the age of 15 years and beyond with Kaushalya Genius kid Program",
  },
];

const FaqContainer = () => {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  const [isScrollable, setIsScrollable] = useState(false);
  const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);
  const [arrowPosition, setArrowPosition] = useState(0);
  const scrollContainerRef = useRef<any>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const handleModal = () => setShowModal(!showModal);

  const clearSearch = () => setSearch("");

  const handleSearch = (value: string) => setSearch(value);

  const filteredData = obj.filter((ele) =>
    ele.q.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <SearchHeader
        value={search}
        handleSearch={handleSearch}
        isMobile={isMobile}
        handleModal={handleModal}
        clearSearch={clearSearch}
      />

      <section
        ref={scrollContainerRef}
        className="mt-6 px-4 mx-auto flex justify-between gap-6 pb-2 relative overflow-x-auto h-20 md:h-[130px] md:gap-16 md:mt-[57px] lg:justify-start xl:gap-[96px] xl:justify-center"
      >
        <section
          className={`pb-2 grid gap-2 border-b-[4px] border-[#4D1435] w-[80px] shrink-0 md:gap-4 md:basis-[158px]`}
        >
          <Image
            src={generalInfo}
            alt="General Info icon"
            className="w-6 h-6 justify-self-center md:w-14 md:h-14 lg:w-[60px] lg:h-[60px]"
          />
          <section
            className={`text-[#4D1435] text-[12px] font-[600] leading-[14.4px] text-center md:text-[18px] md:leading-[21.6px]`}
          >
            General Information
          </section>
        </section>

        <section
          className={`pb-2 grid gap-2 border-b-2 border-[#4D1435] w-[121px] shrink-0 md:gap-4 md:basis-[179px]`}
        >
          <Image
            src={contentMarketing}
            alt="General Info icon"
            className="w-6 h-6 justify-self-center md:w-14 md:h-14 lg:w-[60px] lg:h-[60px]"
          />
          <section
            className={`text-[#3C4553] text-[12px] font-[500] leading-[14.4px] text-center md:text-[18px] md:leading-[21.6px]`}
          >
            Course Structure and Content
          </section>
        </section>

        <section
          className={`pb-2 grid gap-2 border-b-2 border-[#4D1435] shrink-0 w-[122px] md:gap-4 md:basis-[206px]`}
        >
          <Image
            src={chatIcon}
            alt="General Info icon"
            className="w-6 h-6 justify-self-center md:w-14 md:h-14 lg:w-[60px] lg:h-[60px]"
          />
          <section
            className={`text-[#3C4553] text-[12px] font-[500] leading-[14.4px] text-center md:text-[18px] md:leading-[21.6px]`}
          >
            Parental Involvement and Support
          </section>
        </section>

        <section
          className={`pb-2 grid gap-2 border-b-2 border-[#4D1435] shrink-0 w-[122px] md:gap-4 md:basis-[153px]`}
        >
          <Image
            src={badgeIcon}
            alt="General Info icon"
            className="w-6 h-6 justify-self-center md:w-14 md:h-14 lg:w-[60px] lg:h-[60px]"
          />
          <section
            className={`text-[#3C4553] text-[12px] font-[500] leading-[14.4px] text-center md:text-[18px] md:leading-[21.6px]`}
          >
            Outcomes and Benefits
          </section>
        </section>

        <section
          className={`pb-2 grid gap-2 border-b-2 border-[#4D1435] shrink-0 w-[122px] md:gap-4 md:basis-[208px]`}
        >
          <Image
            src={creditCardIcon}
            alt="General Info icon"
            className="w-6 h-6 justify-self-center md:w-14 md:h-14 lg:w-[60px] lg:h-[60px]"
          />
          <section
            className={`text-[#3C4553] text-[12px] font-[500] leading-[14.4px] text-center md:text-[18px] md:leading-[21.6px]`}
          >
            Enrolment, Payment and Access
          </section>
        </section>

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

      {(!isMobile || !showModal) && (
        <section className="w-[90%] mt-6 mb-[52px] mx-auto grid gap-4 lg:my-[52px] xl:w-[1280px]">
          {filteredData.length > 0 ? (
            <>
              <ListingFAQ data={filteredData} />
            </>
          ) : (
            <section className="mt-6 grid gap-4 mx-auto w-auto">
              <div className="text-[18px] font-[600] leading-[21.6px] text-center text-[#1A2434]">
                We couldn’t find anything related to {search}
              </div>
              <div className="text-[16px] font-[400] leading-[19.2px] text-[#1A2434] text-center">
                Please check the spelling or try another word
              </div>
            </section>
          )}
        </section>
      )}

      {isMobile && showModal && (
        <MobileSearch
          clearSearch={clearSearch}
          data={filteredData}
          handleModal={handleModal}
          handleSearch={handleSearch}
          value={search}
        />
      )}
    </div>
  );
};

export default FaqContainer;
