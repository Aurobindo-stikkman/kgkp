"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import ListingFAQ from "@/app/components/ListingFAQ";

import MobileSearch from "./MobileSearch";
import SearchHeader from "./SearchHeader";

import generalInfo from "./general-info.svg";

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
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
      />

      <section className="mt-6 mb-8 px-4 flex gap-6 pb-2 overflow-x-auto scrollbar-custom">
        <section className="grid gap-2">
          <Image
            src={generalInfo}
            alt="General Info icon"
            className="w-6 h-6 justify-self-center"
          />
          <section className="text-[#4D1435] text-[12px] font-[600] leading-[14.4px] text-center w-20">
            General Information
          </section>
        </section>
        <section className="grid gap-2 ">
          <Image
            src={generalInfo}
            alt="General Info icon"
            className="w-6 h-6 justify-self-center"
          />
          <section className="text-[#3C4553] text-[12px] font-[500] leading-[14.4px] text-center w-[121px]">
            Course Structure and Content
          </section>
        </section>
        <section className="grid gap-2 ">
          <Image
            src={generalInfo}
            alt="General Info icon"
            className="w-6 h-6 justify-self-center"
          />
          <section className="text-[#3C4553] text-[12px] font-[500] leading-[14.4px] text-center w-[122px]">
            Parental Involvement and Support
          </section>
        </section>
        <section className="grid gap-2">
          <Image
            src={generalInfo}
            alt="General Info icon"
            className="w-6 h-6 justify-self-center"
          />
          <section className="text-[#3C4553] text-[12px] font-[500] leading-[14.4px] text-center w-[122px]">
            Outcomes and Benefits
          </section>
        </section>
        <section className="grid gap-2">
          <Image
            src={generalInfo}
            alt="General Info icon"
            className="w-6 h-6 justify-self-center"
          />
          <section className="text-[#3C4553] text-[12px] font-[500] leading-[14.4px] text-center w-[122px]">
            Enrolment, Payment and Access
          </section>
        </section>
      </section>

      {(!isMobile || !showModal) && (
        <section className="w-[90%] mx-auto grid gap-4">
          <ListingFAQ data={filteredData} />
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
