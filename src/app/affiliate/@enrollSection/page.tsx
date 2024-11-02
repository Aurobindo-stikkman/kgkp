"use client";

import Image from "next/image";
import AffiliateForm from "./components/AffiliateForm";

import objectImage from "./assets/OBJECTS.png";

const Page = () => {
  return (
    <div className="bg-[#FAEFB6] py-[52px] xl:py-[100px] xl:flex xl:justify-center xl:gap-[60px] xl:items-center xl:bg-[#FAEFB63D] ">
      <section>
        <div className="mx-auto w-[311px] text-balance text-[20px] font-[700] leading-[26px] text-[#460C04] text-center xl:w-[486.85px] xl:h-[92px] xl:text-[38px] xl:leading-[45.99px] ">
          Become an Affiliate and Multiply your Income
        </div>

        <AffiliateForm />
      </section>
      <Image
        src={objectImage}
        alt="Object Image"
        className="hidden xl:block h-[257px] w-[367.17px] object-cover "
      />
    </div>
  );
};

export default Page;
