"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

import rameshPartani from "./assets/Ramesh partani.png";
import pointingArrow from "./assets/pointing-arrow.png";
import chalkStroke from "./assets/Chalk Stroke.png";

const AboutFounder = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#75C0B1] rounded-[40px] px-4 py-[52px] lg:py-[124px] lg:px-[81px] lg:rounded-[100px] ">
      <section className="relative text-[28px] font-[700] leading-[36.4px] text-[#1A2434] mx-auto text-center lg:text-[42px] lg:leading-[50.4px]">
        <span className="relative z-10">Our Founder & CEO</span>
        <Image
          src={chalkStroke}
          alt="Chalk Icon"
          className="absolute w-[235.08px] h-[60.94px] left-1/2 top-[15%] translate-x-[-50%] z-0 lg:w-[397.11px] lg:h-[93.76px]"
        />
      </section>

      <section className="mt-8 text-[18px] font-[600] leading-[21.6px] text-[#1A2434] mx-auto text-center lg:text-[36px] lg:leading-[43.2px] lg:text-left lg:mt-[86px]">
        Mr. Ramesh Chandra Partani
      </section>

      <section className="flex flex-col gap-[49px] lg:mt-4 lg:items-center lg:flex-row-reverse xl:gap-[84px]">
        <section
          style={{ borderRadius: "40% 60% 63% 37% / 26% 66% 34% 74%" }}
          className="mt-8 bg-[#A16E5738] h-[257px] w-[251.79px] p-4 mx-auto lg:basis-[432px] flex-shrink-0 lg:h-[443px] lg:p-6 xl:relative"
        >
          <Image
            src={rameshPartani}
            alt="Ramesh Partani"
            className="w-full h-full bg-[#c9795438] object-fill"
            style={{ borderRadius: "40% 60% 63% 37% / 26% 66% 34% 74% " }}
          />
          <Image
            src={pointingArrow}
            alt="Pointing arrow"
            className="hidden xl:block w-[214.43px] h-[214.43px] absolute left-[-114px] top-[-112px]"
          />
        </section>

        <section>
          <section className="text-[14px] font-[400] leading-[19.6px] text-[#1A2434] text-justify xl:text-[20px] xl:leading-[28px]">
            <span className="font-[700] ">Mr. Partani</span>
            is the chairman and director of Ru Education Pvt Ltd. He is an
            internationally acclaimed, eminent educationist, Spiritual and
            Management Trainer, Coach, Counselor and Consultant since 1996 in
            the fields of education, parenting, Human Resource Development and
            Behavioral Science. He has postgraduate qualifications in physics
            with specialization in electronics.
          </section>

          <section
            className={`text-[14px] font-[400] leading-[19.6px] text-[#1A2434] mt-3 text-justify xl:text-[20px] xl:leading-[28px] ${
              !isMobile
                ? "h-auto"
                : isOpen
                ? "h-auto"
                : "h-[100px] overflow-hidden"
            }`}
          >
            He has extensively studied child brain development processes from
            both western scientific research models and eastern spiritual
            perspective. He is passionate about creating excellence in human
            beings.
            {isMobile && !isOpen && (
              <span className="cursor-pointer" onClick={() => setIsOpen(true)}>
                ..Read more
              </span>
            )}
            {(!isMobile || isOpen) && (
              <span>
                {" "}
                Kaushalya Global Schools and Kaushalya genius Kid Program are
                expressions of this passion. He is the founder of Kaushalya
                Global Chain of Schools which employs cutting edge technology
                for creating genius children. Ru education also provides
                technology support to other schools with a vision to transform
                them into world class educational institutions. He is also on
                the Advisory Board of Sangam University.He is engaged in social
                work through several NGOs. One such organisation, Akhil
                Bharatvarsheeya Maheshwari mahasabha has taken up ‘Kaushalya
                Genius Kid Program’ as a flagship program under its ambitious
                initiative ‘creating a genius Maheshwari Gen-next’ in
                association with Ru Education Pvt ltd.He is a senior disciple of
                Swami Sukhabodhananda and has also studied under great masters
                like Deepak Chopra, Edward De Bono, Jack Canfield, Robin Sharma,
                Glenn Doman, Harv Eker and Rob Williams.
              </span>
            )}
          </section>
        </section>
      </section>

      {(!isMobile || isOpen) && (
        <>
          <section className="text-[14px] font-[400] leading-[19.6px] text-[#1A2434] mt-6 text-justify xl:text-[20px] xl:leading-[28px]">
            He has conducted over 4000 workshops within India and abroad for
            educational institutions, leading corporates in all sectors, banking
            and financial institutions and government departments.
          </section>

          <section className="text-[14px] font-[400] leading-[19.6px] text-[#1A2434] mt-3 text-justify xl:text-[20px] xl:leading-[28px]">
            He has trained over 5,00,000 executives, parents, professionals and
            faculty members of leading training houses. Institutions like the
            Indian Airlines, Malaysia Airlines, Malaysia Airports, Reserve Bank
            of India, Central Bank of India, Indian Oil Corporation, Aditya
            Birla group, Bayer, Glaxo Smithkline, Lafarge Cements, Siemens,
            Maxis mobile, Pfizer Pharmaceuticals, MRF Tyres, Ashok Leyland,
            General Motors, Elgi Equipments, Orient Fans, L and T, ITC, EID
            Parry, Vedanta group, TATA Group, etc take his programs on a regular
            basis, to name a few.
          </section>

          <section className="text-[14px] font-[400] leading-[19.6px] text-[#1A2434] mt-3 text-justify xl:text-[20px] xl:leading-[28px]">
            He is a regular invitee to various forums like Federation of Indian
            Chambers of Commerce and Industries, Confederation of Indian
            Industries, AP Chambers of Commerce and Industries, Malaysian
            International Chambers of Commerce and Industry, Administrative
            Staff College of India, Engineering Staff College of India, Centre
            for Organization Development (COD), Productivity Council, Jaycees,
            Rotary and Lions Conferences etc.He has authored a landmark book on
            metaphysics about tapping the vast potential of mind by name "The
            Complete Secret". He has also created a wide range of other
            educational aids, CDs and DVDs on a variety of topics, which are
            widely appreciated for their content and delivery.
          </section>
        </>
      )}
    </div>
  );
};

export default AboutFounder;
