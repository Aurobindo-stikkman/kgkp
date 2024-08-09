import Image from "next/image";

import ListingFAQ from "@/app/components/ListingFAQ";
import arrowIcon from "../hero/icon-arrow-right.svg";

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
      <div className="pt-[52px] pb-[52px] ">
        <section className="text-[20px] font-[700] leading-[24px] mx-auto w-auto text-[#1A2434] text-center ">
          Frequently Asked Questions
        </section>

        <section className="mt-8 px-4 h-auto ">
          <ListingFAQ data={obj} />
        </section>

        <section className="px-7 py-4 mt-6 rounded-[50px] bg-[#4D1435] mx-auto w-[189px] flex gap-[14px] justify-center">
          <section className="text-white text-[16px] font-[700] leading-[19.2px] ">
            See All FAQs
          </section>
          <Image src={arrowIcon} alt="Arrow Icon" className="w-4 h-4" />
        </section>
      </div>
      <section className="bg-[#FAEFB6] py-[52px] ">
        <section className="text-[#460C04] text-[20px] font-[700] leading-[26px] text-center mx-auto w-[311px] ">
          Ready to Begin Your Child's Journey to Becoming a Genius?
        </section>

        <section className="mt-11 w-[254px] bg-[#4D1435] rounded-[50px] px-7 py-4 mx-auto flex gap-[14px] justify-center">
          <section className="text-white text-[16px] font-[700] leading-[19.2px] ">
            Explore Our Courses
          </section>
          <Image src={arrowIcon} alt="Arrow Icon mark" className="w-4 h-4" />
        </section>
      </section>
    </>
  );
};

export default FaqSection;
