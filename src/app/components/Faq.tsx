"use client";
import Image from "next/image";
import { useState } from "react";
import downArrow from "./icon-chevron-right.svg";

interface Props {
  data: {
    q: string;
    ans: string | JSX.Element;
  };
}

const FAQ: React.FC<Props> = ({ data }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  return (
    <div className="w-full p-3 grid gap-3 border rounded-[12px] md:p-5 lg:p-8">
      <section className="flex justify-between items-center">
        <div className="text-[12px] font-[400] leading-[14.4px] text-[#1A2434] md:text-[18px] md:leading-[18.4px] lg:text-[24px] lg:leading-[28.8px]">
          {data.q}
        </div>
        <Image
          onClick={toggleOpen}
          src={downArrow}
          alt="Down Arrow mark"
          className={`w-4 h-4 md:w-8 md:h-8 cursor-pointer ${open ? "rotate-180" : "-rotate-0"}`}
        />
      </section>

      {open && (
        <section className="text-[10px] font-[400] leading-[18px] text-[#1A2434] md:text-[13px] md:leading-[22.8px] lg:text-[16px] lg:leading-[28.8px]">
          {data.ans}
        </section>
      )}
    </div>
  );
};

export default FAQ;
