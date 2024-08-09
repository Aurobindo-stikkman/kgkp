import Image from "next/image";
import rameshPartani from "./Ramesh partani.png";
import arrowRight from "./icon-arrow-right.svg";

const AboutFounder = () => {
  return (
    <div className="pt-[42px]">
      <section className="text-[20px] font-[700] leading-[24px] text-[#F6E2D8] w-[213px] mx-auto sm:text-[32px] sm:leading-[38.4px] sm:w-[340px] ">
        Get to know About Us
      </section>

      <section className="flex flex-col xl:flex-row">
        <section
          style={{ borderRadius: "40% 60% 63% 37% / 26% 66% 34% 74%" }}
          className="mt-[56px] bg-[#A16E5738] h-[257px] w-[251.79px] p-6 overflow-hidden mx-auto xl:h-[520.24px] xl:w-[520.24px] xl:order-2 "
        >
          <Image
            src={rameshPartani}
            alt="Ramesh Partani"
            className="w-full h-full bg-[#c9795438] object-fill"
            style={{ borderRadius: "40% 60% 63% 37% / 26% 66% 34% 74% " }}
          />
        </section>

        <section className="mt-14 px-4 text-center lg:px-[80px] xl:w-[704px] xl:text-justify xl:order-1">
          <div className="text-[#F6E2D8] font-[700] text-[14px] leading-[19.6px] inline mr-1 sm:text-[18px] xl:text-[24px] xl:leading-[33.12px]  ">
            Kaushalya Genius Kid Program
          </div>{" "}
          <div className="text-[#F6E2D8] inline font-[400] text-[14px] leading-[19.6px] sm:text-[18px] xl:text-[24px] xl:leading-[33.12px] ">
            is a time-tested & highly effective brain development program
            created by an amalgamation of cutting edge scientific discoveries
            with rich heritage of age-old cultural and spiritual wisdom. It’s an
            online homeschooling program to enable every parent to make their
            child a genius, starting from conception till the child is 15 and
            beyond. This program was pioneered by Mr. Ramesh Partani in 2007.
          </div>
          <br />
          <br />
          <div className="text-[#F6E2D8] font-[700] text-[14px] leading-[19.6px] inline mr-1 sm:text-[18px] xl:text-[24px] xl:leading-[33.12px] ">
            Mr. Ramesh Partani
          </div>{" "}
          <div className="text-[#F6E2D8] inline font-[400] text-[14px] leading-[19.6px] sm:text-[18px] xl:text-[24px] xl:leading-[33.12px] ">
            is the chairman and director of Ru Education Pvt Ltd. He is an
            International Spiritual and Management Trainer, Coach, Counsellor
            and Consultant with over 3 decades of experience in Human Resource
            Development and Behavioural Science. He aims to offer an innate
            brilliant child to every parent on the planet.
          </div>
        </section>
      </section>

      <section className="hidden w-[385px] h-[77px] rounded-[50px] border-2 px-[80px] py-6 bg-[#F6E2D8] sm:flex gap-[14px] mx-auto my-12 justify-center xl:mt-[140px] cursor-pointer">
        <div className="text-[24px] font-[700] leading-[28.8px] text-[#4D1435] ">
          Read More
        </div>
        <Image src={arrowRight} alt="Right Arrow mark" className="w-6 h-6" />
      </section>
    </div>
  );
};

export default AboutFounder;
