import Image from "next/image";

import ListingFAQ from "@/app/components/ListingFAQ";
import arrowIcon from "../hero/icon-arrow-right.svg";
import chalkStroke from "../Chalk Stroke.png";

const FaqSection = () => {
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

  return (
    <>
      <div className="py-[52px] lg:py-[124px] ">
        <section className="text-[20px] font-[700] leading-[24px] mx-auto text-[#1A2434] text-center lg:text-[32px] lg:leading-[38.4px]">
          <span className="relative">
            <span className="z-10 relative">Frequently Asked Questions</span>
            <Image
              src={chalkStroke}
              alt="Chalk Icon"
              className="absolute w-[235.08px] h-[60.94px] -top-1 right-0 z-0 lg:w-[250.4px] lg:h-[93.76px]"
            />
          </span>
        </section>

        <section className="mt-8 px-4 h-auto lg:mt-[52px]">
          <ListingFAQ data={obj} />
        </section>

        <section className="px-7 py-4 mt-6 rounded-[50px] bg-[#4D1435] mx-auto w-[189px] flex gap-[14px] justify-center lg:mt-[60px] lg:px-20 lg:py-6 lg:w-[345px]">
          <section className="text-white text-[16px] font-[700] leading-[19.2px] lg:text-[23px] lg:leading-[28.8px] ">
            See All FAQs
          </section>
          <Image src={arrowIcon} alt="Arrow Icon" className="w-4 h-4 lg:w-6 lg:h-6" />
        </section>
      </div>
    </>
  );
};

export default FaqSection;
