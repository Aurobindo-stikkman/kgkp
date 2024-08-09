"use client";
import Image from "next/image";
import { useState } from "react";
import downArrow from "./icon-chevron-right.svg";

interface Props {
  data: {
    q: string;
    ans: string;
  };
}

const FAQ: React.FC<Props> = ({ data }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  return (
    <div className="w-full p-3 grid gap-3 border rounded-[12px]">
      <section className="flex justify-between">
        <div className="text-[12px] font-[400] leading-[14.4px] text-[#1A2434] ">
          {data.q}
        </div>
        <Image
          onClick={toggleOpen}
          src={downArrow}
          alt="Down Arrow mark"
          className="w-4 h-4 "
        />
      </section>

      {open && (
        <section className="text-[10px] font-[400] leading-[18px] text-[#1A2434] ">
          {data.ans}
        </section>
      )}
    </div>
  );
};

export default FAQ;
